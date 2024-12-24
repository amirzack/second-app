import React from "react";
import { Text, View } from "react-native";

const PostCard = ({ title }) => {
  return (
    <View className="bg-zinc-700 w-40 h-40 p-5 m-5 ">
      <Text className="text-white">{title}</Text>
    </View>
  );
};

export default PostCard;
