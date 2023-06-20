<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item">
                <RouterLink class="navigation__link" to="/">Главная</RouterLink>
            </li>
            <li class="navigation__item">
                <RouterLink class="navigation__link" to="/tasks">Задачи</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
.navigation {

    &__list {
        display: flex;
        justify-content: center;
    }

    &__item {
        margin: 0 15px;
    }
}
</style>