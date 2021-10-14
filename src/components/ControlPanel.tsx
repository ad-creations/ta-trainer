import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../assets/cards.json';
import { getRandomElement, shuffle } from '../utilities/data';
import { UserList } from './UserList';
import { useState } from 'react';
import { Task as User } from 'editable-dnd-list';

export const LOCAL_STORAGE_USERS = 'ta-trainer-users';

export const INITIAL_USERS: User[] = [
  { id: '1', text: "Dr. Bart" },
  { id: '2', text: "Ada Bart" },
  { id: '3', text: "Babbage Bart" },
  { id: '4', text: "Pumpkin Bart" },
  { id: '5', text: "Ellie Bart" },
];

export function getLocalStorageUsers(): User[] {
  let rawUsers: string | null = localStorage.getItem(LOCAL_STORAGE_USERS);
  if (rawUsers === null) {
    return [...INITIAL_USERS];
  } else {
    return JSON.parse(rawUsers);
  }
}

export function ControlPanel({ setCard, reveal, answerRevealed, deck, showAddCardModal }:
  {
    setCard: (c: Card) => void, reveal: (r: boolean) => void, answerRevealed: boolean,
    showAddCardModal: (b: boolean) => void, deck: Card[]
  }): JSX.Element {
  const [users, setUsers] = useState<User[]>(getLocalStorageUsers());


  function setRandomCard() {
    reveal(false);
    setCard(getRandomElement(deck))
  }

  function shuffleUsers() {
    let shuffledUsers: User[] = shuffle(users);
    setUsers([...shuffledUsers]);
  }

  function save() {
    localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(users));
  }

  function addNewCard() {
    showAddCardModal(true);
  }
  
  function checkAnswer(){
    

    


  }
  function reviewDeck(){

  }

  return <Col>
    <h1>Control Panel</h1>
    <UserList users={users} setUsers={setUsers}></UserList>
    <Button data-testid="reveal-answer-button" onClick={() => reveal(!answerRevealed)} className="m-4">Reveal Answer</Button>
    <Button onClick={setRandomCard} className="m-4"> Correct</Button>
    <Button onClick={checkAnswer} className="m-4">Wrong</Button>
    <Button onClick={shuffleUsers} className="m-4">Shuffle Users</Button>
    <Button onClick={addNewCard} className="m-4">Add new card</Button>
    <Button onClick={reviewDeck} className="m-4">Show Wrong Cards</Button>
    <Button onClick={save} className="m-4" variant="success">Save</Button>

  </Col>
}