import React from "react";
import Link from "next/link";

// メニュー項目の型定義
interface MenuItem {
  title: string;
  description: string;
  link?: string;
}

// コンポーネントのプロップス型定義
interface MegaMenuProps {
  id?: string;         // オプショナルなid属性
  title: string;
  items: MenuItem[];
  columns?: number;
}

export function MegaMenu({ id, title, items, columns = 3 }: MegaMenuProps) {
  // アイテムを列ごとに分割する
  const itemsPerColumn = Math.ceil(items.length / columns);
  
  // 列ごとのアイテムを格納する配列を作成
  const columnItems = [];
  for (let i = 0; i < columns; i++) {
    columnItems.push(
      items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
    );
  }

  return (
    <section id={id}>  {/* ここでid属性を設定 */}
      <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="mt-1 bg-white border-gray-200 shadow-xs border-y dark:bg-gray-800 dark:border-gray-600">
          {/* タイトル部分 */}
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <h1 className='py-5 font-semibold text-gray-900 dark:text-white'>{title}</h1>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          {/* コンテンツ部分 */}
          <div className={`grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-${columns} md:px-6`}>
            {/* 各列を表示 */}
            {columnItems.map((columnItem, colIndex) => (
              <ul key={colIndex} className={colIndex >= 2 ? "hidden md:block" : ""}>
                {/* 列内の各アイテムを表示 */}
                {columnItem.map((item, itemIndex) => (
                  <li key={`${colIndex}-${itemIndex}`}>
                    <Link href={item.link || "#"} className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div className="font-semibold">{item.title}</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </nav>
    </section>
  );
}