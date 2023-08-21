import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { nanoid } from 'nanoid';
import Card from './card'; 
import AddCard from './AddNewCard'; 
import _ from "lodash";


function App() {
  const [allCards, setAllCards] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [keywords, setKeywords] = useState("");
  const [rarity, setRarity] = useState(""); 

  useEffect(() => {
    const cardsLocalStorage = JSON.parse(localStorage.getItem('cards'));
    if (cardsLocalStorage) {
      setAllCards(cardsLocalStorage);
      setSearchResults(cardsLocalStorage);
    } else {
      setAllCards(cards);
      setSearchResults(cards);
    }
  }, []);

  const searchCards = () => {
    let keywordsArray = [];

    if (keywords) {
      keywordsArray = keywords.toLowerCase().split(' ');
    }

    if (rarity) {
      keywordsArray.push(rarity.toLowerCase());
    }

    if (keywordsArray.length > 0) {
      const searchResults = allCards.filter(card => {
        for (const word of keywordsArray) {
          if (card.gameName.toLowerCase().includes(word) ||
              card.cardName.toLowerCase().includes(word) ||
              card.cardRarity.toLowerCase().includes(word)) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResults);
    } else {
      setSearchResults(allCards);
    }
  };

  const removeCard = (cardToDelete) => {
    const updatedCardsArray = allCards.filter(card => card.id !== cardToDelete.id);
    setAllCards(updatedCardsArray);
    setSearchResults(updatedCardsArray);
    localStorage.setItem('cards', JSON.stringify(updatedCardsArray));
  };

  const updateCard = (updatedCard) => {
    const updatedCardsArray = allCards.map(card =>
      card.id === updatedCard.id ? { ...card, ...updatedCard } : card
    );
    setAllCards(updatedCardsArray);
    setSearchResults(updatedCardsArray);
    localStorage.setItem('cards', JSON.stringify(updatedCardsArray));
  };

  const addCard = (newCard) => {
    const updatedCards = [...allCards, newCard];
    setAllCards(updatedCards);
    setSearchResults(updatedCards);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
  };

  const cards = [ {
    id: nanoid(),
    gameName: "MTG",
    cardName:  "Doubling Season",
    cardRarity: "mythic",
    cardPrice:  50,
    cardNum:  2
  }, {
    id: nanoid(),
    gameName: "FAB",
    cardName:  "Crown of Providence",
    cardRarity: "Legendary",
    cardPrice:  150 ,
    cardNum:1
  },{
    id: nanoid(),
    gameName: "Lorcana",
    cardName:  "Mickey Mouse",
    cardRarity: "Legendary",
    cardPrice: 70  ,
    cardNum:2
  },{
    id: nanoid(),
    gameName: "FAB",
    cardName:  "Heart of Fyendal",
    cardRarity: "Fable",
    cardPrice: 400 ,
    cardNum: 1
  },{
    id: nanoid(),
    gameName: "MTG",
    cardName:  "wooded Foothills",
    cardRarity: "rare",
    cardPrice: 25 ,
    cardNum:1
  },{
    id: nanoid(),
    gameName: " FAB",
    cardName:  "Command and conquer",
    cardRarity: "majestic",
    cardPrice: 90 ,
    cardNum: 3
  },{
    id: nanoid(),
    gameName: " Lorcana",
    cardName:  "Let it go",
    cardRarity: "rare",
    cardPrice: 15  ,
    cardNum:3
  } ];

  return (
    <div className='container'>
      <div className='row' id="allCards">
        {searchResults.map((card) => (
          <div className='col-md-3' key={card.id}>
            <Card card={card} removeCard={removeCard} updateCard={updateCard} />
          </div>
        ))}
      </div>
      <AddCard addCard={addCard}  />
      <div className='row mt-4' id="searchCards">
        <div className='col-md-4'>
          <label htmlFor='txtKeywords'>Search by Game, Name, or Rarity</label>
          <input
            type='text'
            className='form-control'
            placeholder='Magic'
            onChange={(evt) => setKeywords(evt.currentTarget.value)}
            value={keywords}
          />
        </div>
        <div className='col-md-4'>
          <label htmlFor='txtRarity'>Filter by Rarity</label>
          <input
            type='text'
            className='form-control'
            placeholder='Mythic'
            onChange={(evt) => setRarity(evt.currentTarget.value)}
            value={rarity}
          />
        </div>
        <div className='col-md-4'  >
          <button type='button' className='btn btn-primary' onClick={searchCards}>
            Search Cards
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;





