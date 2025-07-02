import { HTMLProps } from 'react';

export function ReactLibs(props: HTMLProps<'h1'>) {
  return <h1 {...props}>{props.children}</h1>;
}

export default ReactLibs;
