function Tile(props) {
    return (
    <div className="tile" style={{ backgroundImage: `url(/${props.img})`, top: props.y, left: props.x, zIndex: props.zindex }}/>
  );
}

export default Tile;
