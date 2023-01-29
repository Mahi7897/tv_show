import styled from "styled-components";
import "./App.css";
import Header from '../src/Components/header';
import { SearchBar } from '../src/Components/searchBar';

const AppContainer = styled.div`
  margin: auto;
  padding: 0 530px;
`;

function App() {
  return (
    <>
      <AppContainer>
        <Header />
        <SearchBar />
      </AppContainer>
    </>
  );
}

export default App;