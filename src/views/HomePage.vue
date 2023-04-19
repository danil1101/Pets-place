<template>
	<div class="home">
		<div class="home__container">
			<div class="home__search-block search-block">
				<div class="search-block__title">Заголовок / Уникальное торговое предложение</div>
				<div class="search-block__subtitle">Заголовок</div>
				<q-input color="teal" outlined v-model="text" label="Поиск">
					<template v-slot:append>
						<span><a href="#">Расширенный поиск</a></span>
						<q-icon :name="matSearch" />
					</template>
				</q-input>
			</div>
			<div class="home__catalog catalog-two-three">
				<div class="catalog-two-three__title">Выберите своего нового друга</div>
				<div class="catalog-two-three__row">
					<div class="catalog-two-three__item"><img src="../assets/homePage/catalog-two-three/1.png"
							alt=""><span>Собаки</span></div>
					<div class="catalog-two-three__item"><img src="../assets/homePage/catalog-two-three/2.png"
							alt=""><span>Кошки</span></div>
					<div class="catalog-two-three__item"><img src="../assets/homePage/catalog-two-three/3.png" alt=""><span>Мелкие
							животные</span>
					</div>
					<div class="catalog-two-three__item"><img src="../assets/homePage/catalog-two-three/4.png"
							alt=""><span>Птицы</span></div>
					<div class="catalog-two-three__item"><img src="../assets/homePage/catalog-two-three/5.png" alt=""><span>С/Х
							животные</span></div>
					<div class="catalog-two-three__item"><img src="../assets/homePage/catalog-two-three/6.png"
							alt=""><span>Лошади</span></div>
					<div class="catalog-two-three__item"><img src="../assets/homePage/catalog-two-three/7.png"
							alt=""><span>Экзотика</span></div>
				</div>
			</div>
			<div class="home__catalog catalog-four">
				<div class="catalog-four__header">
					<div class="catalog-four__title">ТОП-объявления</div>
					<q-btn class="catalog-four__button button--top" style="background: #F1942C; color: white" icon-right="east"
						label="Смотреть все"></q-btn>
				</div>
				<div class="catalog-four__row">
					<div class="catalog-four__item">
						<q-icon :name="matFavorite" />
						<img src="../assets/homePage/catalog-four/1.png" />
						<div class="catalog-four__body">
							<div class="catalog-four__desc">
								<div class="catalog-four__city">Город</div>
								<div class="catalog-four__date">Дата</div>
							</div>
							<div class="catalog-four__label">Заголовок</div>
							<div class="catalog-four__info">
								<span>Вид</span>
								<span>Порода</span>
								<span>5000 руб</span>
							</div>
						</div>
					</div>
					<div class="catalog-four__item">
						<img src="../assets/homePage/catalog-four/2.png" />
						<div class="catalog-four__body">
							<div class="catalog-four__desc">
								<div class="catalog-four__city">Город</div>
								<div class="catalog-four__date">Дата</div>
							</div>
							<div class="catalog-four__label">Заголовок</div>
							<div class="catalog-four__info">
								<span>Вид</span>
								<span>Порода</span>
								<span>5000 руб</span>
							</div>
						</div>
					</div>
					<div class="catalog-four__item">
						<img src="../assets/homePage/catalog-four/1.png" />
						<div class="catalog-four__body">
							<div class="catalog-four__desc">
								<div class="catalog-four__city">Город</div>
								<div class="catalog-four__date">Дата</div>
							</div>
							<div class="catalog-four__label">Заголовок</div>
							<div class="catalog-four__info">
								<span>Вид</span>
								<span>Порода</span>
								<span>5000 руб</span>
							</div>
						</div>
					</div>
					<div class="catalog-four__item">
						<img src="../assets/homePage/catalog-four/2.png" />
						<div class="catalog-four__body">
							<div class="catalog-four__desc">
								<div class="catalog-four__city">Город</div>
								<div class="catalog-four__date">Дата</div>
							</div>
							<div class="catalog-four__label">Заголовок</div>
							<div class="catalog-four__info">
								<span>Вид</span>
								<span>Порода</span>
								<span>5000 руб</span>
							</div>
						</div>
					</div>
					<div class="catalog-four__item">
						<img src="../assets/homePage/catalog-four/1.png" />
						<div class="catalog-four__body">
							<div class="catalog-four__desc">
								<div class="catalog-four__city">Город</div>
								<div class="catalog-four__date">Дата</div>
							</div>
							<div class="catalog-four__label">Заголовок</div>
							<div class="catalog-four__info">
								<span>Вид</span>
								<span>Порода</span>
								<span>5000 руб</span>
							</div>
						</div>
					</div>
					<div class="catalog-four__item">
						<img src="../assets/homePage/catalog-four/2.png" />
						<div class="catalog-four__body">
							<div class="catalog-four__desc">
								<div class="catalog-four__city">Город</div>
								<div class="catalog-four__date">Дата</div>
							</div>
							<div class="catalog-four__label">Заголовок</div>
							<div class="catalog-four__info">
								<span>Вид</span>
								<span>Порода</span>
								<span>5000 руб</span>
							</div>
						</div>
					</div>
					<div class="catalog-four__item">
						<img src="../assets/homePage/catalog-four/1.png" />
						<div class="catalog-four__body">
							<div class="catalog-four__desc">
								<div class="catalog-four__city">Город</div>
								<div class="catalog-four__date">Дата</div>
							</div>
							<div class="catalog-four__label">Заголовок</div>
							<div class="catalog-four__info">
								<span>Вид</span>
								<span>Порода</span>
								<span>5000 руб</span>
							</div>
						</div>
					</div>
					<div class="catalog-four__item">
						<img src="../assets/homePage/catalog-four/2.png" />
						<div class="catalog-four__body">
							<div class="catalog-four__desc">
								<div class="catalog-four__city">Город</div>
								<div class="catalog-four__date">Дата</div>
							</div>
							<div class="catalog-four__label">Заголовок</div>
							<div class="catalog-four__info">
								<span>Вид</span>
								<span>Порода</span>
								<span>5000 руб</span>
							</div>
						</div>
					</div>

				</div>
				<q-btn class="catalog-four__button button--down" style="background: #F1942C; color: white" icon-right="east"
					label="Смотреть все"></q-btn>
			</div>
			<Marketing />
			<div class="home__catalog catalog-three-two">
				<div class="catalog-three-two__title">Pets.Place расскажет для вас</div>
				<div class="catalog-three-two__row">
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/1/1.png"
							alt="" /><span>Уход</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/1/2.png"
							alt="" /><span>Интервью</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/1/3.png"
							alt="" /><span>Новости</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/1/4.png"
							alt="" /><span>Ветеринария</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/1/5.png"
							alt="" /><span>Кормление</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/1/6.png"
							alt="" /><span>Тренинг</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/1/7.png"
							alt="" /><span>Породы</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/1/8.png"
							alt="" /><span>Полезное</span></div>
				</div>
			</div>
			<div class="home__catalog catalog-slider">

				<q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated arrows
					class="catalog-slider__slider">
					<q-carousel-slide :name="1">
						<div class="catalog-slider__slide slide-home">
							<img class="slide-home__img" src="../assets/homePage/slide.png" />
							<div class="slide-home__body">
								<div class="slide-home__title">Заголовок</div>
								<div class="slide-home__text">Далеко-далеко за словесными горами в стране гласных и согласных живут
									рыбные
									тексты.</div>
							</div>
						</div>
						<div class="catalog-slider__slide slide-home">
							<img class="slide-home__img" src="../assets/homePage/slide.png" />
							<div class="slide-home__body">
								<div class="slide-home__title">Заголовок</div>
								<div class="slide-home__text">Далеко-далеко за словесными горами в стране гласных и согласных живут
									рыбные
									тексты.</div>
							</div>
						</div>
						<div class="catalog-slider__slide slide-home">
							<img class="slide-home__img" src="../assets/homePage/slide.png" />
							<div class="slide-home__body">
								<div class="slide-home__title">Заголовок</div>
								<div class="slide-home__text">Далеко-далеко за словесными горами в стране гласных и согласных живут
									рыбные
									тексты.</div>
							</div>
						</div>
					</q-carousel-slide>
					<q-carousel-slide :name="2">
						<div class="catalog-slider__slide slide-home">
							<img class="slide-home__img" src="../assets/homePage/slide.png" />
							<div class="slide-home__body">
								<div class="slide-home__title">Заголовок</div>
								<div class="slide-home__text">Далеко-далеко за словесными горами в стране гласных и согласных живут
									рыбные
									тексты.</div>
							</div>
						</div>
						<div class="catalog-slider__slide slide-home">
							<img class="slide-home__img" src="../assets/homePage/slide.png" />
							<div class="slide-home__body">
								<div class="slide-home__title">Заголовок</div>
								<div class="slide-home__text">Далеко-далеко за словесными горами в стране гласных и согласных живут
									рыбные
									тексты.</div>
							</div>
						</div>
						<div class="catalog-slider__slide slide-home">
							<img class="slide-home__img" src="../assets/homePage/slide.png" />
							<div class="slide-home__body">
								<div class="slide-home__title">Заголовок</div>
								<div class="slide-home__text">Далеко-далеко за словесными горами в стране гласных и согласных живут
									рыбные
									тексты.</div>
							</div>
						</div>
					</q-carousel-slide>
					<q-carousel-slide :name="3">
						<div class="catalog-slider__slide slide-home">
							<img class="slide-home__img" src="../assets/homePage/slide.png" />
							<div class="slide-home__body">
								<div class="slide-home__title">Заголовок</div>
								<div class="slide-home__text">Далеко-далеко за словесными горами в стране гласных и согласных живут
									рыбные
									тексты.</div>
							</div>
						</div>
						<div class="catalog-slider__slide slide-home">
							<img class="slide-home__img" src="../assets/homePage/slide.png" />
							<div class="slide-home__body">
								<div class="slide-home__title">Заголовок</div>
								<div class="slide-home__text">Далеко-далеко за словесными горами в стране гласных и согласных живут
									рыбные
									тексты.</div>
							</div>
						</div>
						<div class="catalog-slider__slide slide-home">
							<img class="slide-home__img" src="../assets/homePage/slide.png" />
							<div class="slide-home__body">
								<div class="slide-home__title">Заголовок</div>
								<div class="slide-home__text">Далеко-далеко за словесными горами в стране гласных и согласных живут
									рыбные
									тексты.</div>
							</div>
						</div>
					</q-carousel-slide>
				</q-carousel>

			</div>
			<div class="home__catalog catalog-three-two --green">
				<div class="catalog-three-two__title">У нас вы можете купить</div>
				<div class="catalog-three-two__row">
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/2/1.png"
							alt="" /><span>Корма</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/2/2.png"
							alt="" /><span>Игрушки</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/2/3.png"
							alt="" /><span>Домики</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/2/4.png"
							alt="" /><span>Товары
							для лошадей</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/2/5.png"
							alt="" /><span>Террариумы</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/2/6.png"
							alt="" /><span>Одежда</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/2/7.png"
							alt="" /><span>Амуниции</span></div>
					<div class="catalog-three-two__item"><img src="../assets/homePage/catalog-three-two/2/8.png"
							alt="" /><span>Искусство</span></div>
				</div>
			</div>
			<div class="home__catalog catalog-popular">
				<div class="catalog-popular__header">
					<div class="catalog-popular__title">Популярные товары</div>
					<q-btn class="catalog-popular__button" style="background: #F1942C; color: white" icon-right="east"
						label="Смотреть все"></q-btn>
				</div>
				<div class="catalog-popular__row">
					<div class="catalog-popular__item">
						<img src="../assets/homePage/catalog-popular/1.png" />
						<div class="catalog-popular__body">
							<div class="catalog-popular__label">Заголовок</div>
							<div class="catalog-popular__desc">
								<span>Вес упаковки</span>
								<span>Назначение корма, какое-то описание</span>
							</div>
							<div class="catalog-popular__price">
								<span>Цена:</span> 5 000 ₽
							</div>
							<div class="catalog-popular__footer">
								<q-btn style="background: #F1942C; color: white" icon-right="east" label="В корзину"></q-btn>
								<div class="catalog-popular__favorite"><q-icon :name="matFavorite" /></div>
							</div>
						</div>
					</div>
					<div class="catalog-popular__item">
						<img src="../assets/homePage/catalog-popular/2.png" />
						<div class="catalog-popular__body">
							<div class="catalog-popular__label">Заголовок</div>
							<div class="catalog-popular__desc">
								<span>Вес упаковки</span>
								<span>Назначение корма, какое-то описание</span>
							</div>
							<div class="catalog-popular__price">
								<span>Цена:</span> 5 000 ₽
							</div>
							<div class="catalog-popular__footer">
								<q-btn style="background: #F1942C; color: white" icon-right="east" label="В корзину"></q-btn>
								<div class="catalog-popular__favorite"><q-icon :name="matFavorite" /></div>
							</div>
						</div>
					</div>
					<div class="catalog-popular__item">
						<img src="../assets/homePage/catalog-popular/3.png" />
						<div class="catalog-popular__body">
							<div class="catalog-popular__label">Заголовок</div>
							<div class="catalog-popular__desc">
								<span>Вес упаковки</span>
								<span>Назначение корма, какое-то описание</span>
							</div>
							<div class="catalog-popular__price">
								<span>Цена:</span> 5 000 ₽
							</div>
							<div class="catalog-popular__footer">
								<q-btn style="background: #F1942C; color: white" icon-right="east" label="В корзину"></q-btn>
								<div class="catalog-popular__favorite"><q-icon :name="matFavorite" /></div>
							</div>
						</div>
					</div>
					<div class="catalog-popular__item">
						<img src="../assets/homePage/catalog-popular/4.png" />
						<div class="catalog-popular__body">
							<div class="catalog-popular__label">Заголовок</div>
							<div class="catalog-popular__desc">
								<span>Вес упаковки</span>
								<span>Назначение корма, какое-то описание</span>
							</div>
							<div class="catalog-popular__price">
								<span>Цена:</span> 5 000 ₽
							</div>
							<div class="catalog-popular__footer">
								<q-btn style="background: #F1942C; color: white" icon-right="east" label="В корзину"></q-btn>
								<div class="catalog-popular__favorite"><q-icon :name="matFavorite" /></div>
							</div>
						</div>
					</div>
					<div class="catalog-popular__item">
						<img src="../assets/homePage/catalog-popular/1.png" />
						<div class="catalog-popular__body">
							<div class="catalog-popular__label">Заголовок</div>
							<div class="catalog-popular__desc">
								<span>Вес упаковки</span>
								<span>Назначение корма, какое-то описание</span>
							</div>
							<div class="catalog-popular__price">
								<span>Цена:</span> 5 000 ₽
							</div>
							<div class="catalog-popular__footer">
								<q-btn style="background: #F1942C; color: white" icon-right="east" label="В корзину"></q-btn>
								<div class="catalog-popular__favorite"><q-icon :name="matFavorite" /></div>
							</div>
						</div>
					</div>
					<div class="catalog-popular__item">
						<img src="../assets/homePage/catalog-popular/2.png" />
						<div class="catalog-popular__body">
							<div class="catalog-popular__label">Заголовок</div>
							<div class="catalog-popular__desc">
								<span>Вес упаковки</span>
								<span>Назначение корма, какое-то описание</span>
							</div>
							<div class="catalog-popular__price">
								<span>Цена:</span> 5 000 ₽
							</div>
							<div class="catalog-popular__footer">
								<q-btn style="background: #F1942C; color: white" icon-right="east" label="В корзину"></q-btn>
								<div class="catalog-popular__favorite"><q-icon :name="matFavorite" /></div>
							</div>
						</div>
					</div>
					<div class="catalog-popular__item">
						<img src="../assets/homePage/catalog-popular/3.png" />
						<div class="catalog-popular__body">
							<div class="catalog-popular__label">Заголовок</div>
							<div class="catalog-popular__desc">
								<span>Вес упаковки</span>
								<span>Назначение корма, какое-то описание</span>
							</div>
							<div class="catalog-popular__price">
								<span>Цена:</span> 5 000 ₽
							</div>
							<div class="catalog-popular__footer">
								<q-btn style="background: #F1942C; color: white" icon-right="east" label="В корзину"></q-btn>
								<div class="catalog-popular__favorite"><q-icon :name="matFavorite" /></div>
							</div>
						</div>
					</div>
					<div class="catalog-popular__item">
						<img src="../assets/homePage/catalog-popular/4.png" />
						<div class="catalog-popular__body">
							<div class="catalog-popular__label">Заголовок</div>
							<div class="catalog-popular__desc">
								<span>Вес упаковки</span>
								<span>Назначение корма, какое-то описание</span>
							</div>
							<div class="catalog-popular__price">
								<span>Цена:</span> 5 000 ₽
							</div>
							<div class="catalog-popular__footer">
								<q-btn style="background: #F1942C; color: white" icon-right="east" label="В корзину"></q-btn>
								<div class="catalog-popular__favorite"><q-icon :name="matFavorite" /></div>
							</div>
						</div>
					</div>
					<div class="catalog-popular__item">
						<img src="../assets/homePage/catalog-popular/1.png" />
						<div class="catalog-popular__body">
							<div class="catalog-popular__label">Заголовок</div>
							<div class="catalog-popular__desc">
								<span>Вес упаковки</span>
								<span>Назначение корма, какое-то описание</span>
							</div>
							<div class="catalog-popular__price">
								<span>Цена:</span> 5 000 ₽
							</div>
							<div class="catalog-popular__footer">
								<q-btn style="background: #F1942C; color: white" icon-right="east" label="В корзину"></q-btn>
								<div class="catalog-popular__favorite"><q-icon :name="matFavorite" /></div>
							</div>
						</div>
					</div>
					<div class="catalog-popular__item">
						<img src="../assets/homePage/catalog-popular/2.png" />
						<div class="catalog-popular__body">
							<div class="catalog-popular__label">Заголовок</div>
							<div class="catalog-popular__desc">
								<span>Вес упаковки</span>
								<span>Назначение корма, какое-то описание</span>
							</div>
							<div class="catalog-popular__price">
								<span>Цена:</span> 5 000 ₽
							</div>
							<div class="catalog-popular__footer">
								<q-btn style="background: #F1942C; color: white" icon-right="east" label="В корзину"></q-btn>
								<div class="catalog-popular__favorite"><q-icon :name="matFavorite" /></div>
							</div>
						</div>
					</div>
					<div class="catalog-popular__item">
						<img src="../assets/homePage/catalog-popular/3.png" />
						<div class="catalog-popular__body">
							<div class="catalog-popular__label">Заголовок</div>
							<div class="catalog-popular__desc">
								<span>Вес упаковки</span>
								<span>Назначение корма, какое-то описание</span>
							</div>
							<div class="catalog-popular__price">
								<span>Цена:</span> 5 000 ₽
							</div>
							<div class="catalog-popular__footer">
								<q-btn style="background: #F1942C; color: white" icon-right="east" label="В корзину"></q-btn>
								<div class="catalog-popular__favorite"><q-icon :name="matFavorite" /></div>
							</div>
						</div>
					</div>
					<div class="catalog-popular__item">
						<img src="../assets/homePage/catalog-popular/4.png" />
						<div class="catalog-popular__body">
							<div class="catalog-popular__label">Заголовок</div>
							<div class="catalog-popular__desc">
								<span>Вес упаковки</span>
								<span>Назначение корма, какое-то описание</span>
							</div>
							<div class="catalog-popular__price">
								<span>Цена:</span> 5 000 ₽
							</div>
							<div class="catalog-popular__footer">
								<q-btn style="background: #F1942C; color: white" icon-right="east" label="В корзину"></q-btn>
								<div class="catalog-popular__favorite"><q-icon :name="matFavorite" /></div>
							</div>
						</div>
					</div>
				</div>
				<span class="catalog-popular__more">Показать еще</span>
			</div>
			<Marketing />
			<div class="home__catalog catalog-services">
				<div class="catalog-services__title">Наши услуги</div>
				<div class="catalog-services__row">
					<div class="catalog-services__item">
						<img src="../assets/homePage/catalog-services/1.png" />
						<span>Груминг</span>
					</div>
					<div class="catalog-services__item">
						<img src="../assets/homePage/catalog-services/2.png" />
						<span>Ветеринария</span>
					</div>
					<div class="catalog-services__item">
						<img src="../assets/homePage/catalog-services/3.png" />
						<span>Перевозка</span>
					</div>
					<div class="catalog-services__item">
						<img src="../assets/homePage/catalog-services/4.png" />
						<span>Заголовок</span>
					</div>
					<div class="catalog-services__item">
						<img src="../assets/homePage/catalog-services/5.png" />
						<span>Экспертиза</span>
					</div>
					<div class="catalog-services__item">
						<img src="../assets/homePage/catalog-services/6.png" />
						<span>Страхование</span>
					</div>
					<div class="catalog-services__item">
						<img src="../assets/homePage/catalog-services/7.png" />
						<span>Передержка</span>
					</div>
					<div class="catalog-services__item">
						<img src="../assets/homePage/catalog-services/8.png" />
						<span>Тренинг</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Marketing from '../components/common/Marketing.vue';
