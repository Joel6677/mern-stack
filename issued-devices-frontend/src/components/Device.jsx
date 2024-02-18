const Device = ({ device }) => {
    return (
     <div>
      <h2>{device.name}</h2>
      <div>{device.manufacturer}</div>
      <div>{device.number}</div>
     </div>
    )
  }
  
  export default Device

  