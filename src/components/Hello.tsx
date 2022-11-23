import { FC, useEffect, useState } from 'react'
import client from '../lib/api/client'
import Header from './Header'

const Hello: FC = () => {
  const [hello, setHello] = useState<string>('')

  const fetchHello = async () => {
    const result = (await client.get<string>('/hello')).data
    setHello(result)
  }

  useEffect(() => {
    fetchHello().catch((e) => {
      if (e instanceof Error) console.error(e.message)
    })
  }, [])

  return (
    <Header>
      <h1>{hello}</h1>
    </Header>
  )
}

export default Hello
