import React from "react";

const AddContact = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="display-3 my-5 text-center">
                Add Student</h1>
              
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
                    <input type="submit" value="Add Student"className="btn btn-block btn-dark mt-2"></input>
                    </div>
                   </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact