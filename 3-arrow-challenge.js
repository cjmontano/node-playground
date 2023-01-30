//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [{
    text: 'Grocery shopping',
    completed: true
  }, {
    text: 'Clean yard',
    completed: false
  }, {
    text: 'Film course',
    completed: false
  }],
  getTasksToDo: function () {
    const tasksToDo = this.tasks.filter((taskItem) => {
      return taskItem.completed === false
    })
    return tasksToDo
  },
  getTasksToDo2 () {
    return this.tasks.filter((taskItem) => {
      return taskItem.completed === false
    })
  },
  getTasksToDo3 () {
    return this.tasks.filter((taskItem) => taskItem.completed === false)
  }
}

console.log(tasks.getTasksToDo())
console.log(tasks.getTasksToDo2())
console.log(tasks.getTasksToDo3())
