import React, { useState, useEffect } from 'react';

import { WithWillUnmount } from '../hoc';

const SampleHooks = (props) => {
  // eslint-disable-next-line
  const [name, setName] = useState('SampleHooks');
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  let loadingIndecator;

  if (!isLoading) {
    loadingIndecator = (
      <div>
        {name} Loading...
      </div>
    )
  }

  useEffect(() => {
    // ComponentDidMount
    console.log('Start Effect!');

    let timer;

    if (!isLoading) {
      timer = setTimeout(() => {
        setIsLoading(true);
      }, 1000);
    }

    return () => {
      // componentWillUnmount
      clearTimeout(timer);
      console.log('%c Cleaning Up~ Bye Bye~', 'color: #ff00ff');
    };
    // eslint-disable-next-line
  }, [isLoading]); // [isLoading] : componentDidUpdate

  const clickHandler = () => {
    setCount(prevState => ++prevState);
  }

  return (
    <div>
      <h3>{props.name}</h3>
      <div>
        {!isLoading
          ? loadingIndecator
          :
          <>
            <h2>Button Clicked : {count}</h2>

            <button tyoe="button" onClick={clickHandler}>Click~!</button>
          </>
        }
      </div>
    </div>
  );
}

export default WithWillUnmount(SampleHooks);
