import React from 'react'

const CreateJob = () => {
  return (
    <div className="mx-3">
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Job Title" aria-label="Job Title" aria-describedby="basic-addon1"></input>
        </div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Location" aria-label="Location" aria-describedby="basic-addon1"></input>
        </div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Job Type" aria-label="Job Type" aria-describedby="basic-addon1"></input>
        </div>
        <div className="input-group mb-3">
            <textarea className="form-control" placeholder="Job Description" aria-label="Job Description"></textarea>
        </div>
        <div className="input-group mb-3">
            <textarea className="form-control" placeholder="Requirements" aria-label="Requirements"></textarea>
        </div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Application Link" aria-label="Application Link" aria-describedby="basic-addon1"></input>
        </div>
        <button type="button" className="btn btn-primary">Post Job</button>
    </div>
  )
}

export default CreateJob