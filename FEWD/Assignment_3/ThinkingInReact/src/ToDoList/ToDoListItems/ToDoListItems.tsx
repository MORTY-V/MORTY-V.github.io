import "./ToDoListItems.css"

type ToDoItemProps = {
    id: number;
    text: string;
    completed: boolean;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
  };
  
  export const ToDoItem = ({ id, text, completed, onToggle, onRemove }: ToDoItemProps) => {
    return (
        <li
            style={{
            display: "flex",
            justifyContent: "space-between", 
            alignItems: "center",
            padding: "4px 0",
            }}
        >
            <span className=''
                onClick={() => onToggle(id)}
                style={{
                textDecoration: completed ? "line-through" : "none",
                cursor: "pointer",
                flexGrow: 1,
                }}
            >{text}</span>

            <button className='RemoveItem'
                onClick={() => onRemove(id)}
            > X </button>
        </li>
    );
  };