import { matSearch, matFavorite } from '@quasar/extras/material-icons'
import { ref } from 'vue'
const text = ref('')
const slide = ref(1)
</script>

<style scoped lang="scss">
.search-block {
	background: url('../assets/homePage/search-block.png') center / cover no-repeat;
	text-align: center;
	padding: 0 30px;
	padding-top: 181px;
	padding-bottom: 110px;

	@media (max-width: 768.98px) {

		padding: 10px;
		padding-top: 46px;
		padding-bottom: 40px;
		margin: 0 -20px;
	}

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: #fff;

	&__title {
		font-weight: 600;
		font-size: 42px;
		line-height: 130%;
		margin-bottom: 30px;

		@media (max-width: 768.98px) {
			font-size: 30px;
		}
	}

	&__subtitle {
		@media (max-width: 768.98px) {
			display: none;
		}

		font-weight: 600;
		font-size: 32px;
		margin-bottom: 80px;
	}





	.q-field {
		border: none;
		outline: none;
	}



	.q-input {
		border-radius: 5px;
		overflow: hidden !important;
		width: 100%;

		span {
			font-size: 16px;
			text-decoration-line: underline;
			color: #858585;

			&:hover {
				color: #a4a4a4;
			}

			&:nth-child(2) {
				font-size: 30px;

				@media (max-width: 768.98px) {
					display: block;
				}
			}

			@media (max-width: 768.98px) {
				display: none;
			}
		}

		border: none;
		outline: none;
		background-color: #fff;
		max-width: 855px;
	}

	.q-icon {

		cursor: pointer;
		height: 100%;
		padding: 10px;
		margin-left: 10px;

		color: #fff !important;
		background: $orange;
	}

	.q-field__control {
		color: none;
		border: none;
		outline: none;
	}

	.q-field--outlined .q-field__control:before {
		border: none !important;
		outline: none;
	}

}

