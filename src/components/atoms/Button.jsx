import { useState } from "react";

export default function Button() {
  const [likes, setLikes] = useState(243423);

  return (
    <>
      <button onClick={() => {
        setLikes((prevValue) => {
          return prevValue+1;
        });
        console.log(likes);
      }}
      >
        Mi piace: {likes}
      </button>
    </>
  )
}