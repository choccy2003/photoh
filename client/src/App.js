import Navbar from "./components/Navbar";
import Searchbanner from "./components/Searchbanner";
import Tipgrid from "./components/Tipgrid";
import Topicgrid from "./components/Topicgrid";
import './pluto-sans.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Searchbanner/>
      <Topicgrid/>
      <Tipgrid/>
    </div>
  );
}

export default App;
