import { useEffect, useState } from "react"

export default function JEList() {
  const [url, setUrl] = useState("http://localhost:3000/JuniorEnterprises");
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url).then((Response) => {
      return Response.json();
    }).then((jsonData) => {
      setData(jsonData);
      console.log(jsonData);
    }).catch(() => {
      console.log("error while fetching");
    })
  }, []);

  return (
    <>
    </>
  )
}