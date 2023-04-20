<template>
	<div class="personal-account-page">
		<div class="personal-account-page__container">
			<q-breadcrumbs active-color="black" class="personal-account-page__breadcrumbs">
				<q-breadcrumbs-el label="Главная" />
				<q-breadcrumbs-el label="Личный кабинет" />
			</q-breadcrumbs>
			<div class="personal-account-page__body">
				<div class="personal-account-page__title">Ваш личный кабинет</div>
				<div class="personal-account-page__subtitle">На сайте с: 22 мар. 2023 г</div>
				<div class="personal-account-page__row column">
					<div class="col">
						<span>Подтверждение E-mail</span>
						<q-btn style="background: #22a094; color: white" label="Подтвердить"></q-btn>
					</div>
					<div class="col">
						<span>Подтверждение номера телефона</span>
						<q-btn style="background: none; color: white" label="Выполнено" class=""></q-btn>
					</div>
					<div class="col">
						<span>Данные профиля</span>
						<q-btn style="background: #22a094; color: white" label="Мои данные"></q-btn>
					</div>
					<div class="col">
						<span>Разместить объявление</span>
						<q-btn style="background: #F1942C; color: white" label="Создать объявление"></q-btn>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.personal-account-page {
	margin: 40px 0 80px 0;

	&__container {
		display: flex;
		flex-direction: column;
	}

	&__breadcrumbs {
		font-size: 14px;
		line-height: 16px;

		color: #858585;
	}

	&__body {
		width: 100%;
		text-align: center;
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	&__title {
		margin: 40px 0 20px 0;
		font-size: 32px;
		line-height: 120%;

		letter-spacing: -0.03em;
		text-transform: uppercase;

		color: #000000;
	}

	&__subtitle {
		font-size: 18px;
		line-height: 100%;
		color: #0C0C0C;
		margin-bottom: 40px;
		text-align: center;
	}

	&__row {
		width: 100%;

		.col {
			padding: 12px;
			display: flex;
			justify-content: space-between;
			flex: 1 1 100%;
			align-items: center;
			background: #fff;
			transition: all 0.1s ease 0s;

			.q-btn {
				font-size: 14px;
				padding: 2px 10px;
			}

			&:hover {
				background: rgba(34, 160, 148, 0.1);
			}
		}
	}
}

.column {}
</style>