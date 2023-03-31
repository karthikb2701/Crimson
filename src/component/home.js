import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Home() {
  const [dataSet, setDataSet] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const responses = async () => {
      const response = await fetch(
        "https://api.npoint.io/20c1afef1661881ddc9c"
      );
      const result = await response.json();
      setDataSet(result);
      setPlayers(result.playerList);
      console.log(result);
    };
    responses();
  }, []);

  const handleSearch = (e) => {
    const item = e.target.value;
    const search_res = dataSet.playerList.filter((itm) => {
      return (
        itm.PFName?.toLowerCase().includes(item.toLowerCase()) ||
        itm.TName?.toLowerCase().includes(item.toLowerCase())
      );
    });
    setPlayers(search_res);
  };
  return (
    <div className="bg" style={{backgroundColor:"#6a67e8"}}>
    <div className="container p-5">
		<div className="header">
      <h3 style={{textAlign:"center"}}>Football Player's/ Info</h3>
    </div>
      <div className="playerSearch ">
	 
        <input
          type="text"
          placeholder="Search"
          className="form-control form-control-lg"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      
      <div className="row">
        {console.log(players.length)}
        
        {players.map((player) => (
			  <div className="col-lg-6 mt-3">
				 <div class="card" style={{backgroundColor:"#d1b1f9",color:"black"}}>
      <div class="card-body">
       
		<Card
            player={player}
            className="playerItem"
            key={player.Id}
          />
  
	  </div>
    </div>

     
		  </div>
        ))} 
      </div>
	 
    </div>
    </div>
  );
}
