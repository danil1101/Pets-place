<template>
	<button class="button" :disabled="disabled" @click="handleClick">
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
	type: {
		type: String,
		default: 'primary'
	},
	disabled: {
		type: Boolean,
		default: false
	}
});

const emits = defineEmits(['click']);

function handleClick() {
	emits('click');
}
</script>

<style lang="scss" scoped>
@import "../../index.scss";

.button {
	background: $orange;
	padding: 10px 17px;
	font-size: 16px;
	font-weight: 400;
	max-height: 40px;
	width: 100%;
	border-radius: 3px;
	justify-content: center;
	display: flex;
	align-items: center;
	text-align: center;
	color: #fff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	transition: all 0.3s ease 0s;

	&:hover {
		background: lighten($orange , 5%);
	}
}

.disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
</style>