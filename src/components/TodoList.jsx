import { Box, Button, Checkbox, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useFilter, useTodos } from "../store";

const Todo = ({ id, title, completed }) => {
  const toggleTodo = useTodos((state) => state.toggleTodo);
  const deleteTodo = useTodos((state) => state.deleteTodo);

  return (
    <HStack
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      spacing={5}
    >
      <Checkbox isChecked={completed} onChange={() => toggleTodo(id)} />
      <Text>{title}</Text>
      <Button colorScheme="red" size="sm" onClick={() => deleteTodo(id)}>
        Delete
      </Button>
    </HStack>
  );
};
export const TodoList = () => {
  const filter = useFilter((state) => state.filter);
  const todos = useTodos((state) => {
    switch (filter) {
      case "comleted":
        return state.todos.filter((todo) => todo.completed);
      case "uncomleted":
        return state.todos.filter((todo) => !todo.completed);
      default:
        return state.todos;
    }
  });
  return (
    <Stack minH="300px">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Stack>
  );
};
