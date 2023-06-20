<template>
    <div class="tasks-list">
        <h1>Список задач</h1>
        <div class="tasks-list__container">
            <BaseButton v-if="tasks.length > 1" class="task-lists__button" @click="deleteAllTasks">Очистить задачи</BaseButton>
            <ul class="tasks-list__list">
                <li v-for="task, i in tasks" :key="task.id" class="tasks-list__item">
                   <span> №{{ i + 1 }}: {{ task.name }}</span>
                    <BaseButton class="task-lists__button" @click="deleteTask(i)">удалить</BaseButton>
                </li>
    
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
import { computed } from 'vue';
import BaseButton from './BaseButton.vue';

const store = useStore()
const tasks = computed(() => store.state.tasks.tasksList)

const deleteTask = (i: number) => {
    store.dispatch('DELETE_TASK', i)
}

const deleteAllTasks = () => {
    store.dispatch('DELETE_ALL_TASKS')
}
</script>

<style scoped lang="scss">
.tasks-list {
    &__container {
        width: 500px;
        margin: 0 auto;
    }
    &__item {
        display: flex;
        justify-content: space-between;
        margin: 0 0 10px 0;

        & span {
            text-align: left;
            width: 100%;
            overflow: hidden;
            margin-right: 15px;
        }
    }
}
</style>