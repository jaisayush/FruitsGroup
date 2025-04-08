const orders = [
  {
    orderId: "A123",
    customer: "John Doe",
    items: [
      { name: "Apple", price: 2, quantity: 3 },
      { name: "Banana", price: 1, quantity: 1 },
    ],
  },
  {
    orderId: "B456",
    customer: "John Doe",
    items: [
      { name: "Banana", price: 1, quantity: 1 },
      { name: "Apple", price: 2, quantity: 3 },
    ],
  },
  {
    orderId: "C789",
    customer: "John Doe",
    items: [
      { name: "Banana", price: 1, quantity: 1 },
      { name: "Apple", price: 2.5, quantity: 3 },
    ],
  },
  {
    orderId: "D321",
    customer: "Jane Smith",
    items: [{ name: "Apple", price: 2, quantity: 1 }],
  },
  {
    orderId: "E654",
    customer: "Jane Smith",
    items: [{ name: "Apple", price: 2, quantity: 1 }],
  },
  {
    orderId: "F111",
    customer: "Jane Smith",
    items: [{ name: "Grapes", price: 3, quantity: 1 }],
  },
];

orders.forEach((order) => {
  const itemSignatures = order.items.map(
    (item) => `${item.name}:${item.quantity}:${item.price}`
  );
  const sortedSignature = itemSignatures.sort().join("|");
  order.group = sortedSignature;
});

console.log(JSON.stringify(orders, null, 2));
