import React from 'react'

const Heading = ({ className, text}) => {
  // console.log(text.split(""));
  // console.log(text.split(" "));
  // console.log(text.split("#")[1]);
  text.split(" ").map((item) => {
    // console.log(item)
    // console.log(item.includes("Are"))
    // console.log(item.includes("#"))
    if (item.includes("#")) {
      let arr = item.split("")
      arr.pop()
      arr.shift()
      // console.log(arr)
      // console.log(arr.join(""))
      let x = arr.join("")
      console.log(x);
    }
  })
  return (
    <h1 className={`${className}`}>{text}</h1>
  )
}

export default Heading