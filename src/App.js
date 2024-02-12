import "./App.css";
import MainHeader from "./components/main/MainHeader";
import MainFooter from "./components/main/MainFooter";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="App">
      <MainHeader></MainHeader>
      <Outlet/>{/*⭐️ URL에 따라 변경되는 부분 ⭐️ */}
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
