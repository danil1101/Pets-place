<template>
	<div class="reset-password-page">
		<div class="reset-password-page__container">
			<div class="reset-password-page__body">
				<div class="reset-password-page__title">Восстановление пароля</div>
				<form class="reset-password-page__form form">
					<div class="form__group">
						<div class="form__label">Логин</div>
						<q-input v-model="login" filled type="text" placeholder="Логин/email"></q-input>
					</div>
					<div class="form__button">
						<q-btn color="secondary" :label="`Отправить`">
						</q-btn>
						<q-btn :label="`Вернуться к логину`">
						</q-btn>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const login = ref('')
</script>

<style lang="scss" scoped>
.reset-password-page {
	position: relative;

	padding: 80px 0 250px 0;

	@media (max-width: 768.98px) {
		padding: 50px 0 50px 0;
	}

	&__container {
		display: flex;
		justify-content: center;

		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			width: 100vw;
			margin: 0 auto;
			height: 100%;
			background: url('../assets/ResetPasswordPage/background.png') 80% / cover no-repeat;

		}

	}

	&__img {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		position: absolute;
		z-index: 10;
		display: none;
	}

	&__body {
		padding: relative;
		z-index: 15;
	}

	&__title {
		font-size: 30px;
		font-weight: 500;
		line-height: 120%;
		text-align: center;
		letter-spacing: -0.03em;
		text-transform: uppercase;
		margin-bottom: 40px;

		@media (max-width: 768.98px) {
			font-size: 22px;
		}
	}

	&__form {
		display: flex;



		.q-btn {
			margin-top: 25px;
			font-size: 20px;
			font-weight: 700;


			@media (max-width: 768.98px) {
				font-size: 18px;
			}

			@media (max-width: 425.98px) {
				margin-top: 15px;
				font-size: 16px;
			}

		}
	}



	&__dep {}
}

.form {
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 25px;

	&__group {
		display: flex;
		flex-direction: column;
		gap: 10px;
		position: relative;

		span {
			cursor: pointer;
			position: absolute;
			bottom: 15px;
			right: 15px;
			font-weight: 600;
			text-transform: uppercase;
			font-size: 14px;
			color: #368add;

			@media (max-width: 768.98px) {
				font-size: 12px;
			}
		}

	}

	&__label {
		font-size: 18px;
		line-height: 100%;
		color: #0C0C0C;

		@media (max-width: 768.98px) {
			font-size: 16px;
		}
	}

	&__button {
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (max-width: 768.98px) {
			flex-wrap: wrap;

			.q-btn {
				flex: 1 1 100%;
			}
		}

		.q-btn:nth-child(2) {
			max-height: 28px;
			padding: 4px 10px !important;
			background: #fff;
			color: #368add;
			font-size: 14px !important;
		}

	}
}
</style>