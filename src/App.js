import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Category from './components/category';
import Data from './db/info.json'
import Home from './components/home'
import NewCase from './components/newCase';


function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
      <Switch>
          <Route path='/lancamentos'>
            <Category name="Lançamentos" data={Data.lancamentos}/>
          </Route>

          <Route path='/foto'>
            <Category name="Com Sua Foto" data={Data.foto}/>
          </Route>

          <Route path='/comnome'>
            <Category name="Com Seu Nome" data={Data.comnome}/>
          </Route>

          <Route path='/delicadas'>
            <Category name="Delicadas" data={Data.delicadas}/>
          </Route>

          <Route path='/signos'>
            <Category name="Signos" data={Data.signos}/>
          </Route>
          
          <Route path='/pets'>
            <Category name="Pets" data={Data.pets}/>
          </Route>

          <Route path='/masculinas'>
            <Category name="Masculinas" data={Data.masculinas}/>
          </Route>
          
          <Route path='/desenhos'>
            <Category name="Desenhos e Animes" data={Data.desenhos}/>
          </Route>

          <Route path='/profissoes'>
            <Category name="Profissões" data={Data.profissoes}/>
          </Route>
          
          <Route path='/games'>
            <Category name="Games" data={Data.games}/>
          </Route>

          <Route path='/series'>
            <Category name="Séries" data={Data.series}/>
          </Route>
          
          <Route path='/completar'>
            <Category name="Completar" data={Data.completar}/>
          </Route>

          <Route path='/bandas'>
            <Category name="Bandas" data={Data.bandas}/>
          </Route>

          <Route path='/esportivo'>
            <Category name="Esportivo" data={Data.esportivo}/>
          </Route>

          <Route path='/contato'>
            <Category name="Lojas" data={Data.esportivo}/>
          </Route>

          <Route path='/newCase'>
            <NewCase/>
          </Route>

          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
