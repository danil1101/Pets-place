<template>
	<header class="header" :class="{ 'active-menu': isActiveMenu }">
		<div class="header__container">
			<div class="header__top">
				<div class="header__logo logo">
					<img src="../assets/logo.png" class="logo__image" alt="PetsPace" />
					<div class="logo__text">Опыт, создающий дружбу навсегда</div>
				</div>
				<div class="header__main main">
					<router-link to="/login"><Button v-if="!userStore.user"
							@click="userStore.user = true">Вход/регистрация</Button></router-link>
					<div class="main__body" v-if="userStore.user">
						<div class="main__buttons">
							<div class="icon"><q-icon :name="matSearch" /></div>
							<div class="icon"><q-icon :name="matPerson" /></div>
							<div class="icon"><q-icon :name="matFavorite" /> <span class="circle">5</span></div>
							<div class="icon"><q-icon :name="matShoppingCart" /> <span class="circle">3</span></div>
							<div class="main__burger">
								<div class="icon"><q-icon :name="matMenu" v-if="!isActiveMenu" @click="isActiveMenu = true" /></div>
								<div class="icon"><q-icon :name="matClose" v-if="isActiveMenu" @click="isActiveMenu = false" /></div>
							</div>
						</div>

						<div class="main__text">Добрый день, Михаил / <span @click="() => userStore.user = false">Выйти</span></div>
					</div>

				</div>
			</div>
		</div>
		<div class="header__down down" :class="{ 'show': isActiveMenu }">
			<div class="down__row">
				<div class="down__item item">
					<q-btn-dropdown class="item__title" label="Объявления">
						<div class="item__list">
							<q-list>
								<q-item clickable>
									<q-item-section>
										<q-item-label>Подбор породы</q-item-label>

									</q-item-section>
								</q-item>

								<q-item clickable v-close-popup>
									<q-item-section>
										<q-item-label>Купить собаку</q-item-label>
									</q-item-section>
								</q-item>

								<q-item clickable v-close-popup>
									<q-item-section>
										<q-item-label>Купить кошку</q-item-label>
									</q-item-section>
								</q-item>
								<q-item clickable v-close-popup>
									<q-item-section>
										<q-item-label>Купить птицу</q-item-label>
									</q-item-section>
								</q-item>
							</q-list>
							<q-list>
								<q-item clickable>
									<q-item-section>
										<q-item-label>Подбор породы</q-item-label>

									</q-item-section>
								</q-item>

								<q-item clickable v-close-popup>
									<q-item-section>
										<q-item-label>Купить собаку</q-item-label>
									</q-item-section>
								</q-item>

								<q-item clickable v-close-popup>
									<q-item-section>
										<q-item-label>Купить кошку</q-item-label>
									</q-item-section>
								</q-item>
								<q-item clickable v-close-popup>
									<q-item-section>
										<q-item-label>Купить птицу</q-item-label>
									</q-item-section>
								</q-item>
							</q-list>
						</div>

					</q-btn-dropdown>

				</div>
				<div class="down__item item">
					<q-btn-dropdown class="item__title" label="Услуги">
						<q-list>
							<q-item clickable v-close-popup>
								<q-item-section>
									<q-item-label>Подбор породы</q-item-label>
								</q-item-section>
							</q-item>

							<q-item clickable v-close-popup>
								<q-item-section>
									<q-item-label>Купить собаку</q-item-label>
								</q-item-section>
							</q-item>

							<q-item clickable v-close-popup>
								<q-item-section>
									<q-item-label>Купить кошку</q-item-label>
								</q-item-section>
							</q-item>
							<q-item clickable v-close-popup>
								<q-item-section>
									<q-item-label>Купить птицу</q-item-label>
								</q-item-section>
							</q-item>
						</q-list>
					</q-btn-dropdown>

				</div>
				<div class="down__item item">
					<q-btn-dropdown class="item__title" label="Товары">
						<q-list>
							<q-item clickable v-close-popup>
								<q-item-section>
									<q-item-label>Подбор породы</q-item-label>
								</q-item-section>
							</q-item>

							<q-item clickable v-close-popup>
								<q-item-section>
									<q-item-label>Купить собаку</q-item-label>
								</q-item-section>
							</q-item>

							<q-item clickable v-close-popup>
								<q-item-section>
									<q-item-label>Купить кошку</q-item-label>
								</q-item-section>
							</q-item>
							<q-item clickable v-close-popup>
								<q-item-section>
									<q-item-label>Купить птицу</q-item-label>
								</q-item-section>
							</q-item>
						</q-list>
					</q-btn-dropdown>

				</div>
				<div class="down__item item">
					<q-btn-dropdown class="item__title" label="Блог">
						<q-list>
							<q-item clickable v-close-popup>
								<q-item-section>
									<q-item-label>Подбор породы</q-item-label>
								</q-item-section>
							</q-item>

							<q-item clickable v-close-popup>
								<q-item-section>
									<q-item-label>Купить собаку</q-item-label>
								</q-item-section>
							</q-item>

							<q-item clickable v-close-popup>
								<q-item-section>
									<q-item-label>Купить кошку</q-item-label>
								</q-item-section>
							</q-item>
							<q-item clickable v-close-popup>
								<q-item-section>
									<q-item-label>Купить птицу</q-item-label>
								</q-item-section>
							</q-item>
						</q-list>
					</q-btn-dropdown>

				</div>
			</div>
			<div class="down__info down-info">
				<div class="down-info__number"><a href="tel:11234567889">+1 123 456 78 89</a></div>
				<div class="down-info__social">
					<a href="#"><img src="../assets/tg-white.svg" alt=""></a>
					<a href="#"><img src="../assets/tg-white.svg" alt=""></a>
					<a href="#"><img src="../assets/tg-white.svg" alt=""></a>
					<a href="#"><img src="../assets/tg-white.svg" alt=""></a>
				</div>
				<Button v-if="!userStore.user" @click="userStore.user = true">Вход/регистрация</Button>
				<Button v-if="userStore.user" @click="userStore.user = false">Выйти</Button>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { matSearch, matPerson, matFavorite, matShoppingCart, matMenu, matClose } from '@quasar/extras/material-icons'
