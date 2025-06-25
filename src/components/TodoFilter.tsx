'use client';

import type { TodoFilter } from '../types/todo';

interface TodoFilterProps {
  filter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
  onClearCompleted: () => void;
  totalCount: number;
  activeCount: number;
  completedCount: number;
}

export default function TodoFilter({
  filter,
  onFilterChange,
  onClearCompleted,
  totalCount,
  activeCount,
  completedCount
}: TodoFilterProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'all'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            全部 ({totalCount})
          </button>
          <button
            onClick={() => onFilterChange('active')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'active'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            进行中 ({activeCount})
          </button>
          <button
            onClick={() => onFilterChange('completed')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'completed'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            已完成 ({completedCount})
          </button>
        </div>
        {filter === 'completed' && completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
          >
            清除已完成
          </button>
        )}
      </div>
    </div>
  );
} 