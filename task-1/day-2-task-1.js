class Task {
    done;
    title;
    dueDate;
    description;

    constructor(index, done, title, dueDate, description) {
        this.index = index;
        this.done = done;
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
    }

    toString() {
        console.log(this.index + '. ' + (this.done ? '[x]' : '[ ]') + ' ' + this.title + ' (' + this.dueDate + ') \n   ' + this.description);
    }

    toogle() {
        this.done = !this.done;
    }

    isOverdue() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Now', 'Dec'];
        let nowDate = new Date();
        let taskDueDateMonth = this.dueDate.split(' ');
        if (nowDate.getMonth() > months.indexOf(taskDueDateMonth[0])) {
            return false
        } else if (nowDate.getMonth() == months.indexOf(taskDueDateMonth[0])) {
            if (nowDate.getDate() >= taskDueDateMonth[1]) {
                return false
            } else {
                return true
            }
        } else {
            return true
        }
    }
}

let task1 = new Task(1, true, 'Implement task output', 'Aug 19', 'Use fields: title, desc, done, dueDate');
let task2 = new Task(2, false, 'Task1', 'Jul 20', 'Very intreresting description');

task1.toString();
task1.toogle();
task1.toString();
console.log(task1.isOverdue())

task2.toString();
task2.toogle();
task2.toString();
console.log(task2.isOverdue())




