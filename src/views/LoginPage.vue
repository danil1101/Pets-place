<template>
	<div class="login-page">
		<div class="login-page__container">
			<div class="login-page__body">
				<div class="login-page__title">Вход в личный кабинет</div>
				<form class="login-page__form form">
					<div class="form__group">
						<div class="form__label">Логин</div>
						<q-input v-model="login" filled type="text" placeholder="Логин/email"></q-input>
					</div>
					<div class="form__group">
						<div class="form__label">Пароль</div>
						<q-input v-model="password" filled type="text" placeholder="*******"></q-input>
						<span><router-link to="/reset-password">Забыли пароль</router-link></span>
					</div>
					<q-btn color="secondary" @click="userStore.user = true" :label="`Войти в личный кабинет`">
					</q-btn>
				</form>
				<div class="login-page__dep dep">
					<router-link to="/register"> <q-btn color="secondary" class="dep__button" label="Регистрация"></q-btn>
					</router-link>
					<div class="dep__text">если у вас еще нет аккаунта</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../stores/UserStore';
const password = ref('')
const login = ref('')

const userStore = useUserStore();
</script>

<style scoped lang="scss">
.login-page {
	position: relative;

	padding: 60px 0 150px 0;

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
			background: url('../assets/LoginPage/background.png') 80% / cover no-repeat;

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

}

.dep {
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 768.98px) {
		flex-direction: column;
		align-items: start;
		gap: 10px;
	}

	.q-btn {
		font-weight: 700;
	}

	&__button {
		@media (max-width: 768.98px) {
			width: auto;
		}
	}

	&__text {
		font-size: 18px;
		line-height: 100%;
		flex: 0 1 57.14%;
		color: #0C0C0C;

		@media (max-width: 768.98px) {
			font-size: 16px;
		}
	}
}
</style>