'use client';

interface AddTodoFormProps {
  newTodo: string;
  onNewTodoChange: (value: string) => void;
  onAdd: () => void;
  onCancel: () => void;
}

export default function AddTodoForm({
  newTodo,
  onNewTodoChange,
  onAdd,
  onCancel
}: AddTodoFormProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 z-40">
      <div className="container mx-auto max-w-2xl">
        <div className="flex gap-3 items-center">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => onNewTodoChange(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onAdd()}
            placeholder="添加新的任务..."
            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            autoFocus
          />
          <button
            onClick={onAdd}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            添加
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  );
} 