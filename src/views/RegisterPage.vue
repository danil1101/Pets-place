<template>
	<div class="register-page">
		<div class="register-page__container">
			<img class="register-page__img" src="../assets/RegisterPage/background.png">
			<div class="register-page__body">
				<div class="register-page__title">Регистрация в личный кабинет</div>
				<form class="register-page__form form">
					<div class="form__groups">
						<div class="form__group">
							<div class="form__label">Страна <span> * </span> </div>
							<q-input v-model="country" filled type="text" placeholder="Выберите страну"></q-input>
						</div>
						<div class="form__group">
							<div class="form__label">Имя<span>*</span></div>
							<q-input v-model="name" filled type="text" placeholder="Ваше Имя"></q-input>
						</div>
						<div class="form__group">
							<div class="form__label">Телефон<span>*</span></div>
							<q-input v-model="number" filled type="number" placeholder="+7 (***) ***-**-**"></q-input>
						</div>
						<div class="form__group">
							<div class="form__label">Пароль</div>
							<q-input v-model="password" filled type="text" placeholder="Придумайте пароль 8 знаков"></q-input>
						</div>
					</div>
					<div class="form__groups">
						<div class="form__group">
							<div class="form__label">Регион</div>
							<q-input v-model="region" filled type="text" placeholder="Укажите регион"></q-input>
						</div>
						<div class="form__group">
							<div class="form__label">Имя</div>
							<q-input v-model="surname" filled type="text" placeholder="Фамилия"></q-input>

						</div>
						<div class="form__group">
							<div class="form__label">E-mail</div>
							<q-input v-model="email" filled type="text" placeholder="E-mail"></q-input>

						</div>
						<div class="form__group">
							<div class="form__label">Подтверждение пароля</div>
							<q-input v-model="password" filled type="text" placeholder="Повторите пароль"></q-input>
						</div>
					</div>
				</form>
				<div class="register-page__dep dep">
					<q-btn color="secondary" class="dep__button" label="Зарегестрироваться в ЛК"></q-btn>
					<div class="dep__confirm">
						<div class="dep__checkbox checkbox">
							<input id=" c_1" class="checkbox__input" data-error="Ошибка" type="checkbox" value="1" name="form[]">
							<label for="c_1" class="checkbox__label"><span class="checkbox__text">Нажимая на кнопку регистрации, вы
									даете согласие на обработку
									персональных данных и
									соглаетесь с <span>политикой конфиденциальности</span></span></label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const country = ref('')
const name = ref('')
const number = ref('')
const password = ref('')
const region = ref('')
const surname = ref('')
const email = ref('')
</script>

<style scoped lang="scss">
.register-page {

	position: relative;

	padding: 60px 0 150px 0;

	@media (max-width: 768.98px) {
		padding: 50px 0 50px 0;
	}

	&__container {
		display: flex;
		justify-content: center;
		max-width: 800px;



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
			background: url('../assets/RegisterPage/background.png') 80% / cover no-repeat;

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
		position: relative;
		width: 100%;
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
		.q-btn {
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

}

.form {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;

	&__groups {
		flex: 0 1 48%;

		@media (max-width:991.98px) {
			flex: 1 1 100%;
		}

		@media (max-width:991.98px) {
			flex: 1 1 100%;
		}
	}


	&__group {
		display: flex;
		margin-bottom: 20px;
		flex-direction: column;
		gap: 10px;
		position: relative;


	}

	&__label {
		font-size: 18px;
		line-height: 100%;
		color: #0C0C0C;

		span {
			position: static;
			color: #FF0000;
		}

		@media (max-width: 768.98px) {
			font-size: 16px;
		}
	}

	&__input {
		background: #FFFFFF;
		border: 1px solid #D9D9D9;
		padding: 15px;

		&::placeholder {
			font-size: 18px;

			@media (max-width: 768.98px) {
				font-size: 16px;
			}

			line-height: 100%;
			color: #818181;
		}
	}
}

.dep {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 5px;

	@media (max-width:768.98px) {
		gap: 20px;
	}

	&__button {
		flex: 0 1 44%;

		@media (max-width:768.98px) {
			flex: 1 1 100%;
		}
	}

	&__confirm {
		flex: 0 1 48%;
		display: flex;

		@media (max-width:768.98px) {
			flex: 1 1 100%;
		}

		align-items: start;
	}

	&__checkbox {
		.checkbox {
			position: relative;

			&:not(:last-child) {
				margin-bottom: 5px;
			}

			&__input {
				position: absolute;
				width: 0;
				height: 0;
				opacity: 0;

				&:focus+.checkbox__label:before {
					box-shadow: 0 0 5px #000;
				}

				&:checked+.checkbox__label:before {
					background: #000;
				}
			}

			&__label {
				cursor: pointer;
				display: inline-flex;
				align-items: center;
				position: relative;
				gap: 10px;

				&:before {
					content: "";
					align-self: flex-start;
					flex: 0 0 20px;
					width: 20px;
					height: 20px;
					border: 1px solid #a7a9ac;
				}
			}

			&__text {
				span {
					text-decoration: underline;
				}
			}
		}

	}

	&__text {
		font-size: 12px;
		line-height: 100%;
		color: #0C0C0C;
		max-width: 335px;
		padding-left: 8px;


	}
}

.checkbox {
	position: relative;

	&:not(:last-child) {
		margin-bottom: em(5);
	}

	// .checkbox__input
	&__input {
		position: absolute;
		width: 0;
		height: 0;
		opacity: 0;

		&:focus+.checkbox__label:before {
			box-shadow: 0 0 5px #000;
		}

		&:checked+.checkbox__label:before {
			background: #000;
		}
	}

	// .checkbox__label
	&__label {
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		position: relative;
		gap: 10px;

		&:before {
			content: "";
			align-self: flex-start;
			flex: 0 0 20px;
			width: 20px;
			height: 20px;
			border: 1px solid #a7a9ac;
		}
	}

	// .checkbox__text
	&__text {}
}
</style>