import { useEffect, useState } from 'react'
import client from '../lib/api/client'

const Hello = () => {
  const [hello, setHello] = useState<string>('')
  const hello2 = 'hello2'

  useEffect(() => {
    const fetchHello = async () => {
      const result = (await client.get<string>('/hello')).data
      setHello(result)
    }

    fetchHello().catch((e) => {
      if (e instanceof Error) console.log(e.message)
    })
  }, [])

  return (
    <>
      <h1>Hello</h1>
      <p>{hello}</p>
    </>
  )
}

export default Hello
