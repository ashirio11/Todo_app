'use client';

import React from 'react';
import { Todo } from '../types/todo';

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <div className="flex items-center justify-between border-b py-2">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? 'line-through text-gray-400' : ''}>
          {todo.text}
        </span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:underline"
      >
        削除
      </button>
    </div>
  );
}
