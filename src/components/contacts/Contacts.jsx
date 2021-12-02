import React from "react";
import { useSelector } from "react-redux";
import Avatar from 'react-avatar'

const Contacts = () => {
  const contacts = useSelector((state) => state.xyz.contacts);
  return (
    <div>
      <table className="table shadow">
        <thead className="bg-danger text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.key}>
              <th>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                </div>
              </th>
              <td><Avatar name={contact.name} size="45" round={true} className="me-2" /> {contact.name}</td>
              <td>{ contact.phone}</td>
              <td>{contact.email}</td>
              <td className="actions">
                <a href="#"><span className="material-icons me-2">edit</span></a>
                <a href="#"><span className="material-icons text-danger">remove_circle</span></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
