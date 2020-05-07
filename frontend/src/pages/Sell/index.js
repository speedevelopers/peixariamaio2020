import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';
import logoImgMidle from '../../assets/midle.png';
import api from '../../services/api';
import Tabela from '../../StickyHeadTableItensVenda';


export default function Sell() {

    return (
        <div className="sell-container">
            <div className="content">
                <section>
                    <img src={logoImgMidle} alt="Fish House" />
                    <h1>Vendas</h1>
                    <p>Lance suas vendas aqui.</p>

                    <Link className="back-link" to="/categorylist">
                        <FiLogIn size={16} color="#3466ee" />
                    Visualizar Categorias Cadastradas.
                    </Link>

                    <Link className="back-link" to="/admin">
                        <FiArrowLeft size={16} color="#3466ee" />
                    Painel Principal.
                    </Link>
                </section>

                <form >
                    <button className="buttonnovo" type="submit"    >Nova Venda</button>
                    <label htmlFor="Cliente">Cliente</label>
                    <select>
                        <option>Maycon Ullrich</option>
                        <option>Arthur Ullrich</option>
                        <option>Heitor Ullrich</option>
                        <option>Davi Ullrich</option>
                    </select>

                    <label htmlFor="Cliente">Produto</label>
                    <select>
                        <option>Carangueijo</option>
                        <option>Lula Picada</option>
                        <option>Camarão Pequeno</option>
                        <option>Tambaqui</option>
                    </select>

                    <div className="input-group">

                        <input
                            placeholder="Quantidade"
                            style={{ width: 150 }}
                        />

                        <input
                            placeholder="Unidade"
                            style={{ width: 120 }}
                        />

                        <input
                            placeholder="Valor de Venda"
                            style={{ width: 180 }}
                        />

                    </div>
                    <button className="button" type="submit">Lançar Produto</button>
                    <Tabela />
                </form>


            </div>
        </div>
    )
}