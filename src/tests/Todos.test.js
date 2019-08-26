import Todos from '../components/todos/Todos';

const testTodosArr = [
  {
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  },
  {
    id: 4,
    title: 'et porro tempora',
    completed: true
  },
  {
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false
  }
];

it('renders correctly', () => {
  const spy = sinon.spy();
  const wrapper = shallow(<Todos todos={testTodosArr} delTodo={spy} />);

  expect(wrapper).toMatchSnapshot();
});
