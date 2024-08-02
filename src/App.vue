<script setup lang="ts">
import { ref, onMounted } from 'vue'
import wojownik from '@/assets/wojownik.svg'
import HexBoard from '@/components/HexBoard.vue'
// get svg as html component

console.log('wojownik', wojownik)

const svgString = ref('')

// Fetch SVG content as text

onMounted(() => {
  fetch(wojownik)
    .then((response) => response.text())
    .then((svgContent) => {
      svgString.value = svgContent
    })

  const svg = document.getElementById('svg')
  svg.innerHTML = svgString.value
})
</script>

<template>
  <HexBoard />
  <!-- <img :src="wojownik" alt="wojownik" /> -->
  <div id="svg" />
</template>

<style scoped></style>
