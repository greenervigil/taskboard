import './App.css';
import { useState } from 'react'
import Column from './components/column'

function App() {
  const [data, setData] = useState([
    {title: "Groceries", category: "todo"}, 
    {title: "Oil Change", category: "inprogress"}, 
    {title: "Home Inspection", category: "qa"}, 
    {title: "Mischief Managed", category: "done"}
  ])

  let tasks = {
    todo: [],
    inprogress: [],
    qa: [],
    done: []
  }

  const handleDrop = (e, cat) => {
    e.preventDefault();
    e.stopPropagation();
    let title = e.dataTransfer.getData("title")
    let updatedState = data.filter(item => {
      if (item.title === title) {
        item.category = cat
      }
      return item
    })

    setData(updatedState)
  };

  return (
    <div className="App">
      {data.forEach(item => {
        tasks[item.category].push(item)
      })}
      <Column title="To Do" category="todo" data={tasks.todo} onHandleDrop={handleDrop} />
      <Column title="In Progress" category="inprogress" data={tasks.inprogress} onHandleDrop={handleDrop} />
      <Column title="QA" category="qa" data={tasks.qa} onHandleDrop={handleDrop} />
      <Column title="Done" category="done" data={tasks.done} onHandleDrop={handleDrop} />
    </div>
  );
}

export default App;
