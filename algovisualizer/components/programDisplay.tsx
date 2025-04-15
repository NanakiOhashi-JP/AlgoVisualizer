import React from 'react';

// 最適化されたProgramDisplay（高さ制約あり）
export function ProgramDisplayOptimized(props: { title: string; subtitle: string; code: string }) {
    return (
      <div className="h-full flex flex-col bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-t-lg">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{props.title}</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{props.subtitle}</p>
          </div>
        </div>
        <pre className="flex-grow bg-gray-200 dark:bg-gray-700 p-4 rounded-b-lg overflow-y-auto text-sm">
          <code className="language-c">
            {props.code}
          </code>
        </pre>
      </div>
    );
  }