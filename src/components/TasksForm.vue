<template>
    <div class="task-form">
        <AppForm title="Добавить задачу">
            <BaseInput
                id="task" 
                title="Задача" 
                v-model="taskData" 
                @input="taskValidate" 
                @blur="taskValidate"
            />
            <div class="task-form__error">
                {{ formErrors.task }}
            </div>
            <BaseButton class="task-form__button" @click="addTask" :disabled="isButtonDisabled">
                Добавить
            </BaseButton> 
        </AppForm>
    </div>
</template>

<script setup lang="ts">
import useFormValidation from '@/utils/FormValidation'
import { ref } from 'vue'
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'
import AppForm from './AppForm.vue'
import store from '@/store'

const taskData = ref('')

const { formErrors, isButtonDisabled, taskFieldValidation } = useFormValidation()


const addTask = () => {
   store.dispatch('ADD_TASK', taskData.value)
}
const taskValidate = () => {
    taskFieldValidation('task', 'задача', taskData.value)
}


</script>

<style lang="scss">
.task-form {

    &__button {
        font-size: 16px;
        line-height: 20px;
        padding: 16px 24px;
        width: 100%;
        margin-top: 20px;
    }

    & .field input  {
        height: 50px;
    }

    &__error {
        margin-bottom: 20px;
        color: #ff0000;
        font-size: 14px;
    }
}
</style>