import type { Component } from 'solid-js';
import { Button } from '@my-monorepo/solid-libs';

export const App: Component = (props: { label?: string }) => (
  <div>
    <h2>Solid Remote Nih</h2>
    <Button label={props.label || 'Button Solid Remote'} />
  </div>
);
export default App;
