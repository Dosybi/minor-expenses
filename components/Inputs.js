const Inputs = ({ products, handlePriceChange, handleAmountChange }) => {
  return (
    <div className="mb-8">
      {products.map((product) => {
        return (
          <div className="mb-4" key={product}>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              {product}
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">₸</span>
              </div>
              <input
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                name="price"
                id="price"
                className="block w-full appearance-none rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="0"
                onChange={(e) => handlePriceChange(product, e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <select
                  id="amount"
                  name="amount"
                  onChange={(e) => handleAmountChange(product, e.target.value)}
                  className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  {[...Array(7).keys()].map((amount) => {
                    return (
                      <option key={amount} value={amount + 1}>
                        {amount + 1 === 7
                          ? 'Каждый день'
                          : amount + 1 === 2 ||
                            amount + 1 === 3 ||
                            amount + 1 === 4
                          ? `${amount + 1} раза в неделю`
                          : `${amount + 1} раз в неделю`}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Inputs
