const toDoList = {
  tasks: [{ title: "Помыть посуду", id: 1, priority: 1 }],
  addTask: function (title) {
    this.tasks.push({
      title: title,
      id: this.tasks.at(-1).id + 1,
      priority: this.tasks.at(-1).priority + 1,
    });
  },
  deleteTask: function (id) {
    newTasks = new Array();
    for (const task of this.tasks) {
      if (task.id === id) {
        continue;
      }
      newTasks.push(task);
    }
    this.tasks = newTasks;
  },
  updateTask: function (id, title, priority) {
    this.tasks = this.tasks.map((el) => {
      if (el.id === id) {
        el.title = title;
        el.priority = priority;
      }
      return el;
    });
  },
  sortedTask: function () {
    let fullArray = this.tasks;
    const array = this.tasks.map(el => el.priority);
    for (let i = 0; i < array.length; i++) {
      let indexMin = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[indexMin]) {
          indexMin = j;
        }
      }
      let tmp = fullArray[i];
      fullArray[i] = fullArray[indexMin];
      fullArray[indexMin] = tmp;
    }
    this.tasks = fullArray;
  },
};

toDoList.addTask("Лежать на диване");
toDoList.addTask("Лежать на диване");
toDoList.deleteTask(3);
toDoList.updateTask(1, "Взломать Пентагон", 228);
toDoList.sortedTask();

console.log(toDoList.tasks);
