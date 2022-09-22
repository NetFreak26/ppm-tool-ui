import { Link } from "react-router-dom";

export const CreateProjectButton = () => {
    return (
        <>
            <Link to="/createProject" className="btn btn-lg btn-info">
                Create a Project
            </Link>
        </>
    )
}