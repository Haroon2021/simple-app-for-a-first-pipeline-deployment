import {useState} from 'react';
import { addAndSubtract } from '../Helpers/addingAndSubtracting';

export default function  ControlledComponent()  {
    const  [inputValue, setInputValue] =  useState(0);
    const  [inputValueTwo, setInputValueTwo] =  useState(0);

    const  handleChangeOne = (event) => {
      setInputValue(event.target.value);
    };

    const  handleChangeTwo = (event) => {
      setInputValueTwo(event.target.value);
  };

return  (
  <>
<form>
    <label>Input Value:
    <input  type="number"  value={inputValue} onChange={handleChangeOne} />
    </label>
    <p>Input Value: {inputValue}</p>

    <label>Input Value:
    <input  type="number"  value={inputValueTwo} onChange={handleChangeTwo} />
    </label>
    <p>Input Value: {inputValueTwo}</p>
</form>
<p>Total is: {addAndSubtract(inputValue,inputValueTwo)[0]}</p>
<p>Difference is: {addAndSubtract(inputValue,inputValueTwo)[1]}</p>
  </>
)};