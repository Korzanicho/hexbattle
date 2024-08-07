<template>
  <form @submit.prevent="handleAddPlayer">
    <input v-model="playerName" placeholder="Player name" />
    <button type="submit">Add player</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()
const { addPlayer } = gameStore
const playerName = ref('')

const handleAddPlayer = () => {
  addPlayer(playerName.value)
  playerName.value = ''
}
</script>
