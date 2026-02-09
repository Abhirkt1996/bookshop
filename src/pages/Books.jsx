import { useNavigate } from "react-router-dom";
import books from "../data/books";

function Books() {
  const navigate = useNavigate();

  return (
    <div className="books-page">

      <h1>Our Book Collection 📚</h1>

      <div className="book-grid">

        {books.map((book) => (
          <div className="book-card" key={book.id}>

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