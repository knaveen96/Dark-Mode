import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  const [theme, setTheme] = useState('light-theme');

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const changeTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  return <main>
    <nav>
      <div className="nav-center">
        <h1>overreacted</h1>
        <button className="btn" onClick={changeTheme}>Toggle</button>
      </div>
    </nav>
    <section className="articles">
      {data.map((item) => {
        return <Article {...item} key={item.id} />
      })}
    </section>
  </main>
}

export default App
