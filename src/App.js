import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <strong>Dictionary Search</strong>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center">
          <small>
            Coded by Mandy Beniac with
            <a href="https://github.com/mbeniac/dictionary-app"> GitHub</a>.
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
