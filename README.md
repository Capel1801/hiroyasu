# Hiroyasu — Personal Hub Website

Hiroyasuのパーソナルハブサイト。VJ・クリエイティブ作品・アプリ開発・仕事依頼を一元的に発信するポートフォリオ。

**本番URL:** https://capel1801.github.io/hiroyasu/

---

## 技術スタック

| 項目 | 内容 |
|------|------|
| フレームワーク | Vite + React + TypeScript |
| アニメーション | Framer Motion |
| ホスティング | GitHub Pages（無料） |
| デプロイ | GitHub Actions（mainにpushで自動） |
| サーバー代 | 0円 |

---

## ローカル開発

```bash
cd ~/ClaudeCodeH/projects/apps/hiroyasu
npm install        # 初回のみ
npm run dev        # http://localhost:5173/hiroyasu/ で確認
npm run build      # 本番ビルド確認
```

---

## コンテンツの更新方法

### 基本情報（名前・bio・SNS・ツール）

`src/config/site.ts` を編集する。

```ts
export const siteConfig = {
  name: "Hiroyasu",
  tagline: "Visual Artist & Developer",
  bio: "...",
  email: "your@email.com",
  links: {
    github: "https://github.com/Capel1801",
    instagram: "https://instagram.com/...",
  },
  tools: ["TouchDesigner", "GLSL", ...],
}
```

### 作品を追加（Works セクション）

`src/data/works.ts` に追加する。

```ts
{
  id: "work-id",       // 一意のID
  index: "03",         // 表示番号
  title: "作品タイトル",
  subtitle: "サブタイトル（任意）",
  description: "作品の説明（1〜2文）",
  narrative: "制作意図・プロセス（任意）",
  tags: ["TouchDesigner", "GLSL"],
  year: "2025",
  link: "https://...",         // 外部リンク（任意）
  mediaUrl: "https://...",     // 画像or動画URL（任意）
  mediaType: "video",          // "image" or "video"
}
```

### 実験アーカイブを追加（Lab セクション）

`src/data/lab.ts` に追加する。

```ts
{
  id: "lab-07",
  title: "実験タイトル",
  description: "一行説明",
  date: "2025-04",             // "YYYY-MM" 形式
  tags: ["GLSL"],
  thumbnailUrl: "https://...", // サムネイル画像URL（YouTube/Vimeoのサムネなど）
  embedUrl: "https://...",     // 動画埋め込みURL（任意）
}
```

---

## デプロイの仕組み

```
git push origin main
     ↓
GitHub Actions が自動起動
     ↓
npm install → npm run build
     ↓
dist/ を GitHub Pages に公開
     ↓
https://capel1801.github.io/hiroyasu/ が更新される
```

ワークフローの確認: https://github.com/Capel1801/hiroyasu/actions

---

## プロジェクト構成

```
hiroyasu/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions 自動デプロイ
├── src/
│   ├── config/
│   │   └── site.ts           # ★ サイト全体の設定（名前・bio・SNS）
│   ├── data/
│   │   ├── works.ts          # ★ 作品データ
│   │   └── lab.ts            # ★ ラボ/アーカイブデータ
│   ├── components/
│   │   ├── Nav.tsx           # ナビゲーション
│   │   ├── Hero.tsx          # ファーストビュー
│   │   ├── Works.tsx         # 作品一覧
│   │   ├── Lab.tsx           # 実験アーカイブ
│   │   ├── About.tsx         # About & Contact
│   │   └── Footer.tsx        # フッター
│   ├── styles/
│   │   └── globals.css       # デザイントークン + 全CSS
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts            # base: '/hiroyasu/' の設定あり
└── package.json
```

---

## カスタムドメインの設定（将来対応）

独自ドメイン（例: `hiroyasu.dev`）を取得した場合:

1. `public/CNAME` ファイルを作成し、ドメイン名だけ記述する
2. `vite.config.ts` の `base` を `'/'` に変更する
3. ドメインのDNS設定でGitHub PagesのIPを指定する
4. GitHub リポジトリ Settings → Pages → Custom domain に入力する

---

## 今後追加予定の機能

- [ ] Hero セクションに GLSL シェーダー（React Three Fiber）
- [ ] Works 詳細モーダル
- [ ] Lab セクションの動画埋め込み対応
- [ ] MicroCMS 連携（スマホからコンテンツ追加）
- [ ] アプリ紹介ページ
- [ ] OGP 画像の設定
