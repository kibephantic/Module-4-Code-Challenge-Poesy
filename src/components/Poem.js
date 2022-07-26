import React, {useState} from "react";

function Poem({title, content, author, id, poemData, setPoemData}) {

  const[show, setShow] = useState(false)

  function handleClick(){
    setShow(!show)
  }

  function handleDelete(){
  fetch (`http://localhost:8004/poems/${id}`, {
      method: "DELETE"
  })
  .then((res) => res.json())
  .then( () => {
    const newData = poemData.filter((data) => data.id !== id)
    setPoemData(newData)
  })
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- {author}</strong>
      </p>
      <button onClick= {handleClick}>{show ? "Mark as read" : "Mark as unread"}</button>
      <button onClick= {handleDelete}>Delete</button>
    </div>
  );
}

export default Poem;