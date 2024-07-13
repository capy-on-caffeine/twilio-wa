import './App.css'

function App() {
  const handleClick = () => {
    fetch('http://localhost:8000/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
      mode: "cors"
    })
    .then(res => res.text())
    .then(data => alert(data))
    .catch(err => console.log(err))
  }

  return (
    <>
        <button onClick={handleClick}>
          btn
        </button>
    </>
  )
}

export default App
