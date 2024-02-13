import { useEffect, useState } from "react"

function HomePage() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    chrome.history.search({ text: "", maxResults: 30 }, function (data) {
      setHistory(data)
    })
  }, [])

  return (
    <div>
      <h1>NewTab</h1>
      <p>This is the NewTab page</p>
      <ul>
        {history.map((item) => (
          <li>{item.url}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
