const stateDefault = [
  {
    id: 1,
    title: 'ReactJS',
    detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: new Date()
  },
  {
    id: 2,
    title: 'HTML',
    detail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    date: new Date()
  },
];
export default function reducer(state = stateDefault, action) {
  switch (action.type) {
    case 'DELETE':
      state.splice(action.index, 1);
      return [...state];
    case 'ADD':
      let Item = {
        id: state.length + 1,
        title: action.title,
        detail: action.detail,
        date: new Date()
      };
      console.log(Item);
      return [...state, Item];
    default:
      return [...state];
  }
}
