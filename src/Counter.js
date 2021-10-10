import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, set } from "./store/actions";
import { SetCounter } from './SetCounter'
import { bindActionCreators } from "redux";
export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch()
  const actions = bindActionCreators(increment, decrement, set, dispatch)
  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => actions.increment()} >Increment</button>
        <button onClick={() => actions.set(0)} >Reset</button>
        <button onClick={() => actions.decrement()} >Decrement</button>
      </section>
      <SetCounter></SetCounter>
    </main>
  );
};

export default Counter;
