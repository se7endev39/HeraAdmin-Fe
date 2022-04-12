
import React, { Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Loader from "../component/Loader";
import Footer from "../component/Footer";
import Layout from "../layout/Layout";
import LandLayout from "../layout/LandLayout";

import { menuRoutes } from "./index";
import { menuRoutes as landRoutes} from "./landingPage";

import { useUser } from '../providers/UserProvider'
import { useHistory } from "react-router";
const Routes = () => {
  
  const history = useHistory();
  const {isAdmin} = useUser();
  useEffect(() => {
    console.log(window.location.pathname);
    if (isAdmin !== true && window.location.pathname === '/admin-mint')
    {
      console.log('history',isAdmin)
      history.push('/admin-login');

    }
      
  },[isAdmin,history])
  
  return (
    <Suspense fallback={Loader}>
      <Switch>
        {menuRoutes.map(({ path, component: Component, layout }, index) => (
          <Route
            key={index}
            path={path}
            exact
            render={(props) => (
              <Layout bg={layout}>
                <>
                  <Component {...props} />
                  <Footer />
                </>
              </Layout>
            )}
          />
        ))}
        {landRoutes.map(({ path, component: Component, layout }, index) => (
          <Route
            key={index}
            path={path}
            exact
            render={(props) => (
              <LandLayout bg={layout}>
                <>
                  <Component {...props} />
                </>
              </LandLayout>
            )}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Routes;
