'use client';

import React, { useState } from 'react';

type Props = {
  onAdd: (text: string, dueDate: string, priority: '高' | '中' | '低') => void;
};

export default function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'高' | '中' | '低'>('中');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text || !dueDate || !priority) return;
    onAdd(text, dueDate, priority);
    setText('');
    setDueDate('');
    setPriority('中');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col sm:flex-row gap-2 sm:items-center">
      <input
        type="text"
        className="border p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Todo内容"
      />
      <input
        type="date"
        className="border p-2"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        className="border p-2"
        value={priority}
        onChange={(e) => setPriority(e.target.value as '高' | '中' | '低')}
      >
        <option value="高">高</option>
        <option value="中">中</option>
        <option value="低">低</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        追加
      </button>
    </form>
  );
}
