import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/services" component={() => <div>Services</div>} />

          <Route exact path="/" component={() => <div>CustomSoftware</div>} />

          <Route exact path="/revolution" component={() => <div>Revolution</div>} />

          <Route exact path="/" component={() => <div>Home</div>} />

          <Route exact path="/" component={() => <div>Home</div>} />

          <Route exact path="/about" component={() => <div>About us</div>} />

          <Route exact path="/contact" component={() => <div>Contact US</div>} />

        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
