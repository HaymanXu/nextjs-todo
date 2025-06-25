'use client';

import { useState, useEffect } from 'react';
import { Todo, TodoFilter } from '../types/todo';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 从数据库加载todos
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/todos');
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (text: string) => {
    if (text.trim()) {
      try {
        const response = await fetch('/api/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: text.trim() }),
        });

        if (!response.ok) {
          throw new Error('Failed to add todo');
        }

        const newTodoItem = await response.json();
        setTodos([newTodoItem, ...todos]);
        return true;
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to add todo');
        return false;
      }
    }
    return false;
  };

  const toggleTodo = async (id: number) => {
    try {
      const todo = todos.find(t => t.id === id);
      if (!todo) return false;

      const response = await fetch(`/api/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !todo.completed }),
      });

      if (!response.ok) {
        throw new Error('Failed to update todo');
      }

      const updatedTodo = await response.json();
      setTodos(todos.map(todo =>
        todo.id === id ? updatedTodo : todo
      ));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update todo');
      return false;
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }

      setTodos(todos.filter(todo => todo.id !== id));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete todo');
      return false;
    }
  };

  const clearCompleted = async () => {
    try {
      const response = await fetch('/api/todos/clear-completed', {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to clear completed todos');
      }

      setTodos(todos.filter(todo => !todo.completed));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to clear completed todos');
      return false;
    }
  };

  const clearError = () => {
    setError(null);
  };

  return {
    todos,
    loading,
    error,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    clearError,
  };
} 