import React from "react";
import useFetch from "../utils/useFetch";
import { ActivityIndicator, FlatList, Text } from "react-native";
import PostCard from "./postCard";

const PostLists = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.org/posts"
  );

  if (loading) return <ActivityIndicator size="large" color="#000" />;
  if (error) return <Text>Error:{error}</Text>;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PostCard title={item.title} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      ListEmptyComponent={<Text>Loading...</Text>}
    />
  );
};

export default PostLists;
