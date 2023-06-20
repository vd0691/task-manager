<template>
    <header class="header">
        <div class="header__container">
            <slot/>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    height: 100px;
    display: flex;
    padding: 0 0 40px 0;
    
    &__container {
        width: 100%;
        max-width: 1360px;
        margin: 0 auto;
    }
}
</style>