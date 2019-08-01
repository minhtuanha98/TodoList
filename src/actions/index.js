export function deleteItem(index) {
  return { type: 'DELETE', index };
}
export function addItem(title, detail) {
  return { type: 'ADD', title, detail };
}
