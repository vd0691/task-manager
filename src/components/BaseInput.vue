<template>
    <div class="field">
        <label :for="props.id" class="field__label" v-if="props.title">{{ props.title }}</label>
        <input :id="props.id" 
               class="field__input"
               :type="props.type"
               :placeholder="props.placeholder"
               @input="inputValue"
               @keyup="$emit('keyup')"
               @blur="$emit('blur')"
        />
    </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['input'])
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: ''    
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: ''
    }
})

const inputValue = (event:Event) => {
    emit('input', (event.target as HTMLInputElement).value)
}
</script>

<style scoped lang="scss">
.field {
    position: relative;
    margin: 5px 0 10px;
    display: flex;
    align-items: center;

    &__input {
        width: 100%;
        height: 30px;
        padding: 6px;
        text-align: center;
    }

    &__error {
        font-size: 12px;
        color: #ff0000
    }

    &__label {
        position: absolute;
        color: #ccc;
        left: 20px;
    }
}

.error {
    border: 1px solid #ff0000;
    border-radius: 2px;
}
</style>