import { useState } from "react"
import { Navigate, useParams } from "react-router-dom";
import { useCreateTaskMutation } from "../api/taskApi";
import '../styles/NewTaskPage.scss';
import Input from '../components/Input';
import Button from '../components/Button'


const NewTaskPage = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [createTask, createTaskResult] = useCreateTaskMutation();
    const { categoryId } = useParams();
    const createTaskHandler = () => {
        createTask({
            title,
            description,
            category: {
                id: categoryId
            }
        })
    }
    if (createTaskResult.isSuccess) {
        return <Navigate to={`/home/tasks/${categoryId}`} />
    }
    return (
        <div className="NewTaskPage">
            <h1>New Task</h1>
            <div className="form">
                <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <Button onClick={createTaskHandler} disabled={createTaskResult.isLoading}>Create Task</Button>

                {createTaskResult.isError && <p className="error">Error creating task</p>}
            </div>
        </div>
    )
}

export default NewTaskPage