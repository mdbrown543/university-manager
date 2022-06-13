import React from "react";
import { Link } from "react-router-dom";

const EditContact = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="display-3 my-5 text-center">
                Edit Student</h1>
              
                <div className="shadow col-md-6 mx-auto p-3">
                   <form>
                    <div className="form-group">
                    <input type="text" placeholder="Name" className="form-control"></input>
                    </div>

                    <div className="form-group">
                    <input type="email" placeholder="Email" className="form-control"></input>
                    </div>

                    <div className="form-group">
                    <input type="number" placeholder="Phone Number" className="form-control"></input>
                    </div>

                    <div className="form-group">
                    <input type="text" placeholder="Address" className="form-control"></input>
                    </div>

                    <div className="form-group">
                    <input type="submit" value="Update Student"className="btn btn-dark mt-2"></input>
                    <Link className="btn btn-dark mt-2 mr-2">Cancel</Link>
                    </div>
                   </form>
                </div>
            </div>
        </div>
    )
}

export default EditContact