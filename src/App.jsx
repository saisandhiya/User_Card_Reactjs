// import { ChildComponent } from "./Components/ChildComponent";
// import { Student } from "./Components/Student";
import { FuncSample } from "./Components/FuncSample";
import "./css/app.css";

function App() {
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <>
      {/* <div>React tutorial</div>
      <LearnComponent></LearnComponent>
      <Header></Header> */}
      {/* <Student name="sai" age={22} isMarried={false} />
      <Student name="sathiya" age={23} isMarried={false} />
      <Student isMarried={false} />
      <ChildComponent>
        <p>first line</p>
        <p>Second line</p>
      </ChildComponent> */}
      <div>
        Parent Component
        <FuncSample handleClick={handleClick}></FuncSample>
      </div>
    </>
  );
}

export default App;
