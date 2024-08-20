import { VStack } from "@chakra-ui/react";
import { Filter } from "./components/Filter";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";
import { TotalTodo } from "./components/TotalTodo";
function App() {
  return (
    <>
      <VStack spacing={4}>
        <Filter />
        <TodoList />
        <TotalTodo />
        <NewTodo />
      </VStack>
    </>
  );
}

export default App;
