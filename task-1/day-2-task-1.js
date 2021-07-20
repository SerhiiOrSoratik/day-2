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
        const options = { month: 'short', day: 'numeric' };
        console.log(`${this.index}. ${this.done ? '[x]' : '[ ]'} ${this.title} ${"(" + this.dueDate.toLocaleDateString('en-US', options) + ")"} \n   ${this.description}`);
    }

    toogle() {
        this.done = !this.done;
    }

    isOverdue() {
    
        const nowDate = new Date();
        if (nowDate.getMonth() > this.dueDate.getMonth()) {
            return true
        } else if (nowDate.getMonth() === this.dueDate.getMonth()) {
            return nowDate.getDate() < this.dueDate.getDate();
        } else {
            return false
        }
    }

    postponeDay(timespan) {
        this.dueDate.setDate(this.dueDate.getDate() + timespan);
    }

    postponeHours(timespan) {
        const tempDate = new Date(this.dueDate.valueOf() + timespan * 1000 * 60 * 60);
        this.dueDate = tempDate;
    }

    setDescription(description) {
        this.description = description;
    }
}

const options = { month: 'short', day: 'numeric' };

const date1 = new Date(2021, 7, 17);
const date2 = new Date(2021, 6, 20);
const date3 = new Date(2021, 5, 20);

let task1 = new Task(1, true, 'Implement task output', date1, 'Use fields: title, desc, done, dueDate');
let task2 = new Task(2, false, 'Task1', date2, 'Very intreresting description');
let task3 = new Task(3, false, 'Task1', date3, 'Old description');

task1.toString();
task1.toogle();
task1.postponeDay(5);
task1.toString();
console.log(task1.isOverdue());

task2.toString();
task2.toogle();
console.log(task2.isOverdue());
task2.postponeHours(24);
task2.toString();

console.log(task2.isOverdue());

task3.toString();
task3.toogle();
task3.setDescription('New description');
task3.toString();
console.log(task3.isOverdue());


