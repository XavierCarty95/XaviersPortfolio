import React, { Component } from 'react'
import {Switch, Route , withRouter} from 'react-router';
import NavBar from './components/NavBar'
// import Button from 'react-bootstrap/Button';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Github from './components/GitHub'

class App extends Component {


// rendeHome = (routerProps) => {

//      if(routerProps.location.pathname === "/home") {
//               return <Home/>
//      }

//   }

  render() {
    return (
      <div>
          <NavBar/>
          <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact}/>
          <Route path="/projects" component={Projects} />
          <Route path="/github" component={Github} />
         </Switch>
      </div>
    )
  }
}

let componentWithRouterProps = withRouter(App)
export default componentWithRouterProps;







// function App() {
//   return (
//     <div>
//       <NavBar/>

//       {/* <>
//   <Button variant="primary">Primary</Button>{' '}
//   <Button variant="secondary">Secondary</Button>{' '}
//   <Button variant="success">Success</Button>{' '}
//   <Button variant="warning">Warning</Button>{' '}
//   <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
//   <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
//   <Button variant="link">Link</Button>
// </> */}
//     </div>
//   );
// }

