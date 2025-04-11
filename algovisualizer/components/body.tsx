import React from "react";
import { useEffect } from "react";
import Link from "next/link";

export function Body() {
  return (
    <>
    <div className='justify-center items-center m-4 py-12'>
        <h1 className='text-3xl font-bold p-4 text-center'>
        AlgoVisualizerとは？
        </h1>
        <br/>
        <p className='text-lg px-12'>AlgoVisualizerは、AlgorithmをVisulize(視覚化)し、理解を助けることを目的とした学習支援ツールです。
            教育や公的機関での使用はもちろん、個人の学習や研究にもご利用いただけます。
            すべてのアルゴリズムは、実行の様子を視覚化することができ、また、各アルゴリズムの詳細な説明も用意されています。
            さらに、アルゴリズムの実行時間やメモリ使用量を測定する機能も備えており、アルゴリズムの性能を比較することができます。
            このサイトは一部を除きすべての方がご自由に無料でお使いいただけます。
            ぜひ、Algorithmの学習にお役立てください。
            </p>
    </div>

    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    
    <div className='justify-center items-center m-4 py-12'>
        <h1 className='text-3xl font-bold p-4 text-center'>
        どんなことができるの？
        </h1>
        <br/>
        <p className='text-lg px-12'>AlgoVisualizerでは、さまざまなアルゴリズムを視覚化して学ぶことができます。
            各アルゴリズムは、実行の様子を視覚化することができ、また、各アルゴリズムの詳細な説明も用意されています。
            さらに、アルゴリズムの時間計算量やステップ数を測定する機能も備えており、アルゴリズムの性能を比較することができます。
            このサイトは基本すべての方がご自由に無料でお使いいただけます（<Link href="/terms-of-service" className="underline">利用規約をご覧ください</Link>）。
            ぜひ、Algorithmの学習にお役立てください。
            </p>
    </div>

    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <div className="justify-center items-center m-4 py-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 px-12">
        <div>
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">ソートアルゴリズム</h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            データを特定の順序に並べ替えるアルゴリズムです。
            バブルソート、クイックソート、マージソートなど、
            効率や実装方法が異なる様々な手法を視覚的に比較できます。
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">探索アルゴリズム</h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            データの中から特定の値を効率的に見つけ出す手法です。
            線形探索や二分探索の基本から、幅優先探索、深さ優先探索などのグラフ探索まで、
            その動作を視覚的に理解できます。
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">暗号化アルゴリズム</h2>  
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            データを安全に保護するための変換手法です。
            シーザー暗号などの古典的な手法から、現代の公開鍵暗号方式まで、
            暗号化と復号化の仕組みを視覚的に学べます。
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">機械学習のアルゴリズム</h2>  
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            データからパターンを学習し予測や分類を行う手法です。
            k近傍法や決定木、単純なニューラルネットワークなど、
            機械学習の基礎となるアルゴリズムの動作原理を視覚的に確認できます。
          </p>
        </div>
      </div>
    </div>
    </>
  );
}