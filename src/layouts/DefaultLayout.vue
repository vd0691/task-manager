<template>
    <div class="layout">
        <TheHeader>
            <TheNavigation/>
        </TheHeader>
        <main>
            <slot/>
        </main>
    </div>
</template>

<script setup lang="ts">
import TheNavigation from '@/components/TheNavigation.vue';
import TheHeader from '../components/TheHeader.vue'
</script>