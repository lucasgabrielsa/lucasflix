import { useState } from 'react';

const useForm = (valoresIniciais) => {
  const [values, setValues] = useState(valoresIniciais);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const clearForm = () => {
    setValues(valoresIniciais);
  };

  return { values, handleChange, clearForm };
};

export default useForm;
