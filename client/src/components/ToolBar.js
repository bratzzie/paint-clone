import styled from "styled-components";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";

const ToolBar = () => {
  const changeColor = (e) => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  };

  const download = () => {
    const dataUrl = canvasState.canvas.toDataURL();
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = canvasState.sessionId + ".jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <Container>
      <Button
        onClick={() =>
          toolState.setTool(
            new Brush(
              canvasState.canvas,
              canvasState.socket,
              canvasState.sessionId
            )
          )
        }
      >
        Brush
      </Button>
      <Button
        onClick={() =>
          toolState.setTool(
            new Rect(
              canvasState.canvas,
              canvasState.socket,
              canvasState.sessionId
            )
          )
        }
      >
        Rect
      </Button>
      <input type="color" onChange={(e) => changeColor(e)} />
      <button onClick={() => canvasState.undo()}>Undo</button>
      <button onClick={() => canvasState.redo()}>Redo</button>
      <Button onClick={() => download()}>Download</Button>
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
