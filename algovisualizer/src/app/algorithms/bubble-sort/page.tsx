import React from "react";
import { Navbar } from "../../../../components/Navbar";
import { Footer } from "../../../../components/footer";
import { DropDownMenu } from "../../../../components/dropDownMenu";
import { ProgramDisplayOptimized } from "../../../../components/programDisplay";

export default function BubbleSortAlgorithms() {
    // ドロップダウンに表示する項目を定義
    const algorithmItems = [
        { label: "バブルソート", href: "/algorithms/bubble-sort" },
        { label: "クイックソート", href: "/algorithms/quick-sort" },
        { label: "マージソート", href: "/algorithms/merge-sort" },
        { label: "挿入ソート", href: "/algorithms/insertion-sort" }
    ];

    return (
        <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
            {/* ヘッダー - 固定高さ */}
            <header className="sticky top-0 z-50 border-b-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <Navbar />
            </header>

            {/* メインコンテンツ - 残りの高さを自動調整 */}
            <main className="flex-grow overflow-hidden">
                <div className="container h-full mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row h-full">
                        {/* 左側：アルゴリズム選択とコード表示 */}
                        <div className="md:w-1/3 flex flex-col pr-2">
                            <div className="mb-4 flex items-center">
                                <DropDownMenu 
                                    title="ソートアルゴリズムを選択" 
                                    items={algorithmItems} 
                                />
                                <p className="ml-4 text-xl font-light text-gray-900 dark:text-white">バブルソートアルゴリズム</p>
                            </div>
                            
                            {/* コード表示（高さを調整） */}
                            <div className="flex-grow">
                                <ProgramDisplayOptimized
                                    title="バブルソート(C言語)"
                                    subtitle="バブルソートは、隣接する要素を比較して交換することで、配列をソートします。"
                                    code={`void SortBubble(int array[], int n)
{
    int i, j, temp;

    for (i = 0; i < n - 1; i++)
    {
        for (j = 0; j < n - 1; j++)
        {
            if (array[j + 1] < array[j])
            {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

// 使用例
int main()
{
    int array[] = {5, 3, 8, 4, 2};
    int n = sizeof(array) / sizeof(array[0]);

    SortBubble(array, n);

    for (int i = 0; i < n; i++)
    {
        printf("%d ", array[i]);
    }
    return 0;
`}
                                />
                            </div>
                        </div>

                        {/* 垂直線 */}
                        <div className="hidden md:block h-full w-px bg-gray-200 dark:bg-gray-700 mx-4"></div>
                        
                        {/* 右側：説明コンテンツ */}
                        <div className="md:w-2/3 pl-2 overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">バブルソートについて</h2>
                            <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            <div className="prose dark:prose-invert">
                                <p>バブルソートは最も基本的なソートアルゴリズムの一つで、隣接する要素を比較し、必要に応じて交換することを繰り返します。</p>
                                <h3>アルゴリズムの特徴</h3>
                                <ul>
                                    <li>時間計算量: O(n²)</li>
                                    <li>空間計算量: O(1)</li>
                                    <li>安定ソート: はい</li>
                                    <li>使用例: 学習目的、小さな配列</li>
                                </ul>
                                <h3>動作原理</h3>
                                <p>バブルソートは次のように動作します：</p>
                                <ol>
                                    <li>配列の先頭から隣接する要素を比較します</li>
                                    <li>左の要素が右の要素より大きい場合、それらを交換します</li>
                                    <li>配列の最後まで繰り返します</li>
                                    <li>最大の要素が配列の最後に「浮かび上がる」ため、次の繰り返しでは最後の要素を除外できます</li>
                                    <li>すべての要素がソートされるまで手順1〜4を繰り返します</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* フッター - 固定高さ */}
            <footer className="border-t border-gray-200 dark:border-gray-700">
                <Footer />
            </footer>
        </div>
    )
}

