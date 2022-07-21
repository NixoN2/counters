import { useEffect } from "react";
import Display from "../atoms/Display";
import Button from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { increment, removeCounter } from "../../store/slices/counterSlice";

const Timer = ({id}) => {
    const counter = useSelector((state) => state.counter.counters.filter((counter) => counter.id === id))[0];
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(increment({amount: 1, id}));
        }, 1000);
        return () => clearInterval(timer);
    }, [counter.value])
    return (
        <div className="flex space-x-2">
            <Display className="h-8 w-[160px] rounded-md">{counter.value}</Display>
            <Button onClick={() => dispatch(removeCounter(id))} className="rounded-md font-normal">x</Button>               
        </div>
        
    )
}

export default Timer;