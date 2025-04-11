import React from 'react';
import '../globals.css';

import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/footer';
import { MegaMenu } from '../../../components/megamenu';
import { title } from 'process';
import { link } from 'fs';
import { timeLog } from 'console';

const sortAlgorithmItems = [
    {
      title: "バブルソート",
      description: "隣接する要素を比較し、必要に応じて交換する単純なソートアルゴリズム",
      link: "/algorithms/bubble-sort"
    },
    {
      title: "クイックソート",
      description: "分割統治法に基づく効率的なソートアルゴリズム",
      link: "/algorithms/quick-sort"
    },
    {
        title: "マージソート",
        description: "分割統治法を使用して配列をソートするアルゴリズム",
        link: "/algorithms/merge-sort"
    },
    {
        title: "選択ソート",
        description: "最小または最大の要素を選択してソートするアルゴリズム",
        link: "/algorithms/selection-sort"
    },
    {
        title: "挿入ソート",
        description: "配列を部分的にソートしていくアルゴリズム",
        link: "/algorithms/insertion-sort"
    },
    {
        title: "ヒープソート",
        description: "ヒープデータ構造を使用して配列をソートするアルゴリズム",
        link: "/algorithms/heap-sort"
    },
    {
      title: "ダイクストラ法",
      description: "グラフ上の2点間の最短経路を求めるアルゴリズム",
      link: "/algorithms/dijkstra"
    },
    {
      title: "二分探索",
      description: "ソート済み配列からデータを高速に検索するアルゴリズム",
      link: "/algorithms/binary-search"
    },
    // 他のアルゴリズムも追加可能
  ];

const searchAlgorithmItems = [
    {
      title: "深さ優先探索",
      description: "グラフや木構造を探索するためのアルゴリズム",
      link: "/algorithms/depth-first-search"
    },
    {
      title: "幅優先探索",
      description: "グラフや木構造を探索するためのアルゴリズム",
      link: "/algorithms/breadth-first-search"
    },
    {
        title: "A*アルゴリズム",
        description: "最短経路探索のためのヒューリスティックアルゴリズム",
        link: "/algorithms/a-star"
    },
    {
        title: "ベルマンフォード法",
        description: "負の重みを持つグラフの最短経路を求めるアルゴリズム",
        link: "/algorithms/bellman-ford"
    },
    {
        title: "フロイドワーシャル法",
        description: "全点対最短経路を求めるアルゴリズム",
        link: "/algorithms/floyd-warshall"
    },
    {
        title: "クラスカル法",
        description: "最小全域木を求めるためのアルゴリズム",
        link: "/algorithms/kruskal"
    } 
];


export default function Home() {
  return (
    <div>
        <header className="sticky top-0 z-100 border-b-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <Navbar />
      </header>

      <div className='z-10'>
        <MegaMenu 
        id="sort-algorithms"
        title="ソートアルゴリズム"
        items={sortAlgorithmItems}
        columns={3} // 3列に分ける
        />
      </div>

      <div className='z-10'>
        <MegaMenu 
        id="search-algorithms"
        title="探索アルゴリズム"
        items={searchAlgorithmItems}
        columns={3} // 3列に分ける
        />
      </div>

      <div className='z-50'>
        <Footer />
      </div>
    </div> 
  )
  }
