import React, { useEffect, useState } from 'react';

/*
 * Code generated by: HollowBot (Halva / Халва)
*/

const Random = ({ max, children }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const maxValue = parseInt(max, 10);
    const randomValue = Math.floor(Math.random() * (maxValue + 1));

    React.Children.forEach(children, child => {
      const low = parseInt(child.props.low, 10);
      const high = parseInt(child.props.high, 10);

      if (randomValue !== null && randomValue >= low && randomValue <= high) {
        setContent(child);
        console.log("Change selected: ", randomValue, "%");
      }
    });
  }, [max, children]);

  return <div>{content}</div>;
};

const Part = ({ children }) => <>{children}</>;

export { Random, Part};