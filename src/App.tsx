import { useState } from 'react';
import {
  Input,
  Button,
} from 'antd';
import {
  PlusOutlined,
  CheckCircleOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import MOCK_LIST_TASKS from './mocks/list_tasks.json';

import styles from './styles.module.css';


type ListProps = {
  id: number,
  description: string,
}

function App() {
  const [newTask, setNewTask] = useState<string>('');
  const [listTask, setListTask] = useState<Array<ListProps>>(MOCK_LIST_TASKS);
  
  const handleAddTask = () => {
    if (newTask === '') return;

    const newItem = {
      id: listTask.length + 1,
      description: newTask,
    }

    setListTask((prev) => [...prev, newItem]);
    setNewTask('');
  }

  const handleDeleteTask = (taskId: number) => {
    const updateList = listTask.filter((item) => item.id !== taskId);

    setListTask(updateList);
  }

  return (
    <div className={styles.card}>
      <div className={styles.pd}>
        <h1>Lista de tarefas</h1>
        <div className={styles.row}>          
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button
            type="primary"
            onClick={() => handleAddTask()}
          >
            <PlusOutlined />
          </Button>
        </div>
        {listTask.map((item) => (
          <div className={styles.item_list} key={item.id}>
            <CheckCircleOutlined style={{ marginRight: '10px' }} />
            {item.description}
            <Button
              className={styles.ml_auto}
              size='small'
              type='primary'
              danger
              onClick={() => handleDeleteTask(item.id)}
            >
              <DeleteOutlined />
            </Button>            
          </div>
        ))}        
      </div>
    </div>
  )
}

export default App
