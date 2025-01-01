import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./redux/features/userSlice";
import Input from "./shared/component/Input";

const User = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const dispatch = useDispatch();
    const { data: user } = useSelector((state) => state.user);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasError = false;

        // Check for empty fields and focus on the first invalid one
        if (formData.username.trim() === "") {
            usernameRef.current.focus();
            hasError = true;
        }
        if (formData.password.trim() === "") {
            passwordRef.current.focus();
            hasError = true;
        }

        if (!hasError) {
            dispatch(register(formData));
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Username"
                    type="text"
                    required={true}
                    name="username"
                    minLength={5}
                    value={formData.username} // Controlled value from formData
                    onChange={handleChange} // Pass the handler to update formData
                    ref={usernameRef} // Attach the ref for focus handling
                />
                <Input
                    label="Password"
                    type="password"
                    required={true}
                    name="password"
                    value={formData.password} // Controlled value from formData
                    onChange={handleChange} // Pass the handler to update formData
                    ref={passwordRef} // Attach the ref for focus handling
                />
       <button type="submit" className="btn bg-blue-500 text-white">Create User</button>
            </form>

            {user.status ? (
                <p style={{ color: "green" }}>{user.message}</p>
            ) : (
                <p style={{ color: "red" }}>{user.message}</p>
            )}
        </div>
    );
};

export default User;
