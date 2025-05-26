import { useEffect, useState } from 'react';

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch exchange rates based on baseCurrency
    fetch(`https://open.er-api.com/v6/latest/${baseCurrency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "success") {
          setData(res.rates);
        } else {
          setData({});
        }
      })
      .catch((error) => {
        console.error("Failed to fetch currency data:", error);
        setData({});
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
