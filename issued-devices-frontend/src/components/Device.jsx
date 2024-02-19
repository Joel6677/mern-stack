import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Device = () => {

  const id = useParams().id
  const dispatch = useDispatch()
  const devices = useSelector(state => {
    return state.devices
  })
  const device = devices.find(d => d.id === id)

    return (
      <div>
        <h2>{device.name}</h2>
        <h3>{device.number}</h3>
      </div>
    )

    
    // return (
    //  <div>
    //   <h2>{device.name}</h2>
    //   <div>{device.manufacturer}</div>
    //   <div>{device.number}</div>
    //  </div>
    // )
  }
  
  export default Device

  