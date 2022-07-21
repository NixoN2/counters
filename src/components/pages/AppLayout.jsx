import CountersList from "../organisms/CountersList";

function AppLayout() {
  return (
    <div 
      className="w-screen min-h-screen h-auto 
      bg-gradient-to-tr from-sky-300 via-teal-400 to-emerald-500 
      flex flex-col items-center justify-center relative pt-20"
    >
      <CountersList />
    </div>
  )
}

export default AppLayout;
