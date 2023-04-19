<template>
	<div class="marketing">
		<div class="marketing__title">РЕКЛАМА</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.marketing {
	width: 100%;
	background: #D9D9D9;
	height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;


	@media (max-width: 768.98px) {
		padding: 0 20px;
		margin: 0 -20px;
	}

	&__title {
		font-weight: 600;
		font-size: 64px;
		color: #FFFFFF;
	}
}
</style>