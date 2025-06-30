import { type Component } from 'solid-js';
import { Button } from '@my-monorepo/solid-libs';

export type OrderItem = {
  price: number;
  quantity: number;
};

export const App: Component<{ label?: string }> = ({ label }) => {
  return (
    <div>
      <Button label={label || 'Button'} />
    </div>
  );
};
export default App;
