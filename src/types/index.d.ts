export interface TODO {
    id: number;
    text: string;
    checked: boolean;
    time: string;
  };

export interface TodoProps {
    removeElement: (id: number) => void;
    handleCheck: (id: number) => void;
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