import logo from '../../logo.svg';
import { useAppDispatcher, useAppSelector } from '../../Store/hooks';
import { decrement, increment } from '../../Store/actions';
import { Button } from '../../Components/styled-components/Button.style';

const Homepage = () => {
    const counter = useAppSelector(state => state.counter);
    const dispatch = useAppDispatcher();
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            Redux {counter}
            <div className="btn-area">
                <Button background-color='grey' onClick={() => dispatch(decrement())}>-</Button>
                <Button background-color='grey' onClick={() => dispatch(increment(5))}>+5</Button>
            </div>
        </header>
    )
}

export default Homepage
