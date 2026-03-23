// ============================================================
// サイト全体の設定ファイル
// ここを編集するだけでサイト全体の情報が変わります
// ============================================================

export const siteConfig = {
  // 基本情報
  name: "Hiroyasu",
  tagline: "Visual Artist & Developer",
  bio: "TouchDesigner, GLSL, Webの交差点でリアルタイム表現を作るクリエイター。VJ、インタラクティブアート、プロダクト開発。",
  location: "Tokyo, Japan",

  // 連絡先・SNS（空文字にするとリンクが非表示になります）
  email: "",
  links: {
    github: "https://github.com/Capel1801",
    instagram: "",
    twitter: "",
    youtube: "",
  },

  // 使用ツール一覧（Aboutセクションに表示）
  tools: [
    "TouchDesigner",
    "GLSL",
    "React / Next.js",
    "Vite",
    "Ableton Live",
    "Figma",
  ],

  // 仕事依頼受付中フラグ（trueにするとAboutに表示）
  availableForWork: true,
  availableMessage: "VJ出演・映像演出・アートワーク制作のご依頼受付中",
} as const
