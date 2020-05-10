import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';
import logoImgMidle from '../../assets/midle.png';
import SelectInput from '@material-ui/core/Select/SelectInput';
// import api from '../../services/api';
// import Tabela from '../../StickyHeadTableItensVenda';


export default function Sell() {

    // preencher tabela com dados do formulário

    const [produt, setProduct] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [unit, setUnit] = useState('')
    const [salePrice, setSalePrice] = useState(0)
    
    const [saleItems, setSaleItems] = useState([])

    const saleItem = {
        produt,
        quantity,
        unit,
        salePrice,
        partialValue: quantity * salePrice
    }

    const handleAddItens = (e) => {
        e.preventDefault();

        setSaleItems(...saleItem, ...saleItems)
        console.log(saleItems)
    }

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

                <form onSubmit={handleAddItens}>
                    <button className="buttonnovo" type="submit">Nova Venda</button>
                    <label htmlFor="Cliente">Cliente</label>
                    
                    <select>
                        <option>Maycon Ullrich</option>
                        <option>Arthur Ullrich</option>
                        <option>Heitor Ullrich</option>
                        <option>Davi Ullrich</option>
                        <option>David Ullrich</option>
                        <option>Diogo Ullrich</option>
                    </select>

                    <label htmlFor="Cliente">Produto</label>

                    <select onChange={e => setProduct(e.target.value)}>
                        <option>Carangueijo</option>
                        <option>Lula Picada</option>
                        <option>Camarão Pequeno</option>
                        <option>Tambaqui</option>
                    </select>

                    <div className="input-group">

                        <input
                            placeholder="Quantidade"
                            style={{ width: 150 }}
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                            />

                        <input
                            placeholder="Unidade"
                            style={{ width: 120 }}
                            value={unit}
                            onChange={e => setUnit(e.target.value)}
                            />

                        <input
                            placeholder="Valor de Venda"
                            style={{ width: 180 }}
                            value={salePrice}
                            onChange={e => setSalePrice(e.target.value)}
                        />

                    </div>
                    <button className="button" type="submit">Lançar Produto</button>
                    {/* <Tabela /> */}
                </form>

                <div>
                    <table>
                        <tr>
                            <th>Produto</th>
                            <th>QTD</th>
                            <th>UN</th>
                            <th>Valor</th>
                            <th>Parcial</th>
                        </tr>

                        <tr>
                            <td>Carangueijo</td>
                            <td>10</td>
                            <td>PC</td>
                            <td>10</td>
                            <td>100</td>
                        </tr>

                    </table> 
                </div>


            </div>
        </div>
    )
}