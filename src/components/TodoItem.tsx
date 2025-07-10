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
    <div className="flex justify-between items-start border-b py-2">
      <label className="flex items-start gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <div>
          <div className={todo.completed ? 'line-through text-gray-400' : ''}>
            {todo.text}
          </div>
          <div className="text-sm text-gray-500">
            期限: {todo.dueDate} ｜ 優先度: <span className={
              todo.priority === '高' ? 'text-red-500 font-bold' :
              todo.priority === '中' ? 'text-yellow-600' : 'text-green-600'
            }>
              {todo.priority}
            </span>
          </div>
        </div>
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
