import React, {useState, useRef} from 'react';
import './App.css';
function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e){
    //调用 e.preventDefault() 来阻止事件的默认行为。
    //这通常用于处理表单提交或链接跳转等情况，其中默认行为需要被阻止以防页面重新加载或其他不期望的行为发生。
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    // const inputVal = inputRef.current.value;
    // const newResult = result + Number(inputVal);
    // setResult(newResult);
  }

  function minus(e){
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e){
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e){
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e){
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e){
    e.preventDefault();
    setResult((result) => 0);
    // setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest working calculator</h1>
      </div>
      <form>
      <p ref={resultRef}>{result}</p>
      <input
        pattern="[0-9]"
        ref={inputRef}
        type="number"
        placeholder='Type a number'
        />
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>reset input</button> 
        <button onClick={resetResult}>reset result</button> 
      </form>
    </div>
  );
}

export default App;
