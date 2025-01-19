import { useState } from 'react';

function Header({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <header className="text-center mb-4">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <form onSubmit={handleSubmit} className="flex mt-2">
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a task..." 
               className="flex-grow p-2 border rounded-l focus:outline-none" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">Add</button>
      </form>
    </header>
  );
}

export default Header;