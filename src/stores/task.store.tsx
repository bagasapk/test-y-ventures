import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TaskInterface, TaskStatus } from "../types/tasks.type";
import { STRING } from "../constants/config";

// Define a type for the slice state
interface TaskState {
  tasks: TaskInterface[];
  isOpen: boolean;
  filter: {
    status: TaskStatus;
  };
  form: {
    status?: TaskStatus;
  };
}

// Define the initial state using that type
const initialState: TaskState = {
  tasks: [],
  isOpen: false,
  filter: {
    status: STRING.all,
  },
  form: {
    status: undefined,
  },
};

export const taskSlice = createSlice({
  name: "task",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<TaskInterface[]>) => {
      state.tasks = action.payload;
    },
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setFilterStatus: (state, action: PayloadAction<TaskStatus>) => {
      state.filter.status = action.payload;
    },
    setFormStatus: (state, action: PayloadAction<TaskStatus | undefined>) => {
      state.form.status = action.payload;
    },
  },
});

export const { setTasks, setOpen, setFilterStatus, setFormStatus } =
  taskSlice.actions;
export default taskSlice.reducer;
