import './header.css'
import {Link} from 'react-router-dom'

export default function Header(props) {
    return(

<div>
<nav class="justify-content-center navbar navbar-expand-lg navbar-dark bg-dark">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="main-nav">
<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
        <Link to="/Home" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
        <Link to="/Produtos" class="nav-link" >Produtos</Link>
        </li>
        <li class="nav-item">
        <Link to="/contatos" class="nav-link">Contatos</Link>
        </li>
        </ul>
</div>
</div>

</nav>

</div>

    )
} 
