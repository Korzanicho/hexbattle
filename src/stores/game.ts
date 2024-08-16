import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import mockedArmiesData from '@/assets/armies.json'

export const useGameStore = defineStore('game', () => {
  const players = ref([
    { id: 1, name: 'Adrian', army: null },
    { id: 2, name: 'Kamil', army: null },
    { id: 3, name: 'Klaudia', army: null },
    { id: 4, name: 'Sylwia', army: null }
  ])
  const armies = ref([])

  const state = ref('');
  const turn = ref<null | number>(null);
  const currentPlayerIndex = ref(null);

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

  const hasEveryoneChosenArmy = computed(() => {
    return players.value.every((player) => player.army)
  })

  const shufflePlayers = () => {
    players.value = players.value.sort(() => Math.random());
  }

  return {
    turn,
    state,
    armies,
    players,
    addPlayer,
    removePlayer,
    shufflePlayers,
    currentPlayerIndex,
    setArmyToPlayer,
    dispatchGetArmies,
    getPlayerWihoutArmy,
    hasEveryoneChosenArmy,
  }
})
