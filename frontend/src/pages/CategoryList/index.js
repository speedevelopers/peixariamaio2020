import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import logoImgMidle from '../../assets/midle.png';
import { FiArrowLeft } from 'react-icons/fi';
import StickHeadTableCategory from '../../StickyHeadTableCategory';

export default function CategoryList() {
    return (
        <div className="categorylist-container">
            <div className="content">
                <section>
                    <img src={logoImgMidle} alt="House Fish" />
                    <h1>Categorias Cadastradas</h1>
                    <p>Visualize aqui as categorias cadastradas. Pesquise, altere ou exclua os dados de acordo com sua necessidade.</p>

                    <Link className="back-link" to="/category">
                        <FiArrowLeft size={16} color="#3466ee" />
                    Retornar ao cadastro de categorias.
                    </Link>

                    <Link className="back-link" to="/admin">
                        <FiArrowLeft size={16} color="#3466ee" />
                    Painel Principal.
                    </Link>
                </section>

                <form>
                    <StickHeadTableCategory />
                </form>
            </div>
        </div>
    )
}