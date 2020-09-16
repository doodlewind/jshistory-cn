# 创立标准

## 寻找场地
当 1995 年 Mocha 项目开始时，要想确保网页在不同浏览器之间的兼容性，需要的显然已经是规范化的标准了。Netscape 和 Sun 在发布 JavaScript 时 [[1995](./references.md#netscape:press:javascript)] 也指出了这一点：

> Netscape 和 Sun 计划向万维网联盟（W3C）和互联网工程任务组（IETF）提议，将 JavaScript 作为开放的互联网脚本语言标准。

然而，W3C 和 IETF 都不适合创建独立于厂商的 JavaScript 规范。IETF 关注的重点是互联网的协议和数据格式，而非编程语言。W3C 则是一个新组织，其技术领导者对于向 Web 技术栈中添加命令式编程语言并不感兴趣。譬如 Berners-Lee 的协作者 Robert Cailliau 在一次采访中 [[Wikinews 2007](./references.md#wikinews:cailliau)] 就这么说过：

> 比如说，我很确信我们需要把一门编程语言内置进去。但是以 Tim（Berners-Lee）为代表的开发者们相当反对，认为它必须保持完全的声明式。

在 1996 年初，浏览器技术正处于「互联网节奏」<sup>[30](./notes.md#30)</sup>[[Iansiti and MacCormack 1997](./references.md#iansiti1997developing)] 的发展速度下。但是，语言的标准化进程常以缓慢而闻名，并且还容易引起争议。鉴于微软正认真对待浏览器竞争，Netscape 和 Sun 担心微软可能企图主导 Web 脚本标准的开发，从而把标准重新聚焦到基于 Visual Basic 的语言上。在 1996 年春天，Netscape 和 Sun 需要找到一个公认的标准开发组织，在它的保护下快速起草 JavaScript 标准。这个过程可以由微软参与，但不能由微软主导。Netscape 的标准专家 Carl Cargill 认识 Ecma 国际组织（Ecma International）的秘书长 Jan van den Beld，并朝这个方向推动了 JavaScript 的标准化。Ecma 对自己的定位是以业务为中心的标准组织，旨在将官僚主义流程最小化，从而把标准制定时间减至最少。由于国际标准组织（ISO）认可 Ecma 国际，Ecma 的标准可以通过快速通道来成为 ISO 标准。除了 Cargill 的人脉以外，Sun 也已经是 Ecma 的会员。它认为 Ecma 在微软反对下仍然坚持发布 Windows API 标准的行为，已经证明了其独立性 [[LaMonica 1995](./references.md#infoworld:1995:12:18)]。

在 1996 年春天和夏天，Netscape、Sun 和 Jan van den Beld 做了非正式的联系和讨论。当年 9 月，Ecma 协调委员会（Ecma Co-ordinating<sup>[31](./notes.md#31)</sup>）[[1996b](./references.md#GA:1996:083)] 考量了 Netscape 对启动 JavaScript 标准化活动的请求，并授权于 1996 年 11 月 4 日至 5 日在硅谷举行启动会议。Netscape 也正式申请 [[Sampath 1996](./references.md#GA:1996:098)] 成为 Ecma 的准会员（Associate Member<sup>[32](./notes.md#32)</sup>）。10 月 30 日，Ecma 发表了对「JavaScript 项目启动会议」的开放邀请 [[Ecma International 1996a](./references.md#TC39:1996:001)]。如果获得足够兴趣，它将为活动组织出一个新的 Ecma 技术委员会（Technical Committee）。Ecma 使用数字来标记旗下的技术委员会，而下一个可用数字是 39。在 1996 年 12 月，Ecma 大会在其半年一度的 GA（General Assembly）大会上批准了 TC39 及其工作宣言的创立。与此同时，微软也作为标准会员（Ordinary Member）加入了 Ecma。

## 首次 TC39 会议
TC39 的组织会议于 1996 年 11 月 21 日至 22 日在加州山景城的 Netscape 办公室举行，根据记载 [[TC39 1996](./references.md#TC39:1996:004)] 共有 30 位与会者（图 11）。会议开始前，Netscape 核心技术副总裁 David Stryker 和代表 Ecma 的 Jan van den Beld 分别致了欢迎辞。Stryker 表达了对委员会所创建规范的愿景，希望规范与当前实现只有最小程度的偏差，并能将超出规范范畴的语言扩展留待未来考量。

<table>
  <tr><td><b>执行主席</b></td><td>Mr. J. van den Beld</td></tr>
  <tr><td><b>秘书</b></td><td>Mr. J. van den Beld (SG ECMA)</td></tr>
  <tr><td><b>参会者</b></td><td>Mr. Cargill (Netscape), Ms. Converse (Netscape), Mr. Eich (Netscape), Mr. Fisher (NIST), Mr. Gardner (Borland), Mr. Krull (Borland), Mr. Ksar (HP), Mr. Lenkov (HP), Mr. Lie (W3C), Mr. Luu (Mainsoft), Mr. Mathis (Pithecanthropus, JTC1/SC22), Mr. Matzke (Apple), Mr. Murarka (Spyglass), Ms. Nguyen (Netscape), Mr. Noorda (Nombas), Mr. Palay (Silicon Graphics), Mr. Reardon (Microsoft), Mr. Robinson (Sun), Mr. Singer (IBM), Mr. Smilonich (Unysis), Mr. Smith (Digital), Mr. Stryker (Netscape), Ms. Thompson (Unisys), Mr. Urquhart (Sun), Mr. Veale (Borland), Mr. Welland (Microsoft), Mr. White (AAC Group, Microsoft), Mr. Willingmyre (GTW Associates, Microsoft), Mr. Wiltamuth (Microsoft).</td></tr>
  <tr><td><b>缺席</b></td><td>Mr. Huffadine (Callscan)</td></tr>
</table>

图 11. 首次 TC39 会议的参会者 [[TC39 1996](./references.md#TC39:1996:004)]。

微软 Internet Explorer 开发团队的负责人 Thomas Reardon 则建议委员会不要将 HTML 对象模型的内置库纳入规范中，从而「避免重复」。这些内容应留给 W3C。这一建议被委员会接受，并对委员会的早期成功至关重要。因为尽管 Netscape 和微软的核心语言特性非常相似，它们的 HTML API 却大不相同。这条 TC39 只开发独立于平台 / 宿主环境标准的决定，一直以来都是 TC39 的核心行动准则之一。Reardon 讨论了微软在尝试使 JScript 与 Netscape 完全兼容时遇到的困难，并强调了制定形式化语言规范的必要性。但他也告诫说，对于能增加价值的竞争性实现，规范同样应当为其留有余地。

会议拟议的内容包括 Netscape、Sun、微软和 Nombas 公司的技术演讲，以及在成立新的 Ecma 技术委员会并开始起草标准语言规范时，实际所需的各类组织活动。但在会议上 Sun 表示它不需要做演讲，因此 Borland International 公司的演讲被添加到了议程中。

在会议的开始阶段，Netscape 和 Borland 都分发了技术规范草案，但微软则没有。在 Thomas Reardon 的发言中，他说微软已制定了自己的初步规范并保存了文件。Reardon 表示他们暂时还没有时间完成拷贝，但明天就会有可用的副本。因此微软的技术演讲移到了会议的第二天。

Brendan Eich 参加了会议，但 Netscape 的技术演讲是由 Anh Nguyen 进行的，介绍了 Eich 和 C. Rand McKinny 为 JavaScript 1.1 编写的《JavaScript 语言规范》的初稿 [[1996](./references.md#TC39:1996:002)]。Netscape 向 Ecma 贡献了该文档，作为标准化工作的基础文档之一。Nguyen 解释说，Netscape Navigator 3 中的 JavaScript 1.1 与 Netscape 2 中的初始 JavaScript 版本有一些差异。Netscape 的规范使用类似于 ANSI C 语言标准 [[ANSI X3 1989](./references.md#c89)] 的 BNF 表示法来描述语言语法。它使用非正式的叙述（prose）来定义大多数语义，并使用表格来描述语言的隐式类型转换（coercion）规则。

Borland 研发了JavaScript 和 JavaScript IDE 的服务端实现 [[Lazar 1997](./references.md#Lazar:1997:BI:252425.252427)]，其演讲专注于他们的实现中已经完成或纳入规划的几种语言扩展 [[Borland International 1996](./references.md#TC39:1996:006)]。主要的扩展包括类定义、try / catch / finally 异常处理、类 C 的 switch 语句、作为一等值的代码块、数组字面量、类 C 的预处理器，以及许多内置库的新增特性（包括一些 IO 特性在内）。Borland 还指出了他们在尝试与 Netscape 的实现互相兼容时遇到的困难，并表示需要更正式的规范，以确保实现之间的互操作性。

Nombas 的 Brent Noorda 介绍了该公司定位于脚本语言的 Cmm（C minus minus）产品。Cmm 的表层语法和某些语义与 JavaScript 1.0 非常相似，后来，Nombas 将其 Cmm 实现发展成了面向嵌入式应用的 ECMAScript 实现 [[Noorda 2012](./references.md#nombas)]。

从第一天会议休会起，微软的 Robert Welland 就开始了工作 [[Welland et al. 2018](./references.md#jscript:interview), at +8:30]。Thomas Reardon 关于「没有时间做拷贝」的托词其实是种拖延策略，为的是让 Welland 有更多时间来处理微软的规范。为会议创建规范文档的任务之前已分配给了微软的技术作家，但当 Welland 在出差参会之际收到文档时，他发现这份文档甚至不足以作为初步的语言规范，并不想把这样的文档交给委员会。然而当他在会议开始前看到 Netscape 的文档时，他感觉 Netscape 的文档同样写得不充分，不希望它成为制定标准的唯一基础文档。于是 Welland 和 Reardon 决定拖延一天，从而在会议第二天开始时准备出更好的文档。

会议结束后，Robert Welland 回到了他以前做 NewtonScript 时的同事 Walter Smith 的家中。Walter Smith 也供职于微软，但还住在湾区。他们通宵工作，将微软的文档改成了一份过得去的 JavaScript 核心语言初步规范。他们的规范还借鉴了 ANSI C 标准的大部分语法，并用一张表来表达类型转换规则。但是，Welland 希望其余部分的语义也能被更形式化地确定。他想到了 [[Welland et al. 2018](./references.md#jscript:interview), at +10:10]《LISP 1.5 程序员手册》[[McCarthy and Levin 1965](./references.md#mccarthy1965lisp)] 中描述 Lisp 解释器语义的一种风格。在这种风格下，每种句法形式都紧跟着对「如何为该语法求值」的精确描述。某些情况下，语义还会使用伪代码来表示<sup>[33](./notes.md#33)</sup>。Welland 决定使用带有编号步骤的类似伪代码，来描述对 JavaScript 语义的求值。

Welland 和 Smith 根据当时的 JScript 实现，在文档中添加了语义。对于不确定的地方，他们会回退参考自己先前在 Self 和 NewtonScript 上的经验，找到从那个角度出发有价值的表述。这份文档包含了一张用于表示数组的对象图，它在对属性继承进行建模时，看起来非常像 Self。到第二天早上，他们觉得做出的文档对于当作起点来说已经足够好了。于是他们制作了副本，由 Welland 在第二天会议开始时进行了分发。这份文档就是《JScript 语言规范 0.1 版》[[Welland et al. 1996](./references.md#TC39:1996:005)]，成为了微软贡献到 Ecma 的基础文档。

当 Robert Welland 进行演讲时，他惊喜地发现与会人员普遍更喜欢他的文档，并同意需要更正式的规范来确保实现的可互通性。但这里的共识并非等待另一种尚未确定的正式规范，而是通过整合 Netscape、微软和 Borland 贡献的规范来创建标准的初始草案，然后努力使最终的草案更完整而精确。委员会首先创建了一份问题列表 [Appendix G]，其中的问题需要在第一版标准中得以解决或澄清。鉴于共提交了两份被提议作为基准的文档，所以必须选择其中一份来开始编辑。Netscape 的文档是使用 FrameMaker 编写的，而微软的文档则使用 Word 编写。Ecma 的代表解释说，他们的内部编辑流程使用 Word。于是令 Welland 惊讶的是，委员会同意将微软的贡献作为基准文档。

委员会选举出了最初的主席团成员（图 12），并设定了非常激进的目标：在 1997 年 1 月的下一次会议上准备出初稿，在 1997 年 4 月准备出最终稿，进而在 1997 年 6 月的 Ecma GA 大会上批准该标准。他们安排了后续约每六周一次的会议，并着手建立私人邮件列表和 FTP 服务器<sup>[34](./notes.md#34)</sup>。

<table>
  <tr><td>主席</td><td><b>Mr. G. Robinson</b> (Sun)</td></tr>
  <tr><td>副主席</td><td><b>Mr. C. Cargill</b> (Netscape)</td></tr>
  <tr><td>副主席</td><td><b>Mr. S. Wiltamuth</b> (Microsoft)</td></tr>
  <tr><td>主编</td><td><b>Mr. M. Gardner</b> (Borland) - 待确认</td></tr>
  <tr><td>助理编辑</td><td><b>Mr. A. Murarka</b> (Spyglass) - 待确认</td></tr>
</table>

图 12. 首次 TC39 会议选举出的主席团成员 [[TC39 1996](./references.md#TC39:1996:004)]。

TC39 的第二次会议 [[1997e](./references.md#TC39:1997:007)] 于 1997 年 1 月 14 日至 15 日举行，共有 22 位与会者，其中包括 5 位并不属于 Ecma 会员的访客。Jan van den Beld 宣布 TC39 的建立已得到 Ecma GA 大会的确认。他强调说，TC39 必须尽快开始遵守有关会员资格和参与条件的 Ecma 规则，开发 Ecma 标准的贡献者必须是某个 Ecma 会员组织的代表。

会议的主要技术内容，是对标准第一稿进行审查和讨论 [[TC39 1997c](./references.md#TC39:1997:001)]。Borland 的 Michael Gardner 和 Randy Solton 通过整合 Netscape、微软和 Borland 的贡献，创建出了这份文档。由于 Spyglass 公司没有加入 Ecma，因此 Anup Murarka 没有参加第一稿的开发。会议将所有三个实现中完全相同的特性认定为不存在争议，并确定了特性不同之处以便后续协调。

那些特定于具体实现的特性，在「扩展提案」（Proposed Extensions）附录中列出。委员会讨论了对扩展的处理方式，并商定对于当时实现中共有的核心特性，其优先级将高于所有扩展。另外委员会还达成一致，认为规范应规避需要修改现有应用的改动，这也最终成为了未来对标准的修订中重要的设计准则。

为满足紧迫的时间表，委员会成立了一个特设技术工作组。这个工作组获得了与编辑一起工作的授权，以便填补丢失的材料，并解决规范中突出的技术问题。小组将进行电子化交流，每周轮流以当面会议和电话会议的形式开会，并由 Scott Wiltamuth 担任书记员。TC39 会议于 1 月 15 日上午 10:30 休会，其余时间用于特设技术工作组的会议。

会议结束后，Borland 决定不加入 Ecma，因此 Michael Gardner 无法继续担任编辑。Sun 请来了 Guy Steele，他从 1997 年 1 月下旬开始担任编辑，一直到 1997 年 9 月发布第一版标准为止。

## 编写规范
Michael Gardner 和 Randy Solton 在 11 月的会议之后，立即开始了制订第一份规范草案的工作，并在接下来的六周中取得了显著进展。除 Gardner 和 Solton 以外，首份草案的技术贡献者还包括如下：Brendan Eich（Netscape）、C. Rand McKinney（Netscape）、Donna Converse（Netscape）、Shon Katzenberger（微软）和 Robert Welland（微软）。

Robert Welland 返回 Redmond 后，将他的 JScript 0.1 规范交接给了 Shon Katzenberger，以继续开发语言语义 [[Welland et at. 2018](./references.md#jscript:interview), at +12:02]。数学博士出身的 Katzenberger 对形式化表示法感到满意。他发现伪代码概念（Appendix P）在描述 JavaScript 语义方面相当有效，其详细程度在他眼里是足以确保互操作性的。Katzenberger 成为了微软对标准开发的主要技术贡献者。他将草稿与现有实现相对照，并为未覆盖到的部分附加编写伪代码算法，从而扩展了 Welland 和 Smith 的深夜工作。然后，他将自己修改后的新材料发送给 Borland 的编辑，以纳入正式草案。2018 年 Katzenberger 在接受采访时 [[Welland et at. 2018](./references.md#jscript:interview), at +21:16]，表示他对编辑过程中的改动有时会无意破坏自己的算法而有所不满。当 Guy Steele 可以担任编辑时，他感到相当高兴。

1 月 10 日的草案 [[TC39 1997c](./references.md#TC39:1997:001)] 建立了规范的基本结构（图 13），并确定了用于定义语言的许多基础技术、约定和惯用语。在 20 年后的 ECMAScript 标准版本中，这些概念有许多仍在使用。

<table>
  <thead>
    <tr><th>1997 年 1 月 10 日的草案</th><th>ECMA-262 第 1 版</th></tr>
  </thead>
  <tbody>
    <tr><td></td><td>Scope</td></tr>
    <tr><td></td><td>Conformance</td></tr>
    <tr><td></td><td>Reference</td></tr>
    <tr><td></td><td>Overview</td></tr>
    <tr><td>Notational Conventions</td><td>Notational Conventions</td></tr>
    <tr><td>Source Text</td><td>Source Text</td></tr>
    <tr><td>Lexical Conventions</td><td>Lexical Conventions</td></tr>
    <tr><td>Types</td><td>Types</td></tr>
    <tr><td>Type Conversion</td><td>Type Conversion</td></tr>
    <tr><td>Variables</td><td>Execution Contexts</td></tr>
    <tr><td>Expressions</td><td>Expressions</td></tr>
    <tr><td>Statements</td><td>Statements</td></tr>
    <tr><td>Function Definition</td><td>Function Definition</td></tr>
    <tr><td>Program</td><td>Program</td></tr>
    <tr><td>Native ECMAScript Objects</td><td>Native ECMAScript Objects</td></tr>
    <tr><td></td><td>Errors</td></tr>
  </tbody>
</table>

图 13. ECMAScript 标准的结构。

草案中对语法约定的描述，主要来自 Netscape 的规范。但至于表达式与语句级语法的结构，以及产生式（production）的名称，则在很大程度上遵循了微软规范中的用法。在两份贡献出的规范中，表达式语法在细微的细节层面上有所不同，例如函数调用的优先级、对象的创建（`new` 运算符），以及对象属性访问表达式的元素等。

这份草案试图将自动分号插入（ASI）的规则，精确地定义为用来「校正解析错误」的过程。语句的语法包括了显式的分号，用于终止所有非复合语句。如果没有 ASI，那么缺失分号将会产生解析错误。ASI 规范定义了 JavaScript 解析器何时必须通过「假设存在分号」并重新解析的方式，来尝试纠正此类解析错误。第一版草案中的 ASI 规则并不完整，这在后来的 ECMAScript 规范草案和发行版中进行了完善。

1 月 10 日的草案中包含了 Shon Katzenberger 的伪代码算法（例如图 14），用于定义各种语言结构的语义。具体算法的组成，则包括了带顺序编号的步骤，以及步骤之间的简单条件控制流。每个步骤都包含一些*命令式*<sup>[g](./appendices.md#imperative)</sup>的叙述。步骤的叙述用英语编写，并结合了规范中针对常见动作所定义的基本词汇。可以在规范内的其他算法中命名和「调用」这些算法。

```
4.4.7 GetValue(V)

1. If Type(V) is not a Reference, return V.
2. Call GetBase(V)
3. If Result(2) is null, generate a runtime error.
4. Call the [[Get]] method of Result(2), passing GetProperty(V) for the property name and GetAccess(V) for the access mode.
5. Return Result(4).
```

图 14. 在 2007 年 1 月 10 日的 ECMAScript 规范中 [[TC39 1997c](./references.md#TC39:1997:001), §4.7.4]，一个具名的伪代码算法。原始文档中的步骤 2 末尾少了一个句号。

草案还定义了算法中使用的数据类型。ECMAScript 程序中可见值的类型包括 Number、Boolean、String、Object、Undefined 和 Null。另外还有 Reference、Completion 和 List 类型的值用于定义语言语义，ECMAScript 程序无法直接接触到它们。

对象类型的规范引入了属性*标记*<sup>[g](./appendices.md#attribute)</sup>的概念，用于控制如何访问或修改各个属性。规范共定义了七种不同的标记：ReadOnly、ErrorOnWrite、DontEnum、NotImplicit、NotExplicit、Permanent 和 Internal。最后，ErrorOnWrite、NotImplicit 和 NotExplicit 被移除，而 Permanent 则被重命名为 DontDelete。具有 Internal 标记的属性会保留与对象相关联的内部状态，但这对 ECMAScript 程序并不直接可见。这种*内部属性*<sup>[g](./appendices.md#internal-property)</sup>的用途是保存状态。对于实现对象语义，或者实现内置对象与宿主对象的唯一行为，这些状态都是必需的。

一并引入的概念还包括*内部方法*<sup>[g](./appendices.md#internal-method)</sup>，这是用于定义对象基本行为的算法。对于某些内部方法，可以用替代性的定义来指定不同种类的对象（例如 Array 对象），从而支持它们在行为上的变化。内部方法的接口，实质上是简单*元对象协议*<sup>[g](./appendices.md#metaobject-protocol)</sup>的规范 [[Kiczales et al. 1991](./references.md#Kiczales:1991:AMP:574212)]。

在规范中，内部方法和内部属性的名称被括在双括号中，形如 `[[Foo]]`。1 月 10 日的草案定义了内部方法 `[[Get]]`、`[[Put]]`、`[[HasProperty]]`、`[[Construct]]`、`[[Call]]` 和内部属性 `[[Prototype]]`。在第一次形式化表达对象属性访问、原型继承和函数调用的语义时，用到的就是这些内部方法。到 ES1 完成时，又添加了 `[[CanPut]]` 和 `[[Delete]]` 内部方法。

第一稿的目录中既包含了原生（内置）ECMAScript 对象，也包含了由浏览器和 Web 服务端宿主环境提供的对象。但是这些部分在 1 月 10 日的草案中仍然留空。草案中有 20 个条目被明确标记为「问题」，它们是许多附录中描述的潜在语言扩展的补充。

1 月 10 日的草案，是 1997 年 1 月 15 日首次技术工作组会议上讨论的基础。会议做出了一些重要的决定 [[Wiltamuth 1997a](./references.md#TC39:1997:005)]，其中包括：

* 初始标准的范畴，将不涉及特定于宿主的库对象与函数。例如那些应由浏览器和 Web 服务端宿主提供的规范。
* 只有在完整的规范草案可用后，才考虑对当前语言的扩展。
* 逗号和 `?` 运算符不会传播（propagate）引用值，因此它们既不能在赋值运算的左侧使用，也不能作为函数调用的 `this` 值。
* 标识符中不允许使用非 ASCII Unicode 字符。
* 字符串值支持使用 NUL（U+0000）字符。
* 全局函数和变量声明会创建可枚举、可删除的属性，而规范中定义的内置对象属性则默认为不可枚举但可删除的。

在第一次工作组会议上未解决的问题包括：多次赋值的求值顺序、对继承的只读属性赋值时的语义，以及如何适应 1970 年之前的日期值。

工作组（图 15）在 1997 年 4 月中旬之前定期开会，研究了一系列的主要和次要问题，并审查了编辑编写的工作草案文本。有九次工作会议留下了记录 [[Wiltamuth 1997a](./references.md#TC39:1997:005), [b](./references.md#TC39:1997:008), [c](./references.md#TC39:1997:009), [d](./references.md#TC39:1997:010), [e](./references.md#TC39:1997:012), [f](./references.md#TC39:1997:015), [g](./references.md#TC39:1997:024), [h](./references.md#TC39:1997:025), [i](./references.md#TC39:1997:026)]。参加了一些工作组会议的 Richard Gabriel 在个人交流中回忆说，这些会议期间的互动并不罕见。Guy Steele 会询问一些边界条件下特性行为的问题。有时 Brendan Eich 会说「我不知道」，有时 Eich 和 Shon Katzenberger 可能不太确定或产生分歧。在这种时候，他们会在各自的实现中尝试测试用例。如果得到相同的答案，这个答案就会成为被确定下来的行为；如果出现差异，他们将会就问题讨论到达成共识为止。

<table>
  <tr><td>Scott Wiltamuth (note taker)</td><td>Microsoft</td></tr>
  <tr><td>Brendan Eich</td><td>Netscape</td></tr>
  <tr><td>Shon Katzenberger</td><td>Microsoft</td></tr>
  <tr><td>Michael Gardner (1st draft co-editor)</td><td>Borland</td></tr>
  <tr><td>Randy Solton (1st draft co-editor)</td><td>Borland</td></tr>
  <tr><td>Clayton Lewis</td><td>Netscape</td></tr>
  <tr><td>Guy Steele (editor)</td><td>Sun</td></tr>
</table>

图 15. ES1 规范工作组的定期参与者。

在第一份 Gardner 和 Solton 起草的规范草案之后，Guy Steele 在 1997 年 2 月 27 日至 5 月 2 日之间，向整个委员会发布了另外七份草案，其余的工作草案则在工作组内分发。除了 Ecma GA 大会的最终草案 [[TC39 1997b](./references.md#TC39:1997:028)] 之外，每份草案都包含详细的问题解决日志 [[TC39 1997d](./references.md#TC39:1997:misc-1)]。

规范制定过程中的某些问题，对语言的使用产生了长期的影响。比如有个受到持续讨论的问题是这样的：短路布尔运算符 `&&`和 `||` 在遇到可转换为布尔值的操作数时，是应该求值为其中一个操作数的实际值（所谓「Perl 风格」），还是 `true` 或 `false` 的布尔值（所谓「Java 风格」）。Brendan Eich 最初的实现主要使用了「Perl 风格」的语义，但少数情况下也有「Java 风格」的行为。微软和 Borland 则已经实现了完整的「Java 风格」语义。最终决定是一致采用「Perl 风格」。

这个决定直接促成了几年后广泛使用的 JavaScript 惯用法。布尔运算符将 `null` 和 `undefined` 的值转换为 `false`，并将所有的对象引用转换为 `true`。这就带来了如图 16 所示的手法，它为对象属性和可选的函数参数提供了默认值。

``` js
function f(options) {
  options = options || getDefaultOptionsObject();
  // 如果传递了 options 对象，那么就使用它
  // 否则使用默认的一组配置
  //  ...
}
```

图 16. ECMAScript 1 中为函数形参赋予默认值的手法。

Brendan Eich 回忆说，他希望加入 JavaScript 1.2 中自己对 `==` 运算符语义的更改，以消除其类型转换问题。Shon Katzenberger 成功地说服了他，理由是鉴于会破坏大量现有 Web 页面，现在做这种更改已经为时已晚。Eich 在 JavaScript 1.3 的 SpiderMonkey 版本中恢复了原始的语义。

TC39 的第三次会议是 1997 年 3 月 18 日至 19 日举行的。这是 6 月 Ecma GA 大会前最后一次排定的 TC39 正式会议，目标是让标准的第一版能获得接受和批准。为了满足这份时间表，TC39 需要在这次会议上投票，以将标准提交给 GA 大会。

在 3 月 12 日，标准的 0.12 版本草案 [[TC39 1997a](./references.md#TC39:1997:017B)] 分发给了全体委员会，并在 3 月 14 日的工作组会议上进行了讨论 [[TC39 1997f](./references.md#TC39:1997:018)]。这份草案在技术上已经接近完成，只是 Date 对象的复杂定义仍然只是简单的一组标题。Shon Katzenberger 提出了关于规范质量的完整提案。经过讨论和审查，这份提案也可以被纳入规范。从 1 月 10 日草案完成的两个月以来，这份文档包含的实质性页面已从 41 页增加到了 96 页。0.12 版草案中除了缺少 Date 规范外，其问题跟踪附录中还有 8 个内部「问题」标签和 6 个重要条目。工作组会议还讨论了大约 12 个需要在规范中解决的其他问题。

由于 Scott Wiltamuth 保证所有问题都不会遗留下争议，并且完整的草案可以在 3 月底完成，因此 TC39 一致同意将草案交给 Ecma GA 大会，以进行 6 月的赞成投票。工作组被赋予的职责是收尾规范，并与 Ecma 秘书处的工作人员一起制定出符合其时间表和格式要求的最终草案。草案的完成比 Wiltamuth 的估计多花了一个月的时间。在 1997 年 5 月 2 日完成最终草案 [[TC39 1997b](./references.md#TC39:1997:028)] 前，工作组内部又分发了三份中间草案。最终草案于 5 月 5 日分发给了 GA 大会成员。最终草案符合 Ecma 的文档约定，并包含了 Richard Gabriel 对语言的*非规范性*<sup>[g](./appendices.md#non-normative)</sup>概述。GA 大会在 1997 年 6 月的会议上同意在稍作编辑更改后，将草案发布为《Ecma 标准 ECMA-262 第 1 版》，并将其提交到了 ISO 快速通道流程中。编辑更改完成后，草案于 1997 年 9 月 10 日分发给了 TC39。《ECMA-262 第 1 版》[[Steele 1997](./references.md#ES1)] 在 9 月 16 日至 17 日的 TC39 会议上 [[1997h](./references.md#TC39:1997:039)] 正式发布。

## 命名标准
自标准化过程开始起，语言命名上的隐患就已经埋下了。Netscape 起的最初名称「LiveScript」基于它和 Sun 的战略合作伙伴关系而替换成了「JavaScript」。Sun 将「JavaScript」注册成了商标，并将其许可给了 Netscape。尽管 Sun 支持 Netscape 脚本语言的标准化工作，但他们也积极保护与 Java 有关的商标。Sun 似乎不太可能将对「JavaScript」商标的控制权交给标准组织。

在第一次 TC39 会议上，与会者邀请 Sun 提供「JavaScript」名称，并同意在找到更合适的名称之前，先使用「ECMAScript」作为占位名称。Scott Wiltamuth 的任务是收集名称建议并检查其可用性。

Wiltamuth [[1997j](./references.md#TC39:1997:002)] 列出了 16 种潜在可行的名称，以及 14 种由于现有商标或用法冲突而被认为不可行的名称。一项民意测验确定了排名最高的候选名称：LiveScript、ScriptJ、EZScript、Xpresso / Expresso / Espresso。会议要求 Netscape 和 Sun 的代表确定 LiveScript 和 JavaScript 的可用性。在此期间，规范草案中继续使用「ECMAScript」。

Sun 确认了 [[TC39 1997f](./references.md#TC39:1997:018)] 不会将「JavaScript」许可给 Ecma，而 Netscape 则表示对于使用 LiveScript 作为标准名称，没有法律上的异议<sup>[35](./notes.md#35)</sup>。根据这一反馈，TC39 同意与 Netscape 合作以保护 LiveScript 的权利，并且 Ecma 将会审查商标的注册。但在收到 Netscape 的书面确认前，ECMAScript 仍将在规范草案中使用。

提交给 Ecma GA 大会的标准草案，仍然使用 ECMAScript 作为语言名称。在 GA 大会上 [[Ecma International 1997](./references.md#GA:1997:063)]，有人担心在标准标题中使用商标名称的适当性，因为标准的目的是使所有实现该标准的公司享有平等的地位。由于 Netscape 决定不将 LiveScript 正式转让给 Ecma，因此后者无法使用 LiveScript 作为语言的名称。大会批准了带着「ECMAScript」占位名称的标准，并指示 TC39 在 9 月前解决命名问题。

命名问题在 7 月的 TC39 会议上 [[1997g](./references.md#TC39:1997:030)] 进行了讨论。Scott Wiltamuth 建议使用「RDScript」<sup>[36](./notes.md#36)</sup>，而 Carl Cargill 则建议采用「ECMAScript」作为永久名称。还曾有关于是否需要名称的讨论，因为也许以「ECMA-262」（该规范的 Ecma 文档编号）作为名称就足够了。7 月的会议最后没有解决任何问题。但到了 9 月，TC39 [[1997h](./references.md#TC39:1997:039)] 同意使用「ECMAScript」作为语言名称来发布标准。

几个月后，在为是否批准 ECMA-262 为 ISO 标准做决定性投票时，美国国家标准机构（ANSI）评论指出 [[TC39 1998e](./references.md#TC39:1998:007)]：「这种语言的任何实现都不太可能被称为 ECMAScript。这在现在和将来都会使用户感到困惑。困惑之处包括标准的含义，以及语言引擎对标准的支持。」事实证明这一预测是正确的。全世界一直在使用「JavaScript」名称来标识这门由浏览器实现的语言，这个名称已经包含在了 HTML `<script>` 元素的规范中。Brendan Eich [[2006b](./references.md#Brendan:ECMAScript-name)] 后来表达了他对命名问题的看法：「ECMAScript 一直是个没人要的商品名，听起来像是种皮肤病。」

## ISO 快速通道
JavaScript 初始标准化的最后一步，是使 Ecma 规范被接受为国际标准组织（ISO）标准。1997 年 9 月，第一版 ECMA-262 已提交进入 ISO/IEC 快速通道流程 [[TC39 1997h](./references.md#TC39:1997:039)]。Guy Steele 随后辞去了项目编辑的职务，由 IBM 的 Mike Cowlishaw 接任。

ISO/IEC 投票产生了来自丹麦、法国、日本、荷兰和美国的国家标准机构的 27 页评论 [[TC39 1998e](./references.md#TC39:1998:007)]。这其中还包括了对 TC39 [[1998b](./references.md#TC39:1998:005)] 提交的现存错误表的评论。大多数评论指出了快速创建 ECMA-262 时遗漏的次要编辑问题。同时报告的还有一些更重要的技术问题，涉及 Date 对象的 2000 年过渡支持，以及 Unicode 与语言的集成。

在 TC39 的投入下，Mike Cowlishaw 准备了一份《意见处置报告》。这份报告在投票决议会议上获得了审核和接受 [[TC39 1998a](./references.md#TC39:1998:010)]。1998 年 7 月，即将出镜的修订版规范发布到了 ISO/IEC，并寄给了各 Ecma 标准会员。后者批准了该修订规范，是为《ECMA-262 第 2 版》[[Cowlishaw 1998](./references.md#ES2)]。

## 定义 ECMAScript 3
在第一次 TC39 会议上，涌现出了许多对 JavaScript 1.0/1.1 语言的扩展，其中一些扩展也合并到了语言规范的初稿中。但是 TC39 技术工作组同意优先完成基本语言规范，而后才考虑新特性。因此对第一版来说，大部分可能的扩展都归入了规范草案的附录中 [[TC39 1997a](./references.md#TC39:1997:017B), Appendix B]。

到 1997 年 7 月的 TC39 会议 [[1997g](./references.md#TC39:1997:030)] 时，第一版的工作已接近完成。委员会考虑的重点转移到了下一版规范中所应包含的新特性。Netscape 已经表明了其 Netscape 4.0 的发展方向，其中会将 SpiderMonkey 引擎与 JavaScript 1.2 的扩展相结合。Scott Wiltamuth 则提出了微软 [[1997](./references.md#TC39:1997:032)] 关于「ECMAScript 2.0」的初步提案，其中包括 `switch` 语句、`do while` 语句，以及带有标签的 `break` 和 `continue` 语句。一并包含的还有 `===` 和 `!==` 运算符，以及将 `caller` 属性添加到 `arguments` 对象。微软的 Andrew Clinick [[1997](./references.md#TC39:1997:033)] 提出了一份单独的提案，希望增加条件编译支持。微软在 10 月将 JScript 3.0 作为 Internet Explorer 4.0 的组件发布时，确定了「第二版」的起点。图 17 列出了截至 1997 年底，由 Netscape [[1997c](./references.md#netscape:js1.2:guide)] 和微软 [[2009b](./references.md#jscriptversions)] 浏览器为 ECMAScript 第一版实现的主要扩展。

<table>
  <thead>
    <tr><th>特性</th><th>JavaScript 1.2</th><th>JScript 3.0</th><th>ECMA-262 第 3 版</th></tr>
  </thead>
  <tbody>
    <tr><td><code>do</code> 语句</td><td>✓</td><td>✓</td><td>✓</td></tr>
    <tr><td><code>break</code>/<code>continue</code> 到标签</td><td>✓</td><td>✓</td><td>✓</td></tr>
    <tr><td><code>switch</code> 语句</td><td>✓</td><td>✓</td><td>✓</td></tr>
    <tr><td>嵌套函数</td><td>✓</td><td>✓</td><td>✓</td></tr>
    <tr><td>函数表达式</td><td>✓</td><td>✓</td><td>✓</td></tr>
    <tr><td>对象字面量</td><td>✓</td><td>✓</td><td>✓</td></tr>
    <tr><td>数组字面量</td><td>✓</td><td>✓</td><td>✓</td></tr>
    <tr><td><code>===</code> 和 <code>!==</code></td><td></td><td>✓</td><td>✓</td></tr>
    <tr><td>正则表达式字面量</td><td>✓</td><td>✓</td><td>✓</td></tr>
    <tr><td><code>delete</code> 运算符</td><td>✓</td><td>✓</td><td>✓</td></tr>
    <tr><td>所有对象上的 <code>__proto__</code> 伪属性</td><td>✓</td><td></td><td></td></tr>
    <tr><td>数组方法 <code>concat</code>, <code>slice</code></td><td>✓</td><td>✓</td><td>✓</td></tr>
    <tr><td>数组方法 <code>push</code>, <code>pop</code>, <code>shift</code>, <code>splice</code>, <code>unshift</code></td><td>✓</td><td></td><td>✓</td></tr>
    <tr><td>带有继承元素的稀疏数组</td><td>✓</td><td></td><td>✓</td></tr>
    <tr><td>使用正则表达式的字符串方法 <code>fromCharCode</code>, <code>match</code>, <code>replace</code>, <code>search</code>, <code>substr</code>, <code>split</code></td><td>✓</td><td>✓</td><td>✓</td></tr>
    <tr><td>字符串方法 <code>charCodeAt</code></td><td>✓</td><td></td><td>✓</td></tr>
    <tr><td>正则表达式方法 <code>compile</code>, <code>exec</code>, <code>test</code></td><td>✓</td><td>✓</td><td>✓</td></tr>
    <tr><td>正则表达式属性 <code>$1</code>...<code>$9</code>, <code>input</code></td><td>✓</td><td>✓</td><td></td></tr>
    <tr><td>正则表达式全局属性 <code>lastMatch</code>, <code>lastParen</code>, <code>leftContext</code>, <code>rightContext</code></td><td>✓</td><td></td><td></td></tr>
    <tr><td>带有本地声明属性的 <code>arguments</code> 对象</td><td>✓</td><td>✓</td><td></td></tr>
    <tr><td><code>arguments.callee</code></td><td>✓</td><td></td><td>✓</td></tr>
    <tr><td><code>arguments.caller</code></td><td>✓</td><td>✓</td><td></td></tr>
    <tr><td><code>watch</code>/<code>unwatch</code> 函数</td><td>✓</td><td></td><td></td></tr>
    <tr><td><code>import</code>/<code>export</code> 语句与脚本签名</td><td>✓</td><td></td><td></td></tr>
    <tr><td>条件编译</td><td></td><td>✓</td><td></td></tr>
    <tr><td><code>debugger</code> 关键字</td><td></td><td>✓</td><td></td></tr>
  </tbody>
</table>

图 17. 主流浏览器在 1997 年对 ECMA-262 第一版的扩展。它们中的多数最终包含在了 ECMA-262 第三版中。

TC39 的正式会议已经改由代表成员公司的小组与项目经理参加，转为了管理和战略会议。而整个委员会的大部分技术工作，都发生在非正式技术工作组中。在 7 月的会议上，TC39 商定了开发第二版的一系列步骤。委员会还达成了共识，认为技术工作组有责任定义工作项目、特性提案和验收标准。第二版分配到的时间要比第一版更多，以使草案进一步成熟并获得外部反馈。第二版规范初稿的目标日期是 1997 年 12 月。在 9 月的会议上 [[TC39 1997h](./references.md#TC39:1997:039)]，人们还同意第二版规范必须向后兼容那些符合第一版规范的程序。

在做出这些决定时，ISO 快速通道流程尚未开始。这时还没有人知道，由此产生的更改将需要发布新版 ECMA-262 标准，才能与 ISO 版本保持一致。在 1998 年初，一度有两个成员互相重叠的工作组，分别负责两份单独的规范草案。显然，这里的「第二版」（提交给 ISO 的 Edition 2）和「第二版」（包含新特性的 Version 2）已经不大可能合并。但是尽管 TC39 代表们已经知道这个版本可能会发布为「第三版」，他们还是继续将下一轮功能性工作叫做「第二版」或「V2」。像这样 TC39 的内部版本命名与最终的发布术语相冲突的情况，后面还会发生。

到 1997 年底，技术工作组的参与者发生了重大变化。图 18 列出了 1998 年间在工作组会议记录中出现的个人。在开发第一版的工作组常规参与者中，只有 Clayton Lewis 仍然保持活跃。Brendan Eich 在 1998 年 2 月参加了一次会议，而后成为了 Mozilla 项目 [[Mozilla Organization 1998](./references.md#mozfounders)] 的联合创始人，致力于开源 Netscape 浏览器的代码，由 Waldemar Horwat 接任 TC39 的 Netscape 语言设计负责人。无独有偶，微软的 Katzenberger 也在休假后转入其他项目，Herman Venter 和 Rok Yu 接替了他代表微软在 TC39 的职责。

<table>
  <tr><td>Norris Boyd</td><td>Netscape</td><td>Drew Lytle</td><td>Microsoft</td></tr>
  <tr><td>Andrew Clinick</td><td>Microsoft</td><td>Karl Matzke</td><td>SunSoft</td></tr>
  <tr><td>Mike Cowlishaw</td><td>IBM</td><td>Mick McCabe</td><td>Netscape</td></tr>
  <tr><td>Jeff Dyer</td><td>Nombas</td><td>Dave Ragget</td><td>HP/W3C</td></tr>
  <tr><td>Bill Gibbons</td><td>Netscape</td><td>Herman Venter</td><td>Microsoft</td></tr>
  <tr><td>Waldemar Horwat</td><td>Netscape</td><td>Rok Yu</td><td>Microsoft</td></tr>
  <tr><td>Mike Ksar</td><td>HP</td><td>Chris Weight</td><td>Microsoft</td></tr>
  <tr><td>Clayton Lewis</td><td>Netscape</td><td></td><td></td></tr>
</table>

图 18. 1998 年 TC39 技术工作组的经常性参与者。

在 1997 年 10 月，技术工作组为能包含在第二版中的特性列出了清单（Appendix H）。在这里获得认可而列出的特性中，除了一些例外，主要都是 Netscape JavaScript 1.2 和微软 JScript 3.0 特性的结合。还有 `toSource` 也包括在内，对应于 Brendan Eich 为 JavaScript 1.3 开发的对象序列化与持久性方案<sup>[37](./notes.md#37)</sup>。其他已在设想中但缺乏共识的特性则另外列出。与第一版一样，工作组的大部分注意力都集中在精确指定已实现的特性，并解决实现之间存在的差异。但是，商定的特性列表里还包括异常处理机制、`instanceof` 运算符，以及尚未实现的所有其他特性。开发这些特性将需要某种设计工作，这在第一版中是不必的。图 19 列出了一些 1998 年前的浏览器所没有的特性，这些特性最终都包含在了 ES3 中。

```
* try-catch-finally 和异常对象
* instancesof 和 in 运算符
* 对象原型方法: hasInstance, hasOwnProperty, isPrototypeOf, propertyIsEnumerable
* undefined 的全局绑定
* toFixed, toExponential, toPrecision
* URI 处理器函数
* 标识符中的 Unicode 字符
* 基础的 I18N 方法: Object toLocaleString; Array toLocaleString; Number toLocaleString; String localeCompare, toLocaleLowerCase, toLocaleUpperCase; Date toLocaleDateString, toLocaleTimeString
```

图 19. 1998 年前的浏览器所缺乏的 ES3 新特性。它们中的一些在 TC39 开发 ES3 时就集成到了浏览器里。

技术工作组按每月面对面开会的节奏设定了规划。Mike Cowlishaw [[1999b](./references.md#tc39:1999:003); Appendix I] 维护了一份文档，以跟踪规范各部分的当前状态。状态指示器如下：「自 V1 起未更改」、「尚未准备就绪」、「需要讨论」，「特性已接受」和「内容已达成共识」。状态「特性已接受」表示委员会对规范中定义的功能性表示同意，状态「内容已同意」则表示实际的规范文本已经过审核而被接受。

Bill Gibbons 是新规范工作草案的编辑。每次会议都有一个介绍和讨论各种提案和未解决问题的议程。提案被提出的形式，则通常是提交新的或修订后的算法规范文本。会议还进行了一般状态审核，由与会人员讨论自上次会议以来确定的问题。当就提案或问题解决方案达成协议时，Gibbons 会将其纳入工作草案。V2 版本的第一份完整草案 [[Cowlishaw et al. 1998](./references.md#Gibbons:es2-9804)] 发布于 1998 年 4 月，基于 ECMA-262 第一版，其中没有包含任何为 ECMA-262 第二版（ISO 版本）同时开发的更改。工作草案的标题页指出，这里包含的是 Netscape 和微软提交的拟议更改。在 9 月 ISO 版本完成后，Gibbons 将 ES2 更改合并到了当前的 V2 工作草案中。

当时 Unicode 仍然是一种新技术，语言设计人员还在探索将其集成到编程语言中的最佳实践。有个需要特别关注的问题，即如何处理 Unicode 的各种正规化（normalization）形式，这些形式允许对行为等效的字符序列进行替代编码。ES1 对 Unicode 的支持很少。惠普的 Tom McFarland 参加 1998 年 5 月的会议后提交了一份备忘录 [[McFarland 1998](./references.md#HP-I18N:a)]，指出了他认为与*国际化*<sup>[g](./appendices.md#internationalization)</sup>（I18N）有关的许多问题，以及如何将 Unicode 更好地集成到 ECMAScript 中。经过几次会议的讨论，TC39 在 1998 年 11 月建立了一个由 IBM 的 Richard Gillam [[1998](./references.md#Gillam:i18n9811)] 主持的「I18N 工作组」。I18N 小组很快决定将重点放在针对核心语言的少量基本 I18N 特性上 [[Gillam et al. 1999b](./references.md#Gillam:i18n9904)]，并将关于国际化和本地化更复杂的内容推迟，将它们纳入单独定义的可选库中 [[Gillam et al. 1999a](./references.md#Gillam:i18n9901), [b](./references.md#Gillam:i18n9904)]。但直到 2012 年，这些类库的规范 [[Lindenberg 2012](./references.md#ecma402-1)] 才得以完成。除了为核心语言添加了少量区域特定（locale-specific）特性外，I18N 小组还解决了如何将非拉丁字符合并到标识符中的问题。它推荐 ECMAScript 规范对于提供给实现的源代码，可以假定其均采用 Unicode 的正规形式 C（Normal Form C）来编写。这在很大程度上避免了正规化问题。它还选择不对核心语言中的 Unicode 正规化提供任何支持，并把对正规化的编程支持推迟纳入可选库中。

V2 的主要任务，是为语言设计异常处理机制。1998 年 2 月 [[TC39 1998c](./references.md#ES3:feb08)]，微软的 Herman Venter 和 Netscape 的 Waldemar Horwat 均提出了设计草案。两种设计都多少参考了 Java 的 try-catch-finally 语句语法，但它们和 Java 在语法和语义上都存在着显著的差异。

在微软的设计 [[Venter 1998b](./references.md#Venter:980305-labelled)] 中，任何值都可以作为异常抛出，并且 `try` 语句具有单个 `catch` 子句，它声明了一个初始化为「被捕获的异常值」的局部变量。从 `try` 块传播的所有异常都会被无条件捕获，没有 `finally`。

Netscape 的设计 [[Horwat 1998](./references.md#980930-horwat:12)] 还允许将任何值作为异常抛出。但在这种设计中，`try` 语句可能具有多个 `catch` 子句<sup>[38](./notes.md#38)</sup>，其中带有将 `instanceof` 用作鉴别符（discriminator）的语法，以确定要执行哪个 `catch` 的子句。如果没有 `catch` 子句与异常匹配，那么在执行 `finally` 子句后，还会继续在调用栈中传播异常。`instanceof` 鉴别符最终被 `if` 鉴别符<sup>[39](./notes.md#39)</sup>所取代，它会将表达式求值为布尔值，以确定是否选中了想要的 `catch`。

在 1998 年 2 月的会议上 [[TC39 1998d](./references.md#ES3:march08)]，委员会同意使用 `try` 和 `catch` 关键字，并且 `throw` 语句可以传播任何值（不仅是特定内置异常类的实例）来表示异常。在 1998 年 3 月的工作组会议上，Waldemar Horwat 主张加入 `finally` 子句，并同意进一步研究相应实现的细节。4 月的工作草案 [[Cowlishaw et al. 1998](./references.md#Gibbons:es2-9804)] 合并了 Netscape 的设计，但当时尚未解决的问题包括：对 `finally` 的支持、`catch` 变量绑定的作用域、是否允许多个 `catch` 子句、是否应该将 `instanceof` 用作 `catch` 的选择器，以及是否应自动重新抛出未被选中的异常。图 20 提供了一些示例，展示了微软的提案、Netscape 修改后的提案，以及最终在 ES3 中确定的语法。注意 Netscape 的设计使用了单独的选择器表达式来选择 `catch` 子句。但在微软和最终的 ES3 设计中，则需要使用单个 `catch` 块中的用户逻辑来区分不同的异常。

``` js
// 微软的设计
try {
  doSomething();
} catch (var e) {
  if (e == "thing")
    console.log("a thing")
  else if (e == 42)
    console.log("42")
  else {
    console.log(e);
    cleanup();
    throw e; // 重新 throw
  }
// 没有 finally 语法
}
cleanup();


// Netscape 的设计
try {
  doSomething();
} catch (e if e == "thing") {
  console.log("a thing")
} catch (e2 if e2 == 42) {
  console.log("42")
} catch (e3) {
  console.log(e3);
  throw e3; // 重新 throw
} finally {
  cleanup();
}


// 第 3 版规范的最终设计
try {
  doSomething();
} catch (e) {
  if (e == "thing")
    console.log("a thing")
  else if (e == 42)
    console.log("42")
  else {
    console.log(e);
    throw e; // 重新 throw
  }
} finally {
  cleanup();
}
```

图 20. 异常处理的几种设计。在这些示例中，`doSomething` 函数可能抛出两种异常，它们在当前函数继续执行前都需要单独处理。所有其他异常都被「重新抛出」以传播给当前函数的 `caller`。当前函数还具备 `cleanup` 流程，不管 `doSomething` 是否抛出异常都会执行。

直到 1999 年 9 月对标准草案进行最终技术审查 [[TC39 1999b](./references.md#ES3:sept09)] 前，语言是否应支持多个 `catch` 子句的问题一直没有得到解决。这个特性最终推迟留待未来考虑。同样在最后的审查中，委员会才就标准将定义的内置异常类达成了共识。

在将 Java 和其他*静态类型*<sup>[g](./appendices.md#statically-typed)</sup>基于类的语言中的特性，适配到使用动态类型和原型继承的 JavaScript 时，委员会遇到了一些困难。像 `catch` 子句的守卫表达式（guard expression）就是这其中的一个例子。在 Java 中，要由哪个 `catch` 子句处理抛出的异常，是通过无副作用的「子类型包含测试」来确定的。这种测试完全依赖静态声明的类层次结构，可以在实际恢复调用栈现场（call stack unwinding）之前执行。但是 JavaScript 则既没有正式的类概念，也没有静态的类层次结构。由于委员会已经决定支持抛出任何类型的值作为异常，故而要想在 JavaScript 的 `catch` 子句中区分出任意的值，就需要求值任意的守卫表达式，这其中可能包含赋值和函数调用。但是，对表达式的求值需要建立适当的词法和动态环境，并且每次对守卫表达式的求值都可能产生副作用，这些副作用可能会改变后续守卫表达式的求值结果。在一份中立提案中，Waldemar Horwat [[1998](./references.md#980930-horwat:12)] 提出了一种复杂的叙述性规范，它允许实现者决定「何时」以及「以何种顺序」来对 `catch` 到的守卫表达式求值，甚至还允许多次对单个守卫表达式求值。Horwat 希望使调试器在恢复现场前，能够确定是否还有「未被处理的抛出异常」。幸好这个设计未被接受，因为随后的经验表明，这种实现方式上的差异，是网页在兼容多个浏览器时互操作性问题的重要来源。

另一个 TC39 难以将语言的概念和构造从 Java 转换为 JavaScript 的例子，则是 `instanceof` 运算符。在 Java 中，`instanceof` 是一个二元运算符，用于测试其左操作数的对象是否为右操作数的「类实例」或「子类实例」。Herman Venter [[1998a](./references.md#Venter:980305-instance.pdf)] 最初提出的 `instanceof` 提案限制了右操作数仅限标识符，这样就完全模仿了 Java 的语法。但是 JavaScript 本质上没有类的概念，并且还有多种创建新对象的方法。Venter 的提案假定使用构造函数模式作为测试 `instanceof` 的基础。这样一来，右操作数就可以动态地求值到构造函数对象，而这是个一等的函数值。由于这样的右操作数是一等的值而非类型引用，因此提案不久就泛化支持了在该位置上出现表达式。`instanceof` 的运行时语义被定义为：遍历左操作数的原型继承链，搜索值为右操作数 `prototype` 属性当前值的对象。对于许多简单的构造函数，这将会匹配到那些将 `new` 运算符应用到它们上面而创建的对象。

具备 Java 背景的新 JavaScript 程序员会认为 `instanceof` 是区分各种对象的可靠方法，但许多经验丰富的 JavaScript 程序员会都避免使用它。这是因为构造函数返回的对象未必能通过动态的 `instanceof` 测试，并且由于对象元结构的可变性，对 `instanceof` 的重复应用可能不是幂等的。如果要测试的对象来自与构造函数不同的 HTML 页框，测试也可能失败。最后，即使结果为真，被测试的对象仍然可能没有由构造函数创建的数据和行为属性。

ES3 包含了内部函数声明和函数表达式，它们与 JavaScript 1.2 中最初引入的概念相似。函数声明被明确排除在 `{}` 语句块之外，也不能作为子语句使用。Waldemar Horwat [[2008b](./references.md#Horwat:FiB)] 后来解释了原因：

> 1. 将这类声明提升到最高层级（像 `var` 那样）的做法是无效的。因为在这样的函数能捕获的作用域里，可以包含尚不存在的变量。ES3 没有局部作用域，但确实有会导致相同问题的异常作用域。当我们考虑将语言扩展为支持常量和动态（即运行时）类型注释后的场景时，情况还会变得更糟——这样的函数可以捕获尚未创建的常量，甚至还可以捕获尚未计算出类型的变量！
> 
> 2. 可以选择等到遇到此类声明时再绑定它们，这样也确实可行。但我们不想仅出于对函数的支持，就在 ES3 中实现这样的本地绑定。
> 
> 3. 在这类声明位于 `if` 语句的子语句位置时，规划中的设想是仅在 `if` 表达式为真（对 `else` 子句为假）时创建这些声明，并将其放入最接近的封闭块级作用域内。这就构成了某种形式的条件编译。而一个语句块如果前面有标记（attribute），那它就是一个非作用域块，这个块会把标记分配给它所包含的定义。于是这样就可能把多个定义附加到一条 `if` 语句了。

主要的浏览器都忽略了这些意见，选择继续在块内实现函数声明。然而，每种实现都为这些声明发明了自己的独特语义。十五年后，这为 ES6 [[TC39 2013b](./references.md#TC39:2013:009), Function In Block Options; §21.3.2] 的设计者带来了重大的问题。

到 1999 年春季，第三版规范明显还无法在 6 月的 GA 大会上获得批准，但等到 12 月可能还有机会。在 3 月，工作组进行了分类 [[Clinick 1999](./references.md#TC39wg:tcn9903)]，以识别出那些为达成 12 月目标而需要砍掉或推迟的特性。被永久性移除的特性包括：`__proto__` 属性、`#` 变量、用于堆栈实化（stack reification）的调用对象（call object），以及显式的闭包对象。推迟到可能在未来版本中加入的特性则包括：原子操作、异常 `catch` 的守卫、条件编译、日期标量、十进制小数运算、泛型序列运算符、可选的 I18N 库、外部函数接口（FFI）、基于 `toSource` 的对象持久化、对数值单位的语法和运算支持，以及可扩展的字面量语法。

工作组在 1999 年 5 月至 1999 年 9 月间举行了四次会议，以解决有关第三版规范最终草案的问题。在此期间必须解决的重大设计问题包括：正则表达式匹配语义算法规范的创建、一组内置异常类型的确定、函数表达式绑定语义的确定，以及将 Unicode 支持合并到语言中时的细节。

1999 年 8 月 8 日，Mike Cowlishaw [[1999c](./references.md#tc39:990803-e3status)] 发布了最终的「E3 草案状态」，展示了所有状态为「内容已同意」或「自 V1 以来未更改」的章节。8 月 25 日，Bill Gibbons [[1999](./references.md#Gibbons:990825-e3-final)] 发布了「第三版 3 最终草案」，并离开委员会开始了新工作。Herman Venter 和 Waldemar Horwat 负责将所有剩余的更改纳入草案。

在最后的 ES3 开发会议 [[TC39 1999b](./references.md#ES3:sept09)] 中，Horwat 准备了很长的笔记清单，以标识对次要编辑和技术问题的更正，这其中只有少数变化会影响 JavaScript 程序员的日常。内置异常 `ConversionError` 和 `RegExpError` 被移除，由 `TypeError` 和 `SyntaxError` 取代。

对于 *FunctionExpression*<sup>[40](./notes.md#40)</sup>（函数表达式）中允许在函数名称位置出现的可选标识符，8 月的草案没有为其指定任何含义。例如：

``` js
function fact(n) { throw "wrong fact" }; // 函数声明
var lambdaFact = function fact(n) { // 这个函数表达式，是否应该绑定到 fact 上？
  return n <= 1 ? 1 : fact(n - 1);
};
lambdaFact(5); // 应该递归还是抛出异常？
```

在这份草案中，调用 `lambdaFact` 会抛出异常。这是因为这里 *FunctionExpression* 起始位置的 `fact` 名称，并没有为 `fact` 创建词法绑定。在 9 月的会议上达成了对规范的修订意见，会为这个名称创建一个到相应函数的本地名称绑定，这个绑定只在 *FunctionExpression* 的语句体内可见。

在最后时刻还有个最令人惊讶的新增特性，即 Waldemar Horwat 在会议上提出的「函数合并」（joined functions）。只要实现支持该特性，就可以在如下情况时重复返回相同的函数闭包对象：

``` js
function getClosure() { return function () {/* 没有对自由变量的引用 */ } }
var firstTime = getClosure();
var secondTime = getClosure();

// 下面的比较是 true 还是 false 由实现决定
console.log(firstTime === secondTime); // 是否是相同对象？
```

Waldemar Horwat 担心闭包创建的开销，并认为这个改动将可以让实现在某些常见情况下复用闭包。Herman Venter 表示了一些担忧，但在会议结束时同意支持这个改动。这本可能造成一个重大的设计错误，因为随后 Web 浏览器上的经验表明，这种特性所允许的某种在实现间可见的差异，可能会妨碍网站在不同浏览器上的正常工作。幸运的是，并没有浏览器实现函数合并特性，它在 2009 年也从 ES5 规范中删除。

由于在字符串字面量中，对八进制常量（以 `0` 开头的数字写法）和八进制转义序列的使用不被提倡，它们从 *规范的*<sup>[g](./appendices.md#normative)</sup>标准中移到了非规范性的附录 B<sup>[41](./notes.md#41)</sup>（Annex B）中。一并移至附录 B 的内容包括：与 Y2K 不兼容的 Date 方法、`escape` 和 `unescape` 字符串函数，以及字符串方法 `substr`。这些特性都已被认定为过时，但仍被网站使用。此举背后的设想，在于特性一旦在标准的非规范性附录 B 中列出，即表明它们已被废弃而不应继续使用，各实现均有权最终删除它们。这是个幼稚的期望。TC39 成员尚未意识到，浏览器实现者们非常不愿意删除网页上实际可能用到的任何特性（不论是否标准化）——某些网页永远不会消失。

在审查并解决了所有未解决的问题后，TC39 一致接受规范，认为它已经完备，遵从并纳入了会议中所提出的更改要求。Waldemar Horwat 和 Herman Venter 准备了最终文档 [[TC39 1999e](./references.md#TC39:1999:015)]，并于 1999 年 10 月 13 日将其交给了 Ecma 秘书处。最终草案中有一张表，其中列出了 ECMA-262 前三个版本的所有贡献者（图 21），包括内容创作、技术会议参与，以及通过电子邮件的贡献。

<table>
  <tr><td>Mike Ang</td><td>Gary Fisher</td><td>Clayton Lewis</td><td>Sam Ruby</td></tr>
  <tr><td>Christine Begle</td><td>Richard Gabriel</td><td>Drew Lytle</td><td>Dario Russi</td></tr>
  <tr><td>Norris Boyd</td><td>Michael Gardner</td><td>Bob Mathis</td><td>David Singer</td></tr>
  <tr><td>Carl Cargill</td><td>Bill Gibbons</td><td>Karl Matzke</td><td>Randy Solton</td></tr>
  <tr><td>Andrew Clinick</td><td>Richard Gillam</td><td>Mike McCabe</td><td>Guy Steele</td></tr>
  <tr><td>Donna Converse</td><td>Waldemar Horwat</td><td>Tom McFarland</td><td>Michael Turyn</td></tr>
  <tr><td>Mike Cowlishaw</td><td>Shon Katzenberg</td><td>Anh Nguyen</td><td>Herman Venter</td></tr>
  <tr><td>Chris Dollin</td><td>Cedric Krumbein</td><td>Brent Noorda</td><td>George Wilingmyre</td></tr>
  <tr><td>Jeff Dyer</td><td>Mike Ksar</td><td>Andy Palay</td><td>Scott Wiltamuth</td></tr>
  <tr><td>Brendan Eich</td><td>Roger Lawrence</td><td>Dave Raggett</td><td>Rok Yu</td></tr>
  <tr><td>Chris Espinosa</td><td>Steve Leach</td><td>Gary Robinson</td><td></td></tr>
</table>

图 21. ECMA-262 第 1、2、3 版的技术贡献者。

在 11 月，最终草案中有一些较小的编辑和技术错误被确定并更正 [[TC39 1999a](./references.md#ES3:nov09)]。其中最值得注意之处，在于微软发现当为了符合最终草案，用正则表达式来改动 JScript 的 `String.replace` 实现时，许多网站（包括 `microsoft.com` 在内）会出现问题。TC39 同意更改规范，从而与微软之前的实现相匹配。

1999 年 12 月 16 日，Ecma GA 大会 [[Ecma International 1999](./references.md#GA:1999:137)] 批准了该规范，是为《ECMA-262 第 3 版》[[Cowlishaw 1999a](./references.md#ES3)]。自 2000 年 3 月起，Waldemar Horwat [[2003b](./references.md#es3:errata)] 维护了一份非正式的 ES3 勘误表。主流浏览器陆续在 2000 年发布了与 ES3 兼容的版本。微软的 JScript 5.5 作为 IE 5.5 的一部分于 2000 年 7 月发布，而 Netscape 的 JavaScript 1.5 则作为 Netscape 6 的一部分于 2000 年 11 月发布。直到 2009 年 12 月为止，《ECMA-262 第 3 版》都没有被更新的版本替代。在此期间，浏览器并不能自动更新，并且许多用户只有在拥有新计算机或新版操作系统时，才会更新浏览器。等到 Web 开发者可以假设所有用户都使用支持 ES3 的浏览器时，已经过去了将近十年。

# 插曲：JavaScript 不需要 Java
最初，JavaScript 被认为是 Java 的辅助脚本语言，所有复杂的编程任务都将使用 Java 来完成。但是随着对 JavaScript 的熟悉，Web 开发者们开始意识到他们其实只要有 JavaScript 就够了。

## 布道师
随着浏览器中 JavaScript 的使用量增加，JavaScript 教育者和布道师应运而生。这其中最具影响力的人物之一，就是 Douglas Crockford。从一篇简短的线上文章《JavaScript：世界上最容易被误解的编程语言》[[Crockford 2001a](./references.md#crock:misunderstood)] 开始，他就承担起了改变软件开发社区对 JavaScript 态度的任务。Crockford 在他的另一篇文章中解释说：

> 当 JavaScript 刚出现时，我认为它不值得关注。很久之后我重新审视了它，发现隐藏在浏览器中的是一门出色的编程语言。我最早的态度来源于 Sun 和 Netscape 对 JavaScript 的最初定位。为了避免将 JavaScript 定位为 Java 的竞争对手，他们对 JavaScript 做了许多错误的陈述。这些虚假宣传一直在针对（友善度）和业余爱好者市场的大量不良 JavaScript 书籍中流传。

Douglas Crockford [[2001d](./references.md#crock:private); [2002a](./references.md#crock:classical); [2003](./references.md#crock:little); [2006](./references.md#crock:prototypal)] 揭示了 JavaScript 类似于 Scheme 的闭包和类似于 Self 的对象机制，并说明了该如何使用它们。但他并没有掩盖 JavaScript 的缺陷和怪癖。除了识别出这些特性之外，Crockford [[2001e](./references.md#crock:survey); [2002d](./references.md#crock2002)] 还创建并推广了 JSLINT [[Crockford 2001b](./references.md#crock:jslint)]，这是第一个广泛使用的 JavaScript linter<sup>[42](./notes.md#42)</sup> 程序。另外，Crockford [[2001c](./references.md#crock:jsmin01); [2019b](./references.md#crock:minify)] 还为 JavaScript 开发者引入了压缩<sup>[43](./notes.md#43)</sup>（minimization）的概念，并创建了 JSMIN 工具。他写了一本畅销书 [[Crockford 2008b](./references.md#crock:goodparts)]，告诉程序员该如何使用 JavaScript 的优点并规避缺点。最后，他成为了 JavaScript 标准化工作的参与者。

Crockford 倡导简单性，他意识到可以通过使用 JavaScript 对象和数组字面量语法子集的形式，实现独立于语言的数据交换格式，从而避免 XML 的复杂性。他将这种被广泛使用的格式命名为「JavaScript Object Notation」或「JSON」[[Crockford 2002b](./references.md#crock:json0), [c](./references.md#crock:jsonjs); [Crockford 2019a](./references.md#crock:jsontoday)]。这种简单的格式可以很容易地在任何语言中解析，但在 JavaScript 中尤其容易处理，因为有 `eval` 函数可以将 JSON 数据转换为 JavaScript 对象<sup>[44](./notes.md#44)</sup>。

## 富互联网应用与 AJAX
早期的交互式 Web 应用主要是基于表单的。用户会将数据输入 HTML 表单，然后由浏览器传输回 Web 服务器，在服务端处理数据并更新数据库，最后将更新的 HTML 文稿传输回浏览器显示。JavaScript 在浏览器端用于基本的输入数据验证，以及对服务端生成的 HTML 做简单的动态更改。这种 Web 应用的形式后来被表述为 Web 1.0<sup>[45](./notes.md#45)</sup>。

一些应用程序具有高度的交互性，需要丰富的低延迟用户界面。于是不可避免地，有些开发者想要开发具备这些特性的 Web 应用。当 Netscape 在 1995 年将 Java 和 JavaScript 引入 Web 浏览器时，其计划是 Java 将成为实现复杂交互式 Web 应用的主要语言，而 JavaScript 将主要用于基于表单的应用中 [[Shah 1996](./references.md#brendan96)]。在 1990 年代末和 2000 年代初，许多「富互联网应用」[[Allaire 2002](./references.md#allaire:2002)] 被构建为 Java Applets。

在 1997 年，微软发布了其企业电子邮件客户端的 Web 版本，这就是被实现为 Web 1.0 风格的 Outlook Web Access（OWA）[[Bilic 2007](./references.md#Bilic07), [Van Eaton 2005](./references.md#VanEaton05)] 应用。而后，OWA 1.0 被交互更丰富的版本所接替。这个新版本使用了动态 HTML（Dynamic HTML<sup>[46](./notes.md#46)</sup>）和一个名为 XMLHTTP [[Hopmann 2006](./references.md#xmlhttp)] 的新浏览器 API。XMLHTTP 使得网页上的 JavaScript 代码能与服务端来回异步传输数据，而无需完全重新加载网页。DHTML 和 XMLHTTP 的组合，使得 Web 页面在每个会话中只需加载一次，然后即可作为支持远程访问数据和服务的交互式应用而运行。

在 2000 年代上半叶，许多组织都使用过类似的技术来构建 Web 应用。但直到 Google 用它来实现 GMail、Google Maps 和其他应用后，这种 Web 应用风格才广为人知。Jesse James Garrett [[2005](./references.md#ajax)] 创造了「AJAX」一词来形容它。AJAX 和使用它构建的社交媒体应用，成为了 *Web 2.0*<sup>[g](./appendices.md#Web-20)</sup> 时代的标志。

Web 2.0 和 AJAX 的出现，是 JavaScript 在 Web 开发中用途的主要转折点。JavaScript 的角色逐渐由一门用来将动态元素添加到静态页面的语言，变为了一门用来对复杂的富互联网应用（RIA）进行编码的语言。

同时，浏览器的生态系统正变得越来越复杂，总有各式各样市场份额很低的新浏览器出现。Netscape（在被 AOL 收购后）和微软（在获得市场主导地位后）逐渐放弃了对浏览器的活跃开发，这为新浏览器的出现创造了机会。*Firefox*<sup>[g](./appendices.md#Firefox)</sup><sup>[47](./notes.md#47)</sup> [[Mozilla 2004](./references.md#moz:ff1)]、*Opera*<sup>[g](./appendices.md#Opera)</sup> [[Opera 2013](./references.md#opera:history)]、苹果 *Safari*<sup>[g](./appendices.md#Safari)</sup> [[Melton 2003](./references.md#safari:history)]，以及最后的谷歌 *Chrome*<sup>[g](./appendices.md#Chrome)</sup> [[Kennedy 2008](./references.md#chrome:history)] 逐渐占据了有意义的市场份额。

新的浏览器都实现了对 JavaScript ES3 规范的支持，也支持被 W3C 部分指定的浏览器平台 API。但由于平台规范并不够完整和精确，大多数新浏览器都以各种方式扩展或修改了平台的 API。并且尽管这些新浏览器不断涌现，许多用户仍在使用过时的 Internet Explorer 和 Netscape 版本。这些版本有很多 bug，并缺乏对最新语言特性和平台 API 的支持。

在一个重要的维度上，Web 浏览器与大多数其他应用平台有所不同，那就是应用程序以源码形式分发，以便在用户提供的环境中立即执行。这与传统的方案是不同的。在传统方案中，开发者可以选择特定版本的编译器和运行时库，然后在以二进制形式将其部署给用户前，构建和测试其应用。Douglas Crockford<sup>[48](./notes.md#48)</sup> 在一些演讲中，将 Web 开发的这一特色描述为：由用户（通常不知情地）选择语言的处理器。Web 开发者需要确保其 Web 页面和 Web 应用能在最终用户选择的任何浏览器上正常工作。

解决浏览器差异的一种方法，是为每个不兼容的浏览器创建单独的应用版本。然后 Web 服务器就可以在收到网页请求时，根据浏览器提供的标识信息，将不同版本发送到不同的浏览器。但是大多数应用的源码通常都由其所有版本共享，只有很小的变化会用来解决浏览器的差异。这就产生了维护应用程序多个（基本相同的）版本时的开发和运营挑战。

一种避免应用源码出现多个不同版本的方法，是维护单个源文件。当应用在浏览器中运行时，它会动态选择出特定于浏览器的变体版本。这里对变体的选择方式，主要是基于惯用的代码序列，包括执行浏览器嗅探（识别出特定的浏览器版本）或功能测试（识别出某种特性或 bug 是否存在）。

在 AJAX 应用复杂性与浏览器兼容问题的背景下，用于简化 Web 应用构建的框架和库应运而生。早期的框架包括 Prototype [[Stephenson et al. 2007](./references.md#prototype)]、MooTools [[Proietti 2006](./references.md#mootools)] 和 Dojo [[Russell et al. 2005](./references.md#dojo)]，而其中最受欢迎 [[W<sup>3</sup>Techs 2010](./references.md#frameworkadoption)] 的是 jQuery [[Resig 2006](./references.md#jquery)]。这些早期的框架与库通常为 AJAX 应用提供了基础结构支撑，并为简化编码实现常见任务提供了高层面的抽象。它们还通过内部处理和隐藏许多浏览器特性变体的方式，解决了许多兼容问题。

这样一种特殊的库，已经重要到了要创造新词汇来表示它的程度。Remy Sharp [[2010](./references.md#polyfill)] 提出了「polyfill<sup>[g](./appendices.md#polyfill)</sup>」一词，它所描述的库提供了「应由浏览器提供但仍然缺失」的 API 支持。设计良好的 polyfill 会动态检查它所提供的特性是否在环境中已经可用。只有在缺少内置支持或不兼容的情况下，polyfill 才会自行将其置入环境。早期的 polyfill 库专注于使浏览器更具互操作性，其手段主要是隐藏早期浏览器竞争中留下的遗留特性变体，或在旧浏览器中支持新的浏览器特性。如果一个特性在某种流行的浏览器中存在，但在其他流行的浏览器中却不存在，那么 polyfill 可以使 Web 应用使用相同的代码在所有浏览器上运行。随着浏览器兼容性的改善，polyfill 则成为了一种常见手法，用来尽早用上浏览器和 JavaScript 的新特性。在 Web 新特性的设计过程中，polyfill 库的创建变得十分普遍。除了对开发者有用外，通过 polyfill 还能收集到宝贵的开发者反馈，从而支持新特性和 API 的设计。

当 JavaScript 应用是朴素地将独立创建的几个部分组合而成时，命名冲突十分常见。许多框架和库提供了某种模块化机制，这通常是通过使用命名空间对象（namespace objects）和立即执行的函数表达式（IIFE<sup>[49](./notes.md#49)</sup>）来实现的。命名空间对象只是个单例对象，其主要用途是提供对函数或变量的限定（qualified）名称访问。JavaScript 1.0 的内置 Math 对象就是命名空间对象。命名空间对象的限制之一在于，它之中的所有名称都是公共的。要克服这个限制，可以将命名空间对象与 IIFE 相结合，如图 22 所示。

``` js
// 使用模块模式定义 services
var Services = function () {
  var privateJobCount = 0; // 「模块」的私有状态
  return { // 命名空间对象
    jobCount: function () { return privateJobCount },
    job1: function () { privateJobCount++ }
  }
}(); // Services 被初始化为调用该函数时的返回值

// 从命名空间里获取实体
Services.job1();
```

图 22. JavaScript 模块模式的示例。这里的 `Services` 函数封装了私有的实现。`Services` 会在被调用并返回命名空间对象时初始化，命名空间对象的属性暴露了「模块」的公共接口。

模块模式有几个变体，但基本概念都是用 IIFE（或有时用命名函数）的词法作用域，来封装一系列函数的某些私有状态。IIFE 会返回一个命名空间对象，其属性就是封装后需要支持被公开访问的函数。

通常认为 Douglas Crockford 普及了模块模式，但它很可能是由许多 JavaScript 程序员独立发现的。

## 浏览器博弈论
在*浏览器大战*<sup>[g](./appendices.md#browser-wars)</sup> [[Borland 2003](./references.md#browserwars)] 期间，Netscape 和微软都尝试在引入新网站能力上实现超越式的创新。他们都试图说服开发者使用其独有的特性，并开展了「在『XXX』上效果最佳」的营销活动。但如果网站无法在用户首选的浏览器下正常工作，浏览器用户会很不高兴。而且 Web 开发者也不喜欢为不同浏览器维护网站的多个版本。

即使微软为了赢得 Netscape 的市场份额，在技术和非技术方面都进行了大量投资，人们仍然意识到 JavaScript 的发展除了竞争外还需要合作。1997 年 7 月，在第一版 ECMA-262 的工作即将完成前的 TC39 会议上，微软的 Scott Wiltamuth 提出了关于未来 ECMAScript 开发的合作承诺（图 23）。

```
一种不同的工作方式
微软在 ECMAScript 标准上的承诺

* 我们将把影响 ECMAScript 的新想法拿上组织的台面，而非保持机密。
* 我们将实现组织内达成一致意见后的想法。
* 我们将遵守组织内的架构原则，而非发布无视原则或与其矛盾的替代品。
* 我们将不会在首先提交到 ECMA 前，发布 ECMAScript 的扩展。
* 我们将实现所有 ECMA 批准的 ECMAScript 标准。
* 我们将明确标识出所有我们目前支持但尚未批准的 ECMAScript 特性。
```

图 23. 微软在 1997 年 7 月 TC39 会议上的承诺 [[TC39 1997g](./references.md#TC39:1997:030)]。

Brendan Eich 回忆说在某个时候，他意识到市场的务实性严重限制了浏览器实现者能用来改善其产品的举措。例如：

* 破坏性变更（甚至 bug 修复）可能赶走用户。
* 新浏览器必须遵从于现有的浏览器。
* 如果仅在一个浏览器中进行创新，那将是浪费。
* 第一个吃螃蟹的浏览器，可能反而会丢失市场份额。

Eich 意识到这种情况很可能属于纳什均衡 [[Nash 1950](./references.md#nash1950equilibrium)]，因此创造了「浏览器博弈论」一词，用以描述浏览器实现者所受到的约束。

第一个约束有时会用「不要破坏 Web！」的口号来表述。网页通常以 HTML 和 JavaScript 源码的形式存储在服务器上。每次用户访问页面时，浏览器都会对其进行重新解释。这些页面中有很多并非由其原始创建者维护，但仍在活跃使用中，其中还包括一些具有持续效用或历史重要性的文档。一旦浏览器解释源代码的方式发生*破坏性变更*<sup>[g](./appendices.md#breaking-change)</sup>，就可能导致某个页面变得难以辨认或无法正常工作。如果变化仅在单个浏览器上发生，那么用户可以切换到使用其他浏览器。如果这种变化在浏览器中普遍存在，那么这部分失去维护的 Web 就会永久损坏。这个事实也限制了 Web 标准的开发。一旦浏览器实现者认为某个标准所引入的特性（或授权做出的改动）会使得现存的大量 Web 内容失效，那么这个标准就将被忽略。

如今，浏览器开发者普遍认识到作为 Web 及其开放标准基础的兼容要求，限制了他们通过单方面平台创新进行竞争的能力。浏览器「可以并且确实」会在实现的质量（如性能、安全性、可靠性和可用性）上进行竞争。但要想提高浏览器作为应用平台的基本技术能力，通常需要所有主流浏览器之间的合作。

浏览器博弈论是 JavaScript 演化的重要因素。它还可以提供一个理解 JavaScript 为何成功的视角，并解释 JavaScript 历史上许多创新的成败缘由。
