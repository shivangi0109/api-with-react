import SearchBar from './components/SearchBar';

function App() {
  const handleSubmit = (term) => {
    console.log("Do a search with term", term);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
