import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from 'primereact/button';


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
    // Later: call API here
  };

  return (
    <div className="grid mx-0 mt-0">
      <div className="col-12 md:col-6 md:col-offset-3">
        
        <form onSubmit={handleSubmit}>
          <div className="grid mx-0">
            <div className="col-12"><h2>Register</h2></div>
            <div className="col-12">
              <FloatLabel>
                <InputText
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="username">Email/Mobile</label>
              </FloatLabel>
            </div>

            <div className="col-12">
              <FloatLabel>
                <InputText
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>

              </FloatLabel>
            </div>
            <div className="col-12">
              <Button  type="submit">Register</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
