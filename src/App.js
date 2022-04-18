import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

const App = ()=>{
  const [progress, setProgress] = useState(0)
  const pageSize=6
  const apiKey = process.env.REACT_APP_NEWS_API
    return (
      <div>
<Router>
          <Navbar/>
          <LoadingBar
          height={3}
          waitingTime={200}
        color='#f11946'
        progress={progress} apiKey={apiKey} 

      />
    <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} country='us' category="general" color="primary"/></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country='us' category="business" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country='us' category="entertainment"/></Route> exact
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='us' category="general"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" color="danger"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country='us' category="science"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='us' category="technology"/></Route>
    </Switch>
</Router>
      </div>
    )
}

export default App