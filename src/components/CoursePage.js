import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function CoursePage () {
  let { id }  = useParams()
  const [link, setLink] = useState("")
    
  useEffect(() => {
      axios.get(`http://80.67.212.178:8800/link/byId/${id}`).then((response) => {
          setLink(response.data)
      })
  }, [])


  return (
    <>
    <div className="pt-20">
      <iframe title=" " className="w-full" height={window.innerHeight - 80} src={link.link}></iframe>
    </div>
    </>
  )
}
