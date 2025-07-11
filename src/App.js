import Hero from './components/Hero/Hero'
import List from './components/List/List';
import Container from './components/Container/Container';
import SearchForm from './components/SearchForm/SearchForm'

const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>

  );
};

export default App;