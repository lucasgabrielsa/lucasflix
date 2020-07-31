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

  const { handleChange, values } = useForm(valoresIniciais);

  const [videos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const categoriasTitles = categorias.map(({ titulo }) => titulo);

  const handleSubmit = (event) => {
    event.preventDefault();

    const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);
    const video = {
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaEscolhida.id,
    };

    videosRepository.createVideo(video).then(() => {
      // Cadastrado com sucesso
      history.push('/');
    });
  };

  useEffect(() => {
    categoriesRepository.getAllCategories().then((data) => {
      setCategorias(data);
    });
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

        <FormField type="text" label="Categoria" suggestions={categoriasTitles} name="categoria" value={values.categoria} onChange={handleChange} />

        {/* {JSON.stringify(categorias)} */}

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
