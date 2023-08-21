import React, { useState } from "react";
import { nanoid } from "nanoid";
import './addcard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function AddCard(props) {
  const [gameName, setGameName] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardRarity, setCardRarity] = useState("");
  const [cardPrice, setCardPrice] = useState("");
  const [cardNum, setCardNum] = useState("");

  const doWork = () => {
    const newCard = {
      "id": nanoid(),
      "gameName": gameName,
      "cardName": cardName,
      "cardRarity": cardRarity,
      "cardPrice": cardPrice,
      "cardNum": cardNum
    };
    props.addCard(newCard);
    clearFields();
  };

  const clearFields = () => {
    setGameName("");
    setCardName("");
    setCardRarity("");
    setCardPrice("");
    setCardNum("");
  };

  return (
    <div className='row mt-5' id="addCard">
      <h3> Add Card</h3>
      <div className='col-md-2'>
        <label htmlFor='txtGameName' className='form-label'>Game Name</label>
        <input
          type="text"
          id="txtGameName"
          placeholder="Magic"
          className="form-control"
          onChange={(evt) => setGameName(evt.currentTarget.value)}
          value={gameName}
        />
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtCardName' className='form-label'>Card Name</label>
        <input
          type="text"
          id="txtCardName"
          placeholder="Card Name"
          className="form-control"
          onChange={(evt) => setCardName(evt.currentTarget.value)}
          value={cardName}
        />
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtCardRarity' className='form-label'>Card Rarity</label>
        <input
          type="text"
          id="txtCardRarity"
          placeholder="Mythic"
          className="form-control"
          onChange={(evt) => setCardRarity(evt.currentTarget.value)}
          value={cardRarity}
        />
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtCardPrice' className='form-label'>Card Price</label>
        <input
          type="text"
          id="txtCardPrice"
          placeholder="50"
          className="form-control"
          onChange={(evt) => setCardPrice(evt.currentTarget.value)}
          value={cardPrice}
        />
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtCardNum' className='form-label'>Card Number</label>
        <input
          type="text"
          id="txtCardNum"
          placeholder="2"
          className="form-control"
          onChange={(evt) => setCardNum(evt.currentTarget.value)}
          value={cardNum}
        />
      </div>
      <div className='col-md-2'>
        <button
          type="button"
          id="btnAdd"
          className="btn btn-success btn-lg"
          onClick={doWork}
        >
          Add Card     

           <FontAwesomeIcon icon={faPlusCircle}/>
        </button>
      </div>
    </div>
  );
}

export default AddCard;
