import { Navigate, NavLink, Outlet } from "react-router-dom";
import { useGetCategoriesQuery } from "../api/categoryApi";
import '../styles/HomePage.scss';


const HomePage = () => {

    const categories = useGetCategoriesQuery();

    if (!localStorage.getItem('token')) {
        return <Navigate to={'/login'} />
    }

    if (categories.isLoading) {
        return <h1> Loading..</h1>
    }

    if (categories.isError) {
        return <h1>Error...</h1>
    }

    return (
        <div className="HomePage">
            <div className="sidebar">
                <h1 className="title">TODOS</h1>
                {categories.data.map(el => {
                    return <NavLink className="sidebar-link" to={`/home/tasks/${el.id}`}> {el.name} </NavLink>
                })}

                <NavLink className="sidebar-link" to={'/home/new-category'}>Create new category</NavLink>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default HomePage;