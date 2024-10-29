import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./assets/components/Buttons";
import Card from "./assets/components/Card";
import Input from "./assets/components/Input";
import Modal from "./assets/components/Modal";
import TextArea from "./assets/components/TextArea";
import ToDoContent from "./assets/components/ToDoContent";
import ToDoItem from "./assets/components/ToDoItem";
import Header from "./assets/components/Header";
import React, { useState } from "react";
import Dropdown from "./assets/components/Dropdown";

function App() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [todoItems, setToDoItems] = useState([]);
  const [isModalOpen , setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({title: '', description: '', priority: ''})


  const handleDropDown = (event) => {
    setPriority(event.target.value);
  };

  const handleAddItem = () => {
    if (title && description) {
      const newItem = { title, description, priority };
      setToDoItems([...todoItems, newItem]);
      setTitle("");
      setDescription("");
      setPriority("");
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = todoItems.filter((_, i) => i !== index);
    setToDoItems(updatedItems);
  };

  const handleUpdateItem = (index) => {
    const updatedItems = todoItems.map((item, i) =>
      i === index ? { ...item, priority: 'Updated Priority' } : item
    );
    setToDoItems(updatedItems);
  };


  const handleInfoItem = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  }

  //const closeModal = () => setIsModalOpen(false)

  const closeModal = () => {
    setIsModalOpen(false);
    setShowModel(false)
  };
  


  return (
    // main container
    <div className="container-fluid">
      {/* first heading  */}
      <Header className="main-header" title="To Do App" />

      {/* card component */}
      <Card className="card text-bg-info p-3">
        <h5 className="card-title">Enter To Do Item</h5>
        <Input
          placeholder="Add Title"
          className="input-field"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
         <TextArea
          className ="text-area-field "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add Description" // Optional placeholder
        />

        <Dropdown
          title=" Select Priority:"
          options={["High", "Medium", "Low"]}
          onChange={handleDropDown}
          selectedValue={priority}
        />

        <Button
          className="addItem btn btn-primary"
          title="Add Item"
          onButtonClick={handleAddItem}
        />
      </Card>



      <Card className="card text-bg-info p-3">
        <h5 className="card-title"> To Do Items list</h5>
        <div className="row shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <ToDoContent
            className="item"
            items={todoItems}
            onDeleteItem={handleDeleteItem}
            onUpdateItem={handleUpdateItem}
            onInfo={handleInfoItem}
          ></ToDoContent>
        </div>
      </Card>

      {isModalOpen && (
        <Modal
          title={selectedItem.title}
          description={selectedItem.description}
          priority={selectedItem.priority}
          onClose = {closeModal}
         /> 
      )}
    </div>
  );
}

export default App;
