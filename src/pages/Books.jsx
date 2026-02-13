import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import books from "../data/books";

function Books() {
  const navigate = useNavigate();
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="books-page">

      <h1 className="fade-title color-title">
  Our Book Collection 📚
</h1>

      <div className="book-grid">

        {books.map((book, index) => (
          <div
            className="book-card fade-card"
            key={book.id}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img src={book.image} alt={book.title} />

            <h3>{book.title}</h3>

            <p className="price">{book.price}</p>

            <button
              className="order-btn"
              onClick={() => navigate("/contact")}
            >
              Order Now
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Books;