export interface TODO {
    id: number;
    text: string;
    checked: boolean;
    time: string;
  };

export interface TodoProps {
    removeElement: Function;
    handleCheck: Function;
    id: number;
    children: string;
    checked: boolean;
    time: string;
  };

export interface TodosProps {
  todos: TODO[];
  handleCheck: (id: number) => void;
  removeElement: (id: number) => void;
}