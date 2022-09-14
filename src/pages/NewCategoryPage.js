import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useCreateCategoryMutation } from "../api/categoryApi";
import Input from '../components/Input';
import Button from '../components/Button';
import '../styles/NewCategoryPage.scss'

const NewCategoryPage = () => {

    const [name, setName] = useState("");
    const [createCategory, createCategoryResult] = useCreateCategoryMutation();

    const createCategoryHandler = () => {
        createCategory({
            name
        })
    }
    if (createCategoryResult.isSuccess) {
        return <Navigate to={'/home'} />
    }

    return (
        <div className="NewCategoryPage">
            <h1>Create new category</h1>
            <div className="form">
                <Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

                <Button onClick={createCategoryHandler} disabled={createCategoryResult.isLoading}>Create new category</Button>
            </div>

            {createCategoryResult.isError && <p className="error">Error creating category...</p>}
        </div>
    )
}

export default NewCategoryPage;