import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {

    const students = useSelector(state=>state)
    const dispatch = useDispatch()

    const deleteStudent=(id)=>{
        dispatch({type:"DELETE_CONTACT",payload:id})
        toast.success("Contact deleted successfully!")
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-right">
                <Link to="/add" className="btn btn-outline-dark my-5">Add Student</Link>
                </div>
                <div className="col-md-10 mx-auto">
                    <h1>Student List</h1>
                    <table className="table table-hover">
                        <thead className="display-block text-white bg-dark text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Address</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student,id) => (
                                <tr key={id}>
                                    <td>{id+1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.address}</td>
                                    <td>
                                        <Link to={`/edit/${student.id}`} className="btn btn-small btn-primary mx-2">&nbsp;&nbsp;Edit&nbsp;&nbsp;</Link>
                                        <button type="button" onClick={()=>deleteStudent(student.id)}className="btn btn-small btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home