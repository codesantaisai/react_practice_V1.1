import React from "react";

function Test(props) {
  const { bookInfo } = props;
//   const { book, author } = bookInfo;
  return (
    <>

    <ol>
    {bookInfo.map((e, index)=>{return <li>The {e.book} written by {e.author}</li>})}
    </ol>
    </>
  );
}

export default Test;
