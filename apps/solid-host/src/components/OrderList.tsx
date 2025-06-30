import { Component, For } from 'solid-js';

export type OrderItem = {
  name: string;
  price: number;
  quantity: number;
};

const OrderList: Component<{ items: OrderItem[] }> = ({ items }) => (
  <div>
    <h2 class="text-xl font-bold mb-4">Order Items</h2>
    <ul class="space-y-2">
      <For each={items}>
        {(item) => (
          <li class="border p-2 rounded shadow">
            <div class="flex justify-between">
              <span>{item.name}</span>
              <span>
                {item.quantity} x ${item.price}
              </span>
            </div>
          </li>
        )}
      </For>
    </ul>
  </div>
);

export default OrderList;
