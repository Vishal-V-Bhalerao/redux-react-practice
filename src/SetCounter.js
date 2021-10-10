import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "./store/actions";
export const SetCounter = () => {
  /**
   * getting count value form store
   * useSelector() will also subscribe to the Redux store,
   * and run your selector whenever an action is dispatched.
   */

  const countFromStore = useSelector(state => state.counter)
  /**
   * creating count state using useState and passing initial value as countFromStore
   * count is used for storing input value from number, and sent to dispatch after submit 
   * button click
   */
  const [count, setCount] = useState(countFromStore)
  // for dispatching action to store
  const dispatch = useDispatch();
  // whenever countFromStore is updated this method will be called
  useEffect(() => {
    setCount(countFromStore)
  }, [countFromStore])

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input id="set-to" type="number" value={count} onChange={(event) => setCount(event.target.value)} />
        <input type="submit" onClick={() => dispatch(set(count))} />
      </form>
    </section>
  );
};
