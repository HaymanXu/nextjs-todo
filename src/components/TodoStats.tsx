interface TodoStatsProps {
  totalCount: number;
  activeCount: number;
  completedCount: number;
}

export default function TodoStats({ totalCount, activeCount, completedCount }: TodoStatsProps) {
  if (totalCount === 0) return null;

  return (
    <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
      Total {totalCount} tasks, {activeCount} active, {completedCount} completed
    </div>
  );
} 