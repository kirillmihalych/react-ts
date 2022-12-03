import React, { useState, useEffect } from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { IUser } from './components/types/types'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      setUsers(response.data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <Card
        onClick={(num) => console.log('click', num)}
        variant={CardVariant.primary}
        width='200px'
        height='200px'
      >
        <button>click</button>
      </Card>
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}} />
    </div>
  )
}

export default App
