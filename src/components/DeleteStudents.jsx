import Navbar from "./Navbar"

const DeleteStudents = () => {
  return (
    <div>
        <Navbar/>
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6">
                            <label htmlFor="" className="form-label">Admission No.</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteStudents