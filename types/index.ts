export type FeedBack = {
  title: string;
  status: string;
};

export interface TodoProps {
  title: string;
  isCompleted: boolean;
  createdAt?: string;
  updatedAt?: string;
  _id: string;
}

export interface StateType {
  loading: boolean;
  todos: TodoProps[];
}

export type IModalProps = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  title?: string;
  isCompleted?: boolean;
  _id?: string;
};
