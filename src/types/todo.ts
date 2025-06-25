export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TodoFilter = 'all' | 'active' | 'completed'; 