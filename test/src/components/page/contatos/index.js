import './contatos.css'
import React, {Component} from 'react'




class Contatos extends Component{
    render() {
    return(
      <div class="wapper">

          <h1>AO INFINITO E ALÉM IREMOS SOLUCINAR OS SEUS MAIORES PROBLEMAS!!!!</h1>
          <h1>Deixe aqui sua sugestão! Para que possamos melhorar!</h1>
        
          <div id="area">
    <form id="formulario">
      <fieldset>
        <legend>Formulário</legend>
        <label>Nome:</label><input class="campo_nome" type="text"/><br />
        <label>Email:</label><input class="campo_email" type="text"/><br />
        <label>Mensagem:</label><br /><textarea class="msg" cols="35" rows="8"></textarea><br />
        <input class="btn_submit" type="submit" value="Enviar"/>
      </fieldset>
    </form>

  </div>
  <br />
  <br />

  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VqoyKzgkqR4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



          


          
</div>
  
   
     
 
    )
  }    
}    

export default Contatos