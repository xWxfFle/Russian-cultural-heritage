import { useParams } from 'react-router-dom'

const FacilityPage = () => {
  const { facilityId } = useParams()
  if (!facilityId) return null

  return <div>Facility Page {facilityId.toString()}</div>
}

export default FacilityPage
