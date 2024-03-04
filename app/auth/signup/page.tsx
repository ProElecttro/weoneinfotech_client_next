"use client";
// Import necessary modules
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";

import "../signup.css";

// Define FormData interface
interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

// Define SignUp component
const page = () => {
  // Define state using useState hook
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Define input change handler function
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Define form submission handler function
  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log(formData); // Example: log form data
  };

  return (
    <div className="register">
      <p className="title">Sign Up</p>
      <label htmlFor="email">Email address</label>
      <br />
      <input
        type="email"
        name="email"
        onChange={handleInputChange}
        value={formData.email}
        className="inputBox"
        placeholder="Enter your email address"
      />

      <label htmlFor="password">Password</label>
      <br />
      <input
        type="password"
        name="password"
        onChange={handleInputChange}
        value={formData.password}
        className="inputBox"
        placeholder="Enter your password"
      />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <br />
      <input
        type="password"
        name="confirmPassword"
        onChange={handleInputChange}
        value={formData.confirmPassword}
        className="inputBox"
        placeholder="Enter your password again"
      />

      <div className="signup">
        <button className="signinBtn" onClick={handleSubmit}>
          <strong>Register</strong>
        </button>
        <p className="newID">Already Registered?</p>
        <button className="signupBtn">
            <strong>Login</strong>
        </button>
      </div>
    </div>
  );
};

// Export SignUp component
export default page;
