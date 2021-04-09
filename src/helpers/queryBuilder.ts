const getAllCards = (pipeId: string): string => {
  return `{
    allCards(pipeId: ${pipeId}){
      edges {
        cursor
        node { age attachments_count }
      }
    }
  }`
}

export default { getAllCards };
