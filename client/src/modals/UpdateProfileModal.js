// Edit Profile Modal

export const UpdateProfileModal = (props) => {

    const styles = {
        marginTop: "15%",
        marginBottom: "15%"
    }

    return(
        <>        
        {/* <!-- Modal --> */}
        <div className={`${props.isOpen ? `open` : ''} modal fade`} 
          style={styles} id="staticBackdrop" data-bs-backdrop="static" 
          data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" 
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Profile</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={props.closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                
                <div className="row my-3">
                  <div className="col-4 d-flex align-items-center">
                    Current City:
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control"></input>
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-4 d-flex align-items-center">
                    Looking for:
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control"></input>
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-4 d-flex align-items-center">
                    Education:
                  </div>
                  <div className="col-8 my-1">
                    <input type="text" className="form-control"></input>
                  </div>
                  <div className="col-4 d-flex align-items-center">
                    Years:
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control"></input>
                  </div>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.closeModal}>Cancel</button>
                <button type="button" className="btn btn-primary" >Save</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

