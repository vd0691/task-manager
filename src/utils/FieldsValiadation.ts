
export const isEmpty = (fieldName:string, fieldValue:string) => {
    return !fieldValue ? `Поле ${fieldName} не может быть пустым` : ''
}

export const minLength = (fieldName:string, fieldValue:string, minLength:number) => {
    return fieldValue.length < minLength ? `${fieldName} не может быть менее ${minLength} символов` : '' 
}
