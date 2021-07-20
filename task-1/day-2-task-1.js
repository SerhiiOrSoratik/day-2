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
        let options = { month: 'short', day: 'numeric' };
        console.log(this.index + '. ' + (this.done ? '[x]' : '[ ]') + ' ' + this.title + ' (' + this.dueDate.toLocaleDateString('en-US', options) + ') \n   ' + this.description);
    }

    toogle() {
        this.done = !this.done;
    }

    isOverdue() {
    
        let nowDate = new Date();
        if (nowDate.getMonth() > this.dueDate.getMonth()) {
            return false
        } else if (nowDate.getMonth() === this.dueDate.getMonth()) {
            return nowDate.getDate() < this.dueDate.getDate();
        } else {
            return true
        }
    }

    postponeDay(timespan) {
        this.dueDate.setDate(this.dueDate.getDate() + timespan);
    }

    setDescription(description) {
        this.description = description;
    }
}

let options = { month: 'short', day: 'numeric' };

let date1 = new Date(2021, 7, 17);
let date2 = new Date(2021, 6, 20);
let date3 = new Date(2021, 5, 20);

let task1 = new Task(1, true, 'Implement task output', date1, 'Use fields: title, desc, done, dueDate');
let task2 = new Task(2, false, 'Task1', date2, 'Very intreresting description');
let task3 = new Task(3, false, 'Task1', date3, 'aaaaaaaa');

task1.toString();
task1.toogle();
task1.postponeDay(5);
task1.toString();
console.log(task1.isOverdue());

task2.toString();
task2.toogle();
task2.postponeMonth(1);
task2.toString();
console.log(task2.isOverdue());

task3.toString();
task3.toogle();
task3.setDescription('New description');
task3.toString();
console.log(task3.isOverdue());


