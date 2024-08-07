<template>
  <div class="add-players">
    <h1>Write your name</h1>
    <AddPlayersForm />
    <PlayersList />

    <RouterLink to="/select-army">Select Army</RouterLink><br />
  </div>
</template>
<script setup>
import AddPlayersForm from '@/components/AddPlayersForm.vue'
import PlayersList from '@/components/PlayersList.vue'
</script>
<style lang="scss"></style>
