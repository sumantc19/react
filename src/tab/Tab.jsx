import { useState } from "react";
import '../App.css';

function Tab() {
  const [data, setData] = useState(1);

  const action = (index) => {
    setData(index);
    console.log(index);
  }

  return (
    <>
      <div className='tabs'>
        <div className={data === 1 ? "tab active-tab" : "tab"} onClick={() => action(1)}>tab1</div>
        <div className={data === 2 ? "tab active-tab" : "tab"} onClick={() => action(2)}>tab2</div>
        <div className={data === 3 ? "tab active-tab" : "tab"} onClick={() => action(3)}>tab3</div>
      </div>
      <div className='contents'>
        <div className={data === 1 ? "content active-content" : "content"}>ZX 10R</div>
        <div className={data === 2 ? "content active-content" : "content"}>Yamaha R1</div>
        <div className={data === 3 ? "content active-content" : "content"}>Panigale v4</div>
      </div>
    </>
  );
}

export default Tab;
