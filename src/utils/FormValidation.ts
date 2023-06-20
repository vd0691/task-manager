import { reactive, ref } from "vue";
import { isEmpty, minLength } from "./FieldsValiadation";

export default function useFormValidation() {
    const formErrors = reactive<{[key:string]:string}>({})
    const isButtonDisabled = ref(true)

    const taskFieldValidation = (fieldID:string, fieldName:string, fieldValue:string) => {
        formErrors[fieldID] = !fieldValue ? isEmpty(fieldName, fieldValue) : minLength(fieldName, fieldValue, 4)
        formErrors[fieldID] || !fieldValue ? isButtonDisabled.value = true : isButtonDisabled.value = false
    }

    return { taskFieldValidation, formErrors, isButtonDisabled }
}