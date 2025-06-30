import { Component, createResource, Show } from 'solid-js';
import { ReactWrapper } from '../components/ReactWrapper';

// const ReactRemote = lazy(async () => {
//   const App = await import('react-remote/ReactRemote');
//   return App.default;
// });

const ReactComp: Component = () => {
  const [mod] = createResource(() => import('react-remote/ReactRemote'));

  return (
    <Show when={mod()}>{(m) => <ReactWrapper component={m()?.default} />}</Show>
  );
};
export default ReactComp;
