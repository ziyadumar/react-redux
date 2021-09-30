import logo from '../../logo.svg';
import { useAppDispatcher, useAppSelector } from '../../Store/hooks';
import { decrement, increment } from '../../Store/actions';

const Homepage = () => {
    const counter = useAppSelector(state => state.counter);
    const dispatch = useAppDispatcher();
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            Hello World {counter}
            <button onClick={() => dispatch(increment(5))}>+5</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </header>
    )
}

export default Homepage
