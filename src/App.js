import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";

import SingleBook from "./components/SingleBook";
import romance from "./data/romance.json";
import AddComment from "./components/AddComment";
import MyNavbar from "./components/MyNavbar";


function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <AddComment  />
    
      <WarningSign text="" />
      <MyBadge color="primary" text="My Badge" />
      <SingleBook book={romance[0]} />
      <BookList books={romance} />
    </div>
  );
}

export default App;