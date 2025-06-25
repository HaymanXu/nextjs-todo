'use client';

interface ErrorMessageProps {
  error: string;
  onClose: () => void;
}

export default function ErrorMessage({ error, onClose }: ErrorMessageProps) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
      <div className="flex justify-between items-center">
        <span>{error}</span>
        <button
          onClick={onClose}
          className="text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
} 