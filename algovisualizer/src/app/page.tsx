import React from 'react';
import './globals.css';

import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/footer';
import { Body } from '../../components/body';
import { Heading } from '../../components/heading';

export default function Home() {
  return (
    <div>
    <header className="sticky top-0 z-100 border-b-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <Navbar />
    </header>

      <div className='z-10'>
        <div className='flex flex-col items-center justify-center h-screen '>
          <Heading 
            title={<>ようこそ<span className="mx-2 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">AlgoVisualizer</span>へ!</>}
            subtitle="「アルゴリズムを視覚化して学ぶ」
            アルゴリズムの実行を視覚化し、理解を深めるためのツールです。
            さまざまなアルゴリズムを体験し、学ぶことができます。
            さあ、アルゴリズムの世界を探索しましょう！"
            buttonText="アルゴリズムを学ぶ"
            link="/algorithms"
          />
        </div>
        <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <Body />
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className='z-50'>
        <Footer />
      </div>
    </div> 
  )
  }
