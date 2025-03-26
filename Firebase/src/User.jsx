import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { db } from "./config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const User = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const [description, setDescription] = useState("");
  const [userList, setUserList] = useState([]);

  const getUsers = async () => {
    const userCollection = collection(db, "users");
    const userdata = await getDocs(userCollection);
    const users = userdata.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setUserList(users);
  };

  const createUser = async (data) => {
    const userCollection = collection(db, "users");
    await addDoc(userCollection, data);
    getUsers();
  };

  const handleDelete = async (id) => {
    const userRef = doc(db, "users", id);
    await deleteDoc(userRef);
    getUsers();
  };

  const updateUser = async (id) => {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, { email, username, role, description });
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({
      username,
      email,
      password,
      role,
      description,
      timestamp: Date.now(),
    });
    setUsername("");
    setEmail("");
    setPassword("");
    setRole("User");
    setDescription("");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary fw-bold">
        <i className="bi bi-people-fill"></i> User Management
      </h2>

      <div className="card shadow-lg border-0 p-4 mb-4 bg-light">
        <h4 className="text-center mb-3">Add New User</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="text"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role:</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Guest">Guest</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            <i className="bi bi-plus-circle"></i> Create User
          </button>
        </form>
      </div>

      <hr className="my-4" />

      <div className="row">
        {userList.length === 0 ? (
          <h5 className="text-center text-muted">
            No users found. Add one above.
          </h5>
        ) : (
          userList.map((user) => (
            <div key={user.id} className="col-md-6">
              <div className="card mb-3 shadow-lg border-0 p-3 bg-white">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    <i className="bi bi-person-circle"></i> {user.username}
                  </h5>
                  <p className="card-text">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="card-text">
                    <strong>Password:</strong> {user.password}
                  </p>
                  <p className="card-text">
                    <strong>Role:</strong> {user.role}
                  </p>
                  <p className="card-text">
                    <strong>Description:</strong> {user.description}
                  </p>
                  <p className="card-text text-muted">
                    <i className="bi bi-clock-history"></i>{" "}
                    {new Date(user.timestamp).toLocaleString()}
                  </p>
                  <div className="d-flex">
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => handleDelete(user.id)}
                    >
                      <i className="bi bi-trash3-fill"></i> Delete
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => updateUser(user.id)}
                    >
                      <i className="bi bi-pencil-square"></i> Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default User;
