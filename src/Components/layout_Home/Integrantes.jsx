import React from 'react';
import image1 from "../imgs/homemadulto.png"
import image2 from "../imgs/painho.png"
import image3 from "../imgs/mainha.png"
import { Carousel } from "antd"
import "./Integrantes.css"
const imagens = [image1, image2, image3]


function Integrantes() {
  return (
    <>
      <h2 id='h2'>Integrantes da Casa</h2>
      <Carousel autoplay="true" className='carrousel' >
        <div className='content'>
          <img className='real_img' alt='imagem 1' src={imagens[0]} />
          <h2>Integrante 1</h2>
          <h3 className='ocupation'>Ocupação</h3>
          <div className='review'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        </div>
        <div>
          <img className='real_img' alt='imagem2' src={imagens[1]} />
          <h2 >Integrante 2</h2>
          <h3 className='ocupation'>Ocupação</h3>
          <div className='review'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        </div>
        <div>
          <img className='real_img' alt='imagem3' src={imagens[2]} />
          <h2>Integrante 3</h2>
          <h3 className='ocupation'>Ocupação</h3>
          <div className='review'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <p>

          </p>
        </div>

      </Carousel>
    </>
  );
}


export default Integrantes;