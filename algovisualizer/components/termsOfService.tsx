import React from "react";
import Link from "next/link";

export function TermsOfService() {
    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">AlgoVisualizer 利用規約</h1>
            
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-200">✓ ひとことまとめ（利用者向け）</h3>
                    <p className="text-blue-700 dark:text-blue-300">
                        AlgoVisualizerは、誰でも自由に学び、使えるツールです。
                        でも、サイト自体そのままコピーして別の営利サイトにしたり、悪用したりするのはNGです。
                        常識的な範囲で自由に使ってくださいね！
                    </p>
            </div>

            <p className="my-6 text-gray-700 dark:text-gray-300">
                本規約は、Nick OHASHI（以下「開発者」）が提供するウェブサービス「AlgoVisualizer」
                （以下「本サービス」）の利用に関して定めるものです。本サービスを利用することにより、
                本規約に同意したものとみなされます。
            </p>

            <div className="space-y-6">
                <section>
                    <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">第1条（サービス内容と利用目的）</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        本サービスは、アルゴリズムの動作を視覚的に学習・理解することを目的とした非営利の教育ツールです。
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                        利用者は、個人・法人問わず無料で利用可能です。ただし、下記に定める禁止事項に該当する行為を行ってはなりません。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">第2条（著作権および知的財産権）</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        本サービスに含まれるデザイン、UI、構成、コード、ロゴ等すべてのコンテンツは開発者に帰属します。
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                        本サービスが可視化しているアルゴリズム自体は一般的な知識（パブリックドメイン）であり、それ自体に独占権はありません。
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                        ただし、本サービスの全体構成・デザイン・インターフェース・ロゴ・一部独自実装については著作権で保護されており、無断での複製・転載・改変・販売等は禁止します。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">第3条（許可される利用例）</h2>
                    <p className="text-gray-700 dark:text-gray-300">以下のような利用は、事前の許可なく自由に行えます：</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>学校や大学等の授業・演習での使用</li>
                        <li>法人・企業内での学習・研修・教育目的の使用（営利法人を含む）</li>
                        <li>個人ブログ・SNSでの紹介やレビュー（ただし出典明記）</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">第4条（禁止事項）</h2>
                    <p className="text-gray-700 dark:text-gray-300">以下の行為は明示的に禁止します：</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>本サービスの内容・構成・UI・コード（アルゴリズムを除く）などを丸ごと、または主要部分をコピーし、再公開・販売・営利目的で使用すること</li>
                        <li>本サービスを改変し、別の名称やブランドで再配布すること</li>
                        <li>本サービスに対する攻撃的な行為（サーバーへの負荷、改ざん、悪意あるアクセスなど）</li>
                        <li>その他、開発者が本サービスの運営に支障をきたすと判断する行為</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">第5条（免責事項）</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        本サービスはベストエフォートで提供されており、その正確性・可用性・動作保証はいたしません。
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                        本サービスの利用により生じたいかなる損害に対しても、開発者は一切の責任を負いません。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">第6条（規約の変更）</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        開発者は、本規約の内容を事前の予告なく変更できるものとします。変更後も継続して本サービスを利用することで、変更後の規約に同意したものとみなされます。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">お問い合わせ</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        本サービスまたは本規約に関するお問い合わせは、<Link href="https://x.com/NickOHASHI" className="underline">X（@NickOHASHI）</Link>よりご連絡ください。
                    </p>
                </section>
            </div>
        </div>
    );
}