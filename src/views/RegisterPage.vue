<template>
	<div class="register-page__container">
		<img class="register-page__img" src="../assets/RegisterPage/background.png">
		<div class="register-page__body">
			<div class="register-page__title">Регистрация в личный кабинет</div>
			<form class="register-page__form form">
				<div class="form__groups">
					<div class="form__group">
						<div class="form__label">Страна<span>*</span></div>
						<input type="text" class="form__input" placeholder="Выберите страну">
					</div>
					<div class="form__group">
						<div class="form__label">Имя<span>*</span></div>
						<input type="text" class="form__input" placeholder="Ваше Имя">
						<span>Забыли пароль</span>
					</div>
					<div class="form__group">
						<div class="form__label">Телефон<span>*</span></div>
						<input type="number" class="form__input" placeholder="+7 (***) ***-**-**">
						<span>Забыли пароль</span>
					</div>
					<div class="form__group">
						<div class="form__label">Пароль</div>
						<input type="number" class="form__input" placeholder="Придумайте пароль 8 знаков">
						<span>Забыли пароль</span>
					</div>
				</div>
				<q-btn color="secondary" :label="`Войти в личный кабинет`">
				</q-btn>
			</form>
			<div class="register-page__dep dep">
				<q-btn color="secondary" class="dep__button" label="Регистрация"></q-btn>
				<div class="dep__text">если у вас еще нет аккаунта</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sccs"></style>