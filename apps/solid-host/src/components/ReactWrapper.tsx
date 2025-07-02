import { onCleanup, onMount } from 'solid-js';
import ReactDOM from 'react-dom/client';
import React from 'react';

export function ReactWrapper(props: { component: React.ComponentType }) {
  let el!: HTMLDivElement;

  onMount(() => {
    const root = ReactDOM.createRoot(el);
    root.render(React.createElement(props.component));
    onCleanup(() => root.unmount());
  });

  return <div ref={el} />;
}
