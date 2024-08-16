// composables/useGame.ts
// import {storeToRefs} from 'pinia';
// import { useGameStore } from "@/stores/game"

export default function useGame() {
	// const gameStore = useGameStore();

	// const { players } = storyToRefs(gameStore);
	const getMainsFromArmy = (army) => {
		return army.troops.filter((troop) => troop.type === 'main');
	}

	return {
		getMainsFromArmy
	}
}