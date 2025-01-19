import { useState } from 'react';

function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={`flex justify-between items-center p-2 border rounded ${task.completed ? 'bg-green-200' : 'bg-white'}`}>
      {isEditing ? (
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} onBlur={handleEdit} 
               className="p-1 border rounded" />
      ) : (
        <span onClick={() => toggleComplete(task.id)} className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}>{task.text}</span>
      )}
      <div className="space-x-2">
        <button onClick={() => setIsEditing(!isEditing)} className="text-blue-500">Edit</button>
        <button onClick={() => deleteTask(task.id)} className="text-red-500">Delete</button>
      </div>
    </li>
  );
}

export default ToDoItem;