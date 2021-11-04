import PlayerCard from "./PlayerCard";
import "./HeadtoHead.css";

function HeadtoHead(){
    return(
        <div className="general-group">
            <PlayerCard></PlayerCard>
            <PlayerCard></PlayerCard>
        </div>
    );
}

export default HeadtoHead;