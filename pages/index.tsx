import Head from 'next/head'
import { toPng } from 'html-to-image'
import { useState, useRef, useCallback } from 'react'

import Description from '../components/Description'
import Inputs from '../components/Inputs'
import Result from '../components/Result'
import Button from '../components/Button'

export default function Home() {
  const [data, setData] = useState([
    {
      product: 'Кофе',
      price: 0,
      amount: 1,
      isCustom: false,
    },
    {
      product: 'Сладкое',
      price: 0,
      amount: 1,
      isCustom: false,
    },
    {
      product: 'Такси',
      price: 0,
      amount: 1,
      isCustom: false,
    },
    {
      product: 'Алкоголь',
      price: 0,
      amount: 1,
      isCustom: false,
    },
    {
      product: 'Сигареты',
      price: 0,
      amount: 1,
      isCustom: false,
    },
    {
      product: 'Фастфуд',
      price: 0,
      amount: 1,
      isCustom: false,
    },
    {
      product: 'Газировка',
      price: 0,
      amount: 1,
      isCustom: false,
    },
  ])
  const [totalWeeklyExpenses, setTotalWeeklyExpenses] = useState(0)
  const ref = useRef(null)

  const handlePriceChange = (product: string, price: number) => {
    const newData = [...data]
    newData.find((item) => item.product === product).price = price
    setData(newData)
    getTotalExpenses(data)
  }

  const handleAmountChange = (product: string, amount: number) => {
    const newData = [...data]
    newData.find((item) => item.product === product).amount = amount
    setData(newData)
    getTotalExpenses(data)
  }

  const handleAddProduct = () => {
    const newProduct = prompt('Название траты')
    if (newProduct != null) {
      const newData = [...data]
      newData.push({
        product: newProduct,
        price: 0,
        amount: 1,
        isCustom: true,
      })
      setData(newData)
      getTotalExpenses(data)
    }
  }

  const getTotalExpenses = (data: Array<any>) => {
    setTotalWeeklyExpenses(
      data
        .map((item) => item.price * item.amount)
        .reduce((acc, cur) => acc + cur)
    )
  }

  const handleDeleteProduct = (product: any) => {
    const newData = [...data]
    const productToDelete = newData.indexOf(product)
    newData.splice(productToDelete, 1)
    setData(newData)
    getTotalExpenses(newData)
  }

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, {
      cacheBust: true,
    })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-minor-expenses.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  return (
    <div>
      <Head>
        <title>Сколько накопится за год, если отказаться от мелких трат</title>
        <meta
          name="description"
          content="Сколько накопится за год, если отказаться от мелких трат"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-2xl bg-white p-4" ref={ref}>
        <Description />
        <Inputs
          products={data}
          handlePriceChange={handlePriceChange}
          handleAmountChange={handleAmountChange}
          handleDeleteProduct={handleDeleteProduct}
        />
        <Button
          label="+ Добавить трату"
          handleClick={handleAddProduct}
          isPrimary={true}
        />
        <Result amount={totalWeeklyExpenses} />
      </main>
    </div>
  )
}
