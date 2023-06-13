import React from 'react'

const CreateJob = () => {
  return (
    <div className="mx-3">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Job Title" aria-label="Job Title" aria-describedby="basic-addon1"></input>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Location" aria-label="Location" aria-describedby="basic-addon1"></input>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Job Type" aria-label="Job Type" aria-describedby="basic-addon1"></input>
        </div>
        <div class="input-group mb-3">
            <textarea class="form-control" placeholder="Job Description" aria-label="Job Description"></textarea>
        </div>
        <div class="input-group mb-3">
            <textarea class="form-control" placeholder="Requirements" aria-label="Requirements"></textarea>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Application Link" aria-label="Application Link" aria-describedby="basic-addon1"></input>
        </div>
        <button type="button" class="btn btn-primary">Post Job</button>
    </div>
  )
}

export default CreateJob