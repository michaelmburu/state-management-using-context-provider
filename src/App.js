import './App.css';
import { CounterProvider } from './Context/Provider/CounterProvider';
import { CounterButton } from './CounterButton';

// State management using context provider
// Allows sharing of state without having to pass props
function App() {
  return (
    <CounterProvider>
      <h1>State Management Using Context</h1>
        <CounterButton />
    </CounterProvider>
  );
}

export default App;
