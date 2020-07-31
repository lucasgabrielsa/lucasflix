import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

function CadastroCategoria() {
  const valoresIniciais = {
    id: 0,
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    clearForm(valoresIniciais);
  };

  useEffect(() => {
    categoriesRepository.getAllCategories().then((data) => {
      setCategorias(data);
    });
  }, []);

  return (
    <PageDefault>
      <div style={{ flexDirection: 'row', textAlign: 'center', fontSize: 35 }}>
        Cadastro de Categoria:
        {values.nome}
      </div>

      <form onSubmit={handleSubmit} style={{ flexDirection: 'row', textAlign: 'center' }}>
        <FormField type="text" label="Categoria" name="titulo" value={values.titulo} onChange={handleChange} />

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
          <li key={categoria.id}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <br />
      <Link to="/cadastro/video">
        Ir para o Cadastro de Video
      </Link>
      <br />
      <Link to="/">
        Ir para o Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
