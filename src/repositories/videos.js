import URL_BACK_END from '../config';

const URL_VIDEOS = `${URL_BACK_END}/videos`;

const createVideo = (data) => fetch(`${URL_VIDEOS}/?_embed=videos`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(async (response) => {
  if (response.ok) {
    const resposta = await response.json();
    return resposta;
  }

  throw new Error('Não foi possível cadastrar os dados');
});

export default { createVideo };
