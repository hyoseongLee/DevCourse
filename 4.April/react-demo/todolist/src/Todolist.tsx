import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './App.css'
import TodoModal from './TodoModal';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

const Todolist: React.FC = () => {
    const title: string = "오늘 할일";

    //구조분해할당
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: '공부하기', isChecked: false },
        { id: 2, text: '잠자기', isChecked: false },
        { id: 3, text: '미팅하기', isChecked: false }
    ])

    const [newTodo, setNewTodo] = useState<string>('');
    const [showDetail,setShowDetail] = useState<boolean>(false)
    const [selectTodo,setSelectTodo] = useState<Todo | null>(null)

    const handleCheckedChange = (itemId: number) => {
        setTodos((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
            )
        )
    }

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }])
            setNewTodo('');
        }
    }

    const removeTodo = (id : number) => {
        setTodos(todos.filter((todo)=> todo.id !== id))
    }

    const handleTodoClick = (todo : Todo) => {
        setShowDetail(true);
        setSelectTodo(todo);
    }

    const handleCloseDetail = () => {
        setShowDetail(false);

    }

    return (
        <div>
            <h1> {title} </h1>
            <p></p>
            <div>
                <input type='text' placeholder='할일 입력'
                    style={{
                        marginRight: '10px', writingMode: 'horizontal-tb'
                    }}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <Button variant='success' onClick={addTodo}>추가</Button>
            </div>

            <div className='container'>
                <div className='board'>
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={todo.id}>
                                <input type='checkbox'
                                    onChange={() => {
                                        handleCheckedChange(todo.id);
                                    }}>

                                </input>
                                <span onClick={()=> {handleTodoClick(todo)}}>
                                    {
                                        todo.isChecked ?
                                            <del>
                                                {todo.text}
                                            </del> :
                                            <span>{todo.text}</span>
                                    }

                                </span>
                                <button onClick={() => removeTodo(todo.id)}
                                    className='bts'>
                                        삭제</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
                        <TodoModal show={showDetail} todo= {selectTodo} handleClose={handleCloseDetail}></TodoModal>
        </div>

    )
}

export default Todolist;