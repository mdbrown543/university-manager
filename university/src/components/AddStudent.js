import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link} from "react-router-dom";
import { toast } from "react-toastify";

const AddStudent = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")

    const students = useSelector((state) => state)
    const dispatch = useDispatch()
   

    const handleSubmit = (event) => {
        event.preventDefault()

        const checkEmail = students.find(student => student.email === email && student)

        const checkPhone = students.find(student => student.phone === parseInt(phone) && student)

        const checkAddress = students.find(student => student.address === address && student)

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
            id: students[students.length - 1].id + 1,
            name,
            email,
            phone,
            address,
        }
        dispatch({type: "ADD_STUDENT",payload:data})
        toast.success("Student added successfully!")
    }

    return (
  
        <div className="container">
            <div className="row">
                <h1 className="display-3 my-5 text-center">
                Add Student</h1>
              
                <div className="shadow col-md-6 mx-auto p-3">
                   <form onSubmit={handleSubmit}>
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
                    <input type="text" placeholder="Address" value={address} onChange={event => setAddress(event.target.value)} className="form-control"></input>
                    </div>

                    <div className="form-group">
                    <input type="submit" value="Add Student"className="btn btn-block btn-dark mt-2"></input>
                    <Link to="/" className="btn btn-danger mt-2 mx-2">Cancel</Link>
                    </div>
                   </form>
                </div>
            </div>
        </div>
    )
}

export default AddStudent