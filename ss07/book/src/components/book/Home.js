import React, { useEffect, useState } from "react";
import { getList, deleteBook } from "./BookService";
import { Link } from "react-router-dom";
import "./CustomModal.css"
export function Home() {
    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedBookId, setSelectedBookId] = useState(null);

    useEffect(() => {
        getList().then((book) => {
            setBooks(book);
        });
    }, []);

    return (
        <>
            <table>
                <tbody>
                <tr>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Quantity</td>
                    <td></td>
                </tr>
                </tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <Link to={`edit/${book.id}`}>Edit</Link>
                            {" | "}
                            <button
                                className="delete-btn"
                                onClick={() => {
                                    setSelectedBookId(book.id);
                                    setShowModal(true);
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </table>

            {showModal && (
                <div >
                    <div className="custom-modal">
                        <p>Are you sure you want to delete this book?</p>
                        <div>
                            <button

                                onClick={() => {
                                    deleteBook(selectedBookId).then(() => {
                                        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== selectedBookId));
                                        setShowModal(false);
                                    });
                                }}
                            >
                                Yes
                            </button>
                            <button onClick={() => setShowModal(false)}>
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
