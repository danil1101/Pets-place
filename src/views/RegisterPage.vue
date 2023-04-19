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
							<input type="text" class="form__input" placeholder="Выберите страну">
						</div>
						<div class="form__group">
							<div class="form__label">Имя<span>*</span></div>
							<input type="text" class="form__input" placeholder="Ваше Имя">
						</div>
						<div class="form__group">
							<div class="form__label">Телефон<span>*</span></div>
							<input type="number" class="form__input" placeholder="+7 (***) ***-**-**">
						</div>
						<div class="form__group">
							<div class="form__label">Пароль</div>
							<input type="number" class="form__input" placeholder="Придумайте пароль 8 знаков">
						</div>
					</div>
					<div class="form__groups">
						<div class="form__group">
							<div class="form__label">Страна <span> * </span> </div>
							<input type="text" class="form__input" placeholder="Выберите страну">
						</div>
						<div class="form__group">
							<div class="form__label">Имя<span>*</span></div>
							<input type="text" class="form__input" placeholder="Ваше Имя">

						</div>
						<div class="form__group">
							<div class="form__label">Телефон<span>*</span></div>
							<input type="number" class="form__input" placeholder="+7 (***) ***-**-**">

						</div>
						<div class="form__group">
							<div class="form__label">Пароль</div>
							<input type="number" class="form__input" placeholder="Придумайте пароль 8 знаков">

						</div>
					</div>

				</form>
				<div class="register-page__dep dep">
					<q-btn color="secondary" class="dep__button" label="Зарегестрироваться в ЛК"></q-btn>
					<div class="dep__confirm">
						<input type="checkbox" class="dep__chekbox">
						<p class="dep__text">Нажимая на кнопку регистрации, вы даете согласие на обработку
							персональных данных и
							соглаетесь с <span>политикой конфиденциальности</span></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

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

	&__chekbox {}

	&__text {
		font-size: 12px;
		line-height: 100%;
		color: #0C0C0C;
		max-width: 335px;
		padding-left: 8px;

		span {
			text-decoration: underline;
		}
	}
}
</style>