.catalog-two-three {
	border-radius: 50px;
	z-index: 10;
	position: relative;
	background: rgba(34, 160, 148, 0.3);
	margin: 0 -50px;
	padding: 0 50px;
	padding-top: 60px;
	padding-bottom: 136px;

	@media (max-width: 768.98px) {
		background: none;
		padding: 0;
		margin: 0;
		padding-bottom: 40px;
	}

	&__title {
		text-align: center;
		font-weight: 600;
		font-size: 32px;
		text-transform: uppercase;
		color: #333333;
		margin-bottom: 60px;

		@media (max-width: 768.98px) {
			padding: 15px 0;
			font-size: 20px;
			margin: 0 -20px;
			margin-bottom: 20px;
			color: #fff;
			background: $green;
		}

		@media (max-width: 425.98px) {
			font-size: 16px;
		}
	}

	&__row {
		display: flex;
		flex-wrap: wrap;
		row-gap: 30px;
		justify-content: space-between;
	}

	&__item {
		position: relative;
		z-index: 5;
		display: flex;
		flex: 0 1 20%;
		width: auto;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 5px;
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		}

		span {
			@media (max-width: 768.98px) {
				font-size: 16px;
			}

			vertical-align: middle;
			font-weight: 600;
			font-size: 30px;
			line-height: 130%;
			color: #FFFFFF;
			text-align: center;
			position: absolute;
			z-index: 10;
			float: left;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-transform: uppercase;
		}

		&:nth-child(1),
		&:nth-child(2),
		&:nth-child(6),
		&:nth-child(7) {
			flex: 0 1 48.46%;
		}

		&:nth-child(3),
		&:nth-child(4),
		&:nth-child(5) {
			flex: 0 1 31.53%;
		}

		@media (max-width: 768.98px) {

			&:nth-child(1),
			&:nth-child(4),
			&:nth-child(7) {
				flex: 1 1 100%;
			}

			&:nth-child(2),
			&:nth-child(3),
			&:nth-child(5),
			&:nth-child(6) {
				flex: 0 1 46.66%;
			}
		}

	}
}

