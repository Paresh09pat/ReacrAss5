import React from "react";
import HOCRed from './HOCComponents/Hoc'
import { HOCGreen,HOCAqua } from './HOCComponents/Hoc';
import Counter from './HOCComponents/Counter';
import {Counter1} from './HOCComponents/Counter';
import SimCom from './PUREComponents/SimpleComp'
import PureCom from './PUREComponents/PureComp'


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


       <h1>Pure Components</h1>
       <h3>Defination</h3>
       A component is said to be pure when given the same props, it always renders the same.
       A non-pure component can, given the same props, render differently. <br/><br/>
       There is nothing wrong with a component not being pure. It just means that it needs to re-render no matter whether its props have changed or not.<br/>
Inversely, a pure component does not need to re-render if its props have not changed. This way, it can be optimized by skipping re-rendering.
       <PureCom />
       <SimCom />
       
    </>
  )
}

export default App;
