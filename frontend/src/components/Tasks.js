import React, { useState, useEffect } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskText.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: taskText.trim(), completed: false }]);
    setTaskText('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
          placeholder="New task..."
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={addTask}
          className="bg-green-500 px-4 py-3 rounded-lg hover:bg-green-600 transition text-white font-semibold"
        >
          Add
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {tasks.map(task => (
          <div key={task.id} className={`p-4 rounded-lg shadow hover:shadow-lg transition flex justify-between items-center ${task.completed ? 'bg-gray-200 line-through' : 'bg-gray-50'}`}>
            <span onClick={() => toggleComplete(task.id)} className="cursor-pointer">{task.text}</span>
            <button onClick={() => removeTask(task.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
