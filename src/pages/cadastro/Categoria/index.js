import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  const URL = 'http://localhost:3001/categorias';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    setValues(valoresIniciais);
  };

  const fetchCategories = () => {
    fetch(URL).then((response) => response.json()).then((data) => setCategorias(data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <PageDefault>
      <div style={{ flexDirection: 'row', textAlign: 'center', fontSize: 35 }}>
        Cadastro de Categoria:
        {values.nome}
      </div>

      <form onSubmit={handleSubmit} style={{ flexDirection: 'row', textAlign: 'center' }}>
        <FormField type="text" label="Categoria" name="nome" value={values.nome} onChange={handleChange} />

        <FormField type="textarea" label="Descrição" name="descricao" value={values.descricao} onChange={handleChange} />

        <FormField type="color" label="Cor" name="cor" value={values.cor} onChange={handleChange} />

        <button type="submit">
          Cadastrar
        </button>
      </form>

      {categorias.length === 0
      && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>{categoria.nome}</li>
        ))}
      </ul>

      <br />
      <Link to="/">
        Ir para o Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
