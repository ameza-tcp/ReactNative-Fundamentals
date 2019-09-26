import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';

import commonStyles from './src/styles/commonStyles';
import AddTaskModal from './src/components/AddTaskModal';
import TaskItem from './src/components/TaskItem';
import TextInputButton from './src/components/TextInputButton';

interface ITask {
  key: string;
  value: string;
}

const App = () => {
  let stringArray: ITask[] = [];
  const [enteredTask, setEnteredTask] = useState('');
  const [taskList, setTaskList] = useState(stringArray);
  const [isAdd, setIsAdd] = useState(false);

  const addTaskHandler = () => {
    setTaskList(currentList => [...currentList,
    { key: Math.random().toString(), value: enteredTask }
    ]);
    setIsAdd(false);
    setEnteredTask('');
  }

  const cancelAddTask = () => {
    setIsAdd(false);
    setEnteredTask('');
  }

  const removerItemHandler = (itemID: string) => {
    setTaskList(currentList => {
      return currentList.filter((item) => item.key !== itemID);
    })
  }

  const taskInputHandler = (enteredTask: string) => {
    setEnteredTask(enteredTask);
  }

  return (
    <View style={commonStyles.screen}>
      <View style={{ marginBottom: 10 }}>
        <Button title="Add Item" onPress={() => setIsAdd(true)} />
      </View>
      <AddTaskModal
        visible={isAdd}
        onCancel={cancelAddTask}
        placeholder="Add"
        onChangeText={taskInputHandler}
        fieldValue={enteredTask}
        onPress={addTaskHandler}
        btnTitle="Add"
      ></AddTaskModal>
      <FlatList
        data={taskList}
        renderItem={itemData => (
          <TaskItem
            itemKey={itemData.item.key}
            value={itemData.item.value}
            onDelete={removerItemHandler}
          />
        )}
      />
    </View>
  );
};

export default App;
