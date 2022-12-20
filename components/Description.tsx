const content = {
  title: 'Сколько накопится за год, если отказаться от мелких трат',
  text: 'Калькулятор считает, сколько вы накопите, если откажетесь от приятных мелочей, которые незаметно съедают бюджет, и будете хранить сэкономленные деньги на депозите.',
}

const Description = () => {
  return (
    <div className="mt-2 mb-8">
      <h1 className="mb-2 text-2xl font-bold">{content.title}</h1>
      <p>{content.text}</p>
    </div>
  )
}

export default Description
