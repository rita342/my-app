import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import books1 from "./data/horror.json";
import AddComment from "./components/AddComment";
import MyNavbar from "./components/MyNavbar";


function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <AddComment  />
    
      <WarningSign text="Warning!!!" />
      <MyBadge color="primary" text="My Badge" />
      <BookList array={books1} />
    </div>
  );
}

export default App;