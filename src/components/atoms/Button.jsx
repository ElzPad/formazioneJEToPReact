import { useState } from "react";

export default function Button(props) {
  const baseUrl = "http://localhost:3000/JuniorEnterprises"
  return (
    <>
      <button onClick={() => {
        props.updateUrl(baseUrl+"?continent="+props.continent)
      }}
      >
        {props.continent}
      </button>
    </>
  )
}