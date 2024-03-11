// Utility Types

// Partial, Readonly, Pick, and Record

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}

const todo: Todo = {
    title: 'Learn TypeScript',
    description: 'Study the basics of TypeScript',
    completed: false
};

const updatedTodo = updateTodo(todo, { completed: true });
console.log(updatedTodo);


interface Utilisateur {
    username: string;
    password: string;
}

const user: Readonly<Utilisateur> = {
    username: "brokly",
    password: '123456'
}

