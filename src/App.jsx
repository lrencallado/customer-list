import { useState } from 'react'
import './App.css'
import PropTypes from 'prop-types'

let nextId = 0

function CustomerList({ customers }) {
  
  if (customers.length > 0) {
    return (
      <div className='mx-auto w-72'>
        <ul className='mt-10 text-left'>
          {customers.map(customer => (
            <li className='list-disc' key={customer.id}>{customer.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

// To fix the issue in missing validation in prop-types eslint
CustomerList.propTypes = {
  customers: PropTypes.array
}

function App() {
  const [name, setName] = useState('')
  const [customers, setCustomers] = useState([])

  function addCustomer() {
    if (name) {
      setCustomers([...customers, {id: nextId++, name: name}])
      setName('')
    }
  }

  return (
    <>
      <div className='flex justify-center gap-2'>
        <input className='px-2 py-2 border rounded-sm' placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
        <button className='px-4 py-2 bg-green-600 text-white rounded-sm' onClick={addCustomer}>Add Customer</button>
      </div>
      <CustomerList customers={customers}/>
    </>
  )
}

export default App
