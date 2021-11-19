import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import MovieDisplay from "./routes/MovieDisplay";


//Rooting to moviedisplay through ID, and incase the parameter is wrote wrong. 
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/MovieDisplay/:id" element={<MovieDisplay />}/>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
</BrowserRouter>,
rootElement
);