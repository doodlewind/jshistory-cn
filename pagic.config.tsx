// 使用方式：安装 Deno v1.3.3, Pagic v0.9.1
// curl -fsSL https://deno.land/x/install/install.sh | sh
// deno install --unstable --allow-read --allow-write --allow-net --name=pagic https://deno.land/x/pagic/mod.ts
// ~/.deno/bin/pagic build --serve --watch

export default {
  srcDir: './',
  exclude: [/\/demos\//, /\/public\//, /\/\./, /\/LICENSE/, /\/pagic\.config\.tsx/],
  theme: 'docs',
  plugins: ['sidebar', 'prev_next', 'script'],
  title: 'JavaScript 20 年',
  description: '由 JavaScript 之父 Brendan Eich 与 ES6 规范首席作者 Allen Wirfs-Brock 联合编写。',
  github: 'https://github.com/doodlewind/jshistory-cn',
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
