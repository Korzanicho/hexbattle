<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import hexSvg from '@/assets/hex.svg'
import wojownik from '@/assets/wojownik.svg'

onMounted(() => {})

onUnmounted(() => {})

const selectHex = (event: MouseEvent) => {
  if (!(event.target instanceof HTMLImageElement)) return

  let selectedElement = event.target as HTMLImageElement
  selectedElement.src = wojownik
}

const hexBoard = ref([
  [null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null]
])

const hexWidth = 47
const hexHeight = (hexWidth * Math.sqrt(3)) / 2
const negativeMargin = -0.37 * hexHeight
const boardWidth = 55 * 7 + 10;
</script>

<template>
  <div
    class="hex-board"
    @click="selectHex"
    :style="{width: boardWidth + 'px'}"
  >
    <div v-for="(row, i) in hexBoard" :key="i" class="hex-board__row">
      <div v-for="(hex, j) in row" :key="j" class="hex-board__hex">
        <img
          :src="hexSvg"
          alt="hex"
          class="hex-board__hex-image"
          :style="{
            width: hexWidth + 'px',
            height: hexHeight,
            marginBottom: i !== 6 ? negativeMargin + 'px' : '0'
          }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hex-board {
  margin: 0 auto;
  &__row {
    display: flex;
    gap: 1px;
    justify-content: center;
  }
  &__hex-image {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    cursor: pointer;
  }
}
</style>
