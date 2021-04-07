import styled from "styled-components";
import toolState from "../store/toolState";
import brush from "../assets/images/brush.png";
import rect from "../assets/images/rect.png";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";
import Rect from "../tools/Rect";

const SettingsBar = () => {
  const changeColor = (e) => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  };

  return (
    <Container>
      <Row style={{ backgroundColor: "#fff" }}>
        <Option style={{ backgroundColor: "#1979CA" }}>
          <p style={{ color: "#fff", margin: "auto", fontSize: 13 }}>File</p>
        </Option>
        <Option style={{ backgroundColor: "#F5F6F7" }}>
          <p style={{ margin: "auto", fontSize: 13 }}>Main</p>
        </Option>
        <Option>
          <p style={{ margin: "auto", fontSize: 13 }}>View</p>
        </Option>
      </Row>

      <Row>
        <Col>
          <img
            style={{ cursor: "pointer" }}
            src={brush}
            alt={"brush"}
            onClick={() =>
              toolState.setTool(
                new Brush(
                  canvasState.canvas,
                  canvasState.socket,
                  canvasState.sessionId
                )
              )
            }
          />
          {"Tools"}
        </Col>
        <Col>
          <img
            style={{ cursor: "pointer" }}
            src={rect}
            alt={"rect"}
            onClick={() =>
              toolState.setTool(
                new Rect(
                  canvasState.canvas,
                  canvasState.socket,
                  canvasState.sessionId
                )
              )
            }
          />
          {"Figures"}
        </Col>
        <Col>
          <input
            style={{ margin: "0 10px" }}
            onChange={(e) => toolState.setLineWidth(e.target.value)}
            id="line-width"
            type="number"
            defaultValue={1}
            min={1}
            max={20}
          />
          <label htmlFor="line-width">Width</label>
        </Col>
        <Col>
          <input
            style={{ margin: "0 10px" }}
            onChange={(e) => toolState.setStrokeColor(e.target.value)}
            id="stroke-color"
            type="color"
          />
          <label htmlFor="stroke-color">Color</label>
        </Col>
      </Row>
    </Container>
  );
};

export default SettingsBar;

const Container = styled.div`
  height: 95px;
  display: flex;

  position: absolute;
  width: 100%;
  flex-direction: column;
  top: 35px;
  background-color: #f5f6f7;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #fff;
  min-width: 4.5em;
  height: 25px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #dadbdc;
  border-right: 1px solid #dadbdc;
  padding: 0 5px;

  padding-top: 5px;
`;
