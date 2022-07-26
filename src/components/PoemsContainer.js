import React, {useState, useEffect} from "react";
import Poem from "./Poem";
function PoemsContainer({poemData, setPoemData}) {

  const poemitem = poemData.map((item) => {
    return(
      <Poem
  
      key= {item.id}
      id= {item.id}
      title= {item.title}
      content = {item.content}
      author = {item.author}
      poemData={poemData}
      setPoemData={setPoemData}
       /> 
    
    )
  })

  return (
    <div className="poems-container">
      {poemitem}
     

    </div>
  );
}

export default PoemsContainer;