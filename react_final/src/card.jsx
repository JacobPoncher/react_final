import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
  const [editMode, setEditMode] = useState(false);
  const [card, setCard] = useState({});

  useEffect(() => {
    setCard(props.card);
  }, [props.card]);

  const saveCard = () => {
    setEditMode(false);
    props.updateCard(card);
  };

  return (
    <div className='card'>
      {!editMode && (
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>{card.gameName}</li>
          <li className='list-group-item'>{card.cardName}</li>
          <li className='list-group-item'>{card.cardRarity}</li>
          <li className='list-group-item'>{card.cardPrice}</li>
          <li className='list-group-item'>{card.cardNum}</li>
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => props.removeCard(card)}
          >
            Delete Card
          </button>
          <button
            type='button'
            className='btn btn-warning'
            onClick={() => setEditMode(true)}
          >
            Edit
          </button>
        </ul>
      )}

      {editMode && (
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <input
              type='text'
              className='form-control'
              value={card.gameName}
              onChange={(evt) => setCard({ ...card, gameName: evt.target.value })}
            />
          </li>
          <li className='list-group-item'>
            <input
              type='text'
              className='form-control'
              value={card.cardName}
              onChange={(evt) => setCard({ ...card, cardName: evt.target.value })}
            />
          </li>
          <li className='list-group-item'>
            <input
              type='text'
              className='form-control'
              value={card.cardRarity}
              onChange={(evt) => setCard({ ...card, cardRarity: evt.target.value })}
            />
          </li>
          <li className='list-group-item'>
            <input
              type='text'
              className='form-control'
              value={card.cardPrice}
              onChange={(evt) => setCard({ ...card, cardPrice: evt.target.value })}
            />
          </li>
          <li className='list-group-item'>
            <input
              type='text'
              className='form-control'
              value={card.cardNum}
              onChange={(evt) => setCard({ ...card, cardNum: evt.target.value })}
            />
          </li>
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => props.removeCard(card)}
          >
            Delete Card
          </button>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={saveCard}
          >
            Save
          </button>
        </ul>
      )}
    </div>
  );
}

export default Card;

