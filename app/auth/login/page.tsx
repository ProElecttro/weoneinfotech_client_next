"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import "../signup.css";

const page = () => {
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please enter a valid email and password");
      return;
    }

    try {
      const response = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("access_token", data.access_token);
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="register">
      <p className="title">Sign in</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="inputBox"
          placeholder="Enter your email address"
        />

        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="inputBox"
          placeholder="Enter your password"
        />

        <div className="signup">
          <button type="submit" className="signinBtn">
            <strong>Login</strong>
          </button>
          <p className="newID">New to weoneinfotech?</p>
          <button className="signupBtn">
              <strong>Create an account</strong>
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
