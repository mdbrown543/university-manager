import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditStudent = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")

    const {id} = useParams();

    const students = useSelector(state=>state)
    const currentStudent = students.find(student => student.id === parseInt(id))
    const dispatch = useDispatch()

    useEffect(()=>{
        if(currentStudent){
            setName(currentStudent.name)
            setEmail(currentStudent.email)
            setPhone(currentStudent.phone)
            setAddress(currentStudent.address)
        }
    },[currentStudent])

    const handleSubmit = (event) => {
        event.preventDefault()

        const checkEmail = students.find(student => student.id !== parseInt(id) && student.email === email && student)

        const checkPhone = students.find(student => student.id !== parseInt(id) && student.phone === parseInt(phone) && student)

        const checkAddress = students.find(student => student.id !== parseInt(id) && student.address === address && student)

        if(!email || !phone || !name){
            return toast.warning("Please enter all fields!")
        }
        if(checkEmail){
            return toast.error("Email already exists!")
        }
        if(checkPhone){
            return toast.error("Phone number already exists!")
        }
        if(checkAddress){
            return toast.error("Address already exists!")
        }

        const data = {
            id: parseInt(id),
            name,
            email,
            phone,
            address,
        }
        dispatch({type: "UPDATE_STUDENT",payload:data})
        toast.success("Student updated successfully!")
    }

    return (
        <div className="container">
            {currentStudent ? (
            <>
            <div className="row">
                <h1 className="display-3 my-5 text-center">
                Edit Student #{id}</h1>
              
                <div className="shadow col-md-6 mx-auto p-3">
                   <form onSubmit={handleSubmit} >
                    <div className="form-group">
                    <input type="text" placeholder="Name" value={name} onChange={event => setName(event.target.value)}className="form-control"></input>
                    </div>

                    <div className="form-group">
                    <input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}className="form-control"></input>
                    </div>

                    <div className="form-group">
                    <input type="number" placeholder="Phone Number" value={phone} onChange={event => setPhone(event.target.value)}className="form-control"></input>
                    </div>

                    <div className="form-group">
                    <input type="text" placeholder="Address" value={address} onChange={event => setAddress(event.target.value)}className="form-control"></input>
                    </div>

                    <div className="form-group">
                    <input type="submit" value="Update Student"className="btn btn-dark mt-2"></input>
                    <Link to="/" className="btn btn-danger mt-2 mx-2">Cancel</Link>
                    </div>
                   </form>
                </div>
            </div>
            </>
            ) : (
                <h1 className="display-3 my-5 text-center">
                Student with ID:{id} does not exist.</h1>
            )}
        </div>
    )
}

export default EditStudent