import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary Search</header>
        <main>
          <Dictionary />
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
