import React from "react";
import { useStore } from "../store/store";
import "../styles/styles.css"




const UserManagement = () => {
    const { selectedUser, setSelectedUser } = useStore();
   

    const users = [
        {
            id: 1,
            email: 'harsh@example.com',
            firstName: 'Harsh',
            lastName: 'Kumar'
          },
          {
            id: 2,
            email: 'ramesh@example.com',
            firstName: 'Ramesh',
            lastName: 'Singh'
          },
          {
            id: 3,
            email: 'suresh@example.com',
            firstName: 'Suresh',
            lastName: 'Patel'
          }
    ]


return (
    <div className="container">
    <h1 className="title">User Management</h1>
    
    <div className="grid-container">
      {/* User List Section */}
      <div className="user-list">
        <h2 className="info-title">Users</h2>
        <div>
          {users.map((user) => (
            <button
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`user-button ${selectedUser?.id === user.id ? 'selected' : ''}`}
            >
              <div className="user-name">
                {user.firstName} {user.lastName}
              </div>
              <div className="user-email">
                {user.email}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* User Info Section */}
      <div className="info-panel">
        <h2 className="info-title">Selected User Info</h2>
        {selectedUser ? (
          <div>
            <div className="info-field">
              <div className="field-label">First Name</div>
              <div className="field-value">{selectedUser.firstName}</div>
            </div>
            <div className="info-field">
              <div className="field-label">Last Name</div>
              <div className="field-value">{selectedUser.lastName}</div>
            </div>
            <div className="info-field">
              <div className="field-label">Email</div>
              <div className="field-value">{selectedUser.email}</div>
            </div>
          </div>
        ) : (
          <p className="empty-message">
            Please select a user to view their information
          </p>
        )}
      </div>
    </div>
  </div>
)

}

export default UserManagement