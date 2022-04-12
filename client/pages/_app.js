import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

// _app.js gets called automatically by next.js at app-level
// Here it is customized to add an app-level  "header" (above every page)
// and pass pageProps assigned in getInitialProps() to the components
const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  );
};

// getInitialProps at the _app.js level is at entire app level
// hence property set received is "wider" than page-level/component-level props
// -> appContext captures the app-level props
// -> appContext.ctx is what gets passed on to the page-level getInitialProps
AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return { pageProps, currentUser: data.currentUser };
};

export default AppComponent;
