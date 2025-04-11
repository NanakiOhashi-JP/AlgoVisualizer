FROM node:20-alpine

WORKDIR /app

# パッケージのインストール
COPY package.json ./
COPY package-lock.json ./

# 開発依存関係も含めてインストール
RUN npm install
# Tailwind CSSを明示的にインストール（問題解決のため）
RUN npm install -D tailwindcss postcss autoprefixer

# アプリケーションのコピー
COPY . .

# Tailwind CSS設定ファイルの確保
RUN npx tailwindcss init -p

EXPOSE 3000

CMD ["npm", "run", "dev"]