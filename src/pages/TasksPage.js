import { NavLink, useParams } from "react-router-dom";
import { useCompleteTaskMutation, useGetTasksForCategoryQuery } from "../api/taskApi";
import '../styles/TasksPage.scss';



const TasksPage = () => {

    const { categoryId } = useParams();
    const tasks = useGetTasksForCategoryQuery(categoryId);
    const [completeTask, completeTaskResult] = useCompleteTaskMutation();

    if (tasks.isLoading) {
        return <h1>Loading...</h1>
    }
    if (tasks.isError) {
        return <h1>Error...</h1>
    }
    const completeTaskHandler = (taskId) => {
        completeTask(taskId)
    }
    return (
        <div className="TasksPage">
            <div className="header">
                <h1>Task for category with id: <span>{categoryId}</span></h1>
                <NavLink to={`/home/new-task/${categoryId}`}>
                    New Task
                </NavLink>
            </div>

            <ul className="tasks">
                {tasks.data.length === 0 && <p>You don't have any tasks in this category</p>}

                {tasks.data.map(el => {
                    return <li>
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                        <button onClick={() => completeTaskHandler(el.id)} disabled={completeTaskResult.isLoading}>Complete</button>
                    </li>
                })}
            </ul>

        </div>
    )
}

export default TasksPage;