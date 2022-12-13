import Head from 'next/head'
import { useState } from 'react'

import Description from '../components/Description'
import Inputs from '../components/Inputs'
import Result from '../components/Result'

export default function Home() {
  const [data, setData] = useState([
    {
      product: 'Кофе',
      price: 0,
      amount: 1,
    },
    {
      product: 'Сладкое',
      price: 0,
      amount: 1,
    },
    {
      product: 'Такси',
      price: 0,
      amount: 1,
    },
    {
      product: 'Алкоголь',
      price: 0,
      amount: 1,
    },
    {
      product: 'Сигареты',
      price: 0,
      amount: 1,
    },
    {
      product: 'Фастфуд',
      price: 0,
      amount: 1,
    },
    {
      product: 'Другое',
      price: 0,
      amount: 1,
    },
  ])
  const [totalWeellyExpenses, setTotalWeeklyExpenses] = useState(0)

  const handlePriceChange = (product, price) => {
    const newData = [...data]
    newData.find((item) => item.product === product).price = price
    setData(newData)
    getTotalExpenses(data)
  }

  const handleAmountChange = (product, amount) => {
    const newData = [...data]
    newData.find((item) => item.product === product).amount = amount
    setData(newData)
    getTotalExpenses(data)
  }

  const getTotalExpenses = (data) => {
    setTotalWeeklyExpenses(
      data
        .map((item) => item.price * item.amount)
        .reduce((acc, cur) => acc + cur)
    )
  }

  return (
    <div className="mx-auto max-w-2xl p-4">
      <Head>
        <title>Сколько накопится за год, если отказаться от мелких трат</title>
        <meta
          name="description"
          content="Сколько накопится за год, если отказаться от мелких трат"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Description />
        <Inputs
          products={data.map((item) => item.product)}
          handlePriceChange={handlePriceChange}
          handleAmountChange={handleAmountChange}
        />
        <Result amount={totalWeellyExpenses} />
      </main>
    </div>
  )
}
