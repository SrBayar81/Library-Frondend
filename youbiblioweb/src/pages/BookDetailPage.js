import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/BookDetailPage.css';
import harryPotterImg from '../assets/image/popularesLibro3.jpg';

const BookDetailPage = () => {
    const { bookId } = useParams();
   
    const bookDetails = {
        title: 'Harry Potter y la piedra filosofal',
        description: 'Harry Potter es un ni�o hu�rfano criado por su t�a y su t�o. En su und�cimo cumplea�os descubre que es hijo de dos magos y que posee tambi�n poderes m�gicos. Poco despu�s es invitado a asistir al Colegio Hogwarts de Magia y Hechicer�a para recibir educaci�n m�gica. A partir de ah�, su vida cambia para siempre y se ve envuelto en emocionantes aventuras en el mundo m�gico.',
        imageUrl: harryPotterImg
    };

    return (
        <div className="book-detail-container">
            <img src={bookDetails.imageUrl} alt={bookDetails.title} className="book-detail-image" />
            <h1 className="book-detail-title">{bookDetails.title}</h1>
            <p className="book-detail-description">{bookDetails.description}</p>
        </div>
    );
};

export default BookDetailPage;
