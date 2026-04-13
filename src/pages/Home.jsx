import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page home">
      <header className="home-header">
        <h1>LineWatch</h1>
        <p className="tagline">Compare the best odds</p>
      </header>

      <main className="home-content">
        <p>LineWatch is your go-to app for tracking and comparing the best odds across different sportsbooks for all sports.</p>
      </main>

      <footer className="home-footer">
        <Link to="/privacy">Privacy Policy</Link>
        <p className="copyright">&copy; {new Date().getFullYear()} Steven Nguyen. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