.catalog-four {
	margin-bottom: 60px;
	margin-top: -25px;
	z-index: 50;
	position: relative;

	@media (max-width:768.98px) {
		margin: 0;
	}

	.button--top {
		@media (max-width: 768.98px) {
			display: none;
		}
	}

	.button--down {
		margin: 30px auto;

		@media (min-width: 768.98px) {
			display: none;
		}
	}

	&__header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 60px;
		text-transform: uppercase;

		@media (max-width: 768.98px) {
			margin: 0 -20px;
			margin-bottom: 40px;
		}
	}

	&__desc {
		@media (min-width:768.98px) {
			display: none;
		}

		padding: 10px;
		padding-bottom: 0;
		font-weight: 300;
		font-size: 14px;
		display: flex;
		justify-content: space-between;
	}

	&__title {
		font-weight: 600;
		font-size: 32px;
		color: #333333;
		text-align: center;

		@media (max-width: 768.98px) {
			padding: 15px 0;
			font-size: 20px;
			width: 100%;
			color: #fff;
			background: $green;
		}

	}

	&__button {
		background: $orange;
		padding: 5px 12px;
		font-size: 18px;
		font-weight: 400;
		max-height: 40px;
		max-width: 230px;
		border-radius: 2px;
		justify-content: center;
		display: flex;
		align-items: center;
		text-align: center;
		color: #fff;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}

	&__row {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		row-gap: 30px;
	}

	&__item {
		position: relative;
		flex: 0 1 23.07%;
		transition: all 0.3s ease 0s;


		@media (max-width: 1024.98px) {
			flex: 0 1 32.15%;
		}

		@media (max-width: 768.98px) {
			flex: 0 1 46.66%;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;

			@media (max-width: 768.98px) {
				border-radius: 5px 5px 0px 0px;

				max-height: 200px;
			}

		}

		&:hover {
			transform: scale(1.1);
		}

		img {
			z-index: 5;
		}
	}

	.q-icon {
		position: absolute;
		display: block;
		z-index: 10;
		font-size: 25px;
		top: 10px;
		right: 10px;
		color: #fff;

		@media (min-width: 768.98px) {
			display: none;
		}
	}

	&__body {
		top: 0;
		left: 0;
		z-index: 10;
		color: #fff;
		position: absolute;
		font-weight: 600;
		bottom: 0;
		display: flex;
		flex-direction: column;

		@media (max-width: 768.98px) {
			position: relative;
			color: #000;

		}

	}

	&__label {
		flex: 1 1 auto;
		padding: 20px;

		@media (max-width: 768.98px) {
			padding: 10px;
			font-size: 18px;
			padding-bottom: 0;
		}

		font-weight: 600;
		font-size: 24px;
		text-transform: uppercase;
	}

	&__info {
		display: flex;
		padding: 20px;

		@media (max-width: 768.98px) {
			padding: 10px;
		}

		flex-direction: column;
		justify-content: space-between;
		font-weight: 600;
		bottom: 0;
		position: relative;

		:nth-child(1),
		:nth-child(2) {
			font-weight: 400;
			font-size: 18px;

			@media (max-width: 768.98px) {
				font-size: 14px;
			}
		}

		:nth-child(3) {
			font-size: 24px;

			@media (max-width: 768.98px) {
				font-size: 18px;
			}
		}
	}
}

