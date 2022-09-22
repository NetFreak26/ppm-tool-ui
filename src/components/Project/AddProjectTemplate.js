import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SAVE_PROJECT } from "../../actions/actionTypes";
import { saveProject } from "../../actions/projectActions";

export const AddProjectTemplate = (props) => {

    const [projectStates, setProjectStates] = useState({
        projectName: "",
        projectID: "",
        projectDescription: "",
        startDate: "",
        endDate: ""
    })

    const dispatch = useDispatch();

    const navigate = useNavigate();
 
    const errors = useSelector(state => state.project.errors);

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
        const action = await saveProject(projectStates, props.history);
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
                        <h5 className="display-4 text-center">Create Project form</h5>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="projectName"><h6>Project Name</h6></label>
                                <input type="text"  
                                       id="projectName"
                                       className="form-control form-control-lg " 
                                       placeholder="Project Name" 
                                       name="projectName"
                                       value={projectStates.projectName} 
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
                                       value={projectStates.projectID}
                                       onChange={handleChange}
                                       required
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
                                          value={projectStates.projectDescription}
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
                                       value={projectStates.startDate} 
                                       onChange={handleChange}
                                />
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input type="date" 
                                       className="form-control form-control-lg" 
                                       name="endDate" 
                                       value={projectStates.endDate} 
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