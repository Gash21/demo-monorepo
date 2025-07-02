import { ComponentProps } from 'solid-js';

export function SolidLibs(props: ComponentProps<'h1'>) {
  return <h1 {...props}>{props.children}</h1>;
}
