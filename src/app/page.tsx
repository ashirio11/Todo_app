'use client';

import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import { Todo, Priority } from '../types/todo';

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [sortBy, setSortBy] = useState<'dueDate' | 'priority'>('dueDate');
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

  const handleAdd = (text: string, dueDate: string, priority: Priority) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
      dueDate,
      priority,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const getPriorityValue = (priority: Priority): number => {
    return priority === '高' ? 3 : priority === '中' ? 2 : 1;
  };

  const sortedTodos = [...todos]
    .filter((todo) => (showOnlyIncomplete ? !todo.completed : true))
    .sort((a, b) => {
      if (sortBy === 'dueDate') {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      } else {
        return getPriorityValue(b.priority) - getPriorityValue(a.priority);
      }
    });

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">✅ Todoリスト（期限・優先度・フィルター）</h1>

      <TodoForm onAdd={handleAdd} />

      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <label>
          並び順:
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'dueDate' | 'priority')}
            className="ml-2 border p-1"
          >
            <option value="dueDate">期限順</option>
            <option value="priority">優先度順</option>
          </select>
        </label>

        <label className="ml-0 sm:ml-4">
          <input
            type="checkbox"
            checked={showOnlyIncomplete}
            onChange={() => setShowOnlyIncomplete((prev) => !prev)}
            className="mr-1"
          />
          未完了のみ表示
        </label>
      </div>

      <div>
        {sortedTodos.length === 0 ? (
          <p className="text-gray-500">タスクがありません</p>
        ) : (
          sortedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </main>
  );
}