.catalog-three-two {
	border-radius: 50px;
	position: relative;
	background: rgba(241, 148, 44, 0.5);
	margin: 0 -50px;
	margin-top: 60px;
	padding: 0 50px;
	padding-top: 60px;
	padding-bottom: 136px;

	@media (max-width: 768.98px) {
		background: none;
		padding: 0;
		margin: 0;
		padding-bottom: 20px;
	}


	&.--green {
		background: rgba(34, 160, 148, 0.3);

		@media (max-width: 768.98px) {
			background: none;
		}
	}

	&__title {
		text-align: center;
		font-weight: 600;
		font-size: 32px;
		text-transform: uppercase;
		color: #333333;
		margin-bottom: 60px;

		@media (max-width: 768.98px) {
			padding: 15px 0;
			font-size: 20px;
			margin: 0 -20px;
			color: #fff;
			background: $green;
		}

		@media (max-width: 425.98px) {
			font-size: 16px;
		}
	}

	&__row {
		display: flex;
		flex-wrap: wrap;
		row-gap: 30px;

		@media (max-width: 768.98px) {
			margin: 0 -20px;
			gap: 0;

			.--green & {
				margin: 0;
				margin-top: 20px;
				row-gap: 20px;
			}

		}

		justify-content: space-between;
	}

	&__item {
		position: relative;
		z-index: 5;
		display: flex;
		flex: 0 1 31.53%;
		width: auto;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 5px;
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

			@media (max-width: 768.98px) {
				max-height: 250px;

			}

			@media (max-width: 425.98px) {
				max-height: 100px;
			}
		}

		span {
			@media (max-width: 425.98px) {
				font-size: 16px;
			}

			vertical-align: middle;
			font-weight: 600;
			font-size: 32px;
			line-height: 130%;
			color: #FFFFFF;
			text-align: center;
			position: absolute;
			z-index: 10;
			float: left;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-transform: uppercase;
		}



		&:nth-child(4),
		&:nth-child(5) {
			flex: 0 1 48.46%;

			@media (max-width: 768.98px) {
				flex: 1 1 100%;

			}
		}


		@media (max-width: 768.98px) {
			flex: 1 1 100%;

		}

		.--green & {
			@media (max-width: 768.98px) {
				flex: 0 1 46.666% !important;
			}
		}
	}
}

