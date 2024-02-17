import Device from './components/Device'

const App = ({ devices }) => {
  return (
    <div>
      <h1>Devices</h1>
      <ul>
        {devices.map(device => 
          <Device key={device.id} device={device} />
        )}
      </ul>
    </div>
  )
}
export default App
