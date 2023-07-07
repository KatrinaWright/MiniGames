
Rune.initLogic({
    minPlayers: 1,
    maxPlayers: 4,
    setup: (playerIds) => {
      const scores = {}
      for (let playerId of playerIds) {
        scores[playerId] = 0
      }
      return { scores }
    },
    actions: {
      incrementScore(playerWhoGotPoints, { game }) {
        game.scores[playerWhoGotPoints]++
      },
    },
  })