import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { useTodos } from "../store";

export const NewTodo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef();
  const addTodo = useTodos((state) => state.addTodo);

  const handleAddTodo = () => {
    addTodo(ref.current.value);
    onClose();
  };
  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Add new todo
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Crate new todo</DrawerHeader>
          <DrawerBody>
            <Input
              placeholder="Type here..."
              ref={ref}
              onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
              autoFocus
            />
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cencel
            </Button>
            <Button colorScheme="blue" onClick={handleAddTodo}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
