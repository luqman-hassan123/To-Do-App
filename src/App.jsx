import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./assets/components/Buttons";
import Card from "./assets/components/Card";
import Input from "./assets/components/Input";
import Modal from "./assets/components/Modal";
import TextArea from "./assets/components/TextArea";
import ToDoContent from "./assets/components/ToDoContent";
import ToDoItem from "./assets/components/ToDoItem";
import Header from "./assets/components/Header";
import React, { useState } from 'react'
import Dropdown from "./assets/components/Dropdown"



function App() {

  const [priority, setPriority] = useState('');

  const handleDropDown = (event) => {
    setPriority(event.target.value)
  }


  return (
    // main container
    <div className="container">
      {/* first heading  */}
      <Header className="main-header" title="To Do App" />

      {/* card component */}
      <Card className="card text-bg-info p-3">
        
          <h5 className="card-title">To Do list</h5>
            <Input placeholder="Add Title" className="input-field" />
            <Input placeholder="Add Description" className="input-field" />

           <Dropdown 
            title=" Select Priority"
            options = {['High' ,  'Medium' , 'Low']}
            onChange = {handleDropDown}
            selectedValue= {priority}
           />

          <Buttons className="btn btn-primary" title="Add Item" />

      </Card>



      <Card className="card text-bg-info p-3"> second card </Card>

      {/* input component */}
      {/* <Input /> */}

      {/* TextArea component */}
      <TextArea />
 
            
          

      {/* Buttons component */}
      <Buttons
        className="btn btn-primary"
        title="add list item"
        onButtonClick={() => {}}
      />

      {/* Modal component */}
      <Modal />

      {/* ToDoContent component */}
      <ToDoContent />

      

      {/* to do item compnoent  */}
      <ToDoItem />

    </div>
  );
}

export default App;
