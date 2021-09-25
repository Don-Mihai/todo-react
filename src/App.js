import React from 'react';
import ListItem from './components/ListItem';

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

  const onToggleComleted = () => {};
  const onRemoveTask = () => {};

  return (
    <div className="App">
      <div className="todo">
        <div className="todo__header">
          <h4>Список задач</h4>
        </div>
        <div className="todo__add-field">
          <input type="text" placeholder="Введите текст задачи..." />
          <button className="todo__add-field-button btn-rst">
            <svg
              viewBox="0 0 426.66667 426.66667"
              xmlns="http://www.w3.org/2000/svg">
              <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
            </svg>
          </button>
        </div>
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
