<script setup lang="ts">
import {storeToRefs} from 'pinia';

import HexBoard from '@/components/HexBoard.vue'
import UserInfo from '@/components/UserInfo.vue'
import { useGameStore } from '@/stores/game'
import { onMounted } from 'vue';
import router from '@/router';

const gameStore = useGameStore();
const { players, hasEveryoneChosenArmy } = storeToRefs(gameStore);

if (!hasEveryoneChosenArmy.value) router.push('/select-army');

onMounted(() => {
  // gameStore.initGame();
});
</script>

<template>
  <main class="game">
    <div class="game__users-wrapper">
      <UserInfo v-if="players[0]" :user="players[0]"/>
      <UserInfo v-if="players[2]" :user="players[2]"/>
    </div>
    <div>
      <HexBoard />
      <div>
        actions
      </div>
    </div>
    <div class="game__users-wrapper">
      <UserInfo v-if="players[1]" :user="players[1]"/>
      <UserInfo v-if="players[3]" :user="players[3]"/>
    </div>
  </main>
</template>

<style lang="scss">
.game {
  display: flex;

  &__users-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>