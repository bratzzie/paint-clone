import styled from "styled-components";
import canvasState from "../store/canvasState";
import redo from "../assets/images/redo.png";
import save from "../assets/images/save.png";
import undo from "../assets/images/undo.png";
import paint from "../assets/images/paint.png";
const ToolBar = () => {
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
      <img
        src={paint}
        alt={"paint"}
        style={{ padding: "0 5px", cursor: "pointer" }}
      />
      {" | "}{" "}
      <img
        src={save}
        alt={"save"}
        style={{ padding: "0 5px", cursor: "pointer" }}
        onClick={() => download()}
      />
      <img
        src={undo}
        alt={"undo"}
        onClick={() => canvasState.undo()}
        style={{ padding: "0 5px", cursor: "pointer" }}
      />
      <img
        src={redo}
        alt={"redo"}
        onClick={() => canvasState.redo()}
        style={{ padding: "0 5px", cursor: "pointer" }}
      />
      {" | New File - Paint"}
    </Container>
  );
};

export default ToolBar;

const Container = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: flex-start;
  width: 100%;
  background-color: #fff;
  z-index: 666;
`;
