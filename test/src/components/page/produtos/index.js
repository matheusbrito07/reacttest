import './produtos.css'
import React, {Component} from 'react'
import iphone from "../../img/iphone.jpg"
import jbl from "../../img/jbl.jpg"
import laptophp from "../../img/laptop_hp.jpg"
import pchp from "../../img/pc_hp.jpg"



class Produtos extends Component{
    render() {
    return(
      
   <div class="ProdutoLista">
      <table class="TabelaDeProdutos    ">
          <tr>
        <td><div class="produto-item"><img src={iphone}/></div></td>
        <td><div class="produto-item"><img src={jbl}/></div></td>
        <td><div class="produto-item"><img src={laptophp}/></div></td>
       <td> <div class="produto-item"><img src={pchp}/></div></td>
        </tr>
        <tr class="TabelaNomeProduto">
            <td>Iphone</td>
            <td>JBL </td>
            <td>LAPTOP</td>
            <td>PC HP</td>
        </tr>

        <tr class="ValorAntigo">
            <td><strike>599,00R$</strike></td>
            <td><strike>699,00R$</strike></td>
            <td><strike>999,00R$</strike></td>
            <td><strike>399,00R$</strike></td>
            
        </tr>
        <tr class="NovoValor">
            <td>399,00R$</td>
            <td>599,00R$</td>
            <td>599,00R$</td>
            <td>299,00R$</td>
            
        </tr>

        </table>
  </div>
     

      )
    }    
}   

export default Produtos