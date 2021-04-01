import styled from "styled-components";
import toolState from "../store/toolState";

const SettingsBar = () => {
  return (
    <Container>
      <label htmlFor="line-width">Line Width</label>
      <input
        style={{ margin: "0 10px" }}
        onChange={(e) => toolState.setLineWidth(e.target.value)}
        id="line-width"
        type="number"
        defaultValue={1}
        min={1}
        max={20}
      />

      <label htmlFor="stroke-color">Stroke Color</label>
      <input
        style={{ margin: "0 10px" }}
        onChange={(e) => toolState.setStrokeColor(e.target.value)}
        id="stroke-color"
        type="color"
      />
    </Container>
  );
};

export default SettingsBar;

const Container = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  box-shadow: 0 4px 5px gray;
  top: 40px;
`;
