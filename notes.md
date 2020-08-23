# 备注

* <a id="4">[4]</a> 在 Coders at Work [[Seibel 2009](./references.md#codersatwork), chapter 4] 一书中，对 Eich 的早期职业生涯有更详细的描述。
* <a id="5">[5]</a> 此处指 Scheme 编程语言 [[Sussman and Steele Jr 1975](./references.md#Sussman75scheme:an)]。
* <a id="6">[6]</a> Java 的秘密 alpha 版本是 1995 年 3 月或 4 月发布的。
* <a id="7">[7]</a> Jon Bentley [[1986](./references.md#littlelangs)] 引入了「小语言」（little language）术语，以表示那些小而易于学习的语言。它们专注于解决特定领域的问题，并不包含许多传统语言中的特性。
* <a id="8">[8]</a> Mocha 的诞生日期没有已知的确切记录，但 Brendan Eich 相信这一时间是 5 月 6 日到 15 日。
* <a id="9">[9]</a> 最早的 Mocha 实现使用了大型的 *discriminated union* 来表达不同的数据值，并基于引用计数来做内存管理。
* <a id="10">[10]</a> 在 Brendan Eich 进入 Netscape 的第一个月里，他在服务器团队工作。
* <a id="11">[11]</a> Eich 的讨论对象包括曾在 General Magic 公司工作过的 John Giannandrea，他在那里实现了两门可以同时在客户端与服务端使用的编程语言。
* <a id="12">[12]</a> `eval` 的设计，可以支持某种形式上对代码的部分求值，或者将提供给客户端的代码在服务端执行，和 Telescript [[General Magic 1995](./references.md#telescript)] 代理类似。
* <a id="13">[13]</a> 1995 年的开发者不会使用「冲刺」（sprint）这个术语，但它很好地描述了 Eich 所做工作的性质。
* <a id="14">[14]</a> 复合语句包含了嵌套语句，以此作为其语法结构的一部分。通常被用作嵌套语句的是一个语句块。大多数种类的复合语句内都有单条嵌套语句。在这种情况下，嵌套语句是复合语句的「主体」。
* <a id="15">[15]</a> `with` 语句是在 10 天 Mocha 冲刺结束后，应 Netscape LiveWire 团队的要求而添加的。
* <a id="16">[16]</a> 借鉴部分包括 AWK 中函数声明的语法，以及 `return` 语句的语义。
* <a id="17">[17]</a> 本部分中的「undefined」使用斜体表示，因为 JavaScript 1.0 中尚未提供能直接获取该值的名称。
* <a id="18">[18]</a> 所谓遮盖，指创建一个新属性，以此覆盖掉对原型属性的访问。
* <a id="19">[19]</a> 由于 JavaScript 的对象抽象机制缺乏正式的命名，因此很难讨论 JavaScript 库所支持的特定种类的对象。JavaScript 文档中使用了包括「类型」、「对象」、「构造函数」和「类」在内的各种术语来讨论这种抽象。在本文的余下部分，对于一组具备共同的表示和方法的 JavaScript 对象，我们使用「类」这个词汇来讨论对它们的定义，而不管具体的定义形式如何。
* <a id="20">[20]</a> 最早的 HTML `<frame>` 标签已经被废弃，并由 `<iframe>` 标签所取代。但本节中所讨论的语义，对于这两种元素来说是相同的。
* <a id="21">[21]</a> 只要脚本体中不出现任何 `>` 或 `--` 这样在 HTML 注释中非法的操作符，就属于有效的 HTML 注释。
* <a id="22">[22]</a> 本节中的大部分材料，均基于 Allen Wirfs-Brock 在 2018 年 3 月 22 日对 Robert Welland、Shon Katzenberger 和 Peter Kukol 进行的采访录音 [[Welland et al. 2018](./references.md#jscript:interview)]。
* <a id="23">[23]</a> VBA 即 Visual Basic for Application，属于在 Microsoft Office 应用中嵌入的一种 Visual Basic 6 的变体。
* <a id="24">[24]</a> 在 2018 年接受采访时，Kukol 说他最近访问了微软的 JavaScript 团队，发现他最初的解析器仍然（在扩展后）被微软当时的 JavaScript 实现所使用。
* <a id="25">[25]</a> 在 JavaScript 社区中，术语「引擎」指的是 JavaScript 语言的实现。JavaScript 引擎通常由解析器、虚拟机（或类似的运行时支持）、垃圾收集器、标准库实现和其他组件所组成。
* <a id="26">[26]</a> 这是 Brendan Eich 的回顾性描述。所谓「技术债」并不是他在 1996 年会用来表达此类「弥补维护上的拖延」类型需求的词汇。
* <a id="27">[27]</a> SpiderMonkey 成为了后续 Netscape 和 Mozilla 浏览器中 JavaScript 子系统的名称。截止到 2020 年，尽管实际实现技术已经多次改变，Mozilla 仍然在使用这个名称。
* <a id="28">[28]</a> JavaScript 1.2 的文档和 ES3 规范中，将字面量语法称为「数组初始化器」和「对象初始化器」。但「字面量」术语在 JavaScript 程序员群体与文章和书籍中更为常见。
* <a id="29">[29]</a> `__proto__` 伪属性类似于 Self 中的 parent slot。
