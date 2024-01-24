import logo from './logo.svg';
import './App.css';
import './components/Welcome'
import Welcome from "./components/Welcome";
import AddComponents from "./components/AddComponents";
import DemoFunctionComponent from "./components/DemoFunctionComponent";
function App() {
  return (
    <DemoFunctionComponent firstNumber={124} secondNumber={123}/>
  );
}
export default App;
