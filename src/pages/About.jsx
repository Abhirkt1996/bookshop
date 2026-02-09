function About() {
  return (
    <div className="about-page">

      {/* Top Section */}
      <section className="about-hero">
        <h1>About Knowledgewala01 📚</h1>
        <p>Your Trusted Online Book Store</p>
      </section>

      {/* Main Content */}
      <section className="about-content">

        {/* Who We Are */}
        <div className="about-box">
          <h2>Who We Are</h2>
          <p>
            Knowledgewala01 is an online platform where you can find
            commics, college, novels, and competitive exam books
            at affordable prices.
          </p>
        </div>

        {/* What We Offer */}
        <div className="about-box">
          <h2>What We Offer</h2>
          <ul>
            <li>📕 Novels & Story Books</li>
            <li>📗 Exam Preparation Books</li>
            <li>📙 Commics & Reginal Books</li>
            <li>📙  And Many more Stickers </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="about-box">
          <h2>Why Choose Knowledgewala01?</h2>
          <ul>
            <li>✅ Affordable Prices</li>
            <li>✅ Wide Book Collection</li>
            <li>✅ Trusted Seller</li>
            <li>✅ Fast Response Support</li>
            <li>✅ Bulk & Retail Seller</li>
          </ul>
        </div>

        {/* Vision */}
        <div className="about-box">
          <h2>Our Vision</h2>
          <p>
            Our goal is to make quality books accessible
            to every student and reader in India at low cost.
          </p>
        </div>

        {/* Call To Action */}
        <div className="about-cta">
          <h2>Start Reading Today 🚀</h2>
          <p>Explore our collection and order your favorite books.</p>
          <a href="/books">
            <button>Browse Books</button>
          </a>
        </div>

      </section>

    </div>
  );
}

export default About;