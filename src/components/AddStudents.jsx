import Navbar from "./Navbar"

const AddStudents = () => {
  return (
    <div>
        <Navbar/>
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6">
                            
                            <label htmlFor="" className="form-label">Admission Number</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col-12 col-sm-6">
                                
                            <label htmlFor="" className="form-label">Full Name</label>
                            <input type="text" className="form-control" />
                            
                        </div>
                        <div className="col-12 col-sm-6">
                                
                            <label htmlFor="" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" />
                            
                        </div>
                        <div className="col-12 col-sm-6">
                                
                            <label htmlFor="" className="form-label">Gender</label><br />
                            <input type="radio" name="Gender"  id="Male"/>Male
                            <input type="radio" name="Gender" id="Female" className="ms-3"/>Female
                            
                        </div>
                        <div className="col-12 col-sm-6">
                                
                            <label htmlFor="" className="form-label">Class/Grade</label>
                            <input type="text" className="form-control" />
                            
                        </div>
                        <div className="col-12 col-sm-6">
                                    
                            <label htmlFor="" className="form-label">Section</label>
                            <input type="text" className="form-control" />
                            
                        </div>
                        <div className="col-12 col-sm-6">
                                    
                            <label htmlFor="" className="form-label">Parent/Guardian Name</label>
                            <input type="text" className="form-control" />
                            
                        </div>
                        <div className="col-12 col-sm-6">
                                    
                            <label htmlFor="" className="form-label">Contact Number</label>
                            <input type="number" className="form-control" />
                            
                        </div>
                        <div className="col-12 col-sm-6">
                                    
                            <label htmlFor="" className="form-label">E-Mail Address</label>
                            <input type="email" className="form-control" />
                            
                        </div>
                        <div className="col-12">
                                    
                            <button className="btn btn-primary">Submit</button>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudents