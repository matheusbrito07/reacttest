import './Home.css'
import React, {Component} from 'react'
import TESTE from "../../img/oimeuchapa.jpg"

class Home extends Component{
    render() {
    return(

        <div>
            <h1>Bem vindo meu CHAPA!</h1>
            <h1>LOJA ONLINE</h1>
            <p>
O Maior site de vendas da América Latina.
Somos o Maior Site do Brasil, sem rede de agências.
</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
           
            
            
            <div class="bloco"><img class="imagem-anuncio" src={TESTE}/></div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
           
            
            <h1>COMPRE CONOSCO 100%CONFIÁVEL</h1>
            <div classaName="container-video">
            <iframe  width="100%" height="315" src="https://www.youtube.com/embed/LxBT2BPdYpg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>


)
    }   
}

export default Home