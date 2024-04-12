export default function Button() {
  let likes = 123121;

  return (
    <>
      <button onClick={() => {
        likes++;
        console.log(likes);
      }}
      >
        Mi piace: {likes}
      </button>
    </>
  )
}