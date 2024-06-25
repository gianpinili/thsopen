import { Link } from 'react-router-dom'

function Open2024() {
 return (
  <>
   <div className="my-[10rem]">Open2024</div>
   <Link to={'/events'}>Back to Events</Link>
  </>
 )
}

export default Open2024