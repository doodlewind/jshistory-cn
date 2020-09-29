// 使用方式：安装 Deno v1.3.3, Pagic v0.9.1
// curl -fsSL https://deno.land/x/install/install.sh | sh
// deno install --unstable --allow-read --allow-write --allow-net --name=pagic https://deno.land/x/pagic/mod.ts
// ~/.deno/bin/pagic build --serve --watch
export default {
    srcDir: './',
    theme: 'docs',
    plugins: ['sidebar', 'prev_next'],
    title: 'JavaScript 20 年',
    description: '自 1995 年语言诞生到 2015 年 ES6 规范制定为止，共计 20 年的 JavaScript 语言演化经历。',
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
};
