import { useSelector, useDispatch } from "react-redux";
import Counter from "../molecules/Counter";
import Timer from "../molecules/Timer";
import Button from "../atoms/Button";
import { createCounter, selectCounters } from "../../store/slices/counterSlice";

const CountersList = () => {
    const dispatch = useDispatch();
    const counters = useSelector(selectCounters);
    return (
        <div className="w-2/5 flex flex-grow justify-center bg-white/30 rounded-t-lg backdrop-blur-lg">
            <div className="w-full flex flex-col justify-start items-center">
                <div className="flex space-x-3 mt-5 mb-8">
                    <h1 className="text-sky-50 text-3xl">Counters</h1>
                    <Button onClick={() => dispatch(createCounter())} className="rounded-md font-normal translate-y-1">+</Button>
                </div>
                <div className="space-y-3">
                    { counters.length > 0 && counters.map((counter) => counter.type === "timer" ? 
                    <Timer key={counter.id} {...counter}/> : <Counter key={counter.id} {...counter}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CountersList;