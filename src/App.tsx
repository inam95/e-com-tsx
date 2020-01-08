import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  auth,
  createUserPropfileDocument
} from "./services/firebase/firebase.util";

import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shop/shop.componment";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { setCurrentUser } from "./redux/user/user.action";

import { UserAuthModel } from "./models/Auth";

import "./App.css";
import { SetCurrentUserAction } from "./redux/user/user.types";
import { StoreState } from "./redux/root-reducer";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { CheckoutPage } from "./pages/checkout/checkout.component";

interface AppStoreProps {
  currentUser?: UserAuthModel | null;
}
interface AppProps extends AppStoreProps {
  setCurrentUser: Function;
}

class _App extends React.Component<AppProps> {
  private unsubscribeFromAuth: firebase.Unsubscribe = () => {};

  static defaultProps = {
    setCurrentUser: () => {}
  };

  componentDidMount() {
    const { setCurrentUser } = this.props;

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
              setCurrentUser({
                currentUser: {
                  id: snapShot.id,
                  data: snapShot.data()
                }
              });
            }
          );
        } else {
          setCurrentUser(userAuth);
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector<
  StoreState,
  AppProps,
  AppStoreProps
>({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: UserAuthModel | null) =>
    dispatch<SetCurrentUserAction>(setCurrentUser(user))
});

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
