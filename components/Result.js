import Button from './Button'

const content = {
  text: 'Приятные мелочи съедают',
}

const Result = ({ amount, onButtonClick }) => {
  const savings = Math.trunc(
    amount * 4.5 * 0.14 +
      amount * 4.5 * 2 * 0.14 +
      amount * 4.5 * 3 * 0.14 +
      amount * 4.5 * 4 * 0.14 +
      amount * 4.5 * 5 * 0.14 +
      amount * 4.5 * 6 * 0.14 +
      amount * 4.5 * 7 * 0.14 +
      amount * 4.5 * 8 * 0.14 +
      amount * 4.5 * 9 * 0.14 +
      amount * 4.5 * 10 * 0.14 +
      amount * 4.5 * 11 * 0.14 +
      amount * 4.5 * 12 * 0.14
  )

  return (
    <div className="sticky bottom-0 rounded-lg bg-gray-100 p-4">
      <div className="mb-2 text-xl font-bold">
        Приятные мелочи съедают{' '}
        <span className="text-pink-700">{amount * 4.5}</span> тенге в месяц
      </div>
      <div>
        За год на депозите с эффективной годовой ставкой 14%, включая
        капитализацию, накопится {savings} тенге.
      </div>
      <Button
        label="Сохранить результат для Инстаграма"
        isPrimary
        onClick={onButtonClick}
      />
    </div>
  )
}

export default Result
