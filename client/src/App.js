import Canvas from "./components/Canvas";
import SettingsBar from "./components/SettingsBar";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <div className="App">
      <ToolBar />
      <SettingsBar />
      <Canvas />
    </div>
  );
}

export default App;
