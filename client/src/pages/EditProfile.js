import React, { useEffect, useState } from 'react';
import EditName from '../components/EditName.js';
import Navbar from '../components/Navbar.js';

const EditProfile = () => {
    const [showEditName, setShowEditName] = useState(false);

    const handleEditNameClick = () => {
      setShowEditName(true);
    };
  
    const handleSubmit = () => {
      // Perform any necessary actions here, e.g., close the edit profile component
      setShowEditName(false);
    };


  return (
    <div className="mt-1">
      <div className="bg-grey p-3">
        <div className="d-flex justify-content-start">
          <h2>Jane McPheron</h2>
          <btn className="edit-button" >change</btn>
        </div>
        <div className="">
          <div className="d-flex justify-content-start">
            <h5 className="d-flex justify-content-left">Chicago, IL</h5>
            <a className="edit-button">change</a>
          </div>
          <div className="d-flex justify-content-start">
            <h5 className="d-flex justify-content-left">Looking for: Internship</h5>
            <a className="edit-button">change</a>
          </div>
          <div className="d-flex justify-content-start align-content-center">
            <h5 className="text-start mt-5 d-flex justify-content-left">I like tacos. They are good. 
            I wanna be a taco chef, but I need to learn how first.</h5>
            <a className="edit-button">change</a>
          </div>
        </div>

      </div>
      <div className="mx-3">
        <div className="text-start mt-4">
          <div className="d-flex justify-content-start">
            <h2 className="text-start bold">Education</h2>
            <a className="edit-button">change</a>
          </div>
          <div className="text-start">
            <h5>Whitney Young Magnet High School</h5>
            <p className="">2016-2020</p>
          </div>
          <div className="text-start">
            <h5>University of Minnesota Duluth</h5>
            <p className="">2021-2025</p>
          </div>
        </div>
        <div className="text-start mt-4">
          <div className="d-flex justify-content-start">
            <h2 className="text-start bold">Skills</h2>
            <a className="edit-button">change</a>
          </div>
          <div className="text-start">
            <h5>CSS, HTML, JavaScript, Python, Github, Visual Studio Code</h5>
          </div>
        </div>
        <div className="text-start mt-4">
          <div className="d-flex justify-content-start">
            <h2 className="text-start bold">Certifications</h2>
            <a className="edit-button">change</a>
          </div>
          <div className="text-start">
            <h5>I'm a certified cool dude.</h5>
          </div>
        </div>
        <div className="text-start mt-4">
          <div className="d-flex justify-content-start">
            <h2 className="text-start bold">Accomplishments</h2>
            <a className="edit-button">change</a>
          </div>
          <div className="text-start">
            <h5>This app.</h5>
          </div>
        </div>
        <div className="text-start mt-4">
          <div className="d-flex justify-content-start">
            <h2 className="text-start bold">Additional Resources</h2>
            <a className="edit-button">change</a>
          </div>

          <div className="text-start">
            <a href="https://jvmcpheron.github.io/Bootstrap_Portfolio/"><h5>Personal Website</h5></a>
          </div>
          <div className="text-start">
            <a href="https://github.com/jvmcpheron"><h5>GitHub</h5></a>
          </div>
        </div>

      </div>
      <button type="button" className="btn btn-primary mt-3 mb-3"><a className="dropdown-item" href="/profile">Save Changes</a></button>
    </div>
  )
}

export default EditProfile;