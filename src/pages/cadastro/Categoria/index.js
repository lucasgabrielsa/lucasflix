import React, { useState } from 'react';
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

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria}`}>{categoria.nome}</li>
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
