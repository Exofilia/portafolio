import React from 'react';
import '../../assets/styles/Works.scss';
import WorksItem from './WorksItem';
import reading from '../../assets/static/undraw_1.png';
import confirm from '../../assets/static/undraw_2.png'
import learning from '../../assets/static/undraw_3.png'

const Works = () => {
    return (
        <div className="contenedorWorks">
            <div className="title">
                 <h3 className="section-name">Proyectos</h3>
            </div> 
            <div  className="carousel__container">
                <WorksItem encab="</>..." title="CriptoTraker" image={confirm} date="2020-01-02" descrip="Proyecto realizado en uno de los cursos de platzi, con el objetivo de aprender mas acerca de React Native, es una plataforma creada desde cero."/>
                <WorksItem encab="</>..." title="Platzi Video" image={reading} date="2020-01-01" descrip="Proyecto realizado en uno de los cursos de platzi, con el objetivo de aprender mas acerca de ReactJs, es una plataforma creada desde cero."/>
                <WorksItem encab="</>..." title="Firts" image={learning} date="2020-01-03" descrip="Proyecto realizado en uno de los cursos de platzi, con el objetivo de aprender mas acerca de ReactJs, es una plataforma creada desde cero."/>
            </div>
        </div>
    );
};

export default Works;