import { createResource, Show, Suspense } from 'solid-js';
import { ReactWrapper } from './components/ReactWrapper';

export const App = () => {
  const [remote] = createResource(() => import('react-remote/ReactRemote'));
  const [remote2] = createResource(() => import('react-remote-2/ReactRemote2'));
  return (
    <div>
      <h1>App</h1>
      <Suspense>
        <Show when={remote()}>
          {(m) => <ReactWrapper component={m()?.default} />}
        </Show>
      </Suspense>
      <Suspense>
        <Show when={remote2()}>
          {(m) => <ReactWrapper component={m()?.default} />}
        </Show>
      </Suspense>
    </div>
  );
};

export default App;
