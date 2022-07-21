import Display from "../atoms/Display";
import Button from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeCounter } from "../../store/slices/counterSlice";

const Counter = ({id}) => {
    const counter = useSelector((state) => state.counter.counters.filter((counter) => counter.id === id))[0];
    const dispatch = useDispatch();
    const onMinusClick = () => dispatch(decrement({amount: 1, id}))
    const onPlusClick = () => dispatch(increment({amount: 1, id}))
    return (
        <div className="flex space-x-2">
            <div className="flex">
                <Button onClick={onMinusClick} className="rounded-l-md">-</Button>
                <Display>{counter.value}</Display>
                <Button onClick={onPlusClick} className="rounded-r-md">+</Button>
            </div>
            <Button onClick={() => dispatch(removeCounter(id))} className="rounded-md font-normal">x</Button>   
        </div>
        
    )
}

export default Counter;