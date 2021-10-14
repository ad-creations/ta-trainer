import { Col, Card as BootstrapCard } from 'react-bootstrap';
import { Card } from '../interfaces/card';

export function CardViewer({ card, answerRevealed }:
  { card: Card, answerRevealed: boolean }): JSX.Element {
  return <Col>
    <BootstrapCard>
      <BootstrapCard.Body>
        <BootstrapCard.Title>Card Viewer</BootstrapCard.Title>
        <BootstrapCard.Text>
          <strong>Prompt</strong>: {card.prompt}
        </BootstrapCard.Text>
        {answerRevealed && <BootstrapCard.Text>
          <strong data-testid="answer-label">Answer</strong>: {card.answer}
        </BootstrapCard.Text>}
      </BootstrapCard.Body>
    </BootstrapCard>
  </Col>
}
 
