import "./App.css";
import Section from "./Component/Section/Section";
import Sidebar from "./Component/Sidebar/Sidebar";
import Topbar from "./Component/Searchsec/Topbar";

function App() {
  return (
    <>
    <div className="flex">
    
      <Sidebar />
      <Topbar />


      <Section />

    </div>

      </>
  );
}

export default App;
