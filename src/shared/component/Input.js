import React, { useId, useState, useImperativeHandle } from "react";

const Input = React.forwardRef(function Input(
    {
        label,
        name,
        type = "text",
        onChange,
        value,
        minLength = 0,
        className = "",
        required = false,
        ...props
    },
    ref
) {
    const id = useId();

    const [error, setError] = useState('');

    // Use ref to expose focus method to parent component
    const inputRef = React.useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        },
    }));

    const handleOnChange = (event) => {
        onChange(event); // Call the parent's onChange to update the form state
        hasError(event); 
    };

    const handleBlur = () => {
        if (required && value.trim() === "") {
            setError(`${label} is required`);
        }
    };

    const hasError = (event) =>{
        let inputValue = event.target.value
        // Clear the error if the value is valid (non-empty if required)
        // if (required && inputValue.trim() === "") {
        //     setError(`${label} is required`);
        // }

        if(minLength > 0 && inputValue && inputValue.length < minLength){
            setError(`${label} must be at least ${minLength} characters long`);
        }else{
            setError("");            
        }
    };

    return (
        <div className="w-full">
            {label && (
                <label className="inline-block mb-1 pl-1" htmlFor={id}> 
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                minLength={minLength}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${error.length < 0 ? "border-red-600" : "" } ${className}`}
                {...props}
                ref={inputRef} // Bind the internal ref
                id={id}
                onChange={handleOnChange} // call the handleChange function on change
                value={value} // Fully controlled by the parent component
                // onChange={onChange} // Call the parent's onChange handler
                onBlur={handleBlur} // handle blur event to check if touched
            />
           {error && (
                <div className="text-red-500 text-sm">{error}</div>
            )}
        </div>
    );
});

export default Input;
