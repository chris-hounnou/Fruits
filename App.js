import logo from './logo.svg';
import './App.css';
import fruits from './Fruits';
import {choice, remove} from './Choice';
let fruit = choice(fruits);

function App() {
  return (
    <div className="App">

console.log (`I'd Like one ${fruit}, please`);
console.log (`Here you go: ${fruit}`);
console.log (`Delicious!!! May I have Another?`);
console.log (`I'M sorry, we're all out. We have 14 left.`);

    </div>
  );
}

export default App;
