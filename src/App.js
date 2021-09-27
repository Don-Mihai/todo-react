import React from 'react';
import ListItem from './components/ListItem';
import TaskField from './components/TaskField';

function App() {
  const [tasks, setTasks] = React.useState([
    {
      text: 'Изуить что то там',
      completed: true,
    },
    {
      text: 'Изуить что то там еще',
      completed: false,
    },
  ]);

  const onToggleComleted = (index) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task, curIdx) => {
        if (index === curIdx) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    });
  };
  const onRemoveTask = (index) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((_, curIdx) => {
        if (index !== curIdx) {
          return true;
        } else {
          return false;
        }
      });
    });
  };

  const onAddTask = (text) => {
    //передаем значение текста, который помещаем в setTasks, который добавляет новый объект
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);
  };

  return (
    <div className="App">
      <div className="todo">
        <div className="todo__header">
          <h4>Список задач</h4>
        </div>
        <TaskField onAddTask={onAddTask} />
        <div className="todo__list">
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              index={index}
              text={task.text}
              completed={task.completed}
              onToggleComleted={onToggleComleted}
              onRemoveTask={onRemoveTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
