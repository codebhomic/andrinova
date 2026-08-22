import React from 'react';

export default function SectionHeading({ title, actionText = "View All", onActionClick }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      {actionText && (
        <button
          type="button"
          onClick={onActionClick}
          className="border border-purple-300 text-purple-900 hover:bg-purple-50 text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}