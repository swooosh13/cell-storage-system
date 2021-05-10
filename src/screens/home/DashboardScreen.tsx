import React from 'react';
import { Box, Text, theme } from "../../components/Theme";
import { View, Text as RNText, FlatList, StyleSheet, Dimensions } from "react-native";
import { usersAPI } from '../../redux/api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const token = AsyncStorage.getItem('userToken');
class DashboardScreen extends React.Component {
  state = {
    page: 1,
    users: [],
    isLoading: false,
    isRefreshing: false,
  };

  loadUsers = () => {
    const { users, page } = this.state;
    this.setState({ isLoading: true });

    let config = {
      headers: {
        // @ts-ignore
        Authorization: "Bearer " + JSON.parse(token._W)
      }
    }
    usersAPI.getAllUsers(config)
      .then((res: any) => res.data.users)
      .then((res: any) => {
        res.sort((a: any, b: any) => a.id > b.id ? 1 : -1);
        this.setState({
          users: page === 1 ? res.reverse() : [...res.reverse()],
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
    const { users, isRefreshing } = this.state;
    return (
      <View>
        {
          users &&
          <>
            <Box flexDirection="row"
              style={s.post} >
              <Box style={s.userIdInfo}>
                <Text variant="body" color="white">userId</Text>
              </Box>
              <Box style={s.itemsInfo}>
                <Text variant="body" color="white">электронная почта</Text>
              </Box>
            </Box>
            <Box style={{ marginBottom: Dimensions.get('screen').height * 0.06 }}>
              <FlatList
                data={users}
                showsVerticalScrollIndicator={false}
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
      <Box style={[s.userId, s.userIdItem]}>
        <Text variant="body">{post.id}</Text>
      </Box>
      <Box style={s.container}>
        <Text variant="body">{post.email} </Text>
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
    flex: 0.20,
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
    flex: 0.30,
    backgroundColor: theme.colors.greyLight,
    margin: 2,
    borderRadius: 5
  },
  userName: {
    fontSize: 17,
    color: '#fff'
  }
});


export default DashboardScreen;
