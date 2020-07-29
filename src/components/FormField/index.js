import React from 'react';

const FormField = ({ value, name, onChange, label, type }) => {
    return (
        <div>
            <label htmlFor="nome">{label}:</label>
            <input type={type} name={name} id={name} value={value} onChange={onChange} />
        </div>
    );
}

export default FormField;