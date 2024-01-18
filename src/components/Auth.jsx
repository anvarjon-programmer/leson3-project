import React, { useState } from 'react'
import axiosClinet from '../plugins/axiosClinet';
import ModalApp from './ModalApp';

export default function Auth() {
    const [roles,setRoles] = useState([]);
    const [modalVisble,setModalVisble] = useState(false)
    const handleSubmit =(e)=>{
        e.preventDefault();
        let username = e.target[0].value;
        let password = e.target[1].value;
        axiosClinet.post("/admins/login",{
            username: username,
            password: password
        }).then((res)=>{
            console.log(res);
            localStorage.setItem('token',res?.data?.token);
            setRoles(res?.data?.roles);
            if(res?.status === 202){
                setModalVisble(true)
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div className='container'>
        <ModalApp open={modalVisble} toggle={()=>setModalVisble(false)} roles={roles}/>
        <div className="row">
            <div className="col-md-6 offset-3">
                <div className="card">
                    <div className="card-body">
                        <form id='form' onSubmit={handleSubmit}>
                            <input type="text" placeholder='Username' className='form-control m-2' />
                            <input type="password" placeholder='password' className='form-control m-2' />
                        </form>
                    </div>
                    <div className="card-footer">
                        <button className='btn btn-success' form='form'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}