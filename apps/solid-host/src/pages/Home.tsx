import { lazy, Suspense } from 'solid-js';
import OrderList, { OrderItem } from '../components/OrderList';
import ReactComp from './ReactComp';

const SolidRemote = lazy(async () => {
  const OrderSummary = await import('solid-remote/SolidRemote');
  return OrderSummary;
});

const items = [
  { name: 'Item 1', price: 10, quantity: 2 },
  { name: 'Item 2', price: 10, quantity: 1 },
] as OrderItem[];

const Home = () => {
  return (
    <div class="flex flex-col w-full h-screen">
      <div class="flex w-full">
        <div class="w-3/4 p-4">
          <OrderList items={items} />
        </div>
        <div class="w-1/4 p-4">
          <Suspense fallback={<div>Loading...</div>}>
            <SolidRemote items={items} />
          </Suspense>
        </div>
      </div>
      <div class="p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <ReactComp />
        </Suspense>
      </div>
    </div>
  );
};
export default Home;
