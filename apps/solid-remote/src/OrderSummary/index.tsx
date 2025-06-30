import { createMemo, type Component } from 'solid-js';

export type OrderItem = {
  price: number;
  quantity: number;
};

export const OrderSummary: Component<{ items?: OrderItem[] }> = ({ items }) => {
  const subtotal = createMemo(
    () => items?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0
  );
  const tax = createMemo(() => subtotal() * 0.1);
  const discount = 5;
  const total = createMemo(() => subtotal() + tax() - discount);

  return (
    <div class="border rounded p-4 shadow">
      <h2 class="text-lg font-bold mb-2">Order Summary</h2>
      <div class="space-y-1">
        <div class="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal().toFixed(2)}</span>
        </div>
        <div class="flex justify-between">
          <span>Tax (10%):</span>
          <span>${tax().toFixed(2)}</span>
        </div>
        <div class="flex justify-between">
          <span>Discount:</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
        <hr class="my-2" />
        <div class="flex justify-between font-bold">
          <span>Total:</span>
          <span>${total().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
export default OrderSummary;
