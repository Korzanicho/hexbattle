<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()

const { setArmyToPlayer } = gameStore
const { armies } = storeToRefs(gameStore)

onMounted(() => {
  gameStore.dispatchGetArmies()
})

const handleSelectArmy = (army) => {
  console.log('handleSelectArmy', army)
  setArmyToPlayer('Player 1', army)
}
</script>

<template class="select-army">
  <main>
    <button v-for="army in armies" :key="army.id" @click="handleSelectArmy(army)">
      {{ army.name }}
    </button>
  </main>
</template>
