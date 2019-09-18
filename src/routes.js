import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route path="/contact" render={() => <h1>Contact</h1>} />
        <Route path="/login" render={() => <h1>Login</h1>} />
        <Route path="/signup" render={() => <h1>Formulário</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
