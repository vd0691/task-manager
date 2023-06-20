import { Task } from "./Interfaces";


export interface RootState {
    tasks: TasksState
}

export interface TasksState {
    tasksList: Task[],
}
