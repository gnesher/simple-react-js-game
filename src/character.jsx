import { useHotkeys } from "react-hotkeys-hook";

function Character(props) {

  useHotkeys("up", () => props.setUserPos([props.pos[0], props.pos[1] > 0 ? props.pos[1] - 1 : 0]));
  useHotkeys("down", () => props.setUserPos([props.pos[0], props.pos[1] < 3 ? props.pos[1] + 1 : 3]));
  useHotkeys("left", () => props.setUserPos([props.pos[0] > 0 ? props.pos[0] - 1 : 0, props.pos[1]]));
  useHotkeys("right", () => props.setUserPos([props.pos[0] < 5 ? props.pos[0] + 1 : 5, props.pos[1]]));

  return (
    <div
      className="char"
      style={{
        backgroundImage: `url(char.png)`,
        top: props.pos[1] * 32,
        left: props.pos[0] * 32,
      }}
    />
  );
}

export default Character;
