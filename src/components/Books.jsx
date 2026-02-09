import books from "../data/books";

function Books() {
  return (
    <section className="books" id="books">
      <h2>Our Books</h2>

      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button>View</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Books;