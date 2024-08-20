import { nanoid } from "nanoid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodos = create(
  persist(
    (set, get) => ({
      todos: [
        { id: 1, title: "Learn JS", completed: true },
        { id: 2, title: "Learn React", completed: false },
      ],
      loading: false,
      error: null,
      addTodo: (title) => {
        const newTodo = { id: nanoid(), title, completed: false };
        set({ todos: [...get().todos, newTodo] });
      },
      toggleTodo: (todoId) =>
        set({
          todos: get().todos.map((todo) =>
            todoId === todo.id ? { ...todo, completed: !todo.completed } : todo
          ),
        }),
      deleteTodo: (todoId) =>
        set({
          todos: get().todos.filter((todo) => todo.id !== todoId),
        }),
    }),
    {
      name: "todo-storage",
      getStorage: () => localStorage,
    }
  )
);

export const useFilter = create((set) => ({
  filter: "all",
  setFilter: (value) => set({ filter: value }),
}));
