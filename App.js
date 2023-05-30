import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <TodoWrapper  /> 
      <div class="footer">
        <footer>
          <div class="footer-container">
            <p>&copy; Beu Bahala | May 2023</p>
          </div> 
        </footer>
      </div>
    </div>
  );
}

export default App;