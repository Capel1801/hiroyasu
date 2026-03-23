// ============================================================
// 作品データ（Worksセクション）
// ここに作品を追加・編集します
// ============================================================

export type Work = {
  id: string
  index: string         // 表示番号 "01", "02" ...
  title: string
  subtitle?: string     // サブタイトル（任意）
  description: string   // 概要（1〜2文）
  narrative?: string    // 制作意図・プロセス（任意）
  tags: string[]        // 使用技術・カテゴリ
  year: string
  link?: string         // 外部リンク（任意）
  mediaUrl?: string     // 画像 or 動画URL（任意）
  mediaType?: 'image' | 'video'
}

export const works: Work[] = [
  {
    id: "sonic-ultrasound",
    index: "01",
    title: "Sonic Ultrasound",
    subtitle: "Real-time Audio Visual",
    description: "音の物理現象をリアルタイムで可視化するAVパフォーマンス。GLSL shaderと音響データを直結させた没入型の映像体験。",
    narrative: "音と視覚の境界を溶かすことを目的に制作。周波数解析データをそのままGLSLに渡すことで、音楽が持つ物理的エネルギーを直接映像として出力する。",
    tags: ["TouchDesigner", "GLSL", "Audio Reactive", "Live Performance"],
    year: "2024",
    link: "",
    mediaUrl: "",
    mediaType: "video",
  },
  {
    id: "work-02",
    index: "02",
    title: "Work Title",
    subtitle: "Interactive Installation",
    description: "作品の説明文をここに入れてください。どういう意図で、何の技術を使ったか。",
    tags: ["TouchDesigner", "GLSL"],
    year: "2024",
    link: "",
    mediaUrl: "",
    mediaType: "image",
  },
]
