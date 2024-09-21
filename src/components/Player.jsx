import { useState } from "react";
export default function Player(props) {
  const [playerName, setPlayerName] = useState(props.initialName);
  const [editing, setEditing] = useState(false);
  function handleEdit() {
    setEditing((isEditing) => !isEditing);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (editing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEdit}>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}
