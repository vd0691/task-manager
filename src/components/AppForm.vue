<template>
    <form class="form" @submit.prevent>
        <h2 class="form__title" v-if="props.title">
            {{ props.title }}
        </h2>   
        <slot/>    
    </form>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String
})

</script>