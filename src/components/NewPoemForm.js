import React, {useState} from "react";

function NewPoemForm({onAddPoem}) {

  const [poemObj, setPoemObj]= useState({
    title: "",
    author: "",
    content: ""
  })

  function handleChange(event){
    setPoemObj({...poemObj, [event.target.name]: event.target.value})
  }

  function handleAddSubmit(event){
    event.preventDefault();
   
    const listData = {
      title:poemObj.title, 
      author: poemObj.author, 
      content:poemObj.content
    };
    fetch ("http://localhost:8004/poems", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listData),
    })
    .then((res) => res.json())
    .then((newPoemData) => onAddPoem(newPoemData))
    }

    
  
  return (
    <form onSubmit={handleAddSubmit}  className="new-poem-form">
      <input value={poemObj.title} name="title" placeholder="Title" onChange= {handleChange} />
      <input value={poemObj.author} name="author" placeholder="Author" onChange= {handleChange} />
      <textarea  value={poemObj.content}  name="content" onChange={handleChange} placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" value="Share your masterpiece"/>
    </form>
  );
}

export default NewPoemForm;