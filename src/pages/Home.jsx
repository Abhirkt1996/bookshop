import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-hero">

      {/* Left Image */}
      <div className="home-left">
        <img src="/01.jpg" alt="My Pic" />
      </div>

      {/* Right Content */}
      <div className="home-right">
        <h1>Welcome to Knowledgewala01 📚</h1>
        <p>Your Books reading partner</p>

        <Link to="/books">
          <button>Explore Books</button>
        </Link>
      </div>

    </section>
  );
}

export default Home;