import React from "react";

import "../App.css"
export default function Card({ player }) {
  return (
   <>
   <div className="my-3">
   <h3 className="panlayerName text-center">{player.PFName}</h3>
   </div>
     <div className="mt-3">
      <div className="row">
        <div className="col-6">
        <h5 className="playerSkill">Skill: {player.SkillDesc}</h5>
      <h3 className="playerValue">Value: ${player.Value}</h3>
        </div>
        <div className="col-6">
        <h5>Upcomming matches</h5>
        {player.UpComingMatchesList.map((match) => (
        <p key={match.VsCCode}>
          {match.CCode} vs {match.VsCCode} <br />
          {match.MDate}
        </p>
      ))}
        </div>
      </div>
    
      
    
      </div>
 </>
  );
}