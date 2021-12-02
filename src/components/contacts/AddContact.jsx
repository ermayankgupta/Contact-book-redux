import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addContact } from '../../action/ContactAction';
import { useNavigate } from "react-router";
import shortid from "shortid";

const AddContact = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [name,setName] =useState("");
  const [phone,setPhone] =useState("");
  const [email,setEmail] =useState("");
  const createContact=(e)=>{
    e.preventDefault();
    console.log(name,email,phone);
    const new_contact ={
      id:shortid.generate(),
      name:name,
      phone:phone,
      email:email
    }
    dispatch(addContact(new_contact))
    navigate("/"); 
  }
  return (
    <div className="card border-0 shadow">
      <div className="card-header bg-danger text-white text-center">
        Add A Contact
      </div>
      <div className="card-body">
        <form onSubmit={(e)=>createContact(e)}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">Create Contact</button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
