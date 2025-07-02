import { createResource, lazy, Show, Suspense } from 'solid-js';
import { ReactWrapper } from './components/ReactWrapper';

const SolidRemote = lazy(() => import('solid-remote/SolidRemote'));

export const App = () => {
  const [remote] = createResource(() => import('react-remote/ReactRemote'));
  return (
    <div>
      <h1>App</h1>
      <Suspense>
        <SolidRemote />
      </Suspense>
      <Suspense>
        <Show when={remote()}>
          {(m) => <ReactWrapper component={m()?.default} />}
        </Show>
      </Suspense>
    </div>
  );
};

export default App;