.catalog-popular {
	display: flex;
	flex-direction: column;
	margin-bottom: 60px;

	&__header {
		margin: 60px 0;
		width: 100%;
		justify-content: space-between;
		display: flex;
		align-items: center;

		@media (max-width:768.98px) {
			margin: 30px 0;
		}
	}


	&__more {
		font-size: 16px;
		line-height: 19px;
		text-align: center;
		text-decoration-line: underline;
		color: #6D6C6C;
		padding: 30px 0;

		@media (min-width:768.98px) {
			display: none;
		}
	}

	&__title {
		font-weight: 600;
		font-size: 32px;
		line-height: 131.5%;


		@media (max-width: 768.98px) {
			padding: 15px 0;
			font-size: 20px;
			padding: 20px;
			width: 100%;
			margin: 0 -20px;
			color: #fff;
			background: $green;
		}

		@media (max-width: 425.98px) {
			font-size: 16px;
		}
	}

	&__button {


		@media (max-width: 768.98px) {
			display: none;
		}
	}

	&__row {
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));

		@media (max-width: 425.98px) {
			grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		}
	}

	&__item {
		position: relative;
		border: 1px solid #D9D9D9;
		border-radius: 5px;



		@media (max-width: 425.98px) {
			flex: 0 1 10.33%;
			display: none;

			&:nth-child(1),
			&:nth-child(2),
			&:nth-child(3),
			&:nth-child(4) {
				display: block;
			}
		}

		img {
			width: 100%;
			height: auto;
			object-fit: cover;
		}
	}

	&__body {

		color: #030303;
		padding: 10px;
	}

	&__label {
		font-weight: 600;
		font-size: 16px;
		line-height: 120%;
		margin-bottom: 5px;
	}

	&__desc {
		font-weight: 300;
		font-size: 12px;
		display: flex;
		flex-direction: column;
		line-height: 120%;
	}

	&__price {
		padding: 10px 0;
		font-weight: 600;
		font-size: 16px;
		line-height: 120%;

		span {
			font-weight: 300;
			font-size: 12px;
			line-height: 14px;
		}
	}

	&__footer {
		display: flex;
		align-items: center;
		font-size: 22px;
		gap: 15px;




		.q-btn {
			font-size: 15px;
			padding: 4px 12px;

			@media (max-width: 425.98px) {
				font-size: 14px;
				padding: 3px 6px;
			}
		}

		@media (max-width: 425.98px) {
			gap: 0;
		}

		justify-content: space-between;
	}

	&__favorite {
		@media (max-width: 425.98px) {
			position: absolute;
			top: 2px;
			right: 10px;


		}


	}

}

