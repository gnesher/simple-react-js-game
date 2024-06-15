import { useEffect, useState } from "react";
import "./App.css";
import Character from "./character";
import Tile from "./tile";

const initialCoins = [
  [0, 1],
  [1, 3],
  [3, 1],
  [3, 3],
];

const bgmap = [
  ["tile.png", "tile.png", "tile.png", "tile.png", "tile.png", "tile.png"],
  ["tile.png", "tile.png", "tile.png", "tile.png", "tile.png", "tile.png"],
  ["tile.png", "tile.png", "tile.png", "tile.png", "tile.png", "tile.png"],
  ["tile.png", "tile.png", "tile.png", "tile.png", "tile.png", "tile.png"],
];

function App() {
  document.body.style.zoom = "300%";
  const [score, setScore] = useState(0);
  const [userPos, setUserPos] = useState([0, 0]);
  const [coins, setCoins] = useState(initialCoins);

  useEffect(() => {
    const newCoins = coins.filter((coin) => {
      return coin[0] !== userPos[0] || coin[1] !== userPos[1];
    });
    if (newCoins.length < coins.length) {
      setCoins(newCoins);
      setScore(score + 1);
    }
  });

  return (
    <>
      <div>
        <div className="score">{score}</div>
        <Character pos={userPos} setUserPos={setUserPos} />
        {coins.map((coin) => (
          <Tile
            img={"coin.png"}
            x={coin[0] * 32}
            y={coin[1] * 32}
            key={`${coin[0]}${coin[1]}`}
            zindex={2}
          />
        ))}
        {bgmap.map((row, y) =>
          row.map((tile, x) => (
            <Tile
              img={tile}
              x={x * 32}
              y={y * 32}
              key={`${x}${y}`}
              zindex={0}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
