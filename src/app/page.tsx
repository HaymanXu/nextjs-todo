'use client';

import { useState } from 'react';
import type { TodoFilter } from '../types/todo';
import { useTodos } from '../hooks/useTodos';
import {
  TodoFilter as TodoFilterComponent,
  TodoList,
  TodoStats,
  AddTodoForm,
  FloatingAddButton,
  ErrorMessage,
  LoadingSpinner
} from '../components';

export default function Home() {
  const [filter, setFilter] = useState<TodoFilter>('all');
  const [newTodo, setNewTodo] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const {
    todos,
    loading,
    error,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    clearError,
  } = useTodos();

  const handleAddTodo = async () => {
    const success = await addTodo(newTodo);
    if (success) {
      setNewTodo('');
      setShowAddForm(false);
    }
  };

  const handleAddButtonClick = () => {
    setShowAddForm(true);
  };

  const handleCancelAdd = () => {
    setShowAddForm(false);
    setNewTodo('');
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pb-32">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            ToDo 应用
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            管理你的任务，提高工作效率
          </p>
        </div>

        {/* 错误提示 */}
        {error && <ErrorMessage error={error} onClose={clearError} />}

        {/* 过滤器 */}
        <TodoFilterComponent
          filter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
          totalCount={todos.length}
          activeCount={activeCount}
          completedCount={completedCount}
        />

        {/* 任务列表 */}
        <TodoList
          todos={filteredTodos}
          filter={filter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        {/* 统计信息 */}
        <TodoStats
          totalCount={todos.length}
          activeCount={activeCount}
          completedCount={completedCount}
        />
      </div>

      {/* 浮动添加按钮 */}
      <FloatingAddButton onClick={handleAddButtonClick} />

      {/* 底部添加任务表单 */}
      {showAddForm && (
        <AddTodoForm
          newTodo={newTodo}
          onNewTodoChange={setNewTodo}
          onAdd={handleAddTodo}
          onCancel={handleCancelAdd}
        />
      )}
    </div>
  );
}
