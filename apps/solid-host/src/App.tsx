import type { Component } from 'solid-js';
// import { lazy, Suspense } from 'solid-js';
import { Route, A, Router } from '@solidjs/router';
import Home from './pages/Home';
// const SolidRemote = lazy(() => import('solid-remote/SolidRemote'));

const App: Component = () => (
  <div>
    <Router>
      <Route path="/" component={Home} />
      {/* <Route path="/solid" component={Layout} /> */}
      {/* <Route path="/react" component={ReactRemote} /> */}
    </Router>
  </div>
);
export default App;

// const Layout: Component = () => (
//   <>
//     <nav>
//       <A href="/">Home</A> | <A href="/solid">Solid Remote</A> |{' '}
//     </nav>
//     <Suspense fallback={<div>Loading...</div>}>
//       <SolidRemote label="Button" />
//     </Suspense>
//   </>
// );
