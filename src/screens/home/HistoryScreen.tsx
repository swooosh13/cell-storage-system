import React, { useEffect } from 'react';
import { Box, Text } from "../../components/Theme";
import FloatingButton from "../../components/FloatingButton";
import { SafeAreaView, View, Text as RNText, FlatList, StyleSheet, Dimensions } from "react-native";
import { usersAPI } from '../../redux/api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ListItem } from 'react-native-elements';
import { backgroundColor } from '@shopify/restyle';

const token = AsyncStorage.getItem('userToken');
class HistoryScreen extends React.Component {
  state = {
    page: 1,
    posts: [],
    isLoading: false,
    isRefreshing: false,
  };

  loadUsers = () => {
    const { posts, page } = this.state;
    this.setState({ isLoading: true });

    let config = {
      headers: {
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
      this.loadUsers();
    });
  };

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.loadUsers();
    });
  };

  componentDidMount() {
    this.loadUsers();
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
                <Text variant="body">action</Text>
              </Box>
              <Box style={s.itemsInfo}>
                <Text variant="body">item</Text>
              </Box>
              <Box style={s.itemsInfo}>
                <Text variant="body">время </Text>
              </Box>
              <Box style={s.userId}>
                <Text variant="body">useId</Text>
              </Box>
            </Box>
            <Box style={{marginBottom: Dimensions.get('screen').height * 0.06}}>
              <FlatList
                data={posts}
                renderItem={({ item }: any) => (
                  // @ts-ignore
                  <Post post={item} />
                )}
                keyExtractor={(i: any) => i.id}
                refreshing={isRefreshing}
                onRefresh={this.handleRefresh}
                onEndReached={this.handleLoadMore}
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
      <Box style={s.userId}>
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
  },
  itemsInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  post: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    marginTop: 5,
    padding: 12,

  },
  userId: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    marginTop: 5,
  },
  userName: {
    fontSize: 17,
    color: '#fff'
  }
});


export default HistoryScreen;
