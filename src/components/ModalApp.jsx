import { Modal } from 'react-bootstrap';
import React from 'react';
import { ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import axiosClinet from '../plugins/axiosClinet';
import { useNavigate } from 'react-router-dom';

export default function ModalApp({ open, toggle, roles }) {
  const navigate = useNavigate();
  const handleRole = (e) => {
    e.preventDefault();
    let role = e.target[0].value
    axiosClinet.post('/admins/set-role',{
        role:role
    }).then((res)=>{
      if(res.status === 202){
        if(role === 'admin'){
          navigate('/admin')
        }else if(role === 'superadmin'){
          navigate('/supper_admin')
        }
      }
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
  };

  return (
    <Modal show={open} onHide={toggle}>
      <Modal.Header closeButton>
        <h1>select your  role</h1>
      </Modal.Header>
      <ModalBody>
        <form id="role" onSubmit={handleRole}>
          <select className="form-control m-2">
            <option value="" hidden>
              Select your role
            </option>
            {roles.map((item, index) => 
              <option value={item} key={index}>
                {item}
              </option>
            )}
          </select>
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-success" form='role' type='submit'>Save</button>
      </ModalFooter>
    </Modal>
  );
}
