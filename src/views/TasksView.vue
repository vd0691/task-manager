<template>
  <div class="tasks-page">
    <div class="tasks-page__wrapp container">
      <div class="tasks-page__form">
        <TasksForm/>    
      </div>
      <div class="tasks-page__tasks">
        <TasksList/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TasksForm from '@/components/TasksForm.vue';
import TasksList from '@/components/TasksList.vue'
</script>

<style scoped lang="scss">
.tasks-page {
  height: calc(100vh - 100px);

  &__wrapp {
    display: flex;
  }

  &__form {
    width: 460px;
  }

  &__tasks {
    flex: 1;
  }
}
</style>
