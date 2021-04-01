import styled from "styled-components";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";

const ToolBar = () => {
  const changeColor = (e) => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  };
  return (
    <Container>
      <Button onClick={() => toolState.setTool(new Brush(canvasState.canvas))}>
        Brush
      </Button>
      <input type="color" onChange={(e) => changeColor(e)} />
      <button onClick={() => canvasState.undo()}>Undo</button>
      <button onClick={() => canvasState.redo()}>Redo</button>
    </Container>
  );
};

export default ToolBar;

const Container = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  box-shadow: 0 4px 5px gray;
  z-index: 666;
`;

const Button = styled.div`
  height: 25px;
  width: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  background-size: cover;
  margin-left: 5px;
`;
