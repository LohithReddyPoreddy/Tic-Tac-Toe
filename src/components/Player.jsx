import { useState } from "react"

export default function Player({name, symbol, isActive, onChangeName}){
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleClick(){
    setIsEditing((editing)=> !editing);
    if(isEditing){onChangeName(symbol, playerName);}
    

  }

  function handleChangeName(event){
    setPlayerName(event.target.value);
  }

  

  let editablePlayerName = <span className="player-name">{playerName}</span>

  if(isEditing){
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChangeName}/>
  }
  return(
    <li className={isActive ? 'active':undefined}>
    <span className="player">
      <span className="player-name">{editablePlayerName}</span>
      <span className="player-symbol">{symbol}</span>
    </span>
      <button onClick={handleClick}>{ isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}