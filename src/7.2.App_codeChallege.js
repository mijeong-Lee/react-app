import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true); //로딩 여부
  const [coins, setCoins] = useState([]); //undefined가 되지않도록 주의
  const [amount, setAmount] = useState(""); // 입력받을 금액
  const [coinPrice, setCoinPrice] = useState(""); //코인 금액
  const [result, setResult] = useState(""); //환전 결과
  const [flag, setFlag] = useState(false); //환전 가능여부

  const reset = () => {
    setAmount("");
    setResult("");
  };

  const onSelected = (event) => {
    const value = event.target.value;
    const coinPrice = value.substring(
      value.indexOf(":") + 1,
      value.lastIndexOf("U")
    );
    setCoinPrice(coinPrice.trim());
  };

  const onChange = (event) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    if (amount !== "" && coinPrice !== "") {
      const calc = (amount / coinPrice).toFixed(2);
      if (Math.floor(calc) === 0) {
        setResult("you can not buying");
        setFlag(false);
      } else {
        setResult(calc);
        setFlag(true);
      }
    }
  }, [amount, coinPrice]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=30")
      //너무 많아서 개수 제한한 상태, 전부 다 보고싶다면 ?limit=30 제거
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <label htmlFor="amount">Amount: </label>
          <input
            id="amount"
            type="text"
            onClick={reset}
            onChange={onChange}
            value={amount}
            placeholder="input your amount"
          />
          {" USD"}
          <br />
          <label htmlFor="coins">Select Coins: </label>
          <select id="coins" onChange={onSelected}>
            <option value="">choose coins</option>
            {coins.map((coin) => (
              <option key={coin.symbol}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price.toFixed(2)}
                {" USD"}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="result">Exchange Results: </label>
          <input id="result" type="text" value={result} disabled />{" "}
          {flag ? " USD" : null}
        </div>
      )}
    </div>
  );
}

export default App;
