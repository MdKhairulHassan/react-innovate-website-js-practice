// ============================================================== Usage of split, includes, pop, shift and join
// import React from 'react'

// const Heading = ({ className, text}) => {
//   // console.log(text.split(""));
//   // console.log(text.split(" "));
//   // console.log(text.split("#")[1]);
//   text.split(" ").map((item) => {
//     // console.log(item)
//     // console.log(item.includes("Are"))
//     // console.log(item.includes("#"))
//     if (item.includes("#")) {
//       let arr = item.split("")
//       arr.pop()
//       arr.shift()
//       // console.log(arr)
//       // console.log(arr.join(""))
//       let x = arr.join("")
//       console.log(x);
//     }
//   })
//   return (
//     <h1 className={`${className}`}>{text}</h1>
//   )
// }

// export default Heading
// ================================================================================ color change for single word
// const Heading = ({ text }) => {
//   let jbg = text.replace("#", "<span class='one'>").replace("#", "</span>")
//   return <h1 dangerouslySetInnerHTML={{ __html: jbg }}></h1>
// }

// export default Heading
// ================================================================================ color change for multi word
const Heading = ({ text }) => {
  let pattern = /#([^#]+)#/g;
  let textWithSpans = text.replace(pattern, "<span class='one'>$1</span>")
  // return <h1 dangerouslySetInnerHTML={{ __html: textWithSpans }}></h1>
  return <h1 dangerouslySetInnerHTML={{ __html: textWithSpans }}/>
}

export default Heading
