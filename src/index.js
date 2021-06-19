
import Ciudad from "./ciudad.js";
import reactDom from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./index.scss";
const App = () => (
  <div>
    <header className="header">
      <img className="header-img" src="https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487090874274-FH2ZNWOTRU90UAF5TA2B/ke17ZwdGBToddI8pDm48kCMWMBFcqQftRz-JqZZoIB5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFI99ncPZu898P4WAmVYNBp8mgB1qWbp5RirnU_Xvq-XCb8BodarTVrzIWCp72ioWw/Weather+Targeting" alt="logo" />
      <h1>El clima</h1>
    </header>
    <main className="contenedor">
        <Router>
            <Switch>
                <Route path={`/ciudad/:id`}>
                    <Ciudad />
                </Route>
                <Route path="/">
                    <Ciudad />
                </Route>
            </Switch>
        </Router>
    </main>
    <footer className="footer">
      <h4 className="footer-author">Autor: Emiliano Gorgellon. Fecha: 2/5/2021</h4>
    </footer>
  </div>
)

reactDom.render(<App />, document.getElementById("root")); 
