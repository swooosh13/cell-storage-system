import React from 'react';
import { Box, Text, theme } from "../../components/Theme";
import { View, Text as RNText, FlatList, StyleSheet, Dimensions } from "react-native";
import { usersAPI } from '../../redux/api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const token = AsyncStorage.getItem('userToken');
class HistoryScreen extends React.Component {
  state = {
    page: 1,
    posts: [],
    isLoading: false,
    isRefreshing: false,
  };

  loadPosts = () => {
    const { posts, page } = this.state;
    this.setState({ isLoading: true });

    let config = {
      headers: {
        // @ts-ignore
        Authorization: "Bearer " + JSON.parse(token._W)
      }
    }
    usersAPI.getAllPosts(1, 400, config)
      .then((res: any) => res.data.result.data)
      .then((res: any) => {
        this.setState({
          posts: page === 1 ? res.reverse() : [...res.reverse()],
          isRefreshing: false
        })
      }).catch((e: any) => console.log(e));
  };

  handleRefresh = () => {
    this.setState({
      isRefreshing: true,
    }, () => {
      this.loadPosts();
    });
  };

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.loadPosts();
    });
  };

  componentDidMount() {
    this.loadPosts();
  };

  render() {
    const { posts, isRefreshing } = this.state;
    return (
      <View>
        {
          posts &&
          <>
            <Box flexDirection="row"
              style={s.post} >
              <Box style={s.itemsInfo}>
                <Text variant="body" color="white">действие</Text>
              </Box>
              <Box style={s.itemsInfo}>
                <Text variant="body" color="white">предмет</Text>
              </Box>
              <Box style={s.itemsInfo}>
                <Text variant="body" color="white">время</Text>
              </Box>
              <Box style={[s.userIdInfo]}>
                <Text variant="body" color="white">userId</Text>
              </Box>
            </Box>
            <Box style={{ marginBottom: Dimensions.get('screen').height * 0.06 }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={posts}
                renderItem={({ item }: any) => (
                  // @ts-ignore
                  <Post post={item} />
                )}
                keyExtractor={(i: any) => String(i.id)}
                refreshing={isRefreshing}
                onRefresh={this.handleRefresh}
                onEndReached={this.handleLoadMore}
                // @ts-ignore
                onEndThreshold={0}
              />
            </Box>
          </>
        }
      </View>
    )
  }
}

const Post = ({ post }: any) => {
  return (
    <Box flexDirection="row"
      style={s.post} >
      <Box style={s.container}>
        <Text variant="body">{post.title}</Text>
      </Box>
      <Box style={s.container}>
        <Text variant="body">{post.content} </Text>
      </Box>
      <Box style={s.container}>
        <Text variant="body">{post.createdAt} </Text>
      </Box>
      <Box style={[s.userId, s.userIdItem]}>
        <Text variant="body">{post.userId}</Text>
      </Box>
    </Box>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary_greenLight,
    minWidth: 50,
    minHeight: 50,
    margin: 2,
    borderRadius: 5

  },
  itemsInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 50,
    minHeight: 25,
    backgroundColor: theme.colors.button,
    paddingTop: 1,
    margin: 2,
    borderRadius: 5
  },
  post: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    marginTop: 5,
    padding: 12,

  },
  userId: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 10,
    minWidth: 10,
    padding: 12,
  },
  userIdInfo: {
    flex: 0.10,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 50,
    minHeight: 25,
    backgroundColor: theme.colors.danger,
    paddingTop: 1,
    margin: 2,
    borderRadius: 5
  },
  userIdItem: {
    backgroundColor: theme.colors.greyLight,
    margin: 2,
    borderRadius: 5
  },
  userName: {
    fontSize: 17,
    color: '#fff'
  }
});


export default HistoryScreen;
