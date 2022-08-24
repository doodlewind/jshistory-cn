# 继往开来

## 开发 ES3.1/ES5
在 2007 年的大多数时间里，新版 ES4 工作组都认为对 ES3.1 的投入不过是企图阻挠新版 ES4 的竞争，其中并没有实质性的技术。但是，Douglas Crockford、Pratap Lakshman 和 Allen Wirfs-Brock 仍然致力于对 ES3 规范进行增量修改，从而保证规范与时俱进，并修复各种导致互操作性问题的隐患。在发布 ES3.1 的初始目标和设计原则，并提出语言特性级的改动 [[Lakshman et al. 2007](./references.md#es3.1:wd0)] 后，他们走出了工作的第一步，即全面了解当时 Web 浏览器中 JavaScript 的现状，以及真实的 Web 与 ES3 规范之间有何不同之处。

ES3.1 工作组有一个直接的关注点，那就是微软为 Internet Explorer 实现的 JScript 以不符合 Web 标准而闻名。为了验证这些 ECMAScript 相关问题的有效性与影响范围，Allen Wirfs-Brock 请 Pratap Lakshman 进行分析，以确定 IE 的 JScript 与 ES3 规范之间一共有哪些出入。这次分析于 2007 年 9 月完成，其成果是一份长达 87 页的报告，名为《JScript 到 ES3 的偏差》[[Lakshman 2007c](./references.md#jscriptdeviations)]。这份报告分为三个主要部分。在第一部分里，报告逐个确定了「当时的 JScript 实现」与「ES3 规范的明确要求」之间存在偏差的具体位置。对每个偏差，报告都提供了 ES3 中相应被违反之处的描述、用于观察偏差的测试用例，以及在当时最新版的 IE、Mozilla Firefox、Opera 和苹果 Safari 上执行测试的结果。这些浏览器是当时公认的「前四大」浏览器。如图 29 中的示例，就展示了一个被确定出的此类偏差。其中有些偏差为 IE 所特有，有些偏差在所有受测浏览器中均存在，还有些偏差在 IE 和其他若干浏览器中存在。

```
2.15 String.prototype.split: §15.4.4.14

ES3 陈述为「如果分隔符是一个包含捕获小括号的正则表达式，那么每次匹配分隔符时，捕获小括号的结果（包括任何未定义的结果在内）都会被拼接到输出数组中。」

JScript 忽略了捕获小括号。FF 输出了空字符串而不是 undefined。

示例

<script>
alert("A<B>bold</B>and<CODE>coded</CODE>".split(/<(\/)?([^<>]+)>/));
</script>

输出

IE: A,bold,and,coded
FF: A,,B,bold,/,B,and,,CODE,coded,/,CODE,
Opera: 和 FF 相同
Safari: 和 FF 相同
```

图 29. 一个记录在 JScript 偏差报告中的 ES3 偏差 [[Lakshman 2007c](./references.md#jscriptdeviations)]。

偏差报告的第二个主要部分，确定了所有在 ES3 规范中被明确定义为「行为依赖于实现」或定义不够充分之处。这部分也提供了测试用例，以及在四个主流浏览器上执行测试的结果。报告的最后一部分则描述了 IE 中实现的各类属于 ES3 规范扩展的特性。Wirfs-Brock [[2007b](./references.md#awb:mozextensions)] 还准备了一份列表，记录了 Firefox 中实现的 ES3 扩展。在 2007 年 8 月 16 日的会议上，Douglas Crockford 和 Allen Wirfs-Brock 讨论了这些文档的草案，相应产物是一系列 ES3.1 规范中的试验性变更 [[Wirfs-Brock and Crockford 2007](./references.md#awb:aug07crockmeeting)]。

ES3.1 的开发在 2008 年 1 月的 TC39 会议上正式启动。这次会议上探讨了规范的目标，其中另有几位 TC39 成员对参与开发工作也表示出了兴趣。2 月 11 日，Lakshman 向 TC39 的内部邮件列表发送了一条消息，呼吁对 ES3.1 行动的参与。这封邮件提醒人们注意去年夏天准备的偏差与互操作性文档，并请求对这些文档提供更多反馈。在 2 月 21 日举行的电话会议上，每周两次电话会议的工作时间表得以确定。与以前的 ES3.1 讨论相比，参与这些电话会议的人数明显更多。图 30 中列出了相应的经常性参与者。起初，人们通过直发邮件来交换和讨论提案，也有一些讨论在 `es4-discuss` 邮件论坛进行。然而，由于与新版 ES4 主题相关的流量很大，因此很难挑选出其中与 ES3.1 相关的主题。为此在 4 月，一个单独的 `es3.1-discuss`<sup>[80](./notes.md#80)</sup> 邮件论坛 [[TC39 et al. 2008](./references.md#es5-discuss)] 得以成立。之后大多数在会议前后对 ES3.1 设计的讨论，都移到了这个论坛来进行。

<table>
  <tr><td>Douglas Crockford</td><td>Yahoo!</td></tr>
  <tr><td>Pratap Lakshman</td><td>Microsoft</td></tr>
  <tr><td>Mark S. Miller</td><td>Google</td></tr>
  <tr><td>Adam Peller</td><td>IBM</td></tr>
  <tr><td>Sam Ruby</td><td>IBM</td></tr>
  <tr><td>Allen Wirfs-Brock</td><td>Microsoft</td></tr>
  <tr><td>Kris Zyp</td><td>The Dojo Foundation</td></tr>
</table>

图 30. 2008 年 ES3.1 WG 会议的经常性参与者。

在最早的讨论主题 [[TC39 2008d](./references.md#TC39:2008:013)] 里，其中有一个主题是评估 ES3.1 的总体目标，以及在解决问题和添加新特性时所应遵循的设计准则。对此，微软 Live 团队开发者和其他一些 Web 框架开发者所主张的早期立场，是避免使用任何可能导致脚本「无法在现有或旧版浏览器上解析」的新语法扩展。但这种「不允许新语法」的规则带来了过多的限制，忽视了多种浏览器已经具备某些语法扩展的事实。这个讨论的成果，是基于四种最知名的浏览器（IE、Firefox、Opera 和 Safari）而得出的「四人三票」（3 out of 4）规则，这些浏览器在微软的 JScript 偏差文档中都已经被分析过了。当四种浏览器中有三种在某特性上达成了一致或具备共通行为时，ES3.1 规范就应该以此为准。这条规则引发了关于「ES3.1 应如何处理浏览器互操作性问题」的广泛讨论。

人们一致认为，ES3.1 的首要原则是「不要破坏 Web」，亦即确定出有哪些语言变更会改变现有「已与主流浏览器相兼容的」网页的行为。但是现存的网页已有数以亿计，它们实际上依赖了 ECMAScript 规范中的哪些部分呢？对规范的哪些改动会破坏 Web 呢？有一则来自浏览器实现者的趣闻，认为由于现有网页的庞大基数，任何兼容的浏览器特性（不论用法多晦涩或令人难以置信）都可能被某些现存的页面使用。基于这种观点，在所有四种主流浏览器中共通的特性不应被更改，而四种浏览器中有三种支持的特性则很有望被标准化。但对于那些四种浏览器中只有两种支持，或在所有浏览器中都不同的特性和行为，又该怎么办呢？显然，这类特性和行为对于现有的可交互 Web 并非必需，并且还可能会在标准化过程中被进一步修改。

工作组还发现，基本上所有 ECMAScript 规范中允许实现存在的可变性，都不利于创建可兼容的网页。传统的语言规范中可能会允许「特定于实现」的差异，以便为语言实现者提供灵活性，或者适应在不同实现中已知的差异。但这种场景和万维网「通过多种独立创建的 Web 浏览器，访问全球互通的 Web」的理念，在根本上就是不匹配的。ECMAScript 规范需要比传统语言规范更规范化、更详细，并且还需要尽可能消除现有实现上的差异。经过 2 月的初步讨论，Douglas Crockford [[2008a](./references.md#ES3.1:goals)] 在 TC39 Wiki 上发布了修订后的 ES3.1 目标（图 31）。

```
1. 对浏览器实现的统一：考虑采纳 4 种浏览器品牌中已有 3 种实现的特性，或 4 种用户计算机中已有 3 种部署的特性，减少跨浏览器的不兼容性。
2. ES3.1 应通过减少易混淆或麻烦的结构来改进语言，使业余开发者受益。
3. ES3.1 应通过减少易混淆或麻烦的结构来改进语言，使主要网站受益。
4. ES4 应成为 ES3.1 的超集。
5. ES3.1 应为语言的安全子集提供良好基础。
6. ES3.1 应尝试纠正 ES3 中的错误。
7. ES3.1 新特性应需要具体演示。
8. ES3.1 可能会废弃（或选择性删除）影响性能、安全性和可靠性的特性。
9. ES3.1 应提供可虚拟化性，允许对宿主对象的模拟。
```

图 31. 2008 年 2 月 ES3.1 修订后的目标 [[Crockford 2008a](./references.md#ES3.1:goals)]。

在 2008 年 3 月的面对面会议上，工作组一致认为应该立即开始编写实际的 ES3.1 规范文档。Pratap Lakshman 在会议上提供了一份经过纠正的 ES3 规范，其改动来源于 Mozilla 维护的勘误表 [[Horwat 2003b](./references.md#es3:errata)]。工作组同意将其用作 ES3.1 基础文档，并请 Lakshman 担任编辑。跟以前的版本一样，规范文档将使用微软 Word 编写。通过相对于第三版的修订追踪（change tracking）功能，可以跟踪规范的演变情况，从而进行评审，并确保这些改动能被重新集成到新版 ES4 中。工作组成员被分配到了对具体新特性的规范文本开发上（图 32）。工作完成后，Lakshman 会将它们合并到 master 草案中。

<table>
  <tr><td>Lakshman</td><td>基于 Mozilla「数组扩展」的新数组方法，以及 <code>reduce</code> 和 <code>reduceRight</code></td></tr>
  <tr><td>Lakshman</td><td>为字符串添加数组式的下标索引支持</td></tr>
  <tr><td>Lakshman</td><td><code>Date</code> 的改进</td></tr>
  <tr><td>Lakshman</td><td>严格模式下的属性访问语义</td></tr>
  <tr><td>Crockford</td><td>JSON 支持</td></tr>
  <tr><td>Crockford</td><td>Unicode 更新</td></tr>
  <tr><td>Peller</td><td>推荐基于微软偏差文档的改动</td></tr>
  <tr><td>Ruby</td><td>十进制小数</td></tr>
  <tr><td>Zyp</td><td>对象字面量的 getter 和 setter</td></tr>
  <tr><td>Wirfs-Brock</td><td>用于创建和检视属性的静态方法</td></tr>
  <tr><td>Wirfs-Brock</td><td>更新伪代码记号和约定</td></tr>
  <tr><td>Miller</td><td>对象的 freeze 和 seal，并对整份规范从安全角度进行评审</td></tr>
</table>

图 32. 截至 2008 年 3 月 28 日的 ES3.1 工作组任务分配 [[TC39 2008c](./references.md#TC39:2008:028)]。

2008 年 5 月 29 日，Pratap Lakshman 在 TC39 Wiki 上发布了 ES3.1 规范的初稿。更新后的草案通常每周发布一次，而「评审草案」则在每次 TC39 会议之前两到三周发布。在 2008 年 5 月 29 日到 2009 年 3 月 2 日之间，共有 26 个中间草案发布。

长期以来，IBM 一直主张 JavaScript 需要支持十进制小数运算。从 1998 年 11 月 19 日的 TC39 工作组会议起，Mike Cowlishaw 就希望将这一特性包含在 ES3 和初版 ES4 中。当 IBM 重新参与 TC39，开始贡献新版 ES4 和 ES3.1 时，他们再次强烈建议引入对十进制小数的支持。来自 IBM 的成员向 TC39 明确了一点，即 IBM 的政策是「反对所有不支持十进制小数运算的新语言标准」。TC39 中的许多人都对这一目标的可行性表示怀疑，但是 Brendan Eich 支持 IBM，他指出 Firefox 最常报告的的错误来自于那些不了解二进制浮点运算语义的 JavaScript 开发者。Eich 帮助了 Sam Ruby 开始开发原型。他们使用 Mozilla 的 SpiderMonkey 引擎，将 IEEE 754-2008 浮点十进制小数实现为了新的原始数据类型，使其可以在混合模式（mixed-mode）表达式中与 Number 类型结合使用。在 2008 年 9 月和 2008 年 11 月的 ES3.1 草案中，已经纳入了相当完整的十进制小数特性规范。但在 2008 年 11 月 19 日至 20 日的 TC39 会议上，需要就 ES3.1 草案中所应保留或删除的新特性做出最终决定。会议的第一项议题便是十进制小数运算支持。委员会的结论是，十进制小数设计仍然太不成熟，并存在剩余的设计问题，这些问题在不延迟 ES3.1 的情况下是不太可能解决的。会议纪要 [[TC39 2008a](./references.md#TC39:2008:105)] 中记录了这些担忧，并总结如下：

> 由于存在这些问题，因此决定将对十进制小数的支持推迟到 ECMAScript 的 Harmony 修订版。与会者承认，当前在 ECMAScript 十进制小数提案的开发上已经有非常显著的进展，并要感谢 IBM 的 Sam Ruby 对开发所投入的努力。与会者鼓励 Sam 和其他 TC39 成员继续开发该提案，并对「完全集成且通用的」十进制小数运算提案版本成为 Harmony 修订版的组成部分感到乐观。

在 2009 年 1 月发布的下一个评审草案中，没有关于十进制小数运算的资料。

由于微软将 JavaScript 的开发职责转移给了位于 Redmond 的新小组，并且 Pratap Lakshman 拒绝了调迁的机会，因此他在 2009 年 3 月 25 日至 26 日的会议 [[TC39 2009d](./references.md#TC39:2009:022)] 上宣布辞去 ECMA-262 编辑的职务。委员会任命 Allen Wirfs-Brock 接任他的编辑职位。

Wirfs-Brock 回忆说，在 TC39 会议期间的某个休息时间，他找到了 Brendan Eich，建议将 ES3.1 重命名为整数级的版本。关于新名称的说法是，ES3.1 已经成长为 ECMA-262 的全面修订，与之前的三个版本一样重要。而新版 ES4 虽然已经终止，但其相关作品已经广为宣传。因此如果将 ES3.1 指定为第 4 版，会对 JavaScript 开发者社区和 Web 搜索引擎造成混乱。作为替代，Wirfs-Brock 建议 Ecma 永久停用 ECMA-262 第 4 版，并发布 ES3.1 作为第 5 版。对此 Eich 表示同意。在会议恢复后，他们向委员会提出了这个想法，并获得了接受。在认可了对版本号的更新后，会上委员会还同意接受以当时最新的草案作为最终草案。2009 年 4 月 7 日，「最终草案」以第 5 版的名义发布 [[Lakshman et al. 2009](./references.md#TC39:2009:025)]。该草案发布后，还有五份发行候选（release-candidate）草案发布，其中包含了一些较小的技术和编辑更改。在 2009 年 8 月苹果发现 [[Hunt 2009](./references.md#breakNasa)]，使 `arguments` 对象继承自 `Array.prototype` 的决定，会与 Prototype 框架产生意外的交互，从而破坏多个苹果网站和 NASA 网站。于是这一改动从最终规范中删除。

2009 年 9 月 23 日，TC39 [[2009b](./references.md#TC39:2009:045)] 投票确认了 ES5 的完成，并将其提交给 Ecma GA 大会供批准。Ecma GA 大会审核批准的最终草案于 2009 年 10 月 28 日发布。在第 3 版获得批准十年后，《ECMA-262 第 5 版》于 2009 年 12 月 3 日由 GA 大会批准 [[Ecma International 2009a](./references.md#ES5:PR)]。GA 大会投票收到 19 票赞成和 2 票反对。IBM 之所以投反对票，是因为标准未包含对十进制小数运算的支持。Intel 则表示他们投反对票，只是因为他们缺乏足够的时间对规范进行完整的知识产权审查。

《ECMA-262 第 5 版》是 ISO/IEC ECMAScript 标准的快速通道修订版，它经历了 ISO 国家机构的审核过程。Allen Wirfs-Brock 根据审核过程中的反馈，将许多编辑上的修订纳入了规范。这份修订版于 2011 年 6 月作为《ECMA-262 第 5.1 版》和《ISO/IEC 16262 第 3 版》发布。

### ES5 技术设计
尽管 ES3.1 最初的目标非常保守，ES5 仍包含多项技术创新。

#### 严格模式
ES5 严格模式直接源于 Douglas Crockford 在 JavaScript 的设计中「纠正错误和不便」的目标。其中的一些不便在当时会造成语法错误，它们在 ES5 中可以在不影响现有代码的前提下被修正。例如保留字（reserved words）既无法作为对象字面量的属性键，也无法在点号后使用。但是，仍有许多 JavaScript 的错误特性并不能被无条件修复，因为它们可能会改变现有代码的运行时行为，从而「破坏 Web」。严格模式的设想，则是使 JavaScript 开发者有机会在新代码或更新后的代码中，明确是否选择性使用（opt-in）包含了此类修复的语言方言。为此，浏览器将必须同时支持严格模式和原有非严格模式的代码。并且在理想情况下，严格模式应该能在各个独立函数的层面上选择性切换，以便现有脚本能逐步转换为使用严格模式。人们希望随着时间的流逝，严格模式能成为编写新代码的主要方言。但它该如何获得最初的采用，仍然是一个问题。有人认为要等到所有主流浏览器都实现 ES5 严格模式，可能会有相当大的延迟。而浏览器博弈论预测，如果严格模式会使脚本在某些流行的浏览器上无法使用，那么开发者将不会使用它。使严格模式符合减法原则（subtractive）可以规避这个问题。严格模式并没有向 ECMAScript 添加新特性；相反地，它删除了有问题的特性。在不支持严格模式的浏览器上运行时，无错误的严格模式代码也应该能继续按开发者的预期工作。

严格模式的一个早期问题，是该如何选择性地启用它。严格模式所具备的细粒度选择性，需要一种易于嵌入到脚本中的机制来实现，而不能利用类似 `<script>` 元素属性的外部手段。ES4 中考虑过提供可放置在 ECMAScript 代码内的 `use` 指令，以此来选择各种模式。但这样的指令会违反 ES3.1「不允许新语法」的设计准则。还有一种可能性是使用特殊形式的注释作为指令。但是 ES3.1 工作组也不愿意为任何形式的注释赋予语法上的意义，因为 JavaScript 压缩工具（minimizer）会删除注释。但 Allen Wirfs-Brock 发现，ECMAScript 中的 *ExpressionStatement* 语法可以将任何表达式转换成有效的语句。只要某个表达式是显式或隐式地（通过 ASI）后跟分号，那么它就可以转换成有效的语句，对仅含字符串字面量常量的表达式而言也是如此。这意味着那些诸如 `"use-strict";` 的声明，在语法上也是有效的 ES3 代码。因为这行代码只是一个常量值，所以在 ES3 中对其求值也没有副作用。同时这也是一个*空操作*<sup>[g](./appendices.md#no-op)</sup>。选择使用这样的语句作为严格模式看起来相当安全，因为任何现有的 JavaScript 代码似乎都不太可能已经利用了这样的语句形式，并且在 ES3 的实现中加载 ES5 代码时，旧版实现也都会忽略这行代码的存在。工作组采纳了这个想法，决定只要使用 `"use-strict";` 形式的声明作为脚本或函数主体的第一条语句，就表示整个脚本或函数应使用严格模式下的语义来处理。

严格模式的主要目标之一，是显式捕获那些容易产生但在运行时并不明显的编码错误。严格模式中添加了如下的新运行时错误：

* 给未声明的标识符赋值。在旧版 JavaScript 中，对输错的变量名称进行赋值，会导致在全局对象上创建属性。
* 给只读的自有或继承属性赋值。在旧版 JavaScript 中，这种操作会静默地不生效。
* 尝试在不可扩展的对象上创建属性。这样的对象在 ES5 之前并不存在，但为了保持一致性，在 ES5 中的严格模式之外执行此操作时，也将会静默地不生效。
* 将 `delete` 运算符应用于不可删除的属性。在旧版 JavaScript 中，这时的 `delete` 会返回 `false`。
* 将 `delete` 运算符应用于变量引用会产生语法错误。在旧版 JavaScript 中，对于显式声明的变量，`delete` 会返回 `false`。如果变量引用来自与 `with` 语句相配合的对象，或者属于全局对象的属性，那么它在旧版 JavaScript 中将被删除。

严格模式还会移除或修改那些可能使程序更混乱、更难优化或更不安全的特性：

* 禁用 `with` 语句。`with` 语句提供了一种变量引用的动态作用域形式，这种形式可能会造成困扰，并且不利于各实现中的优化。
* `eval` 函数不能动态添加新绑定到当前作用域。
* `eval` 和 `arguments` 不能用作变量名或参数名。
* 函数的 `arguments` 对象不与其形参相关联。作为替代，严格模式下的 `arguments` 对象是一个数组式（array-like）的对象，其元素是传递给函数的参数值的快照。修改其元素不会修改相应形参的值，反之亦然。
* 严格模式下，函数的 `arguments` 对象没有 `callee` 属性。将这样的 `arguments` 对象传递给其他代码时，不会再隐式转移出对其上函数的调用能力<sup>[81](./notes.md#81)</sup>。
* 严格模式下，不允许实现在函数的 `arguments` 对象上提供 `caller` 属性。 `caller` 属性是 ES3 的一个非标准但已广泛实现的扩展，它允许遍历函数的调用堆栈，获取到所有的调用者函数。
* 严格模式下，调用函数时如果没有提供 `this` 值，全局对象对其就不可见。

在 Douglas Crockford [[2007d](./references.md#crock:2007c)] 列出的错误和不便清单上，还有许多关于严格模式的特性，但它们都没有纳入 ES5 中。对于这些特性，要么是 TC39 无法就其是否不受欢迎达成一致，要么是发现该改动不符合减法原则。例如，尽管 Crockford 和其他许多人都不喜欢 JavaScript 的自动分号插入，但许多开发者都更喜欢在没有显式分号的情况下编码。再比如，将 `typeof null` 更改为返回非 `"object"` 的其他值，也不符合减法原则。

#### Getter，Setter 和对象元操作
从最早的 JavaScript 实现开始，内置对象和宿主对象中的某些属性就已具备一些特殊性质。而通过 JavaScript 代码所创建的对象，是无法应用它们的。例如某些属性具有只读的值，或无法使用 `delete` 运算符删除；内置对象和宿主对象的方法属性在由 `for-in` 语句枚举时会被跳过。在 ES1 中这些特殊语义的确定，是通过将 ReadOnly，DontDelete 和 DontEnum 这些标记（attribute）与规范中的对象模型相关联的方式来实现的。这些标记会通过伪代码来测试，伪代码中定义了它们所涉及的语言标记的语义。这些标记没有被具体化（reified）——在 JavaScript 中，并不存在能为「新创建或已有的」属性设置这些标记的语言特性。ES3 中添加了一个 `Object.prototype.propertyIsEnumerable` 方法，用于测试 DontEnum 标记是否存在。但规范中仍然没有对 ReadOnly 或 DontDelete 标记执行非破坏性测试的相应方法。类似地，有许多由浏览器 DOM 提供的宿主对象也暴露了一些属性，它们通常叫做「getter / setter 属性」。在 ES5 中，这些属性被命名为访问器属性（accessor properties），会在存取属性值时执行计算。由于缺少对这些特性的标准化支持，JavaScript 程序员既无法定义「遵守与内置或宿主对象相同约定」的库，也无法实现 polyfill 来可靠地模拟这类对象。

对这些问题的统一解决方案，构成了新版 ES5 特性中最大的一部分。这部分特性没有正式名称，它们被非正式地称为「静态对象函数<sup>[82](./notes.md#82)</sup>」（Static Object Functions）或「对象反射函数」（Object Reflection Functions）。Allen Wirfs-Brock [[2008](./references.md#awb:objectfunctions)] 为这个特性集编写了设计原理文档，其中包含了用例与以下设计准则：

* 干净地将元层（meta）和应用层分开。
* 尽量降低 API 的复杂度，例如方法的数量和方法参数的复杂度。
* 专注于命名和参数设计上的易用性。
* 尝试复用设计中的基本元素<sup>[83](./notes.md#83)</sup>。
* 尽可能使程序员或语言实现能静态优化对该 API 的使用。

第一条准则不鼓励在 `Object.prototype` 中添加形如 `propertyIsEnumerable` 的新方法，这会进一步模糊元层和应用层的分离。作为替代，ES5 工作组决定把这些特性作为命名空间对象的属性，从而将它们与应用层对象分离。他们考虑添加一个名为 `Reflect` 的新内置全局对象作为命名空间对象，但又担心这会与现有代码的名称冲突。最终，他们决定将新函数作为 `Object` 构造函数的属性，而不是 `Object.prototype` 的属性。将对象构造函数作为命名空间是一个不错的选择，因为它是一个已经存在的全局变量，并且在当前的语言实现和以前的标准版本中，都没有在其上定义任何属性。同时，它的名称也与重新考虑对象定义的想法相契合。

下一个问题是确定 API 的形式。基于第二条准则，ES5 设计者希望避免给每个「属性标记」与「访问器属性」分别设置单独的查询与赋值函数。设计者考虑了许多方法来将这一特性合并到少量函数中。一些可能性包括使用具有 Boolean 标记（如「read-only」）的位编码的单个函数，或者具有大量位置参数（positional parameters）的单个函数。但是这两种方法的易用性都不够好。使用可选的关键字参数（keyword arguments）或许可以解决这些易用性问题，但 ES5 中缺少关键字参数。

Allen Wirfs-Brock 建议使用描述符对象（descriptor object），这种对象的属性将与各种属性标记相对应。这种描述符可以用来定义和检查属性。Wirfs-Brock 的第一份草案<sup>[84](./notes.md#84)</sup>展示了一种可能的 API 示例，用于向名为 `obj` 的对象添加属性：

``` js
Object.addProperty(obj, { name: "pi", value: 3.14159, writable: false });
```

在示例中，描述符被编码为对象的字面量。对于描述符上没有，但又与其他属性标记相对应的属性，则会使用这里提供的默认值。还有一个设想中的 `defineProperty` 函数也会接受类似的描述符，可以用来更改已有属性的标记值。`defineProperty` 不会修改不存在于描述符属性上的标记。最后，还可以通过调用 `getProperty` 来获取对象上任何已有属性的完整描述符。

Mark Miller 提出了改进意见，建议让这个 `defineProperty` 能支持「添加新属性」和「修改现有属性」的使用场景。Miller 还建议从属性描述符中删除 name 属性，将描述符包装在一个对象中，该对象的属性名就是目标对象中受影响的属性名。这样的「属性映射表」（property map）将允许通过单次调用定义出多个属性。例如，以下操作就定义出了名为 `x` 和 `y` 的属性：

``` js
Object.defineProperties(obj, {
  x: { value: 0, writable: true },
  y: { value: 0, writable: true }
});
```

Miller 建议移除 `defineProperty`，只保留 `defineProperties` 的形式，因为后者也很容易用于定义单个属性。但是，这种表达方式很难定义出具有计算名称（computed name）的属性。在 ES3.1 中并没有语法能将计算值放置在「对象字面量的属性名称」位置处。最后，ES3.1 既提供了能通过「将名称独立地传递为参数」来定义单个属性的 `defineProperty`，也提供了能通过属性映射表定义多个属性的 `defineProperties`。ES5 定义的整套对象反射函数如图 33 所示。

<table>
  <thead>
    <tr>
      <th>函数名</th>
      <th>行为</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Object.create</code></td>
      <td>使用所提供的对象作为原型，创建一个新的对象。支持通过可选的属性映射表来添加属性。</td>
    </tr>
    <tr>
      <td><code>Object.defineProperty</code></td>
      <td>基于属性描述符创建一个新属性，或更新已有属性的定义。</td>
    </tr>
    <tr>
      <td><code>Object.defineProperties</code></td>
      <td>创建或更新属性映射表中一组属性的定义。</td>
    </tr>
    <tr>
      <td><code>Object.getOwnPropertyDescriptor</code></td>
      <td>返回某个具名属性的描述符对象，不存在该属性时则返回 <code>undefined</code>。</td>
    </tr>
    <tr>
      <td><code>Object.getOwnPropertyNames</code></td>
      <td>返回包含了某对象全部自有属性名字符串的 <code>Array</code>。</td>
    </tr>
    <tr>
      <td><code>Object.getPrototypeOf</code></td>
      <td>返回所传入对象的原型对象。</td>
    </tr>
    <tr>
      <td><code>Object.keys</code></td>
      <td>返回一个 <code>Array</code>，其中包含对象自有属性的字符串名称，这些属性均在使用 <code>for-in</code> 时可见。</td>
    </tr>
    <tr>
      <td><code>Object.preventExtensions</code></td>
      <td>阻止所有向对象上添加新属性的操作。</td>
    </tr>
    <tr>
      <td><code>Object.seal</code></td>
      <td>阻止所有向对象上添加新属性的操作，并阻止对其自有属性定义的修改。</td>
    </tr>
    <tr>
      <td><code>Object.freeze</code></td>
      <td>封存对象，并冻结其所有自有数据属性的值。</td>
    </tr>
    <tr>
      <td><code>Object.isExtensible</code></td>
      <td>测试是否可为对象添加新自有属性。</td>
    </tr>
      <tr>
      <td><code>Object.isSealed</code></td>
      <td>测试某对象是否被封存。</td>
    </tr>
    <tr>
      <td><code>Object.isFrozen</code></td>
      <td>测试某对象是否被冻结。</td>
    </tr>
  </tbody>
</table>

图 33. ES5 对象反射函数。

访问器属性也能通过可选的属性描述符来支持。除了 `value` 属性外，还可以使用具有 `get` 和（或）`set` 属性的描述符来定义访问器属性。例如一个用于「拦截对数据属性存取操作」的访问器属性，就可以定义为如下：

``` js
Object.defineProperties(obj, {
  x: {
    set: function (value) { this.privateX = value }, // 公有访问器属性
    get: function () { return this.privateX }
  },
  privateX: {
    value: 0,
    writable: true
  } // 「私有」数据属性
});
```

除了这种基于反射的接口外，ES3.1 还在语法上支持了用对象字面量来定义访问器属性。四种浏览器中有三种都已经实现了这种语法，因此它符合加入新语法的标准。在对象字面量中，可以通过函数来定义访问器属性，其中函数关键字 `function` 被 `get` 或 `set` 所替换，例如：

``` js
var obj = {
  privateX: 0, // 一个普通的属性
  set x(value) { this.privateX = value }, // 访问器属性 x 的 setter
  get x() { return this.privateX }, // 访问器属性 x 的 getter
  get negX() { return -this.privateX } // 只有 getter 的访问器
};
```

要支持这些新特性，需要扩展语言内部（最早在 ES1 中定义的）对象模型，通过对象反射 API 来部分开放它。这也为重新考虑对象模型的术语提供了契机。ES1 通过一个值和一组标记的方式来描述属性，这些标记包括 ReadOnly，DontEnum 和 DontDelete。ES1 中的标记是无状态的，它们是关联到属性的记号，以自身的存在与否来表达其含义。ES3.1 设计者则希望将这些标记作为属性描述符对象的属性。为此他们更改了内部模型，将 ES1 标记建模为与每个对象属性相关联的 Boolean 状态变量，并将属性值重新建模为另一个状态变量。而内部标记的命名约定，也更改成了与内部方法一致的双括号模式。为了支持访问器属性，内部对象模型上新添加了 `[[Get]]` 和 `[[Set]]` 标记，这些标记的值分别是在值被引用时调用的 getter 函数，以及在赋值时调用的 setter 函数（或者是表示默认函数的 `undefined`）。根据某个属性是否既具有 `[[Value]]` 标记又没有 `[[Get]]` 与 `[[Set]]` 标记，可以区分出数据属性和访问器属性。

为了支持访问器属性，需要更新 ES1 中 `[[Get]]`、`[[Put]]` 和 `[[CanPut]]` 内部方法的规范。为了支持对象反射 API 使用的属性描述符，还需要添加 `[[DefineOwnProperty]]`、`[[GetOwnProperty]]` 和 `[[GetProperty]]` 内部方法。但光有这个反射 API 还是不够。在 ES3.1 中，`for-in` 语句对属性键的枚举、`Object.getOwnPropertyNames` 方法，以及 `Object.keys` 函数，都仍然使用非形式化的叙述来定义语义。

设计对象反射 API 的最后一步，是为这些属性描述符对象中表示属性标记的词汇，确定出一致且可用的命名约定。尤其像 DontEnum 和 ReadOnly 之类的名称就缺乏内部一致性，这引来了对其易用性问题的关注，当它们被用作布尔值标志时更是如此。例如若将属性设为可枚举，就需要表达双重否定（将 DontEnum 设置为 `false`）。在 2008 年初，Neil Mix [[2008b](./references.md#mix:13mar08)] 在与新版 ES4 有关的主题帖上建议，将 「enumerable」、「writable」和「removable」（对应 DontDelete）作为标记名会更好。Mark Miller [[2008b](./references.md#msm:dontenum)] 对这些名称表示赞赏，并提出了一条设计准则：标记名应说明它「允许什么」而非「拒绝什么」。他还建议遵循「默认拒绝」的最佳实践来保证安全性。当定义属性时，全部所需的标记都要显式地启用。

对象反射 API 提供了 ECMAScript 早期版本中没有的新能力。它允许程序更改现有属性的标记，包括在数据属性和访问器属性之间切换。这里的一个考量在于，是否需要额外的标记来禁用此类更改。对此可能的命名包括「dynamic」、「flexible」和「fixed」。但人们担心添加这样一个额外的 Boolean 属性标记后，对现有实现可能产生的影响。如果一个语言实现没有可用的额外比特位来表示该标记，要怎么办呢？最后 ES3.1 工作组意识到，对属性标记的更改，等效于先对属性的当前标记做原子查询，再删除该属性，最后重新创建具有相同名称但标记值已修改的属性。鉴于这种等效性，可以使用单个标记来表达是否启用删除和修改。于是 DontDelete 和 removable 标记被重命名为了「configurable」<sup>[85](./notes.md#85)</sup>，以此来代表这一含义。Mark Miller [[2010b](./references.md#ES5Attributes)] 绘制了 ES5 属性标记的状态图 [[Harel 2007](./references.md#Harel:hopl)]（图 34），并发布到了 ECMAScript Wiki 上。注意当 configurable 标记为 `false` 时，仍然可以将属性的 writable 标记从 `true` 更改为 `false`。这个反常之处的存在，是为了让安全*沙箱*<sup>[g](./appendices.md#sandbox)</sup>能更改某些内置属性，使其从「不可配置但可写」变为「不可配置且不可写」。

![](./images/34.png)

图 34. ES5 中属性的标记状态图 [[Miller 2010b](./references.md#ES5Attributes)]。

作为在 JavaScript 应用中使用「基于原型风格的面向对象编程」范式的倡导者，Douglas Crockford 提倡使用名为 `beget` 的函数，来基于「显式提供的原型」创建对象。ES5 中的 `Object.create` 函数，实质上就是将属性映射表添加为第二个可选参数的 `beget` 函数，例如：

``` js
var point1 = beget(protoPoint); // 用 Crockford 风格创建一个 point
point1.x = 0;
point1.y = 0;
var point2 = Object.create(protoPoint, { // 使用 ES5 声明式风格
  x: { value: 0 },
  y: { value: 0 }
});
```

ES3 中 Crockford 的 `beget` 函数与 ES5 的对比。

Allen Wirfs-Brock 曾希望 JavaScript 程序员采用声明式风格，这样语言实现就可以识别出该模式，并据此优化对象的创建。然而在实践中，有个易用性问题妨碍了这种 ES5 模式的广泛应用。这个问题出在对默认属性标记的选择上。在 JavaScript 1.0 中，通过隐式赋值创建的属性具有与此等效的属性标记：`{writable：true，enumerable：true，configurable：true}`。但 ES5 属性描述符所遵循的「默认拒绝」策略，意味着在使用声明式风格的 `Object.create` 时，所有这些标记的默认值均为 `false`。例子如下所示：

``` js
// 以 Crockford 风格使用 Object.create
var point1 = Object.create(protoPoint);
point1.x = 0;
point1.y = 0;
// point1.x 的标记为
// writable: true, enumerable: true, configurable: true
// point1.y 的标记为
// writable: true, enumerable: true, configurable: true

// 以声明式风格使用 Object.create
var point2 = Object.create(protoPoint, {
  x: { value: 0 },
  y: { value: 0 }
});
// point2.x 的标记为
// writable: false, enumerable: false, configurable: false
// point2.y 的标记为
// writable: false, enumerable: false, configurable: false
```

要与 `beget` 示例的效果完全一致，使用 ES5 风格的 JavaScript 程序员就必须编写：

``` js
// 通过 ES5 与例行的标记值来创建 point 实例
var point2 = Object.create(protoPoint, {
  x: { value: 0, writable: true, enumerable: true, configurable: true },
  y: { value: 0, writable: true, enumerable: true, configurable: true }
});
```

对于大多数希望使用 JavaScript（传统意义上更为宽松的）默认值的程序员而言，这种表达方式过于繁琐。在实践中，人们通常使用 `Object.create` 的单参数形式来创建新对象，使用 `Object.defineProperties` 来定义和操作对象创建后的属性，很少使用 `Object.create` 的双参数形式来定义新对象的属性。

#### 对象的完整性与安全性特性
Netscape 3 所引入的 HTML `<script>` 元素 `src` 属性，使网页可以从多个 Web 服务器加载 JavaScript 代码。按最常见的说法，脚本会被加载到单个 JavaScript 执行环境中，在此它们共享同一个全局命名空间。跨站脚本也可以直接与此交互，这使得人们有条件创建 mashup 应用。跨站脚本的加载能力得到了广泛使用，并对支持基于广告的 Web 商业模式起了关键作用。但是跨站脚本既可能相互篡改与干扰，也可能如此影响原站点页面中的脚本。最后 Web 开发者们意识到，第三方脚本可能引发一些风险，比如窃取密码等用户机密数据，或者修改页面行为以欺骗用户。到 2007 年，人们发现 Web 广告代理商开始在暗中分发恶意广告。浏览器厂商开发了各种 HTML 和 HTTP 级别的特性来解决这一问题，例如内容安全策略（CSP）。但这种级别的特性并不能直接解决许多低层面的 JavaScript 漏洞 [[Barth et al. 2009](./references.md#barth2009cross)]。

当 Douglas Crockford [[Adsafe 2007](./references.md#ADsafe)] 和 Mark Miller [[Caja Project 2012](./references.md#caja:project); [Miller et al. 2008](./references.md#Miller_caja:safe)] 参加 ES3.1 工作组时，他们都在积极开发用于支持 JavaScript 执行沙箱的技术，这些沙箱可用于安全地托管执行不受信任的第三方 JavaScript 代码。尽管 ES3.1 强势的向后兼容性需求意味着已无法消除许多已知的第三方脚本漏洞，但 Crockford 和 Miller 都力求消除那些可以在兼容前提下修补的漏洞，并继续添加新特性，以助于创建安全沙箱。在这之中，Mark Miller 对基于对象能力（object capability）[[Miller 2006](./references.md#ocap)] 构建沙箱所需的特性尤其感兴趣。

这里最大的问题是 JavaScript 对象的可变性（mutability）。默认情况下，包括标准库对象在内的所有 JavaScript 对象，对于任意获取到了对其引用的代码而言，都是完全可变的。对象的属性和方法都可以被更改、赋值或删除。对于被直接引用的对象以及（从根级对象起）被间接引用的对象来说，情况都是这样的。尽管 ES3 中并没有方法能直接修改某个对象「到其原型对象」的引用，但是除 IE 之外的所有主流浏览器都已经实现了非标准属性 `__proto__`。通过该属性，可以修改对象的原型继承链。对于这种普遍存在的可变性，仅有的例外是 ES3 中带有 ReadOnly 或 DontDelete 标记的少数内置属性。

Mark Miller 和 Douglas Crockford 希望添加新能力，从而在将对象传递给不受信任的代码前，能锁定该对象的属性。这种能力可以用于保护需要暴露给沙箱的内置库对象，并让托管在沙箱内的代码能保护任何「需要被传递给不受信任的代码」的对象。通过将 DontDelete 标记重新设定为 Configurable 标记，并利用 `Object.defineProperty` 来使属性不可被修改与删除，语言提供了保护单个属性的基本能力。但这仍不足以防止不受信任的代码将新属性附加到传入其中的对象上。这种添加新属性的能力，使得不受信任的代码可以覆盖掉继承的行为，并有可能构建出用于泄漏私人数据的隐蔽通信渠道。在 ES5 中，这个问题是通过为每个对象关联一个名为 `[[Extensible]]` 的内部新状态来解决的。创建对象时，`[[Extensible]]` 默认被设置为 `true`。但如果将它设置为 `false`，那么新属性就无法添加到该对象上，此时语言实现也不允许提供任何用于修改对象 `[[Prototype]]` 的扩展。最后，一旦 `[[Extensible]]` 被设置为 `false`，就无法将其重置为 `true`。

`Object.isExtensible` 函数提供了一个用于查询对象 `[[Extensible]]` 状态的 API。`Object.preventExtensions` 函数能强制将 `[[Extensible]]` 设置为 `false`。而 `Object.freeze` 函数能很方便地将 `[[Extensible]]` 连同所有属性的 `[[Configurable]]` 与 `[[Writable]]` 标记都设置为 `false`，使对象的直接状态完全不可变。`Object.seal` 函数则类似于 `Object.freeze`，只是它没有将 `[[Writable]]` 设置为 `false`。它能固定住对象的原型和属性集合，但仍然允许修改数据属性的值。

另一个被重点关注的问题，则是对全局对象的环境式访问（ambient access）。ECMAScript 将全局对象定义为了一个「属性位于全局作用域上」的对象，所有具名的标准库对象都作为全局对象的属性存在。并且大多数 JavaScript 的宿主环境，都会向全局对象添加特定于环境的对象与 API 函数。例如浏览器中的全局对象就和 `window` 对象相同，提供了对当前页面 DOM 对象与其他浏览器 API 的完全访问权限。一般而言，沙箱会限制对某些或所有全局对象属性的访问，或替代掉部分全局对象的属性。理论上，应该可以在所有沙箱代码外强制放置一个额外的词法作用域，通过设置这个作用域来实现这种效果。这种手段可以为某些全局对象属性提供替代性的绑定，或者通过提供值为 `undefined` 的遮盖式绑定，从而隔离这些属性。但是自 JavaScript 1.0 以来，始终有一种方法能访问到词法作用域隐藏不了的全局对象：

``` js
function getGlobalObject() {
  // 直接调用时，this 的值是全局对象
  return this;
}
getGlobalObject().document.write("pwned");
```

直到 ES5 前，直接调用函数（而非限定了对象的方法调用）的行为都会传入 `null` 作为隐式 `this` 参数，并且所有函数在被调用时，都会把值为 `null` 的 `this` 替换成全局对象。为了保证后向兼容性，现有代码中的这一行为是不能更改的。但 ES5 的严格模式则为新代码提供了「选择性使用新行为」的机会。在 ES5 中，严格模式下的函数永远不会用全局对象替换实际的 `this` 参数。沙箱可以只允许在其中运行严格模式的 JavaScript 代码，从而杜绝对全局对象的环境式访问。

在 ES5 的开发过程中，Web 上开始实际出现了如图 35 中示例的恶意攻击。ES3 规定使用对象字面量创建的对象继承自 `Object.prototype`，并且该对象字面量会使用 `[[Put]]` 内部方法，以设置新对象字面量中列出的属性。但是当使用 `[[Put]]` 将值分配给对象的属性时，需要查找原型继承链，来检查是否可以找到具有相同名称的属性。如果找到具有这一名称的 setter 属性，相应的 setter 函数就会执行。而如果在 `Object.prototype` 上设置这种 setter，那么只要尝试使用对象字面量形式创建一个与 setter 同名的属性，就都会调用到相应的 setter 函数，并为其传递该属性值。

``` js
// 假设我们已经发现某页面使用对象字面量
// 将一些有价值的信息存在 secret 属性中
function setupToStealSecret() {
  // 使用 ES5 前非标准的 getter / setter API
  // 在原型上定义一对 getter / setter
  Object.prototype.__defineSetter__("secret", function (val) {
    this.__harmlessSoundingName__ = val; // 将值存储在其他属性上
    exploitTheSecret(val, this)
  });
  Object.prototype.__defineGetter__("secret", function () {
    // 从另一个位置获取值，不会破坏原有代码逻辑
    return this.__harmlessSoundingName__;
  });
}

// 当代码使用具有 secret 属性的对象字面量定义对象时，秘密就会泄漏
var objectWithSecret = {
  secret: "password" // 这会触发继承的 setter
  // 可能还定义了其他属性
};
```

图 35. 使用 JavaScript 1.5 的 `__defineSetter__` 扩展的安全漏洞。通过在 `Object.prototype` 上定义 setter 属性，攻击者可以劫持使用对象字面量定义的特定属性的值。

对这个漏洞的修复，会产生对象字面量语义上的破坏性变更，但浏览器厂商愿意为修复这样的安全漏洞而做出改动。实际的规范更改很简单：不再使用 `[[Put]]` 语义来创建新对象的属性。ES5 使用了新的 `[[DefineOwnProperty]]` 内部方法，这个方法会始终忽略继承的属性，直接在对象上创建新的属性。

ES5 只能使 JavaScript 在安全方面前进一小步。当 ES5 的工作正在进行时，Douglas Crockford 建议在 TC39 内成立一个安全 ECMAScript（SES）工作组，其目的 [[Crockford 2008d](./references.md#TC39:2008:086:sesintro); [TC39 2008b](./references.md#TC39:2008:079)] 是探索开发一种新 ECMAScript 安全方言的可能性，这种方言不受后向兼容性的约束。SES 工作组在 2008 到 2009 年举行了四次会议，并评估了一些现有的 JavaScript 解决方案 [[TC39 2008e](./references.md#TC39:2008:086)]，以实现对不可信代码的安全求值。最后，TC39 放弃了对单独的新方言做标准化的想法，但诸如对象能力模型一类的 SES 概念则极大地影响了 Harmony 的研发。Ankur Taly [[2011](./references.md#taly2011automated)] 等人基于形式化手段，展示了严格模式和其他 ES5 特性是如何支持「对 mashup 友好的安全 ECMAScript 子集」的。

#### 活动对象（Activation Object）的移除
在 ES5 之前，ECMAScript 规范已经明确要求使用 ECMAScript 对象来定义 ECMAScript 语言的作用域语义。每个*作用域轮廓*<sup>[g](./appendices.md#scope-contour)</sup>都由一个活动对象（AO）表示。活动对象也是普通的 ECMAScript 对象，其属性提供了变量和函数绑定，这些绑定是由与当前轮廓相对应的代码创建的。嵌套作用域被定义为一份活动对象的列表，可在其中依次搜索对某个引用的绑定。语言特点在于，引用绑定在访问「活动对象」和访问「用户程序定义出的对象属性」时，都会使用相同的属性访问语义运算符。ES1 及其后续规范指出，活动对象的概念仅用于纯粹的语言规范化，对 ECMAScript 程序而言是透明的。然而如果引擎完全符合规范，这种属性访问语义会导致出现一些边界情况下意料之外的行为。对于这些边界情况下的语义，实际实现则各有不同。

例如有一种意外情况，就是活动对象可能继承自 `Object.prototype`，而这是新创建对象的默认原型。这意味着 `Object.prototype` 的属性会被所有活动对象继承，并将作为每个活动对象的本地绑定。这会导致外部作用域中所有名称相同的绑定都被遮盖住。

对绑定的解析是动态发生的，其中会使用活动对象进行属性查找。因此只要在调用函数前，预先加入相应名称在 `Object.prototype` 上的绑定，任何在被调用函数中的自由引用都可以被拦截，例如：

``` js
// ES1–ES3

var originalArray = Array;
function AltArray() {
  // 用于替代内置的 Array 构造器
  // ...
}
// 调用一个函数, 强制它使用 AltArray
Object.prototype.Array = AltArray;
somethingThatFreelyReferencesArray();
delete Object.prototype.Array; // 移除可选的 Array 绑定
```

另一种意外情况，是 ES3 中对 `try` 语句的 `catch` 子句形参的处理。此时的形参会在新作用域中作为「使用本地词法作用域」的绑定，而这个新作用域包含了 `catch` 子句的语句体。使用 ECMAScript 对象来表示作用域轮廓的手段，也给这一语义带来了问题。ES5 规范 [[Lakshman and Wirfs-Brock 2009](./references.md#ES5), Annex D] 对该问题的描述如下：

> 12.4：在第 3 版中，会以类似 `new Object()` 的形式创建出一个对象，作为解析「传递给 `try` 语句 `catch` 子句的异常形参」名称的作用域。如果实际的异常对象是一个函数，并且它在 `catch` 子句中被调用，那么作用域对象将被作为函数调用的 `this` 值传递。而后，函数体可以在 `this` 值上定义新属性。并且在函数返回后，这些属性名称将成为 `catch` 子句作用域内可见的标识符绑定。在第 5 版中，当将异常参数作为函数调用时，将把 `undefined` 作为 `this` 的值来传递。

在 2008 年的大部分时间里，工作组打算在新版本中引入 `const` 声明，因为尽管语义不同，这个特性在四种浏览器中也有三种支持。计划的目的是使 `const` 词法作用域缩小到块级，这有望进一步对早期规范版本中遗留的作用域模型施加压力。

为了解决这些问题，Allen Wirfs-Brock 在规范层面上开发了一种新的作用域与绑定模型。这个模型并不使用 ECMAScript 对象语义来定义标识符解析机制，并且引入了环境记录（environment record）的概念。环境记录包含单个作用域轮廓中的绑定，以及一些环境（environment），每个环境都是环境记录的有序列表。环境记录为在 ECMAScript 程序中某个位置做标识符解析提供了上下文。环境记录有不同的种类，它们可用于表示全局作用域、函数作用域、块级作用域，以及 `with` 语句的作用域。而所有环境都开放了一个规范级的通用协议，用于对单个绑定做定义、查找和值修改。规范中对于与「声明或访问变量」和「其他种类的绑定」相关的语言特性，都需要使用通用的环境记录协议。

不过，`const` 声明最终推迟到了未来的 harmony 规范版本中，因为工作组意识到过早纳入 `const` 可能会引入一些有问题的语义，从而妨碍将来更全面的块级作用域设计。新的作用域模型仍然在 ES5 中得以应用，以解决与作用域相关的已知遗留问题，并为 ES6 中一组更全面的声明语句奠定了基础。

#### 其他 ES5 特性
除了图 33 中列出的对象反射函数外，ES5 还添加了以下的标准内置函数、方法和属性：

* `JSON.parse` 和 `JSON.stringify`，它们可以在对象与其 JSON 格式字符串之间做相互转换。
* 9 个新的 `Array.prototype` 方法：`indexOf`、`lastIndexOf`、`every`、`some`、`forEach`、`map`、`filter`、`reduce` 和 `reduceRight`。
* 1 个新的 `String.prototype` 方法：`trim`。
* `Date`：`Date.prototype.now` 方法与新扩展，用于解析和产生 ISO 8601 日期格式下的数据字符串。
* 新的 `Function.prototype` 方法 `bind`，以及函数实例上的 `name` 属性。

其他各类更改和增强包括：

* 修复 `with` 语句和 `catch` 子句形参作用域的语义。
* 使用 `[]` 语法对字符串做数组式的索引。
* 对正则表达式语法进行小幅修正。
* 每次求值正则表达式字面量时，都需要创建一个新的 `RegExp` 对象。
* 对错误的正则表达式字面量做早期错误报告。
* 全局对象中的 `undefined`、`NaN` 和 `Infinity` 属性具有只读的值。
* 要求对于所有规范中的算法，都用 `Object`、`Array` 等的内置初始值来替代当前值。
* 规范附录 D 和 E 中列出的各种非规范性语义修订。

### 实现与测试<sup>[86](./notes.md#86)</sup>
在 2008 年 7 月于奥斯陆举行的 Ecma TC39 会议上，委员会同意在发布 ES3.1 之前，先获得两种互相兼容的实现。提出「两种互相兼容的实现」需求的主要原因，是确保 TC39 不会去对那些尚未被证明「技术上可行且与现有 Web 内容兼容」的内容进行标准化。Mozilla 承诺提供其中一种实现。由于微软的市场地位及其历来低频的浏览器更新，TC39 内部有一种强烈的情绪，认为微软应该公开浏览器宿主内的语言原型实现，以此作为 ES3.1 验证过程的一部分，展示它对 ES3.1 所应承担的责任。当时 TC39 计划在 2009 年 6 月的 Ecma GA 大会上，做好发布 ES3.1 的准备。这需要在 2009 年 3 月的 TC39 会议上，根据在 2 月到 3 月期限内所进行的互通性测试的结果，来决定出是否继续。当时还没有针对 ECMA-262 的官方一致性测试（conformance test）套件，自然也没有针对 ES3.1 新特性的测试用例，各种语言实现都具备自己的专用测试（ad hoc test）套件。另外除微软外的所有语言实现，也会使用 Mozilla 的 JavaScript 测试套件。微软对 Mozilla 测试套件所使用的 Mozilla 公共许可证有所顾虑，因此不会使用或贡献它。微软的首选测试套件应该使用 MIT 或 BSD 风格许可证，经由 Ecma 来提供。

在 2008 年 10 月，Pratap Lakshman 开始同时开发以 IE 为宿主的 ES3.1 实现，以及为其配套的测试套件。

已被实现出的测试用例将被贡献回社区。而整个测试套件的目标则是实现最大的代码覆盖率，这里的「代码」指的是规范中的伪代码。每个测试用例都以它在最新规范草案中的章节和算法步骤编号来命名，并放置在单独的 `.js` 源文件中。图 36 说明了测试文件所使用的命名约定。


<table>
  <thead>
    <tr><th colspan="2">sectionNumber-algorithmStepNumber-testNumber-s.js</th></tr>
  </thead>
  <tbody>
    <tr><td><b>sectionNumber</b></td><td>规范中的章节号</td></tr>
    <tr><td><b>algorithmStepNumber</b></td><td>某个算法步骤，其需求可由该测试用例验证</td></tr>
    <tr><td><b>testNumber</b></td><td>可选，应于该算法步骤具备多个测试用例时添加</td></tr>
    <tr><td><b>-s</b></td><td>可选，应于测试用例面向严格模式时添加</td></tr>
  </tbody>
</table>

图 36. 用于 esconform 测试用例文件的命名约定。每个文件包含一个测试，并以其在规范中所测试的伪代码步骤作为文件名。

Lakshman 实现了 900 多个测试用例，以及一个用于运行和报告各用例的简单测试工具。图 37 是其中一个测试用例的示例。

``` js
// Test Subclause 10.4.2 Algorithm 3 Step 1 Strict mode}
var testName =
"Eval code in strict mode-cannot instantiate variable in calling context";

function testcase() {
    eval("'use strict ';var __10_4_2_3_1_s = 1");
    try{
        __10_4_2_3_1_s;
    } catch(e) {
        if (e instanceof ReferenceError)
        return true;
    }
}
```

图 37. 一个 ES5conform 测试。这个测试用例位于微软为 TC39 提供的初始 zip 文件中的 `10.4.2-3-1-s.js` 中 [[Microsoft 2009a](./references.md#es5conform:initial)]。

在 2009 年 1 月的 TC39 会议 [[Horwat 2009](./references.md#Horwat:Jan2009notes)] 上，Pratap Lakshman 演示了 ES3.1 的原型。它将实验版 `JSCRIPT.dll` 集成到了刚发布的微软 IE 8 Release Candidate 1 版本中 。这次演示的内容包含了新语言特性与一致性测试套件。人们对这项工作大加赞赏，Waldemar Horwat 在会议记录中提到：「开发者们欣喜若狂」。

微软向 Ecma 贡献了这些测试，并在其开源项目门户 `codeplex.com` 上以「ES5conform」[[2009](./references.md#es5conform)] 的名义发布了它们。大致在同一时间，谷歌宣布 [[Hansen 2009](./references.md#sputnik)] 将发布他们在开发 Chrome 的 V8 JavaScript 引擎过程中创建的开源 ES3 测试套件。这个测试套件被命名为「Sputnik」，包含了 5000 多个测试。

2010 年，ES5conform 和 Sputnik 成为了名为「Test262」的通用测试套件的核心，这一套件由 Ecma TC39 管理。像这样由 Ecma 技术委员会来维护和分发软件包，是一种根本性的改变。为了实现这一目标，必须要解决许多政策与许可证问题。Test262 开发过程中，最早的 ES5 阶段由 David Fugate 领导，到 ES6 阶段这一职责交给了 Brian Terlson。在 ES6 阶段后，Test262 由 Leo Balter 组织。现在，Test262 已经成为了 TC39 开发过程中不可或缺的一部分，每个 ECMAScript 新特性必须在测试后才能纳入 ECMAScript 标准。截至 2018 年 8 月 21 日，Test262 包含了 61877 个测试。Test262 的成功使得 TC39 相信，现在的规范已经不再需要配套的可执行文件了。

## 从 Harmony 到 ECMAScript 2015
新版 ES4 的流产，使 TC39 自 1999 年以来终于能以相对干净的状态，来规划 JavaScript 未来的演进之路。TC39 不再考虑从头开始创造一种更好的语言，开始了一条走向成功的道路。只要花 7 年时间，就能抵达这条路的终点。

### 开始投入 Harmony
TC39 的 Harmony 项目没有受限于 ES4 开发期间所做的决策，但仍然可以从中参考借鉴。虽然 TC39 仍然会被部分 ES5 项目中的决策所限制，但这项工作现在总体上与 Harmony 的预期方向一致。事实上，在 2008 年下半年和 2009 年的大部分时间里，TC39 在大部分会议时间里关注的都是 ES5。这也为整个委员会提供了一个机会，使他们能以 ES5 规范为起点，熟悉并投入 Harmony 上的工作。

#### 稻草人（Strawman）与目标
在 2008 年 8 月，ECMAScript Wiki 上出现了名为「Harmony 稻草人」的页面，`es4-discuss` 邮件列表也更名为 `es-discuss`<sup>[g](./appendices.md#es-discuss)</sup>。在 Harmony 项目提出后，`es-discuss` 上爆发了关于其潜在特性的新讨论。根据当时的工作流程，新的想法会在 `es-discuss` 或 TC39 会议上提出。如果 TC39 的成员认为某个想法有价值，他们会写出一份初步的设计或特性描述，并将其发布到稻草人 Wiki 页面上。随后这个「稻草人」将在 TC39 会议上进行展示。根据委员会的反应，该想法要么被放弃，要么被反复修改以继续完善。到 2008 年 11 月 21 日，稻草人 Wiki 页面 [[TC39 Harmony 2008](./references.md#Harmony:strawman1)] 中共列出了以下条目：

* class
* const
* lambda
* 词法作用域
* 命名
* 返回到标签
* 类型

除了这里的 class 还是个占位符之外，所有条目都指向了一份由 Dave Herman 简要撰写的稻草人提案。

对于 Harmony 中可能的特性，人们进行了广泛的讨论。到 2009 年夏天，委员会决定进一步促进这项工作形成体系。在 2009 年 7 月的会议 [[TC39 2009a](./references.md#TC39:2009:037-Rev1)] 上，TC39 成员决定是时候定义出 Harmony 的目标了。他们认为 ES3.1 的目标 [[Crockford 2008a](./references.md#ES3.1:goals)] 在此仍然适用，主要只是在其基础上做一些补充和改进。Brendan Eich [[2009a](./references.md#Harmony:goals)] 发布了这些目标的新版本。其最终产物是如图 38 所示的「Harmony 目标说明」。

```
需求
1. 新特性需要具体的示例。
2. 保持语言对业余开发者的愉悦性。
3. 保留语言易于「从小规模开始迭代原型」的性质。

目标
1. 成为如下场景下更好的语言：
  一、开发复杂的应用时。
  二、开发这些应用所依赖的库（可能包括 DOM）时。
  三、开发面向新版的代码生成器时。
2. 切换到可测试的规范，理想情况下这对应于一个主要以 ES5 为宿主的定义解释器。
3. 改善互操作性，尽可能采用事实上的标准。
4. 尽可能保持版本号的简单和线性。
5. 支持在对象层面上可静态验证的安全子集。

手段
1. 尽量减少 ES5 之外所需的额外语义状态。
2. 为以下维度提供语法上的便利：
  一、良好的抽象模式。
  二、高完整性的模式。
  三、经过净化后所定义出的核心语义。
3. 通过可选的版本机制或前置杂注（pragma），去除易混淆或麻烦的结构：
  一、考虑使 Harmony 基于 ES5 严格模式。
4. 支持虚拟化，允许对宿主对象的模拟。
```

图 38. 2009 年 7 月的 Harmony 目标说明 [[Eich 2009a](./references.md#Harmony:goals)]。

#### 倡导者模型
Dave Herman 向委员会建议，认为委员会应该采用一种名为「倡导者模型」的开发方式<sup>[87](./notes.md#87)</sup>。基于这种模型，应由一位或一小组成员共同对一项单独的特性负责。倡导者（champion）需要写出最初的稻草人提案，并持续对其进行改进，直到提案可以被整合到实际规范中为止。从提出最早的稻草人提案起，倡导者还需要随提案发展向整个委员会做报告，并接受来自委员会和其他评审者的反馈。这些反馈意见也由倡导者消化，并据此决定是否对提案进行更新。基于倡导者模型，委员会应该就不会在倡导者报告过程中陷入「委员会设计」的行为了。不过最后仍然需要委员会全体达成一致，以决定将最终提案纳入规范。

委员会接受了 Herman 对倡导者模型的提案，并总体上有效地使用了这一模型。但这种机制也有崩溃的时候。这一时期的核心会员群体相对较小，技术能力也很强。他们有时根本抵挡不住「由委员会做一些设计」的诱惑，有时这其实是在提案上取得进展的最有效方式。有时会出现多位倡导者，他们会对某一特定特性或设计问题提出不同的解法和提案。在这种情况下，如果相互竞争的倡导者们不能就一份共同的提案达成一致，委员会就必须选择一个提案，或在某些情况下拒绝所有相互竞争的提案。

#### 选择特性集
在 2009 年、2010 年和 2011 年上半年的大部分时间里，TC39 的倡导者们都在致力于开发稻草人提案。他们与委员会一起审查这些提案，并试图获得必要的共识，以便将其推进到获得接受的状态。到 2009 年 8 月，稻草人页面 [[TC39 Harmony 2009](./references.md#Harmony:strawman2)] 上的提案数量已从最初的 7 个发展到了 21 个。到 2010 年初，Harmony 特性集的大致形态开始出现。Brendan Eich [[2010a](./references.md#Harmony:themes)] 将它们组织成了一系列主题（见图 39），并添加到了介绍 Harmony 目标的页面。到 2010 年 12 月，稻草人页面 [[TC39 Harmony 2010b](./references.md#Harmony:strawman3)] 上的提案已经增加到了 66 个，另有 17 份提案 [[TC39 Harmony 2010a](./references.md#Harmony:deferred)] 已确认被推迟或放弃。到 2011 年 5 月初，稻草人页面 [[TC39 Harmony 2011c](./references.md#Harmony:proposals3); Appendix N] 有超过 100 个条目，而「已批准提案」的页面 [[TC39 Harmony 2011a](./references.md#Harmony:proposals3)] 有 17 个条目。

```
主题
1. 模块化，换句话说即如何划分源码单元，以对外部用户隐藏内部细节
2. 隔离性，即阻止副作用传播，或仅允许特定引用来传播副作用
  * 零授权的制造者式模块（maker-style modules）
  * 其他涉及模块的「基础设施 / 上下文 / 内置特性」等的组合
  * 浏览器中缺乏隔离：多个互相连接的全局对象
3. 虚拟化，用于分层的客体代码托管，并连接不同的对象系统，特别是模拟宿主对象
  * 代理（Proxy）
  * 弱引用或 Ephemeron（类似 WeakMap 的数据结构，译者注）
4. 控制副作用，以便于较简单的迭代和状态机代码
  * 有限的 continuation 机制
  * 生成器与迭代器
5. 为库与工具赋能，这样 TC39 委员会就不会妨碍库的演进
  * Object.hashcode
  * 某种字节数组
  * 值类型（用于十进制小数运算等）
6. 语言改革，需要「更好的胡萝卜」来引导用户远离不好的形式
  * 块级作用域中的 let、const 和函数
  * 默认参数、剩余参数（rest parameter）和展开运算符（spread operator）
  * 解构（destructuring）
7. 版本化，因为新语法是 Harmony 的一部分
  * 本主题意在尽量减少选择性使用的版本特性，从而简化迁移，并为未来的下一版做准备
```

图 39. 2010 年的 Harmony 特性主题 [[Eich 2010a](./references.md#TC39:2011:028)]。

2009 年，Brendan Eich [[TC39 2009b](./references.md#TC39:2009:045)] 建议 TC39 将 2012 年 6 月作为Ecma GA 通过「ES.next」的目标日期，并将特性冻结的目标日期定为 2011 年 5 月。随着 5 月目标日期的临近，规范明显还无法在 2012 年 6 月完成。但起草一份规范所承诺的特性列表以便专注于其开发，仍然有其意义所在。5 月会议 [[TC39 2011b](./references.md#TC39:2011:028)] 的大部分时间用于对稻草人列表进行分类，并就哪些剩余的稻草人提案将推进到「Harmony 提案」状态达成了共识。每份稻草人提案都先经过讨论，然后再去衡量是否有共识来推进它。在经过最低限度的审查后，一些提案获得推进，另一些则被拒绝。对于其他代表重要特性的提案，虽然委员会对当时相应的稻草人不够满意，但它们也得到了推进。这些提案被当作占位符，等待后续开发改进后的提案。如模块和类即均以此方式处理。最终的 Harmony 特性集并未在会议上被严格冻结。随着 ES.next 开发的继续，也有一些提案被加入和放弃。但此次会议所列出的提案清单，已经确立了后来 ES2015 的大致形态。图 40 列出了 5 月会议的参会者，附录 O 则展示了会后的 Harmony 提案页面 [[TC39 Harmony 2011b](./references.md#Harmony:proposals4)]。

<table>
  <tr><td>Avner Aharon</td><td>Microsoft</td><td>Waldemar Horwat</td><td>Google</td></tr>
  <tr><td>Douglas Crockford</td><td>Yahoo! (Phone)</td><td>Mark Miller</td><td>Google</td></tr>
  <tr><td>Brendan Eich</td><td>Mozilla</td><td>John Neumann</td><td>Ecma</td></tr>
  <tr><td>Cormac Flanagan</td><td>UCSC</td><td>Alex Russell</td><td>Google</td></tr>
  <tr><td>David Fugate</td><td>Microsoft</td><td>Mike Samuel</td><td>Google</td></tr>
  <tr><td>Dave Herman</td><td>Mozilla</td><td>István Sebestyén</td><td>Ecma</td></tr>
  <tr><td>Luke Hoban</td><td>Microsoft</td><td>Sam Tobin-Hochstadt</td><td>Northeastern Univ</td></tr>
  <tr><td>Bill Frants</td><td>Periwinkle (guest)</td><td>Allen Wirfs-Brock</td><td>Mozilla</td></tr>
</table>

图 40. 2011 年 5 月 TC39 特性筛选会的参会者 [[TC39 2011b](./references.md#TC39:2011:028)]。

#### 开始编写规范
作为项目编辑，Allen Wirfs-Brock 全权负责根据 TC39 倡导者开发的 Harmony 提案，来创建 ES.next 规范文档。在微软，他的职责被分散在 TC39 相关工作与其他项目之间。2010 年 12 月，他离开微软加入 Mozilla，专注于 ES Harmony。

ES4 和 ES5 的经验使 Wirfs-Brock 明白，持续不断地对具体规范文档的开发，是完成新版标准的关键。2011 年 6 月 22 日，他怀着坚定的决心打开了最近完成的 ES5.1 规范的源文件，将封面页改为「第 6 版草案」，并将其保存为基准 ES6 规范草案。然后，他立即开始根据 5 月份的特性分类与委员会两年来做出的其他决定，在草案中编辑新材料。7 月 12 日，他发布了「ES.next 规范的第一份工作草案」[[Wirfs-Brock et al. 2011a](./references.md#ES6draft1), [b](./references.md#TC39:2011:032)]。图 41 是该草案的变更摘要。这是委员会发布的 38 份草案中的第一份，最后一份草案则于 2015 年 4 月 14 日发布到了 Wiki 上 [[Wirfs-Brock et al. 2015a](./references.md#ES6draft38), [c](./references.md#TC39:2015:030)]。

* `5.1.4` 引入补充语法的概念。
* `5.3` 引入静态语义规则的概念。
* `8.6.2` 等处取消了 `[[Class]]` 内部属性，增加了各种内部特征属性作为替代。
* `10.1.2` 定义了「扩展代码」的概念，即指可能使用新版 ES.next 语法的代码。一并重新定义的还有「严格代码」，即 ES5 严格模式代码或扩展代码。
* `11.1.4` 增加了在数组字面量中使用展开运算符的语法和语义。
* `11.1.5` 增加了属性值简写的语法和语义，以及多种辅助抽象操作的语义。
* `11.2, 11.2.4` 增加了参数列表中展开运算符的语法和语义。
* `11.13` 增加了解构赋值运算符的语法和语义。
* `12.2` 增加了 BindingPattern 语法和部分语义，以支持在声明与形参列表中的解构。
* `13` 增加了对形参列表中剩余参数、参数默认值和模式解构的语法支持，并为它们提供了静态语义。但这种参数的实例化还未完成。对这类增强后的形参列表，也定义了实参列表的「长度」。
* `15` 说明了此条目的函数规范，实际上是 `[[Call]]` 内部方法的定义。
* `15.2.4.2` 重新规定 toString 不使用 `[[Class]]`。注意未来仍然需要增加一种明确的扩展机制。
* `Annex B` 改名为面向 Web 浏览器 ES 实现的规范化可选特性。

图 41. 首份 ES6 草案的变更日志 [[Wirfs-Brock et al. 2011a](./references.md#es6draft1), reformatted]。

#### One JavaScript
从 Harmony 项目启动起，TC39 就假定需要某种显式的「选择性使用」（opt-in）机制，来使用很多（甚至可能是所有）的新 Harmony 特性。这是从 ES4 时代延续下来的。在 ES4 时代，很多提案都包含了会使一些现有 JavaScript 程序失效的破坏性变更。Harmony 的进程对于纳入破坏性变更而言比较保守，但还是有所考虑的。在 Harmony 开发的前三年，具体的选择机制还没有确定，但也经常受到讨论。第一份 ES6 草案引入了「扩展代码」的概念，它是 ES5 严格代码的超集，但还没有包含对具体选择机制的描述。一些可供考虑的替代方案包括：使用 HTML `<script>` 元素属性从外部进行选择；使用新的 `use mode` 杂注语句；使用某种分隔的语法形式；添加一种类似于 `"use strict"` 的新指令等。有人担心这样下去将来会有多少种模式，难道标准的每个大版本里都需要选择性地使用一种新模式吗？这似乎对语言用户和实现者而言都是个重大的复杂性负担。

Dave Herman [[2011b](./references.md#nooptin)] 在题为「ES6 不需要 opt-in」的 `es-discuss` 消息中认为，破坏性变更应该非常有限，并且仅限于在封装为 ES6 模块的代码内。绝大多数特性应该是非破坏性的，这样无论它们是否出现在模块中，都应该表现得完全一致。在某些情况下，这可能需要重新设计一些特性。在少数情况下，设想中的特性可能不得不为此而放弃。在对这条 `es-discuss` 消息的 150 多条回复中，这些想法逐渐得到了完善。在接下来的 TC39 会议上，Herman [[2012](./references.md#1js)] 做了一次名为「One JavaScript」的演讲，其中介绍了对这些想法的提炼。这里的关键在于，未来的程序员与 ECMAScript Harmony 的实现者们，应该能够用一种统一的 JavaScript 语言来思考，而不用考虑模式、版本或方言。TC39 有责任使 ES.next 的设计与此观点保持一致。会议的大部分时间都在讨论这条命题，以及它对各种 Harmony 特性的影响。大家的共识是尽量让「1JS」适用于 Harmony。在下一份规范草案 [[Wirfs-Brock et al. 2012a](./references.md#ES6rev6)] 中，扩展代码的概念被删除了。同时人们也做了各种其他的修改，以消除潜在的破坏性变更。

#### Brendan 的梦想
2011 年 1 月，在 Harmony 上投入了两年多的工作后，Brendan Eich [[2011b](./references.md#BrendanDreams)] 发表了一篇名为《我的 Harmony 梦想》的博客文章，其中提出了一些关于语言进化和标准委员会的观点。文中核心则给出了他希望中「Harmony JavaScript 应该是什么样子」的示例。

> ……我想提出一个全新的 JavaScript Harmony 愿景。当然，这里的概念性尝试还（暂时）不够标准，但也不是一些随意而糟糕的衍生品。这些东西确实可能成为现实。如果有你们的帮助，它们会更有可能实现，并且能实现得更好（关于如何参与，可参见本文末尾）。
>
> 我正在模糊 Ecma TC39 目前的共识与我的想法之间的界限。这里的共识包括 Harmony 项目，以及 TC39 上一些人赞成的 Harmony 稻草人提案。我这么做是故意的，因为我认为 JS 需要一些新的概念上的完整性。它不需要安全的委员会设计，不管是那种「让我们把所有提案联合起来」的方法（这在 TC39 上是行不通的），还是盲目地「让我们求出提案间的交集，如果结果还是空集，那就这样算了吧」的方法（这也是行不通的，但这是更可能的坏结果），都是不可行的。

他介绍了各种场景下如何使用 ES5 特性进行编码的示例，以及如何在他梦想的 Harmony 中表达同等内容的替代性示例。这些设想中的例子，展示了 Harmony 提案的中间阶段，以及它们是如何演变成实际 ES2015 特性的。他提出的一些内容并未纳入 ES2015 中，大多数特性最后在某些方面发生了变化。另外也有必要做出其他的改动，因为 1JS 理念消除了对现有特性的语法和语义进行选择性修改的可能性。

为了解这些特性的演化，这里将比较 Brendan Eich 在 2011 年的「梦想」<sup>[88](./notes.md#88)</sup>和最终成为现实的 ES2015。

**梦想：绑定与作用域**。块级作用域的声明和自由变量引用，属于早期（解析时）错误：

``` js
let block_scoped = "yay!"
const REALLY = "srsly"
function later(f, t, type) {
  setTimeout(f, t, typo) // EARLY ERROR
}
```

**ES2015 现实**：支持块级作用域的 `let` 和 `const` 声明，但 1JS 令自由变量引用不属于早期错误。

**梦想：函数声明的改进**。消除 `function` 关键字，隐式 `return` 最后的表达式，即可为不存在自由变量的函数消除冗余闭包：

``` js
const #add(a, b) { a + b }
#(x) { x * x }
```

**ES2015 现实**：箭头函数取代了 `#` 符号，仅对带有表达式体的箭头函数采用隐式 `return`。对象字面量和类语句体中使用了简洁的方法。至于是否做对上层不可见的闭包优化，则交由实现决定：

``` js
const add = (a, b) => a + b // 表达式体隐式返回
x => x * x
x => { console.log(x); return x * x } // 语句体需要显式返回
// 对象字面量与类中的方法定义
class {
  add(a, b) { return a + b } // 不支持表达式体
}
```

**梦想：使用词法作用域的 this**。在 `#` 号函数中，`this` 基于词法作用域绑定：

``` js
function writeNodes() {
  this.nodes.forEach(#(node) {
    this.write(node)
  })
}
```

**ES2015 现实**：对于 `this` 和其他函数级作用域的隐式绑定，都会在箭头函数中使用词法绑定：

``` js
function writeNodes() {
  this.nodes.forEach(node => this.write(node))
}
```

**梦想：记录（record）与元组（tuple）**。支持不可变的数据结构，并支持内容层面的等价性：

``` js
const point = #{ x: 10, y: 20 }
point === #{ x: 10, y: 20 } // true
```

**ES2015 现实**：未支持。这一特性过于接近「可扩展的值类型」的概念，这在 Harmony 中并未获得充分开发。

**梦想：剩余参数、展开与解构**。支持可变长度参数列表的语法，可将数组展开到参数列表与数组字面量，并从数组和对象中提取组件。

``` js
function printf(format, ...args) {
  /* 将 args 作为真实数组使用 */
}
function construct(f, a) {
  return new f(...a)
}
let [first, second] = sequence
const { name, address, ...misc } = person
```

**ES2015 现实**：除了 ES2015 中不支持 `...` 运算符的对象解构外，与设想完全相同。对象解构特性在后续版本中已经加入。

**梦想：模块**。一种简单的模块化设计，支持在浏览器中异步加载。

``` js
module M {
  module N = "http://N.com/N.js"
  export const K = N.K // N.K 的值
  exported export #add(x, y) { x + y }
}
```

**ES2015 现实**：每个文件一个模块，没有明确的模块定义定界符。支持更多的 `import` 和 `export` 形式。基于绑定而非模块间共享的值。

``` js
// http://M.com/M.js 的内容
export {K} from "http://N.com/N.js" // N.K 所 export 的绑定
export const add = (x, y) => x + y
```

**梦想：迭代**。对无括号的 `for-in` 语句进行扩展，使其能与「基于 proxy 的标准库」或「用户定义的生成器函数」所提供的迭代器一起工作。

``` js
module Iter = {"@std:Iteration"}
import Iter.{keys,values,items,range}
for k in keys(o) { append(o[k]) }
for v in values(o) { append(v) }
for [k,v] in items(o) { append(k, v) }
for x in o { append(x) }
#sqgen(n) { for i in range(n) yield i*i }
return [i * i for i in range(n)] // 数组推导
return (i * i for i in range(n)) // 生成器推导
```

**ES2015 现实**：1JS 鼓励使用 `for-of` 语句，以取代通过依赖模块和 proxy 来重载 `for-in` 的行为。内置的集合类也定义出了标准的 key / value / entries 协议。出于对未来前景的考量，推导式在 Harmony 开发的后期被放弃了。

``` js
for (k of o.keys()) append(o[k])
for (v of o.values()) append(v)
for ([k,v] of o.entries()) append(k, v)
for (x of o) append(x) // o 提供了其默认迭代器
function *sqgen(n) {for (let i of Array(n).keys) yield i*i } // 一个生成器
```

**梦想：无括号的语句**。这是更为现代的语法，在复合语句中取消了原先必需的小括号：

``` js
if x > y { alert("paren-free") }
if x > z return "brace -free"
if x > y { f() else if x > z { g() }
```

**ES2015 现实**：被认为过于激进而被 TC39 拒绝，未纳入规范。1JS 要求继续承认旧的语法形式，新旧形式的混合导致了设计和使用上额外的复杂性。

### 重新打造规范
使用可执行、可测试的规范来表达 ECMAScript 语义的愿望，从新版 ES4 的工作中延续了下来。但使用 ML 作为规范语言的尝试已经被放弃了。在 Harmony 工作的早期，Allen Wirfs-Brock [[2009](./references.md#awb:definterp)] 提出了通过「以 ES5 JavaScript 编写的定义解释器」来确定 Harmony 的想法。这个想法甚至被列入了 Harmony 目标声明中（图 38）。但到 2010 年春天，在这个概念上仍然没有取得什么进展，TC39 成员对此方法也感到了更多的不确定性。而为 ES5（附录 P）所做的伪代码改进，已经消除了早期版本中伪代码存在的大部分可用性问题。并且 Test262 的进展也表明，一套全面的测试套件对于验证规范和实现同样有用。在 5 月的 TC39 会议 [[2010](./references.md#TC39:2010:028)] 上，人们再次讨论了规范的形式。当前现状对会议上的许多人来说仍然很有吸引力。苹果公司的 Oliver Hunt 发现，作为规范实现者，ES5 中的伪代码比他见过的任何可执行规范代码都更好用。于是会议一致决定继续使用伪代码来定义 Harmony。

对于项目编辑来说，创建规范并不仅仅是一件简单的集成任务。从理论上来说，提案应当由倡导者开发到「可以轻松集成到规范中」的程度。但在实践中，这种情况很少发生。一些倡导者对规范的结构或形式不够熟悉，无法创建可集成的伪代码。另外一些人则没有必要的时间或专业知识来创建详细的语义规范。对于许多提案，Allen Wirfs-Brock 不得不设法将它们集成到规范中。这需要制定语义细节，并编写或重写提案在规范中的算法。

倡导者们往往会较为狭隘地关注自己的提案所定义的特性。好的提案会考虑到该特性如何与语言的现有特性交互。然而即使是最熟练的倡导者，也很难考虑他们的特性和「其他倡导者同时开发的其他提案」之间所有的潜在交互。所有特性都必须通过编辑，才能成为实际规范的一部分。所以 Wirfs-Brock 对于原有语言和所有 Harmony 提案如何结合在一起形成 ES6，有着最完整的看法。他特别关注跨越多个特性提案的交叉问题，并确保提案之间在语法和语义上的一致性。当整合已批准的提案时，他会试图将它们转化为一组可组合的正交特性 [[Linsey 1993](./references.md#Lindsey:1993:HA:154766.155365)]。有时，这需要改变提案的语法或语义细节，甚至增加或删除重要特性。然后这些改变必须提交给倡导者，而且往往还要提交给整个委员会批准。

#### 重组规范结构
从 1997 年的第一版初稿（图 13）到 ES5.1 为止，ECMAScript 规范的组织结构基本没有变化。在编写 ES5 规范时，Allen Wirfs-Brock 发现规范中材料的基本排序令人困惑。他逐渐认识到规范实际上定义了三个独立的部分：

* 一个 ECMAScript 虚拟机，包括各种运行时实体及其语义。
* ECMAScript 语言的语法、语义，及其与虚拟机之间的映射。
* 所有 ECMAScript 程序都可以使用的各种标准库对象。

原始规范及其修订版将三部分交织在一起，掩盖了这一基本结构。Allen Wirfs-Brock 认为，将规范明确地组织成三部分结构将使其更容易理解，还能更清楚地介绍大量新的 ES6 材料。委员会对此表示同意。图 42 显示了 ES2015 规范的新组织结构与 ES5 规范之间的比较。

<table>
  <thead>
    <tr><th>条目</th><th>ECMA-262 第 5.1 版（245 页）</th><th>ECMA-262 第 6 版（545 页）</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Scope</td><td>Scope</td></tr>
    <tr><td>2</td><td>Conformance</td><td>Conformance</td></tr>
    <tr><td>3</td><td>Normative References</td><td>Normative References</td></tr>
    <tr><td>4</td><td>Overview</td><td>Overview</td></tr>
    <tr><td>5</td><td>Conventions</td><td>Notational Conventions</td></tr>
    <tr><td>6</td><td>Source Text</td><td>ECMAScript Data Types and Values</td></tr>
    <tr><td>7</td><td>Lexical Conventions</td><td>Abstract Operations</td></tr>
    <tr><td>8</td><td>Types</td><td>Executable Code and Execution Contexts</td></tr>
    <tr><td>9</td><td>Type Conversion and Testing</td><td>Ordinary and Exotic Object Behaviors</td></tr>
    <tr><td>10</td><td>Executable Code and Execution Contexts</td><td>ECMAScript Language: Source Code</td></tr>
    <tr><td>11</td><td>Expressions</td><td>ECMAScript Language: Lexical Grammar</td></tr>
    <tr><td>12</td><td>Statements</td><td>ECMAScript Language: Expressions</td></tr>
    <tr><td>13</td><td>Function Definition</td><td>ECMAScript Language: Statements and Declarations</td></tr>
    <tr><td>14</td><td>Program</td><td>ECMAScript Language: Functions and Classes</td></tr>
    <tr><td>15</td><td>Standard Built-in ECMAScript Objects</td><td>ECMAScript Language: Scripts and Modules</td></tr>
    <tr><td>16</td><td>Errors</td><td>Error Handling and Language Extensions</td></tr>
    <tr><td>17</td><td></td><td>ECMAScript Standard Built-in Objects</td></tr>
    <tr><td>18</td><td></td><td>The Global Object</td></tr>
    <tr><td>19</td><td></td><td>Fundamental Objects</td></tr>
    <tr><td>20</td><td></td><td>Numbers and Dates</td></tr>
    <tr><td>21</td><td></td><td>Text Processing</td></tr>
    <tr><td>22</td><td></td><td>Indexed Collections</td></tr>
    <tr><td>23</td><td></td><td>Keyed Collections</td></tr>
    <tr><td>24</td><td></td><td>Structured Data</td></tr>
    <tr><td>25</td><td></td><td>Control Abstraction Objects</td></tr>
    <tr><td>26</td><td></td><td>Reflection</td></tr>
  </tbody>
</table>

图 42. 第五版和第六版规范的组织。在 ES6 规范中，第 6-9 条定义了虚拟机语义。第 10-15 条定义了语言，第 17-26 条定义了标准库。

#### 新的术语
ES6 为澄清和更新规范中使用的一些术语提供了机会。其中需要注意的一个领域，就是对象的命名规则。在 JavaScript 1.0 的实现中，JavaScript 程序可以访问特定于宿主和 JavaScript 引擎的对象。这些对象的基本语义，相比于用 ECMAScript 代码所能创建的对象，有着多种不同的区别。ES1 规范中使用了以下术语：「对象」、「原生对象」、「标准对象」、「内置对象」、「标准原生对象」、「内置原生对象」和「宿主对象」，以指代可以实现对象的各种方式。这些称呼之间的区别很微妙，但却没有特别的用处。人们不清楚这些类别中到底哪些允许特别的对象语义，也不清楚 JavaScript 程序员所创建的对象与其中的哪些相匹配。

ES6 的一个目标，是使大多数标准库和宿主对象能使用 JavaScript 代码进行「自托管的实现」。有了自托管的可能性，对象是由宿主提供、由引擎提供还是由程序提供，其中的区别就显得越来越不重要了。对象之间的语义差异要比「谁来提供它们」或「用来实现它们的技术」更为重要。

对此在术语上的基本需求，是区分具有正常语义的对象和具有反常（即不寻常）语义的对象。Douglas Crockford [[TC39 2012b](./references.md#TC39:2012:034)] 根据 Ecma 最高会员等级的名称，建议用「标准对象<sup>[g](./appendices.md#ordinary-object)</sup>」来表示那些语义上使用 JavaScript 对象字面量或 `new Object()` 来创建的对象。凡是在语义上与普通对象语义有任何偏离的对象，都被称为「异质对象<sup>[g](./appendices.md#exotic-object)</sup>」。标准对象和异质对象都可能由宿主、引擎或应用程序员提供，也可能用 JavaScript 或其他语言来实现。

#### 新的语义种类
在 ES6 之前，除了那些定义标准库函数的算法之外，大多数伪代码算法都与语法产生式相关联，并指定了相应产生式的运行时求值语义。并没有必要对这些算法进行命名，因为它们是唯一与语法产生式相关联的语义。此外还有一些算法（如类型转换的算法和定义对象语义的内部方法）则没有直接与语法相关联。这些算法被赋予了名称，以便于从求值算法中引用。

ES6 引入了形如对象解构之类的新特性，它们具有复杂的行为，其规范必须横贯多种语法产生式。一些算法需要对解析树进行多次遍历以收集信息，或对跨越多个解析节点的求值步骤进行排序。还有一些常见的在语法上存在关联的行为，会为了保持一致性而在多种语言特性之间复用。为适应这些需求，ES6 规范中除了隐式命名的求值算法外，还可以将命名算法与解析节点关联起来。它们通过名称被其所关联的语法符号引用。通常这种命名算法是多态的，即一个同名算法被定义为多种语法产生式。实际选择的具体算法，取决于在解析特定源文本语法符号时所进行的推导。

为了最大限度地减少实现之间的差异，ECMA-262 的每一个后续版本都更精确地定义了错误条件，以及应在何时检测到它们。ES3 隐式地引入了「早期错误」的概念，并在 ES5 中进一步完善。所谓早期错误，指的是在脚本求值前就会被检测到并报告的错误。一旦检测到早期错误，就会阻止对脚本的求值。最常见的早期错误形式是语法错误。当脚本的源代码不能使用 ECMAScript 语法进行解析时，就会出现这种错误。语法错误隐含在了语法的定义中。ES3 引入了一些其他类型的早期错误，例如在 `break` 语句中引用了语句标签，而相应标签在词法上没有包围住 `break` 语句时。ES5 严格模式中又增加了一些早期错误。尽管这些错误不属于解析错误，规范还是将大多数此类错误定义为语法错误，即对语言静态语义规则的违反。在 ES6 之前，多数这样的错误都通过位于求值算法附近的非正式叙述来确定，其他则通过使用伪代码来确定。这些伪代码会在求值算法中测试运行时的错误条件，然后基于叙述来说明该错误「可以或应该」作为早期错误报告。

ES6 特性中引入了更多种类的早期错误。例如，试图使用 `let` 或 `const` 声明来重复定义一个标识符，就属于早期错误。ES6 在语法中增加了「静态语义」（Static Semantic）子条目，用于一致地指定早期错误的触发条件。图 43 显示了一组早期错误定义的示例。如图所示，早期错误规则可以引用静态语义算法。静态语义算法使用与运行时算法相同的约定，只是它们可能不会引用 ECMAScript 环境的任何运行时状态——因为它们是在求值脚本之前应用的。这些静态语义早期错误规则和算法，仅限于使用和分析可从源代码中提取的信息，而无需执行源代码。运行时算法中可以调用静态语义算法，但静态语义算法不能调用运行时算法。

```
13.3.1.1 静态语义: Early Errors

LexicalDeclaration : LetOrConst BindingList ;
  * 如果 BindingList 的 BoundNames 包含 "let"，属于 Syntax Error。
  * 如果 BindingList 的 BoundNames 包含重复项，属于 Syntax Error。
LexicalBinding : BindingIdentifier Initializer (opt)
  * 如果 Initializer 不存在，且包含这条产生式的 LexicalDeclaration 对应的 IsConstantDeclaration 结果为 true，属于 Syntax Error。

...
13.3.1.3 静态语义: IsConstantDeclaration
LexicalDeclaration : LetOrConst BindingList ;
  1. 返回 LetOrConst 的 IsConstantDeclaration。
LetOrConst : let
  1. 返回 false。
LetOrConst : const
  1. 返回 true。
```

图 43. ES6 静态语义规则示例 [[Wirfs-Brock 2015a](./references.md#ES2015), pages 194-195]。

### ES2015 语言特性
Harmony 提案 Wiki 页面 [[TC39 Harmony 2014](./references.md#Harmony:proposals5)] 最终版本中所列出的提案，被开发成了几十种语言及其标准库的新特性与扩展特性。典型提案在被纳入规范草案之前，要经过多次反复的迭代。有些提案在纳入规范草案后，还会继续进行改进。一些提案最终被放弃审议，或推迟到未来的版本中。

以下各节将深入探讨几项重要提案的发展历史，并总结其他重要特性的细节。

#### Realms、Jobs、Proxies 和元对象编程（MOP）
Harmony 的目标之一，在于使异质对象不分其为内置还是由宿主定义，均能实现自托管，并完全确定其由 Web 浏览器所实现的语义扩展机制。为支持这一目标，需要完善某些 ECMAScript「虚拟机」中现有的抽象，并进一步增加新的抽象，以确定新的（或不够明确的）语言特性。

「Realm」[[Wirfs-Brock 2015a](./references.md#ES2015), pg. 72] 是一种新的规范抽象。引入它的目的，是为了支持在单个 ECMAScript 执行环境中描述多个全局命名空间的语义。Realm 能支持 HTML 页框的语义，这是 ECMAScript 自 ES1 以来一直忽略的浏览器特性。而「Job」[[Wirfs-Brock 2015a](./references.md#ES2015), pg. 76] 这种规范抽象的加入，是为了确定性地定义 ECMAScript 执行环境该如何将多个脚本依次执行到完成（run-to-completion）。基于 Job 所提供的方法，能解释由浏览器和其他 JavaScript 宿主所提供的「事件派发」和「延迟回调」的语义。它们还为定义 ES2015 中 Promise 的语义建立了基础。

ES1 所提供的内部方法，基本上是个残缺的元对象协议。在对各种内置对象和宿主提供的对象做属性访问时，会有各类可见的语义区别。基于内部方法，可以将这些区别解释为它们在内部方法规范上的差异。但在 ES2015 之前，内部方法的语义还不够完整和规范，其使用也不够一致。为了「驯服」宿主对象，实现异质对象的自托管，并支持对象能力的*隔离层*<sup>[g](./appendices.md#membrane)</sup> [[Van Cutsem and Miller 2013](./references.md#VanCutsem:2013:TPV:2524984.2524994)]。ES1 到 ES5 中所设计的内部方法，被转换成了一种明确的元对象编程（MOP）。

JavaScript 代码要想定义异质对象，就必须能为这些对象所用的内部方法提供相应的实现。这个特性是由 ES2015 中的 `Proxy` 对象 [[Wirfs-Brock 2015a](./references.md#ES2015), pg. 495] 提供的。新版 ES4 提出了一种名为「catchalls」[[TC39 ES4 2006a](./references.md#es4:catchalls)] 的机制，从而让 JavaScript 代码能逐对象地覆盖当「试图访问某个属性，或调用某个不存在的方法」时发生的默认动作。这个「catchalls」机制的目的，是改进 JavaScript 1.5 的非标准 `__noSuchMethod__` 机制 [[Mozilla 2008a](./references.md#moz:nosuchmethod)]。在 Harmony 中，Brendan Eich [[2009b](./references.md#Eich:catchallesdiscuss); [2009d](./references.md#Eich:catchallstrawman)] 引入了所谓的「动作方法」（action method）概念，使其能动态附加到对象上，从而令新版 ES4 的 catchalls 更进一步通用化。在对某个对象执行某些语言操作时，如果该对象上已定义了相应的动作方法，则会调用该方法。可用的动作集与 ES5 的内部方法集类似，但不是它们的直接映射。这里有个悬而未决的问题，即这些动作是在执行所有属性访问时触发，还是仅当访问不存在的属性时触发。Eich 所设计的用于将动作附加到对象上的 API，是以 ES5 对象反射函数为基础的：

``` js
// Harmony Catchall 提案

var peer = new Object;
Object.defineCatchAll(obj, {
  // 加入支持数组式行为的动作
  has: function (id) { return peer.hasOwnProperty(id); },
  get: function (id) { return peer[id]; },
  set: function (id, value) {
    if ((id >>> 0) === id && id >= peer.length) peer.length = 1 + id;
    peer[id] = value
  },
  add: function (id) {
    Object.defineProperty(obj, id, {
      get: function () { return peer[id]; },
      set: function (value) { peer[id] = value; }
    })
  },
  // 其他动作的定义...
});
```

在这个例子中，属性 `has`、`get`、`set` 和 `add` 提供了动态附加到 `obj` 对象上的所有动作。各动作函数可在词法上共享对 `peer` 对象的访问，这就在 `obj` 和 `peer` 之间建立了一对一的关联。这些处理函数共同使用 `peer` 来支持对 `obj` 自有属性的存储。它们还会动态更新 `peer` 对象的 `length` 属性值，因此该值总比用作属性名的最大整数大 1。

在 Brendan Eich 的 catchall 提案之后不久，Tom Van Cutsem 和 Mark Miller [[2010a](./references.md#proxystrawman); [2010b](./references.md#VanCutsem:2010:PDP:1869631.1869638)] 又提出了另一种设计。这就是「基于代理的 catchall 提案」[[Van Cutsem 2009](./references.md#proxyannounce)]，它定义了一套分层的对象交互 API。Proxy 提案的目的是支持对虚拟对象的定义，例如在安全的「基于对象能力」式系统中，定义出用于实现隔离的隔离层对象。TC39 基本认可了 Proxy 稻草人，并很快将其作为 Harmony 提案接受。

这份提案引入了 Proxy 对象的概念。提案没有扩展出具侵入性动作方法的基础对象，而是选择创建一个与处理器对象（handler object）相关联的 Proxy 对象，其中的方法称之为「trap」。Trap 会由语言操作而触发。通过处理器函数，可以完全定义出语言操作所用的对象行为。Trap 既可能是自包含的，也可能通过词法捕获的形式，与「对处理器函数可见的已有对象」一起使用。如下所示 [[Van Cutsem and Miller 2010c](./references.md#proxypres)]：

``` js
// 最早的 Harmony Proxy 提案

// 一个进行简单转发的代理
function makeHandler(obj) {
  return {
    has: function (name) { return name in obj; },
    get: function (rcvr, name) { return obj[name]; },
    set: function (rcvr, name, val) { obj[name] = val; return true; },
    enumerate: function () {
      var res = []; for (name in obj) { res.push(name); }; return res;
    },
    delete: function (name) { return delete obj[name]; }
  };
}
var proxy = Proxy.create(makeHandler(o), Object.getPrototypeOf(o));
```

在这个例子中，`makeHandler` 是用于创建处理器对象的辅助函数，其 trap 在词法上共享对「作为参数传递给 `makeHandler` 的对象」的访问。传递给 `makeHandler` 的对象可能是一个新创建的对象，这时它的作用类似于 catch-all 例子中的 `peer` 对象。另外，被传递的对象也可以是一个已有的对象。这时，trap 可以将部分或全部被截获的操作转发给该对象。在这种情况下，`obj` 对象的角色就相当于「被转发代理」的目标。

通过将 trap 方法放在处理器对象中的方式，可以避免它与基础对象属性的名称相冲突。提案中定义了 7 种基本 trap、6 种派生 trap<sup>[89](./notes.md#89)</sup>，以及 2 种针对函数对象的 trap。和 catchall 提案类似地，trap 和 ES5 的内部方法相接近，但也不是 ES5 内部方法的直接映射。ES5 中为 `[[GetOwnProperty]]` 和 `[[DefineOwnProperty]]` 内部方法建立了某些不可违背的一致性规则 [[Wirfs-Brock 2011b](./references.md#ES5.1), page 33]。而对 ES2015 来说，有个棘手的问题就是如何在实行<sup>[90](./notes.md#90)</sup>这些规则的同时，对「被冻结或密封的对象」与「不可配置的属性」进行虚拟化。

在对原始 Proxy 提案做原型建设后，Van Cutsem [[2011](./references.md#directproxyannounce)] 宣布了重大修订：

> 几周前，Mark 和我坐在一起研究了 proxy 的一些现存问题，特别是如何让 proxy 更好地处理不可配置的属性和不可扩展的对象。其结果就是我们所说的「直接代理」：在我们的新提案中，proxy 总是另一个「目标」对象的包装器。只要以这种方式稍微转变我们对 proxy 的看法，很多早先开放的问题就不复存在了。并且这样一来，proxy 的开销在某些情况下可能会大大减少。

在「直接代理」的提案 [[Van Cutsem and Miller 2011a](./references.md#directproxyspec), [b](./references.md#directproxystrawman), [2012](./references.md#directproxyproposal)] 中，目标对象（以下例子中的 `o`）类似于转发代理例子中传递给 `makeHandler` 的对象。它作为 Proxy 对象的内部状态而保存，并在调用 trap 时作为一个显式参数来传递。因为 Proxy 了解目标对象的信息，所以它可以在使用目标对象时，确保其符合必要的一致性规则。以下是直接代理版本的 Proxy 转发示例：

``` js
// Harmony 直接代理提案

// 一个进行简单直接转发的代理
var Proxy(o, {
  // 处理器对象
  has: function (target, name) {
    return Reflect.has(target, name)
  },
  get: function (target, name, rcvr) {
    return Reflect.get(target, name, rcvr)
  },
  set: function (target, name, val, rcvr) {
    return Reflect.set(target, name, val, rcvr)
  },
  enumerate: function (target) {
    return Reflect.enumerate(target)
  },
  // ...
});
```

这里 `Reflect` 对象的方法对应于标准的内部方法。它们使处理器函数能直接调用对象的内部方法，而非使用隐式调用它们的 JavaScript 代码序列。在直接代理的设计中，最初主要根据 ES5 的内部方法，定义出了 16 种不同的 trap。设计中还发现对于某些对象的内部操作，由于其没有用内部方法来定义，所以无法被 Proxy 拦截。Tom Van Cutsem、Mark Miller 和 Allen Wirfs-Brock 共同开发了 Harmony 内部方法和 Proxy 的 trap，使它们保持一致，并足以表达 ECMAScript 规范和宿主对象中所定义的所有对象行为。其具体的实现手段是增加新的内部方法，以及将一些不可截取的操作，重新定义为基础级、可捕获的常规方法调用。此外提案还定义了每个内部方法的关键一致性规则。ECMAScript 的实现和宿主都必须确保符合这些一致性规则，而 `Proxy` 可以对自托管的异质对象实行<sup>[91](./notes.md#91)</sup>这些规则。图 44 是对 ES2015 中元对象编程的概述：

<table>
  <thead>
    <tr><th>ES5 内部方法</th><th>ES6 内部方法</th><th>ES6 Proxy Traps 与反射方法</th></tr>
  </thead>
  <tbody>
    <tr><td>[[Canput]]</td><td></td><td></td></tr>
    <tr><td>[[DefaultValue]]</td><td></td><td></td></tr>
    <tr><td>[[GetProperty]]</td><td></td><td></td></tr>
    <tr><td>[[HasProperty]]</td><td>[[HasProperty]]</td><td>has</td></tr>
    <tr><td>[[Get]]</td><td>[[Get]]</td><td>get</td></tr>
    <tr><td>[[GetOwnProperty]]</td><td>[[GetOwnProperty]]</td><td>getOwnPropertyDescriptor</td></tr>
    <tr><td>[[Put]]</td><td>[[Set]]</td><td>set</td></tr>
    <tr><td>[[Delete]]</td><td>[[Delete]]</td><td>deleteProperty</td></tr>
    <tr><td>[[DefineOwnProperty]]</td><td>[[DefineOwnProperty]]</td><td>defineProperty</td></tr>
    <tr><td>[[Call]]</td><td>[[Call]]</td><td>apply</td></tr>
    <tr><td>[[Construct]]</td><td>[[Construct]]</td><td>construct</td></tr>
    <tr><td></td><td>[[Enumerate]]</td><td>enumerate</td></tr>
    <tr><td></td><td>[[OwnPropertyKeys]]</td><td>ownKeys</td></tr>
    <tr><td></td><td>[[GetPrototypeOf]]</td><td>getPrototypeOf</td></tr>
    <tr><td></td><td>[[SetPrototypeOf]]</td><td>setPrototypeOf</td></tr>
    <tr><td></td><td>[[IsExtensible]]</td><td>isExtensible</td></tr>
    <tr><td></td><td>[[PreventExtensions]]</td><td>preventExtensions</td></tr>
  </tbody>
</table>

图 44. ES6/ES2015 的元对象协议由规范级内部方法定义，并通过 `Proxy` 的 trap 和 `Reflect` 方法进行验证。

在直接代理的设计中，使用了一个封装过的目标对象。但它的设计目的并非提供目标对象的简易透明封装。与其表象相反，代理并不是一种用来记录属性访问或处理「方法未找到」问题的简单方式。为了支持这些用例而朴素实现的 Proxy 对象，通常是不可靠或有错误的。直接代理的核心使用场景，是对象的虚拟化和安全隔离层的创建。正如 Mark Miller [[2018](./references.md#msm:proxiesForMembranes)] 所解释的那样：

> Proxy 和 WeakMap 的最初设计动机，是支持隔离层的创建。单独使用的 proxy 不可能是透明的，也不能合理地达到接近透明的程度。隔离层能合理且几乎透明地模拟 realm 的边界。对于具备私有成员的类而言，这种模拟基本上是完美的。

#### 块级声明作用域
从初版 ES4 起，就有对加入块级声明作用域的诉求。具有类 C 式语言语法经验的程序员，会希望位于 `{}` 块中的声明属于该块中的局部变量。最早 JavaScript 1.0 中的 `var` 作用域规则令人惊讶，有时会掩盖严重的错误。其中的一个常见 bug 就是循环中闭包的问题：

``` js
// ES3

function f(x) { // 此函数有循环中闭包的 bug
  for (var p in x) {
    var v = doSomething(x, p);
    obj.setCallback(function (arg) { handle(v, p, arg) });
    // 全部在循环中创建的闭包都共享 v 和 p 的绑定
    // 而不是在每次迭代中使用不同的绑定
  }
}
```

这种手法在操作浏览器 DOM 的代码中很常见——即便是有经验的 JavaScript 程序员，有时也会忘记 `var` 声明不是块级作用域的。

除非破坏已有代码，否则现有的 `var` 声明是无法改变为块级作用域的。在新版 ES4 尝试中，已经确定使用关键字 `let` 和 `const` 作为声明，以满足对块级作用域的需求。关键字 `let` 用于定义可变的变量绑定，而 `const` 则用于定义不可变的常量绑定。它们的使用并不限于块，而是可以出现在任何能出现 `var` 声明的地方。新版 ES4 设计团队甚至还制作了写有标语「let 是新的 var」的T恤。Harmony 继承了 `let` 和 `const` 声明，但新版 ES4 工作中仍有许多相关的语义问题尚未得到解答。

ES5 曾考虑增加 `const` 声明。ES5 规范中包含了可用于确定块级声明绑定语义的抽象。但至于这些语义究竟该如何确定，则并不明显。下面的代码片段说明了一些问题。

``` js
// ES2015

{ // 外层块
  let x = "outer";
  { // 内层块
    console.log(x);
    var refX1 = function () { return x };
    console.log(refX1());
    const x = "inner";
    console.log(x);
    var refX2 = function () { return x };
    console.log(refX2());
  }
}
```

在 `const` 声明之前的内层块中，出现的对 `x` 的某些引用或所有引用，是否应该是编译时错误呢？还是说它们应该是运行时错误呢？如果它们不是错误，那么是否应该将其解析到 `x` 的外部绑定呢？或者说内层的 `x` 在初始化之前，是否应该以 `undefined` 为默认值？如果在 `const` 声明之前调用函数 `refX1`，是否应该和在声明之后调用函数一样，解析到同样的 `x` 绑定和相同的值呢？如果 `x` 的内层声明是一个 `let` 声明，上述所有问题仍然适用。针对这些情况下的引用，Waldemar Horwat [[2008a](./references.md#Horwat:TDZ)] 描述了四种可能的语义：

* A1. 词法死区。在同一块中「文本上前于」（textually prior）变量定义而出现的引用，属于错误。
* A2. 词法窗口。在同一块中「文本上前于」变量定义而出现的引用，进入外部作用域。
* B1. 临时性死区。在同一块中「临时性前于」（temporally prior）变量定义而出现的引用，属于错误。
* B2. 临时性窗口。在同一块中「临时性前于」变量定义而出现的引用，进入外部作用域。

Horwat 感谢 Lars Hansen 将「死区」的概念引入讨论。术语「临时性前于」指的是运行时求值顺序。A2 和 B2 是不可取的，因为这使得块中同一名称在不同的位置，可以有不同的绑定。并且在 B2 的情况下，块中某处的名称甚至在不同的时刻，都可以有不同的绑定。A1 是不可取的，因为它妨碍了以这些声明形式来定义相互递归的函数。A2 的缺点在于，它需要对所有引用进行运行时初始化检查，不过这其中有许多可以被编译器基于相当简单的分析来安全地消除。但在花了近两年时间后 TC39 最终达成的共识，是认为新的词法声明形式应具有 B1 的临时性死区（TDZ）语义。这些语义可由下面这些规则来概括：

* 在一个作用域内，任何名称都只有唯一的一个绑定。
* `let`、`const`、`class`、`import`、块级函数声明和形参绑定在运行时是死的，直到初始化为止。
* 访问或赋值给一个未初始化的绑定，属于运行时错误。

在规范中，上述第一条规则表示为早期错误规则，另外两条则表示为运行时语义算法。

当 Allen Wirfs-Brock 开始将 `let` 和 `const` 集成到规范中时，他发现二者与传统的 `var` 和 `function` 声明之间，还存在着许多潜在的交互。这导致 TC39 又进行了一轮讨论，就下列补充规则达成了一致意见：

* 一个名称的多个 `var` 声明可以存在于任何层级的块嵌套中。它们都指向同一个绑定，其定义会被提升到最接近的外层函数或顶层全局作用域中（ES1 遗留语义）。
* 允许为同一名称进行多次 `var` 声明和函数 / 顶层全局作用域内的 `function` 声明，每个名称对应一个绑定（ES3 遗留语义）。
* 所有其他在同个作用域中的多重声明，都属于早期错误，包括 `var`/`let`、`let`/`let`、`let`/`const`、`let`/`function`、`class`/`function`、`const`/`class` 等。
* 如果一个块级的 `var` 声明名称，被提升到了任何同名的外层 `let`、`const`、`class`、`import` 或块级 `function` 声明之上，这也属于一个早期错误。
* 当创建绑定时，`var` 声明会被自动初始化为 `undefined`，因此对它们的访问没有 TDZ 限制。

另一组问题则涉及对全局声明的处理。在 ES2015 之前，所有的全局声明都会在宿主环境提供的全局对象上创建属性。但是对象属性并没有像实现临时性死区所需的那样，规定将一个属性标记为未初始化。有一份提案要求把全局层级上新 `const`、`let` 和 `class` 声明的出现，当作是 `var` 声明。这方面存在先例，因为一些 ES2015 之前的 JavaScript 引擎，已经以这种方式实现了 `const` 声明。然而这将导致在全局层级上使用新的声明时，会和其他位置上的使用不一致。相比之下 TC39 的共识，则是词法声明规则应尽可能一致地适用于所有类型的作用域。对于全局作用域，`var` 和 `function` 声明保留了创建全局对象属性的遗留行为，但所有其他声明形式，都会创建不影响全局对象属性的词法绑定。

新的规则不允许应用存在矛盾的 `var`/`let` 多重绑定，对类似的冲突而言也是这样的。但例外是那些不使用 `var` 或 `function` 声明创建的全局对象属性，它们不会导致多次声明之间的冲突。在这些情况下，一个全局的 `let`/`const`/`class` 声明会遮盖名称相同的全局对象属性。这暗含了一条规则，即使用新声明定义的全局变量，不能在单独的脚本中多次定义。

仅仅增加块级作用域的 `let` 和 `const` 声明，还不足以完全消除循环中闭包的隐患。这里还有一个由 `for` 语句引入的变量作用域问题，即 `for (var p in x)`。ES2015 解决这个问题的方式，是允许在 for 语句的头部使用 `let` 和 `const` 来代替 `var`。以这种方式使用的 `let` 或 `const` 会在作用域轮廓中创建一个绑定，这个绑定会在循环体的每次迭代中重新创建。循环 `for (const p in x) {body}` 在*去糖化*<sup>[g](./appendices.md#desugar)</sup>之后，大致如下所示：

``` js
// ES2015

// for (const p in x) {body} 的去糖后近似表示
{ let $next;
  for ($next in x) {
    const p = $next;
    {body}
  }
}
```

为处理 C 风格的三表达式 `for` 语句而引入的词法绑定比较复杂，争议也较大。JavaScript 1.0 已经包含了使用 `var` 声明作为此类语句第一个表达式的能力，所以 `let` 或 `const` 声明在那里应该也可以使用。但是，这种声明所产生的约束力有多大呢？是应该有一个单独且生命周期为整个 `for` 语句的绑定，还是应该像 `for-in` 语句那样，为循环的每一次迭代建立一个单独的绑定呢？答案并不明确，因为常见的编码模式是利用第二、三个表达式或循环体中的代码，来更新所声明的循环变量的值，以便在循环的下一次迭代中使用。如果每次迭代都得到一个新的循环变量绑定，就需要自动使用上一次迭代的循环变量最终值，来初始化下一次迭代中的循环变量绑定。大多数类似 C 的语言，都采用了每条 `for` 语句对应一个单独绑定的方式，而非每次迭代对应一个绑定的方式，这也是 ES6 规范草案最初的做法。但是，这种方式仍然存在循环中闭包的问题。为此，对于使用 `let` 声明的三表达式语句，规范最终改为每次迭代使用一个绑定，并在迭代之间传递值。事实证明，对于第一个表达式中的 `const` 声明来说，使用每个循环语句唯一的绑定就足够了，因为此类变量的值不能被 `for` 头部或循环体中的其他表达式修改。

另一个重要的问题，是在语句块中声明函数时的语义。ES3 有意排除了（第 12 节）对块内函数声明的任何语法或语义规范。但各实现均忽略了这一指导，允许这样的声明——不幸的是，每个主流浏览器实现都为其赋予了不同的语义。不过在某些使用场景 [[Terlson 2012](./references.md#terlson:FiB)] 下，这些语义之间所存在的重叠，是足够进行这样的函数声明，并在所有主流浏览器中都兼容地使用的。根据 ES2015 的词法声明规则，其中一些使用场景将被认为属于非法，或需要改变其含义。若在这些场景下实现新的规则，将会「破坏 Web」。这对严格模式来说不是问题，因为 ES5 已经禁止语言实现在严格模式代码中提供块级函数声明。对于非严格模式的代码，一种方法是效仿 ES3，不指定任何关于块级函数的内容——让每个实现来决定「是否以及如何」将块级函数声明与新的词法声明形式相整合。但这不利于互操作性，也与 1JS 的目标相悖 [[TC39 2013b](./references.md#TC39:2013:009)]。与其相反地，TC39 [[2013a](./references.md#TC39:notes:2013:03:14)] 确定了少数几个用例，其中现有的块级函数具备互操作性且有实际用处，但根据新规则却会出现错误。例如：

``` js
// 兼容但非标准的 ES3 扩展

function f(bool) {
  if (bool == true) {
    function g() { /*do something*/ }
  }
  if (bool == true) g(); // 这在所有主流浏览器中均可用
}
```

对此的修复方法，是定义一些额外的非严格模式代码规则 [[Wirfs-Brock 2015a](./references.md#ES2015), Annex B.3.3]。这些规则可以静态地检测那些特定的可互操作用例，并使其合法地与遗留网页相兼容。对于上面的例子，规则会把其代码当作这样：

``` js
// ES2015 附录 B 中的去糖化

function f(bool) {
  var g; // 如果顶层存在由 let 声明的 g，则属于早期错误
  function $setg(v) { g = v }
  if (bool == true) {
    function g() { /*do something*/ }
    $setg(g); // 将本地 g 设为顶层 g 的值
  }
  if (bool == true) g(); // 引用顶层 g
}
```

#### 类
在 2008 年 7 月发起 Harmony 工作的 TC39 会议上，相当多时间都用来讨论「是否应该以及如何」纳入类。在 ES4 的前后两次尝试中，为了开发复杂的类定义语法和语义，人们都付出了巨大的努力。而且这两次尝试中的设计，都需要新的运行时机制来支持。这些设计可以宽泛地描述为「受 Java 启发的类」。

Mark Miller [[2008d](./references.md#msm:nothis)] 认为，对于类抽象所需的大部分运行时机制，在 ES3 中已经基于 lambda 函数和词法捕获技术实现了。词法捕获技术类似于 Scheme [[Dickey 1992](./references.md#dickey1992scheming); [Sussman and Steele Jr 1975](./references.md#Sussman75scheme:an)]，且由 Douglas Crockford [[2008b](./references.md#crock:goodparts), pages 52-55] 为适应 JavaScript 而进行了修改。这种「lambda 去糖化」的类定义风格，与模块模式实质上是一致的。它表明类只是一个小而轻的模块，其目的就是用来被多次实例化。Miller 称这种方法为「糖式类」（classes as sugar）。

Cormac Flanagan [[2008](./references.md#Harmony:konaclasses)] 将最初对类的讨论总结如下：

> EcmaScript（原文如此）需要提供对「具有数据抽象和隐藏的高完整性对象<sup>[92](./notes.md#92)</sup>」更好的支持，也需要更好地支持私有字段和方法……
>
> ……我们最初专注于一个简单的、极简的设计，它不支持继承或类型注解，并使用在实例中私有的数据。类名没有单独的命名空间，类对象是一种新的（一等公民）值。

Flanagan 提出的稻草人提案，使用了简单的类定义语法。如下所示：

``` js
// Flanagan 的 Harmony Class 稻草人

class Point (initialX , initialY) {
  private x = initialX;
  private y = initialY;
  public getX() { return x };
  public getY() { return y };
}
```

Cormac Flanagan 的提案内容并未完整地「去糖化」，并且包含的语义细节也很少。Mark Miller [[2008c](./references.md#msm:CasS0); [2009](./references.md#msm:CasS1); [2010a](./references.md#msm:CasS3)] 用类似的表层语法设计对其进行了反驳。Miller 的提案进行了完整的去糖化，不需为类实例提供一种新的运行时对象。在 Miller 的设计中没有继承，所有的方法和实例变量都默认为私有访问。所有的方法和实例变量都被表示为逐实例的词法捕获声明，这些声明只能从类定义的代码体中直接访问。通过类实例对象的属性，提案支持从外部访问公有方法，并为公有实例变量提供了 `get` 访问器。从外部直接对实例变量赋值是不允许的，并且提案也不使用`this` 关键字。

Mark Miller 提出的「糖式类」提案所经常受到的一种批评，是认为它创造了太多的对象。具有 n 个方法的类在每次对象实例化时，除了实际的实例对象外，还会隐式创建 n 个特定于实例的闭包对象。对此 Miller 的立场是，去糖化只定义了可见的语义，而实现者可以自由开发技术，以避免创建闭包对象。然而委员会中有人对此表示怀疑，质疑实现者是否会开发此类优化。提案的另一个问题是缺乏对继承（或其他行为组合机制）的支持。为此 Miller 还开发了一些提案 [[Miller 2010d](./references.md#traits0), [2011a](./references.md#traits1)]，将组合性 Trait [[Van Cutsem and Miller 2011c](./references.md#VanCutsem:2011:TRO:2093328.2093330)] 加入了他的类去糖化设计中。

对定义高完整性对象的支持，是委员会成员的首要任务。他们最关心的是可能试图窃取私人信息的恶意 Web 广告与 mashup。整个委员会都对此表示关切，但不一定要就此确定优先级。Waldemar Horwat [[2010](./references.md#Horwat:Sept2010notes)] 在 2010 年 9 月的 TC39 会议记录中指出：

> 小组内部关于目标的分歧：「高完整性」VS.「用更好的语法来支持人们已经在写的东西」VS. 也许有可能两者兼得。

Allen Wirfs-Brock 认为，如果让对象的创建变得不那么命令式，可能可以支持第二条目标。在经典的 JavaScript 中，最接近 Class 的是构造函数，它需要命令式地定义一个新对象的属性。对象字面量提供了一种更为声明式的方式来定义对象属性，但其缺乏与 ECMAScript 的内置类约定<sup>[93](./notes.md#93)</sup>相匹配的能力。也许对象字面量可以进行扩展，以更好地支持人们已经在写的东西，而不必引入「类」作为新的语言实体。

``` js
function tripleFactory(a, b, c) {
  return { // 这个对象字面量用于创建 triple 对象
    <proto: Array.prototype, // 由 proto 元属性设置继承的原型
    sealed>,                // 用 Object.seal() 封住元属性
    0: a,
    1: b,
    2: c,
    var length const: 3, // var 会设置 [[enumerable]] 为 false
    // const 会设置 [[writable]] 为 false
    method toString() { // 方法是有函数值的数据属性
      // 并且其 [[ enumerable ]] 为 false
      return "triple(" + this[0] + "," + this[1] + "," + this[2] + ")"
    },
    method sum(){ return this[0] + this[1] + this[2] }
  }
}
```

图 45. 基于 Wirfs-Brock 的 Harmony 扩展对象字面量提案的工厂函数。

在一组相关提案中，Wirfs-Brock [[2011c](./references.md#awb:straw:propmods); [2011d](./references.md#awb:straw:objlitext)] 展示了如何扩展对象字面量，使其更为声明式，并消除在定义常规对象时使用 ES5 对象反射 API 的需求。例如，图 45 显示了在基于扩展对象字面量的*工厂函数*<sup>[g](./appendices.md#factory-function)</sup>时，该如何定义具有显式原型、方法和私有属性的类。

Allen Wirfs-Brock 的提案还展示了对于扩展对象字面量的语法，该如何将其用作类定义的主体。在 2011 年 3 月的 TC39 演讲中 Wirfs-Brock [[2011a](./references.md#awb:declobjs)] 提出，类定义应该能生成 ECMAScript 规范第 15 条<sup>[94](./notes.md#94)</sup>里内置库 Class 所使用的「构造函数、原型对象和实例对象」基本三要素，这在所有 ECMA-262 已有版本中都是通用的。与其将类定义去糖化为 lambda 表达式（糖化类）或一种新的运行时实体（受 Java 启发的类），不如将其去糖化为 JavaScript 程序员和框架作者们已经使用且熟悉的构造函数和原型继承对象。在会议上，大家对扩展对象字面量语法的许多细节有很大的意见分歧，但达成了一个宽松的共识，即核心类定义的语义，应该符合规范第 15 条中的构造函数、原型、实例三要素。

2011 年 5 月初，TC39 的 ES.next 特性冻结会议迅速临近，此时仍然有几个与类相关的稻草人提案在进行竞争。看起来委员会仍然未必有足够的共识，能使其中的某个提案被采纳。2011 年 5 月 10 日，Allen Wirfs-Brock 与 Mark Miller、Peter Hallam 和 Bob Nystrom 见了面。Hallam 和 Nystrom 是使用 Google 的 Traceur 转译器 [[Traceur Project 2011b](./references.md#traceurfeatures)]，对 JavaScript 类支持进行原型设计的团队成员。他们的原型融合了 Wirfs-Brock 和 Miller 提案中的想法。会议的目标是取得足够的一致意见，以便能提出一份统一的提案。Bob Nystrom [[2011](./references.md#Nystrom:classes)] 在其会议报告中列出了许多一致意见，包括：

> ……构造函数、原型和实例这三要素，足以解决其他语言中的类所要解决的问题。Harmony 类语法的目的，并不是去要改变这些语义。相反地，它是要为这些语义提供一种简明而声明式的外表，以便体现程序员的意图，而非底层的命令式机制。
>
> ……对象是声明式和信息性的，函数则是命令式和行为式的。类的问题在于：「我们是否应将其建立在这些抽象的基础上。如果是的话，应该选择哪一个？」……
>
> 在我们的共识提案中，会通过结合这两种手段来解决这种宗教式的分歧：引入一种类似对象字面量的形式作为类体，再加上一个函数来作为构造器。

会后，Mark Miller [[2011b](./references.md#harmonyclasses)] 创建了一份新的稻草人提案。尽管该提案中仍有许多细节缺乏共识，它在特性冻结会议 [[TC39 2011b](./references.md#TC39:2011:028)] 上仍然获得了接受。图 46 中作为示例的类定义，是基于 Miller 的特性冻结类提案而给出的：

``` js
class Monster extends Character {
  constructor(name, health) { // 构造器函数
    super();             // 调用父类构造器
    public name = name; // 公有实例属性
    private health = health; // 私有实例变量
  }
  attack(target) { // 原型方法
    log('The monster attacks ' + target);
  }
  get isAlive() { // 原型 get 访问器
    return private(this).health > 0;
  }
  set health(value) { // 原型 set 访问器
    if (value < 0) {
      throw new Error('Health must be non-negative.')
    }
    private(this).health = value
  }
  public numAttacks = 0; // 原型数据属性
  public const attackMessage = 'The monster hits you!'; // 只读
}
```

图 46. 基于 Mark Miller [[2011b](./references.md#harmonyclasses)] 统一化 Harmony Class 提案的类。

一个月后，Dave Herman [[2011c](./references.md#dherman:minimalclasses)] 在一篇题为「最小化的类」的 `es-discuss` 帖子中，对 class 提案的复杂性及其诸多分歧点给 ES.next 带来的时间风险表示了担忧。他提出了另一种最小化的设计，它只包含：带原型继承的类声明、构造器、声明式方法，并使用 `super` 关键字调用被继承的方法。被排除的是声明式属性、构造器属性、私有数据，以及其他任何有争议的内容。Herman 的建议在 2011 年 7 月的会议 [[TC39 2011a](./references.md#TC39:2011:037)] 上进行了讨论，但委员会决定将重点放在解决当时 Mark Miller 提案中的未决问题上。Brendan Eich [[2012a](./references.md#eich:classdcls)] 后来写道：

> 去年夏天在 Redmond，最小化类有了一个很好的 TC39 支持子集。但我们当时卡在对「const 和 guard 使用前初始化的未来前景」的讨论上……

关于类的替代性设计 [[Ashkenas 2011](./references.md#Ashkenas:minclass); [Eich 2011a](./references.md#eich:min-classes); [Herman 2011a](./references.md#dherman:literal-classes)] 的持续在线讨论，促使 Dave Herman [[2011d](./references.md#dherman:min-classes)] 写了一份新的「最小类」稻草人提案。这份提案将 Herman 之前的帖子形式化，但增加了「静态」构造器数据和方法属性。在接下来的两次 TC39 会议上，几乎没有对 Herman 的最小化提案所进行的讨论，在解决计划中分歧的方面也没有什么进展。Brendan Eich [[2012c](./references.md#eich:u)] 对这个问题的描述如下：

> ……Waldemar 观察到的总体趋势是真实的：如果（提案的覆盖面）太小，就没有意义。而如果太大，我们又很难同意。我们需要「金发姑娘」（童话《金发姑娘和三字小熊》中的主人公，译者注）——恰到好处的温度和数量。

到 2012 年 3 月初，`es-discuss` 社区成员对于 TC39 明显无法完成 ES.next 中类的设计，表示出了越来越大的失望。Russell Leggett [[2012](./references.md#safetysyntax)] 在一篇题为「为类找到一个『安全』语法」<sup>[95](./notes.md#95)</sup>的文章中提出了这个问题：

> 我们是否能想出一种大家都认为「比没有好」的类语法，并注重于为将来的改进留出可能性呢？作为一种「安全语法」，这并不意味着我们停止尝试寻找更好的语法。它只意味着如果我们还没有找到答案，那我们也仍然留着一些东西——这些东西我们可以在 ES7 中做得更好。

Leggett 的帖子在三天内收到了 119 个以正面为主的回复。它列出了一套「绝对最低的要求」，这与 Dave Herman 去年夏天的清单基本相同。Leggett 的贡献是创造了「安全学校」的隐喻。Allen Wirfs-Brock 对此立即表示支持，并创造了一份新的「最大化的最小」（max-min）版本 [[Wirfs-Brock 2012d](./references.md#awb:straw:maxmin)] 提案，用这个隐喻重新定义了 Herman 的最小化类提案。这里最大的技术变动，是移除了原提案中的构造器属性<sup>[96](./notes.md#96)</sup>。如果此时要将此「max-min」提案正式列入 2012 年 3 月 TC39 会议的议程，已经为时已晚。但 Allen Wirfs-Brock 和 Alex Russell 在会议结束时，领导了一次非正式讨论 [[TC39 2012a](./references.md#TC39:2012:020:r2)]。总体来说，委员会对提案的接受度是积极的。但有几位成员就此表示担心，认为提案内容可能过少而不值得就此费心，或者可能会对他们考虑的未来扩展产生不利影响。当时没有试图就该提案达成共识，但 Wirfs-Brock 和 Russell 表示，任何更详细的内容都不可能进入 ES.next。

这份 max-min 提案正式列入了 2012 年 5 月的会议议程，并在会上进行了类似的讨论 [[TC39 2012b](./references.md#TC39:2012:034)]，其结果是类似的。与会人员正逐步就该提案达成共识，但还有一些关键人物缺席。由于时间上的压力，与会者一致认为，已经可以就原型和初步规范草案开展工作了。到 7 月会议 [[TC39 2012c](./references.md#TC39:2012:056)] 时，Allen Wirfs-Brock 已经写好了 max-min 类提案的规范文本，并准备了一套演示文稿 [[Wirfs-Brock 2012b](./references.md#TC39:2012:054-X1)]，列举了他遇到的每项设计决策。他带领委员会逐条审查了每项决策，并记录了对某一备选方案的接受或共识。这种方法回避了就整个提案达成共识的问题，但却让委员会在细节设计层面参与了共识的形成。ES.next 规范的下一份草案 [[Wirfs-Brock et al. 2012b](./references.md#ES6rev10), [c](./references.md#TC39:2012:071)] 包含了完整的 max-min 类设计，其中纳入了 7 月会议上做出的决策。对此没有人表示反对。

然而在 2014 年夏天，随着浏览器 JavaScript 引擎开发者开始实现 ES6 的类，确实出现了一条重要的反对意见。ES6 工作的长期目标之一，是提供一种「子类化」内置类的方法，如 `Array` [[Kangax 2010](./references.md#kangax:subarrays)] 和 Web 平台的 DOM 类。Allen Wirfs-Brock [[2012c](./references.md#awb:2012misc5); [2012e](./references.md#awb:subclassing-ctors)] 写了一份 Harmony 稻草人文档，描述了为什么传统的 JavaScript 内置构造函数在进行子类化时会存在问题。内置的构造函数通常是使用语言实现所用的原生语言（如 C++）来定义的。它们会分配和初始化私有的对象表示，这些私有对象的特殊结构也会被相关的内置方法所获知，这些方法也是用实现语言定义的。当使用 `new` 运算符直接调用内置构造函数时，这种方法是有效的。但当使用 JavaScript 特有的原型继承方案来「子类化」这样的构造函数时，`new` 运算符会被应用于子类构造函数（通常用 JavaScript 编码）上。它所分配出的是一个普通对象，而不是被继承的内置方法所期望的私有对象表示。Wirfs-Brock [[2013](./references.md#awb:2013misc1)] 在确定 max-min 类的语义时，试图避免这个问题。`new` 的语义被分割成了单独的分配阶段和初始化阶段。对象分配是由 `new` 首先调用一个特别命名的 `@@create` 方法来进行的。该方法通常由内置的父类提供，而不会被子类覆盖。对象初始化发生在分配之后，与子类的构造函数相协调。它通常会对其父类构造函数进行 `super` 调用，以执行所有特定于父类的必要初始化，然后再执行所有特定于子类的必要初始化。如果编码得当，这可以使内置的父类在将对象传递给子类构造函数之前，分配出其特殊的私有对象结构。子类构造函数可以使用其初始化代码，将子类属性添加到父类提供的对象中。

2014 年发现的问题在于，`@@create` 方法创建的对象是未初始化的。某个错误或恶意的类构造函数，可能会在未初始化的对象上调用内置的父类方法（很可能由 C++ 实现）——这可能导致灾难性的后果。Wirfs-Brock 曾假设所有这类对象都会在内部跟踪它们的初始化状态，并且需要相应的内置方法，来检查它们是否被应用了到一个未初始化的对象上。Mozilla 的 Boris Zbarsky [[2014](./references.md#zbarsky:subclassing)] 指出，浏览器中有数千种这样的方法，而在区分两阶段的设计中，需要为每个方法更新每个浏览器的 DOM 规范和实现。这促使了单阶段分配 / 初始化设计 [[Wirfs-Brock et al. 2014c](./references.md#TC39:2014:032), [d](./references.md#TC39:2014:046)] 和另一份提案 [[Herman and Katz 2014](./references.md#TC39:2014:045)] 的发展。这份提案保留了两个阶段，但会将构造器参数传递给 `@@create` 方法和构造器。在 2014 年剩余的时间里，委员会对这些方案和其他替代方案进行了激烈的辩论。在某段时间，共识的缺乏一度可能推迟原定于 2015 年 6 月发布的 ES6，甚至迫使从该版本中完全移除类。然而在 2015 年 1 月，TC39 围绕单阶段设计的变体达成了共识 [[TC39 2015a](./references.md#TC39:notes:2015:01:27); [Wirfs-Brock 2015b](./references.md#awb:2015misc1)]。这一经验再次坚定了 TC39 的决心，要求更多、更早地由实现者对 ES6 后的新特性进行反馈。

#### 模块
ES4 设计的复杂部分之一，就是用于构建大型程序和库的「包和命名空间」结构。当新版 ES4 被放弃时，人们已经发现这些机制存在重大问题 [[Dyer 2008b](./references.md#pckmustgo); [Stachowiak 2008b](./references.md#namesAsSugar)]，它们显然不适合进入 Harmony。而当时有影响力的 JavaScript 开发者们所使用的，还是基于模块模式而缺乏泛用性的模块化解决方案 [[Miraglia 2007](./references.md#yui2); [Yahoo! Developer Network 2008](./references.md#yui3)]。2009 年 1 月，Kris Kowal 和 Ihab Awad 向 TC39 [[2009c](./references.md#TC39:2009:008-Rev1)] 提交了一份受模块模式启发的设计 [[Awad and Kowal 2009](./references.md#tc39:2009:12); [Kowal and Awad 2009a](./references.md#tc39:2009:11)]。他们的设计最终演变成了 Node.js 中使用的 CommonJS 模块系统。

Kris Kowal 和 Ihab Awad 在他们最初的提案和随后的修订版 [[Kowal 2009b](./references.md#esd:20sep09); [Kowal and Awad 2009b](./references.md#kowal-mod2)] 中，纳入了一些语法糖式的替代方案。这些方案可能会覆盖他们的模块设计，而不会改变提案的动态语义。Awad [[2010a](./references.md#tc39:2010:04); [2010c](./references.md#emakermods)] 随后开发了一份不同的提案，这份提案借鉴了 CommonJS 上的工作，以及 E 语言 [[Miller et al. 2019](./references.md#elang)] 的 Emaker 模块。这些 Emaker 模块正被与安全 ECMAScript 相关的 Caja 项目 [[2012](./references.md#caja:project)] 所使用。在 TC39 内部，这些提案被称为「一等公民式模块系统」，因为它们将模块表现为动态构造出的一等公民式运行时实体，这提供了一种新的计算抽象机制。例如在 Awad 的提案中，一个模块的多个实例可能同时存在，每个实例用不同的参数值初始化。

Brendan Eich [[2009c](./references.md#modalt)] 描述了一种替代方法：

> Harmony 中的替代方案是一种特殊的语法形式。比如说 import 指令，它可以在程序解析（而非执行）时进行分析。这样语言实现可以在执行前预先加载好所有的依赖关系，以免在导入（或出现延迟的数据依赖）时阻塞。否则就要使用一种较不方便的非阻塞导入，以保留 JS「运行到完成」的执行模式。

这种替代方案被称为「静态」或「二等公民式模块」系统。这种模块系统提供了使应用代码结构化的机制，而非定义出新的计算抽象机制。对此 Sam Tobin-Hochstadt [[2010](./references.md#modstate)] 解释说：

> ……在一个有状态的语言中，你会希望能在不改变其行为的情况下，将程序划分成模块。对于有一段有状态的代码，在你把它移到自己的模块中后，所造成的影响不应该多于任何其他重构。如果你需要反复创建新状态，ES 也提供了不错的机制。同样地，如果有一个导入了 A 的模块，你可以把它拆分成两个都导入了 A 的新模块。像这种重构也不应该改变程序的工作方式。

Dave Herman 和 Sam Tobin-Hochstadt 为二等公民式 Harmony 模块开发了「简单模块」设计 [[Herman 2010b](./references.md#simpmod1), [c](./references.md#simpmod0), [f](./references.md#simpmodstraw); [Herman and Tobin-Hochstadt 2011](./references.md#mod4jspaper); [Tobin-Hochstadt and Herman 2010](./references.md#simpmodpres)]，其基本思想在于将模块视作「可共享词法绑定的代码单元」。新语法将用于划分出代码单元，并确定出哪些绑定将被共享。在 Awad [[2010b](./references.md#goWithSimpMods)] 建议 TC39 将工作重点放在 Herman 和 Tobin-Hochstadt 的提案上之前，TC39 对这两种方法的优点进行了广泛的讨论。

他们的设计中具有 `module` 声明，其中会为模块分配一个词法标识符。这要么会引入模块代码，要么会确定包含相应代码的外部资源。而对于具备 `export` 关键字前缀的声明，其绑定将被暴露到模块外部。例如：

``` js
// 最早的 Harmony 简单模块提案

module m1 { // 一个内部模块
  export var x = 0, y=0;
  export function f() {/* ... */};
}
module m2 { // 同个源文件内的另一个内部模块
  export const pi = 3.1415926;
}
// 用于确定外部模块的字符串字面量
module mx = load "http://example.com/js/x.js";

// ... 后续代码可导入并使用来自 m1，m2 和 mx 中的绑定
```

模块声明也可以进行嵌套。一个形如 `x.js` 的外部模块，可以只包含一个模块主体，而不必以模块声明语法包围它。`import` 声明用于使某个模块所导出的绑定，能在词法上被导入它的模块所访问。使用上述示例模块的代码，可能会有如下的 `import`：

``` js
// 最早的 Harmony 简单模块提案

import m1.{x, f};   // 从 m1 导入两个绑定
import m2.{pi: PI}; // 导入一个绑定并重命名，以便于本地访问
import mx.*;        // 导入所有由 mx 导出的绑定
import mx as X;     // 将 X 本地绑定到以 mx 导出字段为属性的对象
```

通过模块声明、字符串字面量形式的外部模块标识，以及声明式的导出 / 导入定义，可以静态地确定一组由相互依赖的模块组成的封闭集合。这些模块之间的共享词法绑定，可以在执行代码之前进行链接。循环依赖也是允许的。当执行开始时，模块会按照规定好的确定性顺序进行初始化。如果有任何无法初始化的循环依赖关系，TDZ 死区会确保抛出运行时错误。

模块语法发生了演变 [[Herman et al. 2013](./references.md#modusecases)]，但「模块具备共享词法绑定，且可静态链接」这一基本思想仍然存在。主要的语法变化之一，是取消了显式的模块声明语法、模块标识符，以及内部 / 嵌套模块。每个源文件对应一个 Harmony 模块，其中使用字面量形式的字符串资源标识符来进行识别。模块标识符的取消，需要改变 `import` 语法。另外通配符导入也被取消，因为它太容易出错。通配符导入被替换成了另一种形式，这种形式会将一组开放式的导入指令暴露为「单一命名空间下的对象属性」，而非作为单独的词法绑定。对于前述中的 `import` 示例，其基于最终版语法的表达是这样的：

``` js
// ES2015

import { x, f } from "m1.js"; // 从 m1 导入两个被导出的绑定
import { pi as PI } from "m2.js"; // 导入一个绑定并重命名，以便于本地访问
import * as X from "mx.js"; // 将 X 本地绑定到命名空间对象，其属性映射为 mx.js 所导出的字段

// 新增的导入形式
import "my.js"; // 仅为初始化副作用而导入 my.js
import z from "mz.js"; // 导入由 mz.js 所导出的唯一默认绑定
```

`module` 声明的取消和默认绑定 `import` 形式的增加，均属于设计的后期变化。Node.js 的普及出乎意料地迅速，它将 CommonJS 模块广泛暴露在了 JavaScript 开发者社区中。TC39 为此收到了负面的社区反馈 [[Denicola 2014](./references.md#modimport)]，并担心 CommonJS 模块事实上的标准化，可能会给 Harmony 设计蒙上阴影。TC39 为此增加了 `export default` 形式，以适应那些习惯于在许多 CommonJS 模块中使用单体导出设计模式<sup>[97](./notes.md#97)</sup>的开发者。TC39 模块倡导者们也开始向 Node.js 开发者布道 [[Katz 2014](./references.md#jsmodules)] Harmony 模块。

最初的「简单模块」提案包含了模块加载器 [[Herman 2010e](./references.md#modloaderstraw)] 的概念，它提供了将模块整合到运行中的 JavaScript 程序时的语义。其目的在于由 ECMAScript 规范来定义出：模块的语言级语法和语义、模块加载的运行时语义，以及模块加载器的 API。这其中模块加载器的 API，能为 JavaScript 程序员提供「控制和扩展加载器语义」的机制。加载过程最终被设想 [[Herman 2013b](./references.md#modloaderharmony)] 为一条由五个阶段组成的流水线，包括规范化、解析、获取、翻译和链接。加载器首先会对模块标识符进行规范化处理。然后它会通过对模块源码的检索和预处理，确定模块的相互依赖性，将导入和导出联系起来，最后再初始化相互依赖的模块。模块加载器的设计目标是高度的灵活性，以完全支持 Web 浏览器的异步 I/O 模式。在 2011 年的 JSConf 上，Dave Herman 展示了 [[Leung 2011](./references.md#jsconfleung)] 一个概念验证性的模块加载器。它扩展了加载过程中的翻译阶段，将 CoffeeScript 和 Scheme 代码加载为了运行在 JavaScript 网页之中的模块。

为了充分理解模块加载过程和该如何确定它，Dave Herman 与 Mozilla 的 Jason Orendorff 合作，使用 JavaScript 代码实现了一个模块加载器参考实现的原型 [[Orendorff and Herman 2014](./references.md#modloaderrefimplRepo)]。2013 年 12 月，Herman [[2013a](./references.md#modloadrefimplspec)] 完成了对 Orendorff 的 JavaScript 代码的初步改写，使其变成了规范伪代码。2014 年 1 月，Allen Wirfs-Brock [[2014a](./references.md#ES6draft22)] 将伪代码初步整合到了 ES6 草案中。但 Wirfs-Brock 发现模块加载器的异步性质，给 ECMAScript 规范增加了新的复杂性和潜在的不确定性。这种情况因加载器 API 而变得更糟，因为它允许用户程序在模块加载过程中注入任意的 JavaScript 代码。到 2014 年年中，异步模块加载的额外复杂性和 API 中一连串难以解决的设计问题，似乎已经危及了 ES6 在 2015 发布版本的目标。

在开发简单模块提案的早期阶段，Allen Wirfs-Brock [[2010](./references.md#simpmodnoldr)] 曾注意到模块作用域和链接的语义，可以从加载器管道中分离出来。在之前的 ECMA-262 版本中，规范已经定义了 JavaScript 源码的语法和语义，但并未涉及该如何访问它。这是由托管 JavaScript 引擎的环境来承担的责任。在 2014 年 9 月的 TC39 会议 [[TC39 2014b](./references.md#TC39:2014:051)] 上，Wirfs-Brock 认为类似的方法也可以适用于模块，这样 ECMA-262 就不需要包含模块加载管道的规范了。如果 ECMA-262 假定模块的源码都已经存在，那么只要规定各独立模块的语法和语义，以及该如何「将被导入和导出的绑定联系起来」的语义就足够了。浏览器等宿主环境可以提供异步加载管道，但其定义将与语言规范解耦。要移除加载器管道，也意味着要移除加载器 API。TC39 接受了这一观点。Wirfs-Brock 也得以在 2014 年 10 月的规范草案 [[Wirfs-Brock et al. 2014b](./references.md#ES6draft28)] 中，纳入了基本完整的语言级模块规范。模块语义与加载器管道的分离，使得 WHATWG 能够专注于确定 ECMAScript 模块该如何与 Web 平台 [[Denicola 2016](./references.md#whatwgmodules)] 集成。

#### 箭头函数
ES2015 引入了一种简洁的函数定义表达形式，通常称之为「箭头函数」。箭头函数的写法是以形参列表为起始，然后是 `=>` 标记和函数体。例如：

``` js
(a, b) => { return a + b }
```

如果只有一个形参，那么可以省略小括号。而如果函数体是单条 `return` 语句，还可以省略大括号和 `return` 关键字。例如：

``` js
x => x /* 一个 identity 函数 */
```

与其他函数定义形式不同的是，箭头函数不会重新绑定 `this` 和其他函数作用域内的隐式绑定。这使得箭头函数在「内层函数需访问其外层函数的隐式绑定」的情况下，显得非常方便。

设计箭头函数的主要动机，在于开发者经常需要编写冗长的函数表达式，以此作为平台和库 API 函数的回调参数。在 JavaScript 1.8 中，Mozilla [[2008b](./references.md#moz:new1.8)] 实现了<sup>[98](./notes.md#98)</sup>「表达式闭包」，它保留了对`function` 关键字的使用，允许使用无括号的单个表达式体。TC39 讨论了一些类似但较短小的表示法，用诸如 𝜆、*f*、\ 或 # 等符号 [[Eich 2010b](./references.md#Eich:bikeshed); [TC39 Harmony 2010c](./references.md#Harmony:shorterfuncs)] 来代替函数，但未能就其中任何一种方法达成共识。

TC39 [[Herman 2008](./references.md#Herman:lambdas)] 同时也对提供具有精简语义的「lambda 函数」感兴趣，比如支持*消栈的尾调用*<sup>[g](./appendices.md#proper-tail-call)</sup>和 Tennent [[1981](./references.md#tennent1981principles)] 一致性原则<sup>[99](./notes.md#99)</sup>。其支持者们认为，这样的函数将会在实现由语言或库所定义的控制抽象时有所用处。在 Harmony 进程早期，Brendan Eich [[2008a](./references.md#Eich:allenslambda)] 在 `es-discuss` 上的一篇讨论贴中， 提出了一个最初由 Allen Wirfs-Brock 所提出的建议，即基于 Smalltalk 块语法的启发，采用一种简洁的 lambda 函数语法。例如 `{|a，b| a+b}` 就相当于 Herman 的 `lambda(a,b){a+b}`。Eich 的帖子引发了一场大规模但没有结论的线上讨论，话题涉及与（某种可能的）简明函数特性所相关的方方面面。作为关键总结，可以认为其中许多语法的灵感会带来解析或可用性上的问题，而且 JavaScript 的非本地控制转移语句——`return`、`break` 和 `continue`——会显著地使编写控制抽象的机制变得更加复杂。大多数 TC39 成员和 `es-discuss` 订阅者似乎主要对简洁的函数语法更感兴趣，而非对 Tennent 一致性感兴趣。

在这之后的 30 个月里，这方面都没有出现什么重大进展，直到 Brendan Eich [[2011f](./references.md#Eich:arrow1); [2011g](./references.md#Eich:blockrevival)] 撰写了两份替代性的稻草人提案为止。这两份提案之中，有一份设计的是「箭头函数」，它参照了 CoffeeScript 中的类似特性。这份提案中有 `->` 和 `=>` 两种函数，它们具备各种语法和语义上的差异和选项。而另一份提案设计的，则是以 Smalltalk 和 Ruby 的块为模型的「块级 lambda」，它还支持 Tennent 一致性。在随后的 9 个月里，这两项提案及其备选方案在 `es-discuss` 和 TC39 会议上得到了广泛的讨论。有人担心如果要支持解析箭头函数，现有的 JavaScript 实现是否易于更新。这里的问题是箭头符号出现在整个结构的中间，而且它前面还有一个形参列表，因此可能会被有歧义地解析为括号表达式。对于块级 lambda 提案，有人担心 [[Wirfs-Brock 2012a](./references.md#allen:brkcnt)] 它所创建出的用户定义控制结构，并不能充分而完整地与内置的语法控制结构相集成。Brendan Eich 总体倾向于块级 lambda 提案，但随着 2012 年 3 月 TC39 会议的临近，他认为箭头函数更有可能被委员会接受。在会议上 [[TC39 2012a](./references.md#TC39:2012:020:r2)]，他向委员会介绍了一套关于箭头函数最终设计基本特征的共识性决定 [[Eich 2012b](./references.md#Eich:arrow2)]。

#### 其他特性
除上述已经讨论过的内容外，重要的新语言特性还包括如下：

* 对象字面量的增强，包括计算属性名和简洁的方法语法。
* 在对象与数组的初始化声明和赋值运算符中使用解构。
* 形式参数增强，包括剩余参数、可选参数默认值，以及参数解构。
* 受 Python 启发的迭代器和生成器，但与其有显著的不同。
* `for-of` 语句，以及在新场景和改进后的场景下普遍使用的迭代器协议。
* 在字符串和正则表达式中支持完整的 Unicode。
* 支持嵌入领域特定语言（domain specific language）的模板字面量。
* 作为属性键使用的 `Symbol` 值。
* 二进制和八进制数字字面量。
* 消栈的尾调用<sup>[100](./notes.md#100)</sup>。

语言内置库的增强包括：

* 新的 `Array` 方法。
* `of` 和 `from` 构造器方法约定，用于创建数组和其他集合对象。
* 类型数组类，包括用于操作二进制数据的 `DataView` 和 `ArrayBuffer`。它们都基于 Khronos Group [[2011](./references.md#Khronos)] 规范中之前实现出的浏览器宿主对象，但与语言的其他部分有了更好的集成。类型数组现在还支持了大多数的 `Array` 方法。
* `Map` 和 `Set` 这类具有键的集合，以及 `WeakMap` 和 `WeakSet`。
* 额外的 `Math` 和 `Number` 函数。
* 用于复制对象属性的 `Object.assign` 函数。
* 用于延迟访问异步计算值的 `Promise` 类。
* 反映内部元对象协议的 `Reflect` 函数。

#### 延期和被放弃的特性
在 ES6 的开发过程中，TC39 还考虑了许多稻草人特性提案，但它们最终没有被纳入为 ES2015 的特性。这其中许多提案在最初提出后不久就被拒绝，但其他一些则曾属于重要的开发工作，有些甚至在最终被从版本中移除之前，已经推进到了成为被接受的 Harmony 提案的程度。在被削减掉的内容中，有一些提案被放弃，另一些则被推迟，以便开展更多的工作，并可能考虑纳入未来的版本中。截至 ES2015 完成前不久，被削减的重要特性和开发工作主要包括以下内容：

* **推导式** [[Herman 2010a](./references.md#herman:generatorExpr), [d](./references.md#herman:arrayComprehensions), [2014a](./references.md#herman:futureComprehensions); [TC39 2014a](./references.md#TC39notes:14-7-30)] 推导式原本可提供一种更简洁而声明式的方式，来创建出一个初始化后的数组，或定义出一个生成器函数。它基于 Python 和 JavaScript 1.7/1.8 中的类似特性。
* **模块加载器 API** [[Herman 2013b](./references.md#modloaderharmony)] 模块加载器 API 原本可让 JavaScript 程序员动态介入模块加载器的处理过程。程序可能会使用该 API 来完成一些处理，比如在加载过程中插入一个转译器，或支持模块的动态定义。这个 API 和模块加载器一起被推迟。
* **Realms API** [[Herman 2014b](./references.md#realmapi)] Realm API 原本可使 JavaScript 程序员能在新的 Realms 中创建、补充和执行代码，它与模块加载器 API 密切相关。这一特性被推迟，以进行额外的设计工作。
* **模式匹配** [[Herman 2011e](./references.md#patmatch); [Rossberg 2013](./references.md#rossberg:patmatch)] 解构的通用化，它原本将包括受 Haskell 启发的可驳式匹配（refutable matching）。
* **Object.observe** [[Arvidsson 2015](./references.md#arv:observe); [Klein 2015](./references.md#klein:observe); [Weinstein 2012](./references.md#raf:observe)] 一种复杂的数据绑定机制，可以在受监控对象的属性被修改时产生事件。
* **并行 JavaScript** [[Hudson 2012](./references.md#TC39:2012:016), [2014](./references.md#hudson:rvrtrail)] 又名 River Trail，是英特尔和 Mozilla 的一个联合项目，旨在使 JavaScript 程序员能够明确地利用处理器的 SIMD 能力。
* **值对象** [[Eich 2013](./references.md#TC39:2013:040)] 其目标是提供一种通用性的支持，以便定义出类似 Number 和 String 的新原始数据类型（包括运算符重载）。这可以允许库实现十进制小数、大整数等特性。
* **Guards** [[Miller 2010c](./references.md#msm:guards)] 为声明添加的类似于类型的注解，可对其进行动态验证。

### Harmony 转译器
转译器在 Harmony 特性的开发、测试和社区普及化过程中发挥了重要作用。在标准完成或浏览器完全支持之前，它们就能实现新特性的生产级使用。转译器对 JavaScript 开发者社区快速采用 ES2015 至关重要。支持 Harmony 的重要转译器包括：

* **Narcissus** [[Eich et al. 2012](./references.md#Narcissus)] 是一个以 JavaScript 为宿主的 JavaScript 引擎，被 Mozilla Research 用于 ES6 语言实验。
* **Traceur** [[Hallam and Russell 2011](./references.md#traceurvideo); [Traceur Project 2011a](./references.md#traceurrepo)] 是谷歌开发的一款转译器，用于实验 ES6 的早期特性。Traceur 提供了 ES6 语义的高保真实现，但由此产生的运行时开销使其在生产使用中缺乏吸引力。
* **Babel** [[2015](./references.md#Babel)] 原名 6to5，是由 Sebastian McKenzie 开发的。当时 Sebastian McKenzie 是一名 17 岁的开发者，生活在澳大利亚的农村：「在 2014 年 9 月 28 日，我在复习高中考试时第一次提交代码到了 GitHub，内容是我当时在做的一个 JavaScript 库。」[[McKenzie 2016](./references.md#McKen)] Babel 通过牺牲与规范草案之间的完全语义一致性，来将运行时开销最小化。它使人们能提前使用 ES2015 和其他实验性的 JavaScript 特性，使大多数 ES2015 级 JavaScript 代码能在旧的浏览器（或仅支持 ES5 的平台）上运行。然而，一些使用 Babel 的开发者开始依赖于实验性特性和不正确的语义。相对于后来的标准 ECMAScript 特性，还有一些被依赖的 Babel 变体特性已经过时（废弃）。这使得向原生实现的过渡变得更加困难，并且在少数情况下还造成了限制 TC39 设计灵活性的遗留问题。
* **TypeScript** [[Microsoft 2019](./references.md#typescript)] 是微软一款使用自由许可证的语言产品，最初以带有 ES6+ 特性的 ES5 为目标，后来增加了 ES2015 作为编译目标。TypeScript 最重要的功能，是一个可选的静态分析类型系统与类型注解。它可以编译成人们惯用的动态类型 JavaScript 代码。在 2020 年，TypeScript 是编写带类型注解的 JavaScript 时的事实标准 [[Greif and Benitte 2019](./references.md#stateofjs:2019typescript)]。

转译器的生产级使用（尤其是 Babel 和 TypeScript），是许多 JavaScript 开发团队内部大型文化转型的一部分。在这些团队中，JavaScript 已经被近似于当作传统的、具备开发和部署构建工具链的 AOT 编译型语言，而不是作为一个动态执行环境，加载并直接执行程序员的原始源代码。


### 完成 ECMAScript 2015
在 2015 年 3 月的会议上，TC39 [[2015b](./references.md#TC39:2015:031)] 批准了当时的候选规范 [[Wirfs-Brock et al. 2015b](./references.md#ES6draft36), [c](./references.md#TC39:2015:030)]，将其提交给了 Ecma GA 大会进行最终批准。Ecma GA 在 2015 年 6 月的会议上投票批准了它 [[Ecma International 2015a](./references.md#ES2015:PR)]，并立即发布了 ECMA-262 第 6 版，是为《ECMAScript 2015 语言规范》[[Wirfs-Brock 2015a](./references.md#ES2015)]。

ECMAScript 2015 的开发和发布历时近 7 年，数百人为其开发做出了贡献。从 2008 年 7 月的会议（Harmony 工作开始之处）开始，到 2015 年 3 月的会议（候选规范获得批准之处）为止，委员会共召开了 41 次 TC39 会议。有 145 人亲自或通过电话参加了这些会议，具体参与程度不一。ES2015 的开发与 ES5/ES5.1、《ECMA-402 ECMAScript 国际化 API》、《ECMA-404 JSON 数据交换格式》以及 Test262 测试验证套件的开发相重叠。一些与会者的主要兴趣是其中的一项或多项工作。在 145 名与会者中，有 62 人只参加了一次会议，他们通常以观察员身份列席。

TC39 主席 John Neumann 和 Ecma 秘书长 István Sebestyén 为项目提供了行政上的支持，确保了会议的顺利进行。项目编辑 Allen Wirfs-Brock 在项目过程中发布了 38 份规范草案 [[TC39 Harmony 2015](./references.md#Harmony:drafts)]。有 7 人（图 47）实质上属于整个项目的技术贡献者。另有 35 名与会者（图 48）参加了 5 至 24 次会议，其中大多数人对项目作出了重要的技术贡献。在 ES2015 的开发过程中，数百名 JavaScript 开发者社区成员向 `es-discuss` 邮件列表 [[TC39 et al. 2006](./references.md#es-discuss:archive)] 发布了超过 36000 条消息，并在 TC39 的 bug 跟踪系统 [[TC39 et al. 2016](./references.md#TC39:bugzilla)] 中，提交了 4000 多条与 ES2015 规范草案有关的工单。

<table>
  <tr><td>Allen Wirfs-Brock (Project Editor)</td><td>Microsoft, Mozilla</td></tr>
  <tr><td>Brendan Eich</td><td>Mozilla, invited expert</td></tr>
  <tr><td>Mark S. Miller</td><td>Google</td></tr>
  <tr><td>Waldemar Horwat</td><td>Google</td></tr>
  <tr><td>Dave Herman</td><td>Northeastern Univ, Mozilla</td></tr>
  <tr><td>Douglas Crockford</td><td>Yahoo!, PayPal</td></tr>
  <tr><td>Erik Arvidsson</td><td>Google</td></tr>
</table>

图 47. TC39 技术贡献者，他们在整个 ES2015 开发工作中表现活跃。在此期间，每人至少参加了 41 次 TC39 会议中的 30 次。2009 年 5 月，Arvidsson 首次参加。Crockford 最后一次参加是在 2014 年 4 月。其余的人从头到尾都参加了项目。

<table>
  <tr><td>Sam Tobin-Hochstadt (24)</td><td>Andreas Rossberg (13)</td><td>Rafael Weinstein (10)</td><td>Chris Pine (7)</td></tr>
  <tr><td>Alex Russell (21)</td><td>Oliver Hunt (12)</td><td>Jeff Dyer (8)</td><td>Mike Samuel (6)</td></tr>
  <tr><td>Luke Hoban (20)</td><td>Norbert Lindenberg (12)</td><td>David Fugate (8)</td><td>Ihab Awad (5)</td></tr>
  <tr><td>Cormac Flanagan (18)</td><td>Sam Ruby (12)</td><td>Domenic Denicola (7)</td><td>Reid Burke (5)</td></tr>
  <tr><td>Yehuda Katz (17)</td><td>Brian Terlson (12)</td><td>Rick Hudson (7)</td><td>Andreas Gal (5)</td></tr>
  <tr><td>Rick Waldron (17)</td><td>Sebastian Markbage (11)</td><td>Jafar Husain (7)</td><td>Peter Jensen (5)</td></tr>
  <tr><td>Eric Ferraiuolo (15)</td><td>Jeff Morrison (11)</td><td>Dimitry Lomov (7)</td><td>Pratap Lakshman(5)</td></tr>
  <tr><td>Tom Van Cutsem (14)</td><td>Rob Sayre (10)</td><td>Ben Newman (7)</td><td>Nicholas Malsakic (5)</td></tr>
  <tr><td>Nebojsa Ćirić (13)</td><td>Matt Sweeney (10)</td><td>Caridy Patino (7)</td><td></td></tr>
</table>

图 48. 在制定 ES2015 期间，经常参加 TC39 会议的技术贡献者。这些数字反映了他们参加了多少次会议。

在 ES6 的开发过程中，人们对 TC39 的兴趣和参与度急剧增加，并在其完成后继续增加。2008 年 7 月，TC39 的第一次 Harmony 会议仅有代表 8 个组织的 13 人参加。2015 年 7 月的会议是在 ES2015 发布一个月后举行的，有代表 15 个组织的 34 名个人参会者（有些是远程参会）。在 2019 年 7 月的 TC39 会议上，有代表 24 个组织的 76 名参会者（46 人到场，30 人远程）。

#### 准备 ES6 之后的未来
2013 年和 2014 年，随着 ES6 开发工作的结束，TC39 开始考虑未来版本的开发该如何进行。ES6 进程中的一个关注点在于，其中一些特性的设计是在它们「能出现在已发布的 ECMAScript 标准中」之前几年就完成了的。这与大多数主流浏览器厂商所采用的「常青浏览器」概念相冲突。常青浏览器每隔几周就会更新一次，使错误修复和新特性能尽快推出。大多数 TC39 成员认为，ECMAScript 标准需要更快的更新周期，以便更好地适应浏览器的快速发展。

为此，委员会提出了以一年为发布周期的提议。这将使各个新特性在标准中迅速变得可用。每年发布版本还可以使规范中的错误迅速得到纠正，并消除了多年来对长篇勘误表的需要。按照标准组织的规范，每年一次的发布周期是非常快的，但 Ecma 同意接受这个时间表。

以年为单位进行更新，将要求 TC39 在开发新语言特性方面更加规范。有些设计工作仍然需要多年才能完成，因此这需要一个流程，以适应跨越多个年度发布周期的特性开发项目，并能协调不同特性之间重叠的开发周期。还有人担心，ES6 过于依赖一位编辑来完成大部分规范的编写工作。要想成功实现每年发布，倡议者需要为自己的特性进行大部分的规范编写。

Rafael Weinstein 和 Dimitry Lomov 发表了一份提案 [[TC39 2013c](./references.md#TC39:2013:055); [Weinstein and Lomov 2013](./references.md#postES6:1stdeck)]，建议在开发过程中，新特性提案要经过五个成熟阶段。后来 Weinstein 与 Allen Wirfs-Brock 合作，进一步定义和文档化了这一过程。附录 Q 是对新流程和发展阶段的描述。从 2014 年起，TC39 在 ES6 之后的所有工作中都遵循这一程序。截至 2020 年 6 月发表本文，TC39 在每年 6 月都成功发布了 ECMAScript 规范的新版本。

# 总结
JavaScript 是一门以低预期要求来创建的语言。它的初衷是作为 Java 在浏览器内的一个辅助工具，适合初级网页开发者和兼职程序员使用。然而在很短的时间内，它就（在浏览器里）超过了 Java，成为了交互式网页的主要语言。尽管 JavaScript 发展的前二十年里充满了增强、改进、重新设计或取代它的失败尝试，但到这一时期结束时，JavaScript 已成为了世界上使用最广泛的编程语言——而且还不仅仅用于网页。除了使用 Node.js 和其他宿主构建的服务器应用外，JavaScript 还被用于构建桌面应用、移动设备应用、健身追踪器、机器人和众多嵌入式系统。它甚至是詹姆斯·韦伯太空望远镜的一部分。这个望远镜使用 Nombas 的 ES1 级嵌入式 JavaScript，作为其板载控制软件的一部分 [[Dashevsky and Balzano 2008](./references.md#jameswebb)]。

JavaScript 的崛起是必然的吗？基于 Web 和浏览器博弈论中提出的可操作性要求，结论可能会倾向于演化出一种单一的主流网页编程语言，但并没有特别的理由说明这种语言必须是 JavaScript。其他语言也本可以填补这一角色。实际上纵观 JavaScript 的历史，有很多地方的结果都可能是不同的：

* 如果 Marc Andreessen 没有倡导开发浏览器脚本语言，会怎么样呢？
* 如果 Sun 公司的 Bill Joy 没有支持启动开发 Mocha 来作为 Java 的补充，会怎么样呢？
* 如果把开发 Mocha 的任务交给 Brendan Eich 以外的人，会怎么样呢？
* 如果 Eich 是一位更有经验的语言设计者或实现者，并总结认为 10 天内完成 demo 是一件不可能完成的任务，会怎么样呢？
* 如果 Eich 的编程能力不够，或者在语言设计上的野心太大，导致没能在 10 天内创建出 Mocha 的 demo，会怎么样呢？
* 如果 JavaScript 最初的设计中没有包含一等公民式的函数，会怎么样呢？
* 如果 Sun 或 Netscape 公司花大力气把 Java 与 HTML 更好地结合起来，而不是把 Java 作为一个孤立的环境来托管，会怎么样呢？
* 如果微软没有实现 JScript，而是更大力地推广它的 Visual Basic 替代方案，会怎么样呢？
* 如果微软在取得 90% 以上的浏览器市场份额后，继续投资浏览器语言技术，会怎么样呢？
* 如果 Macromedia/Adobe 推动将 ActionScript 2 或 3 作为浏览器的官方标准，而不是参与新版 ES4 的重新设计，会怎么样呢？
* 如果 TC39 内部没有出现反对新版 ES4 的声音，会怎么样呢？

如果，如果，如果……但这些事情其实都没有发生。实际上，面对嘲笑和有时甚至是激烈的批评，一个世代的浏览器实现者、引擎开发者、框架设计者、标准贡献者、工具构建者和 Web 应用程序员们，都找到了务实的方法来继续使用和增强 JavaScript，而且通常还不会破坏 Web。

Brendan Eich 在 2011 年一次名为「JSLOL」[[Eich 2011e](./references.md#eich:alwaysbetonjs)] 的会议演讲中，是这么描述 JavaScript 的：

> 最早他们说 JavaScript 没法做「富互联网应用」。
>
> 然后他们说 JavaScript 没法快起来。
>
> 然后他们说 JavaScript 没法修复语言问题。
>
> 然后他们说 JavaScript 没法做多核与 GPU 运算。
>
> 他们每次都错了！
>
> 我建议：**永远押宝在 JS**。

# 致谢
HOPL-IV 项目委员会成员们协助了两位作者（图 49）。他们提供了修改指导、LATEX 技巧和详尽的评审，并对本文草稿做出了有价值的反馈。

以下同事参与了 JavaScript 和 ECMAScript 的开发，他们为本文所讨论的事件与技术提供了信息：Douglas Crockford、Jeff Dyer、Richard Gabriel、Bill Gibbons、Gary Grossman、Lars T. Hansen、Dave Herman、Graydon Hoare、Yehuda Katz、Shon Katzenberger、Peter Kukol、Pratap Lakshman、Mark S. Miller、István Sebestyén、Mike Shaver、Brian Terlson、Tom Van Cutsem、Herman Venter、Rick Waldron 和 Robert Welland。

在稿件编写的各个阶段，对部分或全部稿件提供编辑反馈的 Beta 读者们包括：Jory Burson、Douglas Crockford、Jeff Dyer、Richard Gabriel、Lars T. Hansen、Dave Herman、Pratap Lakshman、Mathias Bynens、Axel Rauschmayer、Jonathan Sampson、Jon Steinhart、Tom Van Cutsem、Herman Venter、Rick Waldron、Rebecca Wirfs-Brock 和 Joseph Yoder。

Richard Gabriel、Rebecca Wirfs-Brock 和 Joseph Yoder 都参加了耗时多日的研讨会，在研讨会上，我们用全面的通读微调了论文的结构和语言。

记忆是不可靠的。因此准确的历史取决于能否获得原始文件。互联网档案馆和 Ecma 国际的内部档案，为本文提供了重要的原始资料。特别地，如果没有 Ecma 现任秘书长 István Sebestyén 的热情支持，本文是不可能完成的。Sebestyén 博士不仅确保了能让我们访问 Ecma 的内部档案，而且和我们一样都认为 Ecma 与 TC39 和 ECMAScript 有关的大部分文件档案，也都需要能通过网络公开访问。Ecma 的 Patrick Charollais 协助建立了 https://www.ecma-international.org/archive/ecmascript 网页。

最后，Allen Wirfs-Brock 要感谢 Pratap Lakshman 在 2007 年 1 月写的那封邮件。这是通向本文道路的起点。

![](./images/EichAWB.jpg)

图 49. Brendan Eich 和 Allen Wirfs-Brock，2011 年。照片由 Richard P. Gabriel 提供。
