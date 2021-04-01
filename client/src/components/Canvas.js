import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
const Canvas = observer(() => {
  const canvasRef = useRef();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  const mouseDownHandler = () => {
    canvasState.pushToUndo(canvasRef.current.toDataURL());
  };
  return (
    <Wrapper>
      <canvas
        onMouseDown={() => mouseDownHandler()}
        ref={canvasRef}
        width={650}
        height={440}
      ></canvas>
    </Wrapper>
  );
});

export default Canvas;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  canvas {
    border: 1px solid gray;
    background-color: #fff;
  }
`;
