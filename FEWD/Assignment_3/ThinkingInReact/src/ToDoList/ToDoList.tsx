import { useState } from "react";
import { ToDoItem } from "./ToDoListItems/ToDoListItems";

type ToDoListProps = {
  id: number;
  text: string;
  completed: boolean;
};
export const ToDoList = () => {

const[ToDo, SetToDos] = useState<ToDoListProps[]>([]);

const [Input, SetInput] = useState<string>('');

const CompletedToggler = (id: number) => {
    SetToDos(
      ToDo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const RemoveItem = (id: number) => {
    SetToDos(ToDo.filter((todo) => todo.id !== id));
  };

const HandleClick = () => {
    if (!Input.trim()) return;

    const newId = ToDo.length > 0 ? ToDo[ToDo.length - 1].id + 1 : 0;

    const NewToDo: ToDoListProps = {
      id: newId,
      text: Input,
      completed: false,
    };

    SetToDos([...ToDo, NewToDo]);
    SetInput(''); 
  };

    return(
        <div className='mainList'>
            <h1>To-Do List</h1>
            <input 
                type='text' 
                placeholder='Input To-do list items'
                value={Input}
                onChange={(e)=> SetInput(e.currentTarget.value)}
            />

            <button 
                className='AddToListButton'
                onClick={HandleClick}
            >Add Item</button>
            
             <ul className='ListItems'>
                 {ToDo.map((todo)=>(
                    <ToDoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onToggle={CompletedToggler}
                    onRemove={RemoveItem}
                  />
                ))}
            </ul>
            
        </div>
    )
}
