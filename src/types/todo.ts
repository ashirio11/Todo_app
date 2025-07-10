export type Priority = '高' | '中' | '低';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
  dueDate: string;  // 期限: yyyy-mm-dd
  priority: Priority; // 優先度: 高・中・低
}
