import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); //undefined가 되지않도록 주의

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
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
          <select id="coins">
            <option value="">choose coins</option>
            {coins.map((coin) => (
              <option key={coin.symbol}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price.toFixed(2)}
                {" USD"}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default App;
