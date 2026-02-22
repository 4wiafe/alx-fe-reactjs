import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText("Add todo");
  fireEvent.change(input, { target: { value: "New Task" } });

  fireEvent.click(screen.getByText("Add"));

  expect(screen.getByText("New Task")).toBeInTheDocument();
});
