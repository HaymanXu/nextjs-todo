'use client';

import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  filter: string;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, filter, onToggle, onDelete }: TodoListProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {todos.length === 0 ? (
        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
          {filter === 'all' && '还没有任务，开始添加你的第一个任务吧！'}
          {filter === 'active' && '没有进行中的任务'}
          {filter === 'completed' && '没有已完成的任务'}
        </div>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
} 