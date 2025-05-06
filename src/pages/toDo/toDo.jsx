import React, { useState } from 'react'; 
import { Layout, Card, Input, Checkbox } from 'antd';
import { StarOutlined, StarFilled, CloseOutlined } from '@ant-design/icons';
import './toDo.css';
import { useTheme } from '../../contexts/ThemeContext';

const { Content } = Layout;

const ToDOPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Meeting with CEO', important: false, completed: false },
    { id: 2, text: 'Pick up kids from school', important: true, completed: false },
    { id: 3, text: 'Shopping with Brother', important: false, completed: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const { isLightMode } = useTheme();

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newItem = {
      id: Date.now(),
      text: newTask,
      important: false,
      completed: false,
    };
    setTasks([newItem, ...tasks]);
    setNewTask('');
  };

  const toggleImportant = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, important: !task.important } : task
    ));
  };

  const toggleCompleted = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Layout className={isLightMode ? 'layout-light' : 'layout-dark'}>
      <Content className={isLightMode ? 'content-light' : 'content-dark'}>
      <Card title={<span className={isLightMode ? 'card-title-light' : 'card-title-dark'}>À Faire</span>}
       bordered={false} className={isLightMode ? "todo-card-light" : "todo-card-dark"}>
          <Input
            placeholder="Write your task name here"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onPressEnter={addTask}
            className={isLightMode ? "todo-input-light":'todo-input-dark'}
          />
          {tasks.map((task) => (
            <Card key={task.id} className={isLightMode ? "task-card-light" : "task-card-dark"}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="task-left">
                <Checkbox checked={task.completed} onChange={() => toggleCompleted(task.id)} />
                <span className={task.completed ? 'task-done' : ''}>{task.text}</span>
              </div>
              <div className="task-actions">
                <span onClick={() => toggleImportant(task.id)} className="icon-action">
                  {task.important ? <StarFilled className="icon-star" /> : <StarOutlined />}
                </span>
                <CloseOutlined onClick={() => deleteTask(task.id)} className="icon-close" />
              </div>
            </div>
          </Card>
          
          
          ))}
        </Card>
      </Content>
    </Layout>
  );
};

export default ToDOPage;
