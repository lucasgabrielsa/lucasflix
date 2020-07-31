import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const valoresIniciais = {
    id: 0,
    titulo: '',
    url: '',
    categoria: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    videosRepository.createVideo(values).then(() => {
      setVideos([
        ...videos,
        values,
      ]);
      clearForm(valoresIniciais);
      history.push('/');
    });
  };

  const fetchCategories = () => {
    categoriesRepository.getAllWithVideos().then((data) => {
      setCategorias(data);
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <PageDefault>
      <div style={{ flexDirection: 'row', textAlign: 'center', fontSize: 35 }}>
        Cadastro de Vídeo:
        {values.nome}
      </div>

      <form onSubmit={handleSubmit} style={{ flexDirection: 'row', textAlign: 'center' }}>
        <FormField type="text" label="Título Vídeo" name="titulo" value={values.titulo} onChange={handleChange} />

        <FormField type="text" label="URL" name="url" value={values.url} onChange={handleChange} />

        <FormField type="select" label="Categoria" name="categoria" value={values.categoria} onChange={handleChange} />

        <button type="submit">
          Cadastrar
        </button>
      </form>

      {videos.length === 0
      && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {videos.map((categoria) => (
          <li key={categoria.id}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <br />
      <Link to="/cadastro/categoria">
        Ir para o Cadastro de Categoria
      </Link>
      <br />
      <Link to="/">
        Ir para o Home
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
