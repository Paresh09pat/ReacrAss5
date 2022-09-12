import React from "react";
import HOCRed from './HOCComponents/Hoc'
import { HOCGreen,HOCAqua } from './HOCComponents/Hoc';
import Counter from './HOCComponents/Counter';
import {Counter1} from './HOCComponents/Counter';

function App() {
  return (
    <>
    <p>
    <h3>HOC: Higher Order Component</h3>
         A Higher-order component is a function that takes a component and returns a new component. <br/>

    A HOC is an advanced technique in React for reusing component logic.<br/>
    HOCs are not part of the React API.<br/>
    They are a pattern that emerges from React’s compositional nature.<br/>

    <h3>syntax</h3>
    const EnhancedComponent = higherOrderComponent(WrappedComponent);

    </p>
       <h1>HOC Counters</h1>
       <HOCRed cmp={Counter} />
       <HOCGreen cmp={Counter} />
       <HOCAqua cmp1={Counter1} />
    </>
  )
}

export default App;
