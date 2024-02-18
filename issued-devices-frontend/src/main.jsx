import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
} from "react-router-dom"

const devices = [
  {
    id: 1,
    name: 'Modem',
    manufacturer: 'Intel',
    number: 123,
    recipient_id: 1,
    date_of_issue: new Date('03/25/2015'),
    returning_date: new Date('04/10/2015')

  },
  {
    id: 2,
    name: 'Laptop',
    manufacturer: 'Hp',
    number: 655,
    recipient_id: 2,
    date_of_issue: new Date('04/25/2018'),
    returning_date: new Date('04/10/2019')
  },
  {
    id: 3,
    name: 'Laptop',
    manufacturer: 'Apple',
    number: 893,
    recipient_id: 3,
    date_of_issue: new Date('07/22/2018'),
    returning_date: new Date('04/11/2020')
  }
]

const recipients= [
  {
    id: 1,
    name: "Jaakko",
    department: "Sales",
    devices: [1]
  },
  {
    id: 2,
    name: "Matti",
    department: "Marketing",
    devices: [2]
  },
  {
    id: 3,
    name: "Teuvo",
    department: "Support",
    devices: [3]
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App devices={devices} />
  </Router>
)