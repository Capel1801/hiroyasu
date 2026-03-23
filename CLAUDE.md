# hiroyasu — CLAUDE.md

## 概要

HiroyasuのパーソナルハブWebサイト。Vite + React + TypeScript + Framer Motion。
GitHub Pages で無料ホスティング。mainにpushで自動デプロイ。

**本番URL:** https://capel1801.github.io/hiroyasu/
**リポジトリ:** https://github.com/Capel1801/hiroyasu

---

## コマンド

```bash
npm run dev      # ローカル開発 → http://localhost:5173/hiroyasu/
npm run build    # 本番ビルド（dist/ に出力）
npm run preview  # ビルド結果をローカルでプレビュー
git push         # → GitHub Actions が自動デプロイ
```

---

## ファイル構成と役割

| ファイル | 役割 |
|---------|------|
| `src/config/site.ts` | **サイト設定の唯一の場所**。名前・bio・SNS・ツール・メールを管理 |
| `src/data/works.ts` | Works セクションの作品データ |
| `src/data/lab.ts` | Lab/Archive セクションのデータ |
| `src/styles/globals.css` | デザイントークン（CSS変数）＋全コンポーネントのスタイル |
| `vite.config.ts` | `base: '/hiroyasu/'` が必須（GitHub Pages のパス設定） |
| `.github/workflows/deploy.yml` | push → build → deploy の自動パイプライン |

---

## デザイン決定事項（変更時は引き継ぐこと）

### Design Brief
- **トーン:** Maximalist × Minimal — 削ぎ落とした構造の中に映像体験を入れる
- **差別化:** テキスト最小限、映像・作品が主役
- **カラー:** BG `#0A0A0A`, Text `#F0EDE8`, Accent `#CDFF00`（電気ライム）
- **フォント:** Display: `Syne 800`, Body: `DM Sans 400`（Google Fonts）
- **スペーシング:** Fibonacci数列ベース（8, 13, 21, 34, 55, 89px）

### 禁止事項（Anti-AI-Slop）
- Purple-to-blueグラデーション禁止
- カード病（全コンテンツをカードに入れる）禁止
- `Inter` / `Roboto` をデフォルトフォントとして使用禁止
- `transition: all` 禁止（特定プロパティのみ指定）

---

## Gotchas（ハマりポイント）

### 1. base URL は必ず `/hiroyasu/` のまま
`vite.config.ts` の `base: '/hiroyasu/'` はGitHub Pagesのパス設定。
リポジトリ名を変えたら、ここも同時に変更すること。
カスタムドメインに移行する場合は `base: '/'` に変更。

### 2. package-lock.json は必ずコミットする
GitHub Actions の `npm ci` は `package-lock.json` がないと失敗する。
`npm install` 後は必ず `package-lock.json` もコミットに含める。

### 3. CSS は globals.css に集約
CSS Modulesは使っていない。全スタイルは `src/styles/globals.css` に集約。
コンポーネントを追加するときはこのファイルにセクションを追加する。

### 4. 動画はリポジトリに入れない
動画ファイルをGitに追加するとリポジトリが肥大化する。
動画は YouTube / Vimeo に上げて URL で参照すること。

### 5. GitHub Actions の権限設定
`deploy.yml` に `permissions: pages: write, id-token: write` が必要。
これがないとデプロイが失敗する。

---

## サイト構成（セクション）

| セクション | ID | 役割 |
|-----------|-----|------|
| Hero | なし | ファーストビュー。名前とタグライン |
| Works | `#works` | 主要作品一覧。タイポグラフィ主体の非カードレイアウト |
| Lab | `#lab` | 日々の実験アーカイブ。グリッドレイアウト |
| About | `#about` | プロフィール・ツール・コンタクト |

---

## 今後の実装予定

- Hero に GLSL シェーダー（React Three Fiber + drei）
  → `src/config/site.ts` に `heroShader: 'name'` フラグを追加して切り替え可能にする
- Works 詳細モーダル（narrative・メディア表示）
- Lab の動画埋め込み（YouTube iframe / Vimeo）
- MicroCMS 連携でスマホからコンテンツ追加
- OGP 画像設定（`index.html` の meta タグ）
- カスタムドメイン（`hiroyasu.dev` など）への移行

---

## コンテンツ追加の手順

```bash
# 1. データファイルを編集
#    src/data/works.ts または src/data/lab.ts

# 2. ローカルで確認
npm run dev

# 3. コミット & push → 自動デプロイ
git add src/data/works.ts
git commit -m "feat: add [作品名] to works"
git push
```
