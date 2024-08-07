<template>
  <div class="players-list">
    <ul>
      <li v-for="player in players" :key="player.id">
        {{ player.name }} <button @click="removePlayer(player.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()

const { players } = storeToRefs(gameStore)
const { removePlayer } = gameStore
</script>
<style scoped></style>