.catalog-services {
	background: rgba(241, 148, 44, 0.5);
	border-radius: 50px;
	margin: 0 -50px;
	padding: 0 50px;
	margin-top: 60px;

	&__title {
		text-align: center;
		font-weight: 600;
		font-size: 32px;
		text-transform: uppercase;
		color: #333333;
		padding: 60px 0;

		@media (max-width: 768.98px) {
			padding: 15px 0;
			font-size: 20px;
			margin: 0 -20px;
			color: #fff;
			background: $green;
		}

		@media (max-width: 425.98px) {
			font-size: 16px;
		}
	}

	&__row {
		padding-bottom: 60px;
		display: grid;
		gap: 30px;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}

	&__item {
		position: relative;
		width: 100%;

		span {
			@media (max-width: 425.98px) {
				font-size: 16px;
			}

			font-weight: 600;
			font-size: 26px;
			line-height: 130%;
			color: #FFFFFF;
			position: absolute;
			z-index: 10;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-transform: uppercase;
		}

	}
}


.catalog-slider {
	margin: 60px 0;

	&__slider {}

	&__slide {}
}



.q-btn--dense {
	position: absolute !important;
	left: 20px !important;
}

.q-carousel__slide {
	display: flex;
	gap: 30px;
	padding: 0 !important;
}

.slide-home {
	flex: 0 1 31.53%;
	display: flex;
	flex-direction: column;
	position: relative;

	&__img {
		img {
			width: 100px;
			object-fit: cover;
			height: 100%;
		}
	}

	&__body {
		position: absolute;
	}

	&__title {}

	&__text {}
}
</style>

<style lang="scss">
.q-field--outlined .q-field__control {
	padding-right: 0;
}

.q-field__label {
	color: #000 !important;
}

.q-panel-parent {
	overflow: hidden;
}

.q-carousel__control {

	& .q-icon {
		color: #333333 !important;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: #E8E8E8;
	}
}

.on-right {
	font-size: 15px !important;
}
</style>

