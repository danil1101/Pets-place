<template>
	<div class="about">
		<div class="about__container">
			<Marketing class="about__marketing"/>
			<q-breadcrumbs active-color="#858585" class="about__breadcrumbs">
				<q-breadcrumbs-el label="Главная" />
				<q-breadcrumbs-el label="О нас" />
			</q-breadcrumbs>
			<div class="about__main">
				<div class="about__title">Pets.Place</div>
				<div class="about__text">
					<p>
						Крупнейший Российский (международный) интернет-портал для совершения безопасных и ответственных сделок по купле-продаже животных и сопутствующих товаров
					</p>
				</div>
				<div class="about__row ">
					<div class="about__column column">
						<img src="../assets/AboutPage/col_1.png" class="column__img" alt="">
					</div>
					<div class="about__column column">
						<div class="column__title">Уникальная онлайн платформа по продаже животных</div>
						<div class="column__text">Наши коллекции отличаются лаконичным дизайном, качественными материалами и удобными фасонами разных размеров и форм. Мы фокусируемся на комфорте и создаем одежду, в которой вы можете быть собой. Наша одежда не акцентирует внимание на себе, а лишь подчеркивает достоинства вашей фигуры.</div>
						<img src="../assets/AboutPage/col_2.png" class="column__img" alt="">
					</div>
				</div>
				<div class="about__subtitle">Преимущества платформы:</div>
				<ul class="about__list">
					<li class="about__item">Профильное интернет-площадке по купле-продаже животных</li>
					<li class="about__item">Создание открытой конкуренции между заводчиками за счёт общей площадки, возможность выбора для покупателей</li>
					<li class="about__item">Возможность получить экспертное заключение о состоянии здоровья животного перед покупкой</li>
					<li class="about__item">Информационная поддержка Продавцов, Покупателей, Партнеров проекта</li>
					<li class="about__item">Содействие от выбора животного до его перевозки и страхования</li>
					<li class="about__item">Большое зоо-сообщество: заводчики, ветеринары, научные деятели, профильные магазины и иные организации</li>
					<li class="about__item">Возможность размещения товаров на продажу</li>
					<li class="about__item">Перспектива развития образовательного и развлекательного направлений</li>
				</ul>
				<div class="about__services">
					<div class="service__col service">
						<img src="../assets/AboutPage/services/service_1.png" class="service__img" alt="">
						<div class="service__title">Наши Услуги</div>
					</div>
					<div class="service__col service">
						<img src="../assets/AboutPage/services/service_2.png" class="service__img" alt="">
						<div class="service__title">поиск Товаров</div>
					</div>
					<div class="service__col service">
						<img src="../assets/AboutPage/services/service_3.png" class="service__img" alt="">
						<div class="service__title">Поиск Объявлений</div>
					</div>
					<div class="service__col service">
						<img src="../assets/AboutPage/services/service_4.png" class="service__img" alt="">
						<div class="service__title">Новости / Блог</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Marketing from '../components/common/Marketing.vue'

</script>

<style lang="scss" scoped>
.about {
		&__container {
		}
		&__marketing {
			@include adaptiveValue("margin-bottom", 40, 20);
		}
		&__breadcrumbs {
			@include adaptiveValue("margin-bottom", 40, 20);
		}
		&__main {
		}
		&__title {
			@include adaptiveValue("margin-bottom", 40, 20);
			font-weight: 600;
			@include adaptiveValue("font-size", 32, 24);
			line-height: 38px;
			text-align: center;
			text-transform: uppercase;
			color: #333333;
		}
		&__text {
			width: 100%;
			@include adaptiveValue("margin-bottom", 40, 20);
			padding: 16px 0;
			p {
				padding: 0 16px;
			}
			@include adaptiveValue("font-size", 30, 18);
			background: #22A094;
			border-radius: 5px;
			font-weight: 600;
			text-align: center;
			color: #FFFFFF;
		}
		&__row {
			display: flex;
			justify-content: space-between;
			@include adaptiveValue("margin-bottom", 40, 20);
			@media (max-width:$mobile){
				flex-wrap: wrap;
			}
		}
		&__column {
			min-height: 100%;
			display: flex;
			flex-direction: column;
			&:first-child{
				flex: 0 1 31.76%;
				img{
					height: 100%;
				}
				@media (max-width:$mobile){
					flex: 1 1 100%;
				}
			}
			&:last-child{
				flex: 0 1 65.92%;
				@media (max-width:$mobile){
					flex: 1 1 100%;
				}
			}
			
		}
		&__subtitle {
			font-weight: 700;
			@include adaptiveValue("font-size", 24, 18);
			line-height: 28px;
			@include adaptiveValue("margin-bottom", 30, 15);
			color: #000000;
		}
		&__list {
			li {
				list-style: disc;
			}
			margin-left: 20px;
			font-weight: 400;
			@include adaptiveValue("font-size", 18, 16);
			line-height: 150%;
			@include adaptiveValue("margin-bottom", 70, 40);
			color: #000000;

		}
		&__item {
		}
		&__services {
			@include adaptiveValue("margin-bottom", 100, 75);
			flex-wrap: wrap;
			@include adaptiveValue("font-size", 18, 16);
			display: flex;
			justify-content: space-between;
			@include adaptiveValue("padding-bottom", 60, 30);
			@include adaptiveValue("padding-top", 60, 30);
			@include adaptiveValue("padding-left", 70, 10);
			@include adaptiveValue("padding-right", 70, 10);
			background: rgba(34, 160, 148, 0.3);
			@include adaptiveValue("border-radius", 50, 30);
			margin: 0 -70px;
			@include adaptiveValue("row-gap", 30, 20);
			@media (max-width:$tablet){
				margin: 0 -20px;
			}
			@media (max-width:$tablet){
				margin: 0 -10px;
				justify-content: center;
				align-items: center;
				display: flex;
			}
		}
}

.column {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
		&__img {
			width: 100%;
			height: auto;
			object-fit: cover;
			@media (max-width:$mobile){
					
					max-height: 350px;
			}
		}
		&__title {
			font-weight: 700;
			@include adaptiveValue("margin-bottom", 30, 15);
			@include adaptiveValue("font-size", 24, 18);
			line-height: 110%;
			color: #000000;
		}
		&__text {
			font-weight: 400;
			@include adaptiveValue("font-size", 18, 16);
			line-height: 21px;
			@include adaptiveValue("margin-bottom", 40, 20);
			color: #000000;

		}
}
.service {
	flex: 0 1 23.03%;
	@media (max-width:$tablet){
		flex: 0 1 48.03%;
	}
	@media (max-width:$mobileSmall){
		flex: 1 1 100%;
		padding: 0 15px;
	}
	max-width: rem(300);
	position: relative;
	height: 100%;
	align-items: center;
	display: flex;
		&__col {
			
		}
		&__img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&__title {
			position: absolute;
			left: 50%;
			transform: translate(-50%);
			font-weight: 600;
			font-size: 16px;
			line-height: 19px;
			text-align: center;
			text-transform: uppercase;
			color: #FFFFFF;
		}
}
</style>