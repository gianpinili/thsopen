import { Link } from "react-router-dom";

function EventsList() {
 return (
  <>
   <p className="my-[10rem]">EventsList</p>
   <Link to={'/events/open2024'}>THS Open 2024</Link>
  </>
 )
}

export default EventsList