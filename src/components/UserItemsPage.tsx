import { FC, useState, useEffect } from 'react'
import axios from 'axios'
import { IUser } from './types/types'
import { useParams } from 'react-router-dom'
import { isErrored } from 'stream'

type UserItemPageParams = {
  id: string
}

const UserItemsPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<UserItemPageParams>()

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        'https://jsonplaceholder.typicode.com/users/' + params.id
      )
      setUser(response.data)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <button>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <h2>Он живёт в {user?.address.city}</h2>
    </div>
  )
}

export default UserItemsPage
