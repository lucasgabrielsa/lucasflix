import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    };

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    const handleChange = (event) => {
        console.log('handleChange', event)
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setCategorias([
            ...categorias,
            values
        ]);
        setValues(valoresIniciais);
    }

    return (
        <PageDefault>
            <div style={{ flexDirection: "row", textAlign: "center", fontSize: 35 }}>Cadastro de Categoria: {values.nome}</div>

            <form onSubmit={handleSubmit} style={{ flexDirection: "row", textAlign: "center" }}>
                <FormField type="text" label="Categoria" name="nome" value={values.nome} onChange={handleChange} />

                <FormField type="text" label="Descrição" name="descricao" value={values.descricao} onChange={handleChange} />

                <FormField type="color" label="Cor" name="cor" value={values.cor} onChange={handleChange} />

                <button type="submit">
                    Cadastrar
                 </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}-${indice}`}>{categoria.nome}</li>
                    );
                })}
            </ul>

            <br />
            <Link to="/">
                Ir para o Home
            </Link>
        </PageDefault >
    );
}

export default CadastroCategoria;