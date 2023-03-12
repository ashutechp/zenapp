import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './actions/Counter';

const ReduxCounter = () => {
  const dispatch = useDispatch();
  const [count, title] = useSelector((state) => {
    console.log(state);
    return [state.count, state.title];
  });
  return (
    <div>
      <h3>
        {count} and {title}
      </h3>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(decrease());
        }}
      >
        Decrese
      </button>
    </div>
  );
};

export default ReduxCounter;
