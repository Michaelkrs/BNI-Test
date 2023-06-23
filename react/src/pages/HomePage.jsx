import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../stores/counter";

function HomePage() {
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <>
      <h1>HOMEPAGE</h1>

      <div>count is {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
}

export default HomePage;
