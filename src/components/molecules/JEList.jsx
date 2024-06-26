import { useEffect, useState } from "react"
import Button from "../atoms/Button";

export default function JEList() {
  const [url, setUrl] = useState("http://localhost:3000/JuniorEnterprises/");
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    fetch(url).then((Response) => {
      return Response.json();
    }).then((jsonData) => {
      setData(jsonData);
      setIsLoading(false);
      console.log(jsonData);
    }).catch((error) => {
      setIsLoading(false);
      setIsError(true);
      console.log("Error occurred while fetching: ",error);
    })
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  
  return (
    <>
      <h2>List of Junior Enterprises</h2>
      
      {isLoading && <p>Loading in progres...</p>}
      {isError && <p>Error occurred while fetching</p>}
      
      <Button continent="Europe" updateUrl={setUrl}/>
      <Button continent="North America" updateUrl={setUrl}/>
      <Button continent="Asia" updateUrl={setUrl}/>
      
      <ul>
        {data &&
          data.map( juniorEnt => (
            <li key={juniorEnt.id}>
              <h3>{juniorEnt.name}</h3>
              <p>{juniorEnt.country}</p>
              <p>{juniorEnt.continent}</p>
            </li>
          ))
        }
      </ul> 
    </>
  )
}