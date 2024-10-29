// ToDoContent.jsx
import ToDoItem from './ToDoItem'; // Import the ToDoItem component

const ToDoContent = ({ items , onDeleteItem , onUpdateItem, onInfo}) => {
  return (
    <div className="to-do-content">
      {items.length > 0 ? (
        items.map((item, index) => (
          <ToDoItem
            key={index}
            title={item.title} 
            description={item.description} 
            priority={item.priority} 
            onDelete = {() => onDeleteItem(index)}
            onUpdate = {() => onUpdateItem(index)}
            onInfo={() => onInfo (item)}
            />
        ))
      ) : (
        <p>No items added yet!</p>
      )}
    </div>
  );
};

export default ToDoContent;
