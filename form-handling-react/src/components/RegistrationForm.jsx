import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleFormData = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    setFormData({
      username: "",
      email: "",
      password: ""
    });

    setErrors({});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Sign-up form</h2>
        <label>
          Username
          <input type="text" name="username" id="username" onChange={handleFormData}/>
          {errors.username && (<span>{errors.username}</span>)}
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" onChange={handleFormData}/>
          {errors.email && (<span>{errors.email}</span>)}
        </label>
        <label>
          Password
          <input type="password" name="password" id="password" onChange={handleFormData}/>
          {errors.password && (<span>{errors.password}</span>)}
        </label>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
