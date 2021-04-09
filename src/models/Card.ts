interface CardNode {
  age: number;
}

interface CardEdge {
  cursor: string;
  node: CardNode
}

class Card {

  edges: [CardEdge];

  constructor(edges: [CardEdge]) {
    this.edges = edges;
  }
}

export default Card;

