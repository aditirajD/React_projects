import React from 'react'
import { useState, useEffect } from 'react'

const TextChange = () => {
  const texts = ["Hi I'm Aditi ", "Hi I'm Aditi ", "Hi I'm Aditi "]
  const [currenText, setCurrentext] = useState("");
  const [endValue, setendValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentext(texts[index].substring(0, endValue));
      if (isForward) {
        setendValue((prev) => prev + 1);
      } else {
        setendValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length + 10) {
        setIsForward(false)
      } if (endValue < 2.1 ) {
        setIsForward(true)
        setIndex((prev) => (prev +1 ) % texts.length);
      }
     
      }, 100);
      

return () => clearInterval(intervalId)
  }, [endValue, isForward, index, texts])

  return <div className='transition ease duration-300'> {currenText} </div>;
}



export default TextChange
