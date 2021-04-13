// 需安装 Deno 与 Pagic
// curl -fsSL https://deno.land/x/install/install.sh | sh
// deno install --unstable --allow-read --allow-write --allow-net --name=pagic https://deno.land/x/pagic/mod.ts
// pagic build --serve --watch

export default {
  srcDir: './',
  theme: 'docs',
  plugins: ['sidebar', 'prev_next'],
  title: 'JavaScript 二十年',
  description: '自 1995 年语言诞生到 2015 年 ES6 规范制定为止，共计 20 年的 JavaScript 语言演化历程。',
  github: 'https://github.com/doodlewind/jshistory-cn',
  md: {
    anchorLevel: [1, 2, 3, 4, 5, 6],
    tocLevel: [1, 2, 3, 4]
  },
  nav: [
    // { text: '阅读', link: '/' },
  ],
  sidebar: {
    '/': [
      'README.md',
      'part-1.md',
      'part-2.md',
      'part-3.md',
      'part-4.md',
      'appendices.md',
      'notes.md',
      'references.md',
    ],
  },
  tools: {
    editOnGithub: true,
    backToTop: true,
  },
  port: 8011
}
