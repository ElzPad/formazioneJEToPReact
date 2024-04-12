import { useState } from "react"

export default function JEList() {
  const [url, setUrl] = useState("http://localhost:3000/JuniorEnterprises");
  const [data, setData] = useState();

  fetch(url).then((Response) => {
    return Response.json();
  }).then((jsonData) => {
    setData(jsonData);
    console.log(data);
  }).catch(() => {
    console.log("error while fetching");
  })

  return (
    <>
    </>
  )
}