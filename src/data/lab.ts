// ============================================================
// ラボ/アーカイブデータ（Labセクション）
// 日々の実験映像をここに追加します
// スマホからNotion/Githubで追加できるよう、シンプルな構造にしています
// ============================================================

export type LabItem = {
  id: string
  title: string
  description?: string
  date: string          // "2024-01" 形式
  tags?: string[]
  embedUrl?: string     // YouTube / Vimeo の埋め込みURL
  thumbnailUrl?: string // サムネイル画像URL
  instagramUrl?: string // Instagramのポスト URL
}

export const labItems: LabItem[] = [
  {
    id: "lab-01",
    title: "GLSL Experiment 01",
    description: "Voronoi変形とフィードバックループの実験",
    date: "2024-03",
    tags: ["GLSL", "TouchDesigner"],
    embedUrl: "",
    thumbnailUrl: "",
  },
  {
    id: "lab-02",
    title: "Audio Reactive Test",
    description: "低音域に反応する幾何学パターン",
    date: "2024-02",
    tags: ["Audio Reactive", "TouchDesigner"],
    embedUrl: "",
    thumbnailUrl: "",
  },
  {
    id: "lab-03",
    title: "Feedback Loop Study",
    description: "フィードバックループによる有機的なテクスチャ生成",
    date: "2024-01",
    tags: ["GLSL", "Generative"],
    embedUrl: "",
    thumbnailUrl: "",
  },
  {
    id: "lab-04",
    title: "Raymarching Practice",
    description: "SDF Raymarchingによる3Dシーン",
    date: "2023-12",
    tags: ["GLSL", "Raymarching"],
    embedUrl: "",
    thumbnailUrl: "",
  },
  {
    id: "lab-05",
    title: "VJ Set Fragment",
    description: "ライブセットからの一部抜粋",
    date: "2023-11",
    tags: ["VJ", "Live"],
    embedUrl: "",
    thumbnailUrl: "",
  },
  {
    id: "lab-06",
    title: "Particle System",
    description: "GPUパーティクルシステムの実験",
    date: "2023-10",
    tags: ["GLSL", "Particles"],
    embedUrl: "",
    thumbnailUrl: "",
  },
]
