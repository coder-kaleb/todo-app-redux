export type FeedBack = {
  title: string;
  status: string;
};

export interface Todo {
  title: string;
  isCompleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  id?: string
}

export interface StateType {
  todos: Todo[];
}
