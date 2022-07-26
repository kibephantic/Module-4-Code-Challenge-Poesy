import React, {useState, useEffect} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {

  const [showResults, setShowResults] = useState(true)
  const [poemData, setPoemData] = useState([])

  
  function handleClick(){
    setShowResults(!showResults);

  }

  useEffect(() => {
    fetch ("http://localhost:8004/poems")
    .then((res) => res.json())
    .then ((poemData) => setPoemData(poemData))
  }, [])

  function handleAddPoem(newPoemData){
    setPoemData([...poemData, newPoemData])


  }
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleClick}>Show/hide new poem form</button>
        {showResults ? <NewPoemForm  onAddPoem={handleAddPoem}/> : null}
      </div>
      <PoemsContainer poemData= {poemData} setPoemData={setPoemData}/>
     

    </div>
  );
}

export default App;