let taskLists = [
    { id: '1', title: 'estudos', tasks: [{ id: '1', title: 'Estudar Node', completed: false}] },
    { id: '2', title: 'trabalho', tasks: [] },
    { id: '3', title: 'tarefas de casa', tasks: [] }
];

module.exports = {
    getAllTaskLists: () => {
        return taskLists;
    },

    getTaskListById: (id) => {
        return taskLists.find(list => list.id === id)
    },

    createList: (title) => {
        const newList = {
            id: Math.floor(Math.random() * 99999999).toString(),
            title: title,
            tasks: []
        }
        
        return newList
    },

    saveList: (newList) => {
        if(newList.title === '') throw new Error('Título da lista não poder ficar vazio');
        taskLists.push(newList);
    },

    deleteList: (listId) => {
        const listIndex = taskLists.findIndex(list => list.id === listId);
        taskLists.splice(listIndex, 1);
    },

    addTask(listId, taskTitle) {
        const newTask = {
            id: Math.floor(Math.random() * 99999999).toString(),
            title: taskTitle,
            completed: false
        }

        this.getTaskListById(listId).tasks.unshift(newTask);
    },

    completeTask(taskListId, taskId) {
        const task = this.getTaskListById(taskListId).tasks.find(task => task.id === taskId)
        task.completed = true;
    },

    undoTask(taskListId, taskId) {
        const task = this.getTaskListById(taskListId).tasks.find(task => task.id === taskId)
        task.completed = false;
    }
}