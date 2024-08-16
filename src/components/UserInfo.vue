<template>
	<div class="user-info">
		{{ props.user.name }}<br />
		Army: {{ props.user.army.name }}
		<div class="user-info__mains">
			<h3>Lives</h3>
			<span
				v-for="mainTroop in mains"
				:key="mainTroop.id"
				class="user-info__main"
			>
				{{ mainTroop.name }}: {{ mainTroop.lives }}
			</span>
		</div>
	</div>
</template>

<script setup>
import useGame from '@/composables/useGame';
import { onMounted, ref } from 'vue';

const props = defineProps({
	user: {
		type: Object,
		required: true
	}
})

const {getMainsFromArmy} = useGame();
const mains = ref([])

onMounted(() => {
	console.log(props.user, 'user');
	mains.value = getMainsFromArmy(props.user.army);
	console.log('User info mounted');
});

</script>

<style lang="scss" scoped>
.user-info {
	display: flex;
	padding: 10px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-basis: 50%;
	background-color: #f0f0f0;
	border: 1px solid #ccc;

	&__main {
		display: block;
	}
}
</style>