import Button from "./common/Button.vue"
import { useUserStore } from '../stores/UserStore';
const userStore = useUserStore();

const isActiveMenu = ref(false);
</script>

<style lang="scss" scoped>
.header {
	color: #333333;



	&__container {
		display: flex;
		flex-direction: column;

		@media (max-width: 768.98px) {
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			z-index: 100;
			position: relative;
		}

	}

	&__top {
		padding: 17px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

}

.logo {
	display: flex;
	align-items: center;

	&__image {
		@media (max-width: 768.98px) {
			max-width: 60px;
		}

		@media (max-width: 425.98px) {
			max-width: 50px;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;


		}
	}

	&__text {
		@media (max-width: 768.98px) {
			display: none;
		}

		padding-left: 40px;
		max-width: 240px;
		font-size: 24px;
		line-height: 28px;
	}
}


.main {
	display: flex;

	&__burger {
		@media (min-width: 768.98px) {
			display: none;
		}


	}

	&__body {
		display: flex;
		flex-direction: column;
	}

	&__buttons {
		display: flex;
		justify-content: flex-end;
		gap: 25px;

		.icon {
			position: relative;

			.circle {
				top: -5px;
				font-size: 10px;
				font-weight: 600;
				display: flex;
				align-items: center;
				text-align: center;
				right: -3px;
				border-radius: 50%;
				background-color: $orange;

				@media (max-width: 768.98px) {
					color: #fff;
				}

				padding: 0px 5px;
				position: absolute;
			}
		}

		.q-icon {
			font-size: 25px;

			@media (max-width: 768.98px) {
				color: #22A094;
			}
		}
	}

	&__text {
		padding-top: 5px;
		font-size: 18px;
		text-align: right;

		@media (max-width: 768.98px) {
			display: none;
		}

		span {
			cursor: pointer;
			text-decoration: underline;
		}
	}
}
</style>

<style lang="scss" >
.down-info {
	@media (min-width: 768.98px) {
		display: none;
	}

	display: flex;
	flex-direction: column;
	justify-content: end;
	flex: 1 1 auto;
	padding: 10px;
	padding-top: 40px;

	&__number {
		width: 100%;
		padding: 10px 0;
		text-align: center;
		font-size: 16px;
		border: 1px solid #fff;
	}

	&__social {
		display: flex;
		justify-content: center;
		gap: 20px;
		padding: 18px 0;
	}
}

.q-menu {
	margin: 0 -2px;
	display: flex !important;

	overflow-y: hidden !important;
	max-height: 350px !important;
	bottom: 0 !important;
	position: absolute !important;
	background: none !important;
	border-radius: 0px !important;

	height: auto !important;
	box-shadow: none !important;
}

[aria-expanded="true"] {
	@media (max-width: 768.98px) {
		background: $lightGreen ;
	}

	@media (min-width: 768.98px) {
		background: $lightGreen !important;
	}




}




.q-list {

	z-index: 12 !important;
	position: relative;
	box-shadow: none !important;
	color: #fff;
	max-width: 200px !important;
	width: 100% !important;
	background: $lightGreen;

	border-right: 1px solid #fff;

	@media (max-width: 768.98px) {
		border-top: 1px solid #fff;
		border-bottom: 1px solid #fff;
	}
}

.q-item {
	font-weight: 500;
	width: 100%;

	@media (max-width: 768.98px) {
		width: 100%;
		display: flex;
		font-size: 18px;
		padding: 10px !important;
	}
}

.item__list {


	&>.q-list {
		width: 100% !important;
		max-width: 200px !important;
	}

	display: flex;


}


.down {
	margin: 0 auto;
	color: #fff;
	background-color: $green;
	display: flex;
	flex-direction: column;

	@media (max-width: 768.98px) {
		flex-direction: column;
		display: flex;
		padding-top: 10px;
		transition: all 0.3s ease 0s;
		position: relative;
		position: fixed;
		top: 86px;
		z-index: 10;
		bottom: 0;
		width: 75%;
		left: -100%;
	}


	&.show {
		@media (max-width: 768.98px) {
			left: -2px;
		}
	}



	&__row {
		justify-content: center;
		display: flex;
		position: relative;

		@media (max-width: 768.98px) {
			flex-direction: column;
			justify-content: start;

		}

	}



	.q-btn {
		padding: 10px 0;
		text-transform: none;
		font-size: 18px;
		font-weight: 600;
		width: 100%;

		@media (max-width: 768.98px) {
			width: 100%;
			display: flex;
			font-weight: 500;
			align-items: start;
			padding: 10px;
		}
	}

	&__item {
		font-weight: 600;
		font-size: 18px;
		border-right: 1px solid #fff;
		max-width: 200px;
		width: 100%;
		text-align: center;

		@media (max-width: 768.98px) {
			border: none;
			border-bottom: 1px solid #fff;
		}

		&:first-child {
			border-left: 1px solid #fff;
		}





	}
}

.q-btn-dropdown__arrow {
	display: none !important;

	@media (max-width: 768.98px) {
		display: block;
	}
}

.q-btn-dropdown {


	&::before {
		display: none !important;
	}


}
</style>