export const seo = {
  title: 'Zane Zhang | 开发者、设计师、细节控、创始人',
  description:
    '我叫 Zane，一名开发者，设计师，细节控，鼓励团队创造影响世界的产品。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://zanezhang.vercel.app'
      : 'http://localhost:3000'
  ),
} as const
