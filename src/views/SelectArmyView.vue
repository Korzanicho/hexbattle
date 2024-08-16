<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '@/stores/game'
import router from '@/router'

const gameStore = useGameStore()

const { setArmyToPlayer, getPlayerWihoutArmy, shufflePlayers } = gameStore
const { armies, turn, state } = storeToRefs(gameStore)

const currentPlayer = ref(getPlayerWihoutArmy())

onMounted(async () => {
  if (!currentPlayer.value) router.push('/game')
  if (!armies.value.length) await gameStore.dispatchGetArmies()
})

const handleSelectArmy = (army) => {
  currentPlayer.value ? setArmyToPlayer(currentPlayer.value.id, army) : null
  currentPlayer.value = getPlayerWihoutArmy()
  if (!currentPlayer.value) {
    shufflePlayers()
    turn.value = 0
    state.value = 'putMain'
    router.push('/game')
  }
}
</script>

<template class="select-army">
  <main>
    {{ currentPlayer?.name }} select your army
    <button v-for="army in armies" :key="army.id" @click="handleSelectArmy(army)">
      {{ army.name }}
    </button>
  </main>
</template>
