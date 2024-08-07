import { ref } from 'vue'
import { defineStore } from 'pinia'
import mockedArmiesData from '@/assets/armies.json'

export const useGameStore = defineStore('game', () => {
  const players = ref([
    { id: 1, name: 'Player 1', army: null, score: 20 },
    { id: 2, name: 'Player 2', army: null, score: 20 }
  ])
  const armies = ref([])

  const dispatchGetArmies = async () => {
    // Simulate an API call
    armies.value = mockedArmiesData
  }

  const setArmyToPlayer = (playerId: number, army) => {
    const player = players.value.find((p) => p.id === playerId)
    if (player) player.army = army
  }

  const removePlayer = (playerId: number) => {
    const playerIndex = players.value.findIndex((player) => player.id === playerId)
    players.value.splice(playerIndex, 1)
  }

  const addPlayer = (playerName: string) => {
    players.value.push({ id: players.value.length + 1, name: playerName, army: null, score: 20 })
  }

  const getPlayerWihoutArmy = () => {
    return players.value.find((player) => !player.army)
  }

  return {
    armies,
    players,
    addPlayer,
    removePlayer,
    setArmyToPlayer,
    dispatchGetArmies,
    getPlayerWihoutArmy
  }
})
