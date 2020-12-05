import Header from './components/header/header'
import Contatos from './components/page/contatos'
import Produtos from './components/page/produtos'
import Home from './components/page/home'
import{Switch, Route} from 'react-router-dom'
import Body from './components/body/body'
import Footer from './components/footer/footer'



function App() {
  return (
  <>
      <Header />
     
      <Body>

     
        <Switch>
        <Route path="/home" component={Home} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/contatos" component={Contatos} />
        </Switch>

     </Body>
        <Footer />

        
  </>
  );
}


export default App;
