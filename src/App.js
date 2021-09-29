import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import books1 from "./data/horror.json";


function App() {
  return (
    <div className="App">
      <MyNavbar brand="Welcome to BookShelf" />
    
      <WarningSign text="its dangerous!!" />
      <MyBadge color="primary" text="Badge" />
      <BookList array={books1} />
    </div>
  );
}

export default App;