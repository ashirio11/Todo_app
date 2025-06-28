'use client';

import React, { useState } from 'react';

type Props = {
  onAdd: (text: string) => void;
};

export default function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 mr-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいTodoを入力"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        追加
      </button>
    </form>
  );
}
