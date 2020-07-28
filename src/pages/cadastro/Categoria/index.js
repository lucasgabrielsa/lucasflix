import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageDefault>
            <div style={{ flexDirection: "row", textAlign: "center", fontSize: 35 }}>Nova Categoria</div>

            <form style={{ flexDirection: "row", textAlign: "center" }}>
                <label>
                    Titulo:
                    <input type="text" name="titulo" placeholder="Titulo" />
                </label>

                <label>
                    Cor:
                    <input type="text" name="cor" placeholder="Cor" />
                </label>

                <label>
                    Descrição:
                    <textarea type="text" name="descricao" placeholder="descricao" cols="4" rows="5"></textarea>
                </label>

                <label>
                    Usuário:
                    <input type="text" name="usuario" placeholder="Usuário" />
                </label>
            </form>

            <br />
            <Link to="/">
                Ir para o Home
            </Link>
        </PageDefault >
    );
}

export default CadastroCategoria;