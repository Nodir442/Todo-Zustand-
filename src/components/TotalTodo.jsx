import React from "react";
import { Text } from "@chakra-ui/react";
import { useTodos } from "../store";

export const TotalTodo = () => {
  const count = useTodos((state) => state.todos.length);
  return <Text fontWeight="bold">Total:{count}</Text>;
};
