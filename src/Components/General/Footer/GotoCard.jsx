import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const GotoCard = ({ data, path }) => {
    const [getTo, setGetTo] = useState(null);
  
    useEffect (() => {
      let x = document.getElementById(getTo)
      console.log('Fixes', x);
      if(x!==null) {x.scrollIntoView({block: "center", behavior: "smooth"})}
      
    }, [getTo])
   
    return (
      <ul className="linkList">
        {data.map((reps) => {   
          return (
            <li key={reps._id}>
              <Link
                to={path}
                name={reps.name}
                id = {reps._id}
                onClick={() => {
                  setGetTo(reps._id)
                  console.log(getTo);
                }}
              >
                {" "}
                {reps.name}
              </Link>
            </li>
          );
        })}
      </ul>
      
    );
  };

  export default GotoCard;