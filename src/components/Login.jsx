import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6969/api/v1/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "OK") {
          alert("Login Success");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter The Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Login In
        </button>
      </div>
      <p className="forgot-password text-right">
        New User,<a href="/login">sign-up here? </a>
      </p>
    </form>
  );
};

export default Login;
