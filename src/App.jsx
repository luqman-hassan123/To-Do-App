import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from "./assets/components/Buttons";
import Card from "./assets/components/Card";
import Input from "./assets/components/Input";
import Modal from "./assets/components/Modal";
import TextArea from "./assets/components/TextArea";
import ToDoContent from "./assets/components/ToDoContent";
import Header from "./assets/components/Header";
import React, { useState } from "react";
import Dropdown from "./assets/components/Dropdown";

function App() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [todoItems, setToDoItems] = useState([{ title: "Sample Task 1", description: "This is a sample task", priority: "Medium" },
    { title: "Sample Task 2", description: "Another task", priority: "High" }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    title: "",
    description: "",
    priority: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleDropDown = (event) => {
    setPriority(event.target.value);
  };

  const handleAddItem = () => {
    if (title && description && priority) {
      if (isUpdating) {
        //update item
        const updatedItems = todoItems.map((item, i) =>
          i === currentIndex ? { title, description, priority } : item
        );
        setToDoItems(updatedItems);
        setIsUpdating(false);
        setCurrentIndex(null);
      } else {
        // add new item
        const newItem = { title, description, priority };
        setToDoItems([...todoItems, newItem]);
      }
      //clear the input fields
      setTitle("");
      setDescription("");
      setPriority("");
    }
  };

  const handleDeleteItem = (index) => {
    const confirmDelete = window.confirm("Are You Sure To Delete Item!!");
    if (confirmDelete) {
      const updatedItems = todoItems.filter((_, i) => i !== index);
      setToDoItems(updatedItems);
    }
  };

  const handleUpdateItem = (index) => {
    const ItemToUpdate = todoItems[index];
    setTitle(ItemToUpdate.title);
    setDescription(ItemToUpdate.description);
    setPriority(ItemToUpdate.priority);
    setIsUpdating(true);
    setCurrentIndex(index);
  };

  const handleInfoItem = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setShowModel(false);
  };

  return (
    // main container 
   
    <div className="row col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-sm-12 col-sm-12">
      {/* first heading  */}
      <Header className="main-header" title="To Do App" />

      {/* card component */}
      <Card className="card text-dark bg-light p-3">
        <h5 className="card-title">Enter To Do Item</h5>

        {/* //input field for Title */}
        <Input
          placeholder="Add Title"
          className="input-field"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* //input field for description  */}
        <TextArea
          className=""
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add Description" // Optional placeholder
        />

        {/* // priority */}
        <Dropdown
          title=" Select Priority:"
          options={["High", "Medium", "Low"]}
          onChange={handleDropDown}
          selectedValue={priority}
        />

        {/* //button */}
        <Button
          className="addItem btn btn-primary"
          title={isUpdating ? "Save Update" : "Add Item"}
          onButtonClick={handleAddItem}
        />
      </Card>

      {/*  second card that show content */}
      <Card className="card text-dark bg-light p-3">
        <h5 className="card-title"> To Do Items list</h5>
        <div className="row p-3 mb-5 bg-body-tertiary rounded ">
          <ToDoContent
            className="item"
            items={todoItems}
            onDeleteItem={handleDeleteItem}
            onUpdateItem={handleUpdateItem}
            onInfo={handleInfoItem}
          ></ToDoContent>
        </div>
      </Card>

      {/* modal component */}
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          title={selectedItem.title}
          description={selectedItem.description}
          priority={selectedItem.priority}
          onClose={closeModal}
        >
        </Modal>
      )}
      </div>

  );
}
export default App;
