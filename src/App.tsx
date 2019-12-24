import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  auth,
  createUserPropfileDocument
} from "./services/firebase/firebase.util";

import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shop/shop.componment";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { UserAuthModel } from "./models/Auth";

import "./App.css";

interface AppProps {}
interface AppState {
  currentUser: UserAuthModel | null;
}
export class App extends React.Component<AppProps, AppState> {
  constructor(pops: AppProps) {
    super(pops);

    this.state = {
      currentUser: null
    };
  }

  private unsubscribeFromAuth: firebase.Unsubscribe = () => {};

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth: firebase.User | null) => {
        if (userAuth) {
          const userRef = await createUserPropfileDocument(userAuth);
          userRef?.onSnapshot(
            (
              snapShot: firebase.firestore.DocumentSnapshot<
                firebase.firestore.DocumentData
              >
            ) => {
              this.setState({
                currentUser: {
                  id: snapShot.id,
                  data: snapShot.data()
                }
              });
              console.log(this.state);
            }
          );
        } else {
          this.setState({ currentUser: userAuth });
        }
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
