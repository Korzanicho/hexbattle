import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import SelectArmyView from '../views/SelectArmyView.vue'
import AddPlayersView from '../views/AddPlayersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/select-army',
      name: 'selectArmy',
      component: SelectArmyView
    },
    {
      path: '/add-players',
      name: 'addPlayers',
      component: AddPlayersView
    }
  ]
})

export default router
