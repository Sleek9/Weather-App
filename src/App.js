import { HashRouter, Route } from "react-router-dom";
import WeatherApp from "./components/WeatherApp";

function App() {
  return (
    <div>
      <HashRouter>
        <Route exact path="/" component={WeatherApp} />
      </HashRouter>
    </div>
  );
}

export default App;
