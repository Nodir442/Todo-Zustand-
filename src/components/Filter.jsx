import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import { useFilter } from "../store";

export const Filter = () => {
  const { filter, setFilter } = useFilter();
  return (
    <Stack spacing={2} direction="row" mt="8">
      <Button disabled={filter === "all"} onClick={() => setFilter("all")}>
        All
      </Button>
      <Button
        disabled={filter === "uncomleted"}
        onClick={() => setFilter("uncomleted")}
      >
        Not compilited
      </Button>
      <Button
        disabled={filter === "comleted"}
        onClick={() => setFilter("comleted")}
      >
        Сompilited
      </Button>
    </Stack>
  );
};
