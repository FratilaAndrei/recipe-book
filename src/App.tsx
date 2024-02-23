import { PrimeReactProvider } from "primereact/api";
import HomePage from "./HomePage/Home.page";
import "./index.css";

function App() {
  return (
    <PrimeReactProvider>
      <HomePage />
    </PrimeReactProvider>
  );
}

export default App;
