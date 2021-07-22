import Task from "./day-2-task-1";



const getTaskToogle = (toggle) => {
    return new Task(1, toggle, 'title', date1, 'description');
}

const getTask = (date) => {
    return new Task(1, true, 'title', date, 'description');
}

describe('function toogle', () => {
    it('change status task to true', () => {
        const task = getTaskToogle(false)
        task.toogle();
        expect(task.done).toBe(true)
    });

    it('change status task to false', () => {
        const task = getTaskToogle(true)
        task.toogle();
        expect(task.done).toBe(false)
    });
});

describe('function isOverdue', () => {
    const date1 = new Date(2021, 7, 17);
    const date2 = new Date(2021, 5, 17);
    it('return false if the task is not overdue', () => {
        const task = getTask(date1);
        expect(task.isOverdue()).toBe(false)
    });

    it('return true if the task is overdue', () => {
        const task = getTask(date2);
        expect(task.isOverdue()).toBe(true)
    });
});

describe('function postponeDay', () => {
    it('returns a new term', () => {
        const task = getTask(new Date(2021, 7, 17));
        task.postponeDay(10)
        let result = new Date(2021, 7, 27);
        expect(task.dueDate).toStrictEqual(result);
    });

    it('return old term', () => {
        const task = getTask(new Date(2021, 7, 17));
        task.postponeDay(0)
        let result = new Date(2021, 7, 17);
        expect(task.dueDate).toStrictEqual(result);
    });

    it('returns reduced term', () => {
        const task = getTask(new Date(2021, 7, 17));
        task.postponeDay(-2)
        let result = new Date(2021, 7, 15);
        expect(task.dueDate).toStrictEqual(result);
    });
});

describe('function setDescription', () => {
    it('set description to task', () => {
        const task = getTask(date1);
        let text = 'new description';
        task.setDescription(text)
        expect(task.description).toBe(text)
    });
});





