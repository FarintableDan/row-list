import Post from "../Post/Post";

import { list } from "../../shared/lilst";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Post data={list} />
    </div>
  );
};

export default App;
