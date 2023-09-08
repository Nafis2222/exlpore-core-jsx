import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);
    const teamAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const teamReduce = () =>{
        const komTeam = team - 1;
        setTeam(komTeam)
    }
    const teamStyle = {
        border: '2px solid purple'
    }
    return (
        <div style={teamStyle}>
            <h3>Team:{team} </h3>
            <button onClick={teamAdd}>Add</button>
            <button onClick={teamReduce}>Reduce</button>
        </div>
    )
}