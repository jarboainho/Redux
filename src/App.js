import { Container, Heading } from '@chakra-ui/react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { VisibilityFilter } from './components/VisibilityFilter';

function App() {
  return (
    <Container bgColor="rgb(250, 157, 55)" borderRadius={20}>
    <Container maxW="container.sm"  >
      <Heading my="4" color="rgb(13, 117, 158)">Todo List</Heading>
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
    </Container>
    </Container>
  );
}

export default App;
