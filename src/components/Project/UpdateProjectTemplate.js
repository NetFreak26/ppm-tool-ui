import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SAVE_PROJECT } from "../../actions/actionTypes";
import { getProject, saveProject } from "../../actions/projectActions";
import { useLocation } from "react-router";

export const UpdateProjectTemplate = () => {

    const [projectStates, setProjectStates] = useState({
    })

    const location = useLocation()
    const { projectID } = location.state

    useEffect(() => {
        const loadData = async () => {
            const action = await getProject(projectID);
            dispatch(action)
        }
        loadData();
        }, []
    )

    const project = useSelector(state => state.project.project)

    useEffect(() => {
        setProjectStates(project)
        },
        [project]
    )

    const errors = useSelector(state => state.project.errors);

    const dispatch = useDispatch();

    const navigate = useNavigate();
 

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProjectStates((previousStates) => ({
            ...previousStates,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const action = await saveProject(projectStates);
        dispatch(action);
        if(action.type === SAVE_PROJECT) {
            navigate('/dashboard')
        }
    }

    return (
        <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Edit Project Form</h5>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="projectName"><h6>Project Name</h6></label>
                                <input type="text"  
                                       id="projectName"
                                       className="form-control form-control-lg " 
                                       placeholder="Project Name" 
                                       name="projectName"
                                       value={projectStates.projectName || ""} 
                                       onChange={handleChange}
                                       required
                                />
                            </div>
                            {errors.projectName && (
                                <div className="feedback">
                                    <p>{errors.projectName}</p>
                                </div>
                            )}
                            
                            <div className="form-group">
                                <label htmlFor="projectID"><h6>Project ID</h6></label>
                                <input type="text" 
                                       id="projectID"
                                       className="form-control form-control-lg" 
                                       placeholder="Unique Project ID" 
                                       name="projectID"
                                       value={projectStates.projectID || ""}
                                       onChange={handleChange}
                                       required
                                       disabled
                                />
                            </div>
                            {errors.projectID && (
                                <div className="feedback">
                                    <p>{errors.projectID}</p>
                                </div>
                            )}
                            <div className="form-group">
                                <label htmlFor="projectDescription"><h6>Project Description</h6></label>
                                <textarea className="form-control form-control-lg" 
                                          id="projectDescription"
                                          placeholder="Project Description" 
                                          name="projectDescription"
                                          value={projectStates.projectDescription || ""}
                                          onChange={handleChange}
                                          required
                                ></textarea>
                            </div>
                            {errors.projectDescription && (
                                <div className="feedback">
                                    <p>{errors.projectDescription}</p>
                                </div>
                            )}
                            <h6>Start Date</h6>
                            <div className="form-group">
                                <input type="date" 
                                       className="form-control form-control-lg" 
                                       name="startDate" 
                                       value={projectStates.startDate || ""} 
                                       onChange={handleChange}
                                />
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input type="date" 
                                       className="form-control form-control-lg" 
                                       name="endDate" 
                                       value={projectStates.endDate || ""} 
                                       onChange={handleChange}
                                />
                            </div>

                            <input type="submit" 
                                   className="btn btn-primary btn-block mt-4" 
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}