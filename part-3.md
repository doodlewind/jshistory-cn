# 改革失败

## 不满于成功
千禧年到来之际，以万维网（World Wide Web）为代表的互联网，正对世界产生着巨大的影响 [[Miniwatts Marketing Group 2019](./references.md#internet:growth)]。随着 Netscape、微软和其他浏览器厂商不断增强浏览器的实用性，Web 得以迅速发展。Web 的成功与其持续演化的诉求，催生了 Ecma TC39 和 W3C 等工作组。这些组织中有些参与者是行业专家，他们并未直接参与浏览器开发。这些人的兴趣集中在理想化的未来 Web 上。从这个角度来看，现有的实用主义 Web 技术被当作了对未来的障碍。

1998 年 5 月，W3C 举办了名为「塑造 HTML 的未来」的研讨会。研讨记录中的结论如下：

> 在讨论中，人们一致认为进一步扩展 HTML 4.0 是困难的，将 4.0 转为 XML 应用也会是困难的。要克服这些限制，我们提议的方法是重新开始使用基于 XML 标签集的下一代 HTML。对于更好地适配数据库与工作流应用，以及对于支持小型 / 移动设备上更广泛而多样的特性，研讨会上都表达了相应的需求。模块化的 HTML 将为此提供这所需的灵活性 [[W3C 1998](./references.md#w3c:htmlfuture)]。

研讨会中 IBM 代表 David Singer [[1998](./references.md#singer:futurehtml)] 的演讲则更加直言不讳，他说「我们知道 HTML 的未来应该是这样的：讨厌、粗野而贫乏。」

在 ES3 即将完成时，TC39 也处于类似的处境中。借着 ES3，ECMAScript 规范也算与 Netscape 和微软浏览器中提供的 JavaScript 特性接轨了。并且至少在当时（早期），浏览器厂商并未过多引导干涉语言的未来规划。与 1995 年的 Netscape 不同的是，现在的 TC39 已经不必再规避类似 Java 的特性了。一些 TC39 的参与者意识到了对第二代浏览器脚本语言的需求 [[Raggett 1999b](./references.md#TC39wg:tcn9901); [TC39 1999c](./references.md#ES3:ES4futures); Appendix J]，这样的一门语言可以纠正原始 JavaScript 中的设计错误，并提供满足专业软件开发者需求的特性，而非仅仅满足非专业的脚本编写者。打造新一代 ECMASript 的目标集中在了 ECMA-262 的第四版上。这个版本在 TC39 内部最初被称为「E4」，后来则称为「ES4」。

> TC39 对 ES4 的尝试共进行了两轮，本文中用「初版 ES4」和「新版 ES4」区分它们。

## 对 ES4 的第一轮尝试
自首次 TC39 会议上 Borland [[1996](./references.md#TC39:1996:006)] 提出在语言中添加类（class）定义的提案起，人们一直希望尝试在 JavaScript 中添加新特性，以便应对大型程序的复杂性。Netscape 的 JavaScript 1.2 支持运行加密签名后的脚本，它们可以通过 `import` 和 `export` 声明 [[Netscape 1997a](./references.md#jssec)] 相互集成。微软的 JScript 3 则包含了条件编译特性 [[Clinick 1997](./references.md#TC39:1997:033)]。1998 年 2 月版的《ECMAScript 展望一览表》[[TC39 1998c](./references.md#ES3:feb08)] 将「包（package）概念」列为了 V2 的可选项。这类用于支持大型项目开发的特性较早从 ES3 特性集中移除，但 TC39 仍然在并行地进行着这些工作。

与其相关的首个重要提案来自 Dave Raggett，他是由惠普赞助的 W3C 研究员。当时 Raggett 正在 W3C 开发一项名为「Spice」的提案，以改善 HTML、CSS 和 JavaScript 的集成。这份提案的早期版本 [[Raggett 1998c](./references.md#TC39wg:980303-spice)] 于 1998 年 2 月提交给了 TC39。除了与 HTML 和 CSS 相集成的特性外，Raggett 的初始提案中还包括了一种用于声明原型对象的构想。这种构想与 Borland 的类声明提案相似，增加了用于将事件处理器与原型对象声明式关联的能力。这份提案还包括了用于定义「库」（library）和从库中导入各种定义的设计，如下所示：

``` js
// 1998 年 2 月的 Spice 提案
import document, block, Inline from "http://www.w3.org/Style/std.lib";

prototype Link extends Inline
{
   href = "http://www.w3.org/";
   when onmousedown
   {
      document.load(this.href);
   }
}
```

根据 1998 年 3 月的会议记录 [[TC39 1998d](./references.md#ES3:march08)]，当时会上讨论了 Dave Raggett 最初提交的 Spice。记录中指出对其的「初始反馈是负面的」。于是 Raggett 与来自 HP Labs 的两位语言设计师 Chris Dollin 和 Steve Leach 一起继续发展他的提案。在 9 月，Raggett 提交了一组新的文档 [[Raggett et al. 1998](./references.md#TC39wg:980928-spice-docs)] 来描述扩展后的 Spice 提案。实际上，这个提案是一门不兼容 ECMAScript 的替代性语言，甚至用基于闭合关键字的语句语法替代了花括号分隔的 C 式语法。

在 1998 年 11 月，Spice 的设计者与来自 Netscape 和微软的 TC39 代表之间举行了一次私人会议。而后在当月的 TC39 工作组会议上，Dave Raggett [[1998a](./references.md#TC39wg:tcn9811)] 介绍了经过修订的 Spice 提案。工作组会议上，虽然 TC39 成员对于「替换当时的语句语法」或「立即尝试集成对 CSS 的声明式支持」都缺乏兴趣，但他们有兴趣用 Spice 提案中的某些概念来扩展 ECMAScript，例如类、数值单位<sup>[50](./notes.md#50)</sup>、类型和模块机制等。Raggett 在讨论中指出，一旦类似特性添加到了 ECMAScript 中，惠普就不太可能继续开发 Spice<sup>[51](./notes.md#51)</sup>。

为了制定出一份能在 1999 年 1 月提交给整个 TC39 的的提案，委员会成立了一个新的 TC39 Spice 工作组。委员会认为，必须使用已经保留的 Java 关键字来定义支持新核心概念的新特性，并且类的语义应该与 Java 类似。各种数值单位应该基于类来定义，这需要增加对运算符重载的支持。

Spice 工作组的首次电话会议在 1998 年 12 月的第一周举行。12 月 10 日，Dave Raggett [[1998b](./references.md#TC39wg:dsrdec98)] 在会议的基础上分发了一份新文档，它主要涉及包和数字单元，但还更广泛地探讨了包括类和接口在内的类型声明。它的重点更多是语法而非语义。这份文档的设计基于 *名义化类型系统*<sup>[g](./appendices.md#nominal-type-system)</sup>，包括如下：名义化的内置基本类型、同质（homogeneous）的数组类型、类（class）类型（其中的子类均为 nominal subtype）、接口（interface）类型，以及表示需要进行动态类型检查的 `any` 类型。在语法上，它探索了将类型与变量绑定相关联的新方法。文档仍然假定使用 `var` 关键字用于变量声明，并探讨了两种类型注解的风格。其中一种 C 式的风格将类型表达式作为变量名声明的前缀，而另一种 Pascal 式的风格则在变量名声明后书写冒号和类型表达式。图 24 中举例说明了这两种替代方案。

``` js
// C 风格的声明可选形式
var float x, int[] y, z; // z 的类型是什么？
var float x, int[] y, int[] z; // 是这样吗？
var float x, int[] y, any z; // 或者是这样吗？

// Pascal 风格的可选形式
var x: float, y: int[], z; // z 的类型是 any
```

图 24. 在初版 ES4 中，基于 C 和 Pascal 语法所衍生出的几种类型注解的可选形式。

对类和接口所定义的语法大致遵循 Java，包括了对 `public`、`private`、`protected` 和默认（包级）可见性修饰符的完整补充。语言底层的元对象结构未涵盖在内，但这里的元对象模型已经必须与当时的 JavaScript 原型继承模型存在隐式区别了。这份文档提出了关于如何区分「使用声明出的静态类型信息的早期绑定（early binding）成员访问」和「没有静态类型信息的延迟绑定（late binding）成员访问」的问题。文档还探索了属性的动态添加<sup>[52](./notes.md#52)</sup>，认为可以在类中禁用这一能力。

相关的设计讨论发生在 1999 年 1 月和 2 月 [[Raggeet 1999b](./references.md#TC39wg:tcn9901), [c](./references.md#TC39wg:tcn9902)]，主要与类、*类型注解*<sup>[g](./appendices.md#type-annotation)</sup>和作用域有关。Chris Dollin、Waldemar Horwat 和 Herman Venter 是首要的参与者。许多讨论都涉及用类所定义出的对象的性质，以及类成员访问的语义。Dollin 和 Venter 主要倾向于使用类似 Java 的语义，其中类实例的结构由类声明静态确定，并且成员的可访问性都能基于类型信息静态地决定，可以在文档网站上查找到。Horwat 则主要倾向于使用更具动态性的模型，其中即使存在类型注解，也会使用不可靠的动态查找来访问成员。要想满足现有 JavaScript 程序员的预期，并兼容那些使用了「基于原型的特设类（ad hoc class）」的已有代码，似乎都需要动态语义。这里涉及的特性包括可选的类型注解，以及 *expando properties*<sup>[g](./appendices.md#expando-property)</sup>。此外 Horwat 认为，动态语义与脚本的性质更加一致，脚本编程天生地涉及从多个来源动态组装出代码，并使用独立于引用方脚本做版本控制的库。Horwat [[1999b](./references.md#js2mbrlookup)] 在描述成员查找可选方案的文档中，总结了使用静态方案和动态方案之间的区别。

在 2 月的会议上，Waldemar Horwat [[1999a](./references.md#js2feb99)] 展示了他的「JavaScript 2.0」规范。他说这是一份最早为 Netscape 编写的实验性设计<sup>[53](./notes.md#53)</sup>，但与 TC39 最近讨论的内容相匹配<sup>[54](./notes.md#54)</sup>。规范中包含了具有大量机器级数字类型的名义化类型系统，类似 Java 的类成员可见性规则，以及带有显式 import 支持的包。它还具有许多更新颖的特性，包括：类扩展声明、包成员的声明级版本控制、nullable 和 non-nullable 的类型，以及一等公民的类型值。JavaScript 2.0 提出了一种「流式执行模型」[[Raggett 1999d](./references.md#TC39:1999:006)]，取代了之前 JavaScript 版本的声明提升（declaration-hoisting）语义。在这种语义下，声明要在执行过程中遇到时才会被处理。例如 `if` 语句可以用来选择性地声明变量，或者用来选择带有不同类型注解的声明。像这样「一等公民类型值」和「声明的流式执行」的结合，会使得在某些情况下无法进行完整的静态类型检查。

JavaScript 2.0 并未尝试与原始 JavaScript（甚至还有尚未完成的 ECMAScript 3）完全向后兼容。在向 TC39 介绍 JavaScript 2.0 时，Waldemar Horwat 表示：「至少，你应该能写出在 ECMAScript 1.0 和 2.0（ES4）中都能工作的代码。完全向后兼容会非常痛苦 [[Raggett 1999c](./references.md#TC39wg:tcn9902)]。」例如可选类型注解所带来的语法复杂性，会导致难以在换行符上支持自动分号插入。Horwat 对向后兼容性的解决方案是在实现中提供多个编译器。他认为根据语言版本切换编译器，要比使用具有严格前向兼容性的单一语言更可取。

在 1999 年剩下的时间中，TC39 的大部分注意力都集中在完成 ES3 上。但是在 3 月，它发布了《未来特性展望表》[[TC39 1999c](./references.md#ES3:ES4futures)]，介绍了可能在 ES3 之后发布的特性。Spice 工作组则转为了一个模块化子组，并继续时常举行关于初版 ES4 的会议 [[Raggett 1999a](./references.md#TC39wg:mod9910), [d](./references.md#TC39:1999:006); [TC39 1999a](./references.md#ES3:nov09)]。到 11 月，TC39 已经将主要注意力转移到了「第 4 版」上，并更新了 ES3 之后的未来特性展望表（见图 25），于是这一步伐加快了。TC39 主席 [[Lewis 1999a](./references.md#TC39:1999:016)] 在 1999 年 11 月的报告中描述了初版 ES4 的目标：

> ECMAScript 2.0 是一个进取且大幅改进的 ECMAScript 语言规范，委员会希望在 2000 年实现标准化（当然这个野心可能过大）。ECMAScript 2.0 的主要目标是为「大规模编程」提供支持——这也就是说，要支持开发由多人构建的程序，并可能是史上第一次要在用户的桌面上组装出这些程序。

```
* 模块化增强: classes, types, modules, libraries, packages 等
* 国际化（I18N）相关:
  - 国际化库 [可能作为独立的 ECMA 技术报告]
  - 日历
* 十进制小数（对 Number 对象的增强或替代）
* Catch guards（带类型）
* 对原子（线程安全）操作的讨论或定义（可能非规范性）
* 其他各类更新 [除模块化相关外]:
  - 声明修饰符的扩展机制
  - 可扩展的语法（如用 # 表达 RGB 值）
  - 单位语法和算术库
  - Here 文档（长字符串常量）
```

图 25. TC39 在 1999 年 11 月的《未来特性展望表》[[TC39 1999d](./references.md#ES4:9911futures)] 中设想的初版 ES4 特性。

在 2000 年 1 月的会议上 [[Raggett 2000](./references.md#TC39wg:mins-20jan00)]，微软砍掉了一些特性，希望能赶在 2000 年 12 月发布规范的第四版。微软的主要兴趣是添加静态类型注解并保持向后兼容性，包括对自动分号插入的支持。Venter 介绍了对 ES3 规范的一系列更改，他认为这些更改足以支持类型注解。但此时在类型系统性质方面仍然存在很多不确定性，包括：类的语义、包的语义、命名空间的语义，以及如何将静态和动态的语言概念集成到单个语言中。

在 2000 年 6 月 22 日，微软 [[2000b](./references.md#microsoft:pressdotnet)] 发布了 .NET Framework，这是微软为应对 Sun 在 Java 平台上的竞争所做出的回应。微软 .NET 是一个多语言的应用开发平台，除了主要语言 C# 外，它还支持 Visual Basic 和 JavaScript 等其他语言的方言。消息发布后，第一个 .NET 预览版<sup>[55](./notes.md#55)</sup>在 7 月的微软专业开发者大会上发布 [[Microsoft 2000a](./references.md#microsoft:pressdotnetSDK)]。预览版包含了早期版本的 JScript .NET [[Clinick 2000](./references.md#msft:introJscript.net)]。与浏览器中的 JavaScript 不同，JScript .NET 是一门面向 .NET 公共语言运行时（CLR）的预编译语言，其内部使用了 .NET 的类型系统。Internet Explorer 并不支持 JScript .NET（或通称为 .NET）。相反地，JScript .NET 一开始就可以使用各种 .NET 框架组件来构建桌面、服务端和命令行应用。JScript .NET 宣称自己与 ES3 规范兼容，但由于其设计目标并非运行为浏览器编写的 JavaScript 代码，因此它并不需要严格的向后兼容性。除了 ES3 特性外，JScript .NET 还添加了可选的静态类型注解、包含成员可见性属性的类和接口声明，以及支持显式 import 的包。根据微软 Andrew Clinick [[2000](./references.md#msft:introJscript.net)] 的说法，这些新特性是与其他 Ecma TC39 成员一起设计的。他还告诫说，根据正在进行的 TC39 讨论，设计的细节可能会改变。

在 .NET 于 2000 年 6 月发布前，微软的 Herman Venter 并不能与 Waldemar Horwat 或其他 TC39 成员讨论 .NET 或 JScript .NET。当年 8 月，Horwat 和 Venter 私下见面，试图就完成 ES4 标准达成足够的一致。Horwat [[2000](./references.md#Horwat:meeting)] 在会议笔记上记录了对 43 个问题与分歧的讨论，其中总结了以下讨论：

> 概括说来，Herman 正在为服务端准备 JScript 的实现，并希望冻结这门语言，使其易于与微软 .NET 运行时互操作。Waldemar 担心这门语言对浏览器的适用性，并希望保留语言的动态性。他认为这是 ECMAScript 的与众不同之处。Waldemar 担心语言向 Java 或 C# 发展，因为他认为在这两者擅长的领域里，几乎不需要另一种新语言。而且对于静态编程来说，新语言最终能获得的结果也比不上 C# 语言。Herman 还建议在新的服务端项目上使用 C# 而非 JScript，并将新的 JScript 视作一种针对「已经习惯使用 JScript 编程的开发者」的语言。

Horwat [[2003a](./references.md#es4-1:2003)] 从 JavaScript 2.0 文档中 fork 出了一份单独的《ECMAScript 4 Netscape 提案》文档，然后将这份文档用作正在进行的初版 ES4 开发的工作草案。JavaScript 2.0 文档则继续并行维护，包括了 TC39 尚未同意加入的其他特性。

微软希望 .NET 及其语言能被视为标准化的技术。Ecma 组织在这方面有口皆碑，可以很容易地将专有技术转移到标准轨道上，并且微软对 TC39 的工作方式也感到满意。因此，微软向 Ecma 建议扩展 TC39 的职责范围，并在其中将 .NET 标准化。于是 TC39 被重新定义为 Ecma 面向「编程环境」的技术委员会，正在进行的 ECMAScript 开发活动在 TC39 中被降级到了 TG 任务组（Task Group）状态，称为 TC39-TG1。Ecma 成立了其他的 TC39 任务组，以开发 CLR 和 C# 的标准。

这次创建 ECMAScript 规范第四版的尝试还会再进行三年。但事后看来，JScript .NET 的发布已经敲响了这项工作的「丧钟」。到 2000 年 6 月，Netscape 已经输掉了「浏览器大战」[[Borland 2003](./references.md#browserwars)]，其浏览器市场份额下降到了 14％ 以下 [[Reuters 2000](./references.md#reuters:ieshare)]。在被美国在线公司收购后，它正逐渐失去人手，被迫以更少的资源运营，只能艰难地继续更新其浏览器。

微软凭借 IE 在竞争中取胜，并最终获得了 90％ 以上的市场份额。它对继续增强自己没有专有控制权的 Web 编程平台的兴趣不大。在微软内部，研发资源从增强开放的浏览器技术（例如 ECMAScript）转到了开发专有的微软技术（如 Windows Presentation Framework<sup>[56](./notes.md#56)</sup> [[Microsoft 2016](./references.md#microsoft:wpf)]）上，微软希望它们能最终淘汰和取代开放的 Web 技术。在 .NET 的编程语言领域，微软专注于 C# 和 VisualBasic .NET。在这种情况下 JScript .NET 的重要性，仅仅取决于它能使多少 JavaScript 程序员迁移到 .NET 平台。

TG1 继续开展会议，讨论特定问题，并更新规范草案<sup>[57](./notes.md#57)</sup>。微软与 Netscape 在类型系统的性质方面存在着重大的持续分歧。Waldemar Horwat 在 MIT 轻量语言研讨会上发表了有关 JavaScript 2.0 设计的论文 [[Horwat 2001](./references.md#Horwat:LL1)]，他将 JavaScript 2.0 描述为具有「强大的动态类型」能力的语言。他进一步解释说，在 JavaScript 2.0 中，所有变量都具有关联的类型，这些类型限制了可以存储在其中的值，但是类型约束的检查必须在运行时进行。在一般情况下，JavaScript 2.0 的一等公民类型值和隐式的 downcast<sup>[58](./notes.md#58)</sup> 会导致无法对程序进行静态类型检查。

TG1 召开会议的频率和出席人数都在逐渐降低。Chris Dollin 于 2001 年 6 月参加了最后一次会议，而 Herman Venter 参加的最后一次 TC39-TG1 会议则是在 2002 年 6 月。2003 年 7 月 15 日，美国在线宣布将解散 Netscape，并解雇了包括 Waldemar Horwat 在内的大多数员工。在同一周举行的 TG1 会议上，Horwat 辞去了 ES4 编辑的职务。TG1 的其余成员决定将精力集中在为 ECMAScript 开发 XML 支持上，并中止 ES4 的工作，直到 XML 项目完成并可以确定出新的编辑为止。

## 另一条死路
在 1990 年代中期到后期，人们对软件组件（component）的概念产生了浓厚的兴趣，并提出与实现了几种软件组件模型。这其中包括来自对象管理组织（OMG）的 CORBA、微软的 COM，以及 Sun 的 JavaBeans。一般意义上，软件组件模型是一种模块化方案，提供了一种可以「描述、发现和使用基于对象的软件模块」的方式。在 1997 年 7 月的 TC39 会议上 [[1997g](./references.md#TC39:1997:030)]，代表 Oracle 的 Jim Tressa 作了有关组件脚本语言的 OMG 提案的介绍。据称在那次会议上，IBM、Netscape、Oracle 和其他公司都有兴趣对基于 ECMAScript 的提案作出回应，但是 OMG 最终制定的规范并非基于 ECMAScript。

「ECMAScript 组件」概念希望发布特定于 JavaScript 的组件模型，以便在浏览器和其他 JavaScript 宿主中使用。它定义了一份 XML 模式（schema）和词汇表，以描述 JavaScript 组件和一组实现者应遵守的约定。这项工作的赞助者是 NetObjects<sup>[59](./notes.md#59)</sup> 和 Netscape 这两家公司。NetObjects 的 Richard Wagner [[1998](./references.md#TC39:1998:011)] 于 1998 年 6 月向 Ecma GA 大会进行了初步介绍。在同一次会议上，相应的技术规范草案 [[Wagner and Shapley 1998](./references.md#TC39:1998:011)] 被提交给了 TC39。这份文档经过了三份草案的修改，然后提交给了 Ecma GA。它被批准为 Ecma 标准，并发布为了 ECMA-290 [[Wagner 1999](./references.md#ecma290)]。然而根据记录，这份标准并没有被实际实现过。根据 TC39 的建议，Ecma GA 大会在 2009 年投票决定撤回 ECMA-290 标准 [[Ecma International 2009b](./references.md#GA:2009:203)]。

ECMAScript 第三版中的「精简模式（compact profile）项目」为 ES3 的一个动态程度较低的子集定义出了一种语言*模式*<sup>[g](./appendices.md#profile)</sup>，这可以使得资源受限环境中的 JavaScript 实现仍然符合 ECMAScript 规范。这一规范的创建 [[Raggett 2000](./references.md#TC39wg:mins-20jan00)] 是由 Ecma 之外的 WMLScript 推动的，目标是定义用于手机应用<sup>[60](./notes.md#60)</sup>的 JavaScript 方言 [[Lewis 1999b](./references.md#TC39:1999:008)]。精简模式包含了 ES3 的所有特性，但允许实现移除对 `with` 语句的支持。实现也可以移除对 `eval` 和 `Function` 构造函数的支持。精简模式还支持让内置库的对象不可变的实现，这样可以进行预编译，或提供基于 ROM 的实现。Ecma GA 大会批准了 ECMA-327 精简模式标准 [[Vartiainen 2001](./references.md#ecma327)]。与 ECMA-290 不同的是，ECMA-327 实际上已经在某些环境中实现了。但是随着新版 ECMA-262 的发布，人们对更新 ECMA-327 缺乏兴趣。ECMA-262 的最新版本已经使用在了资源非常受限的环境上。如果针对这类环境的实现需要移除某些特性，直接做就是了。实际上对于大多数资源受限的应用而言，并没有证据表明实现之间需要具备完美的 JavaScript 互操作性。Ecma GA 大会在 2015 年投票决定撤回 ECMA-327 标准 [[Ecma International 2015b](./references.md#GA:2015:068)]。

在 2002 年，TC39-TG1 将大部分注意力转移到了开发「ECMAScript for XML」的规范上。所谓 E4X 是一个单独的 Ecma 标准，它向 ES3 添加了语法扩展，从而支持对 XML 文档的处理。相应的 ECMA-357 版本 [[Ecma International 2004](./references.md#E4X:PR); [Scheneider et al. 2005](./references.md#E4X:2)] 分别于 2004 年和 2005 年发布。Firefox 是唯一实现 E4X 的浏览器，因此就像浏览器博弈论中指出的那样，这个能力很少被使用。到了 2015 年，由于 E4X 扩展与 ECMAScript 2015 不兼容，ECMA-357 这项 Ecma 标准也被撤回 [[Ecma International 2015b](./references.md#GA:2015:068)]。

## Flash 与 ActionScript
Macromedia 公司的 *Flash*<sup>[g](./appendices.md#Flash)</sup>（后来被 Adobe 收购）在 2000 年代初问世，成为了人们在构造富互联网应用时，对 Java 和 JavaScript 的流行替代品。Flash 最初是一个基于时间轴的动画产品，建立在 Jonathan Gay [[2006](./references.md#Gay06)] 工作的基础上。Flash 附带了视觉创作工具，它能将基于动画的应用编译为二进制文件，这些文件由 Flash Player 解释执行。播放器组件可以通过浏览器的插件扩展 API 集成到浏览器中。在巅峰时期，几乎所有浏览器用户都安装了 Flash 播放器 [[Adobe 2013](./references.md#flashstats)]。

最初的 Flash 创作主要是偏视觉化的，但它的功能还包括编写简短的文本「动作」（action），以定义对各种时间轴事件的响应。在 1999 年 5 月发布的 Flash 4 中，Gary Grossman 将 Flash 动作演变成了一种简单的动态类型脚本语言，其语法与 JavaScript 相似。随着 2000 年 Flash 5 的发布，这门脚本语言成为了 ECMAScript 3 的方言，并被命名为「ActionScript」。*ActionScript*<sup>[g](./appendices.md#ActionScript)</sup> 1.0 支持大多数 ES3 语句和基于原型的对象，但缺乏对正则表达式的支持，具有非标准的 `eval` 函数，这种 `eval` 只能求值一组受限的变量访问表达式，此外还有各种其他细微的语义差异。由于 ActionScript 代码被编译为仅在 Flash Player 环境中运行，因此并不必严格遵守 ECMAScript 规范的语义。例如在 ActionScript 1.0 中，`var` 声明的作用域是最接近它的封闭块，而非整个封闭函数。

在 2003 年，ActionScript 2.0 作为 Flash MX 开发环境和 Flash Player 6 的组件发布。它扩展了 ActionScript 1.0，支持类声明、接口声明、声明中的类型注解，以及用于访问其他脚本中定义的类的 import 语句。其中，类的类型注解、类声明和接口声明的语法大致遵循了初版 ES4 与 JS2 规范草案中使用的语法，但语义则大大简化。对类型注解的使用是可选的。类型检查属于仅限编译期的特性 [[Macromedia 2003](./references.md#macromedia:types)]。如果提供了类型注解，语言会在编译时执行类似 Java 的名义化类型检查。但在生成代码前，类型信息会被擦除。ActionScript 2.0 使用了与 ActionScript 1.0 相同的虚拟机，并执行基本的运行时安全检查。程序可以按违反名义化类型系统规则的方式来动态修改对象，只要这些更改不会触发任何运行时安全检查即可。

在 2003 年，Flash 在 Web 开发中获得了广泛的应用，这带来了复杂的大型 ActionScript 应用，其中有一些遇到了性能问题。与当时的大多数 ECMAScript 语言设计者和实现者一样，Macromedia 团队认为<sup>[61](./notes.md#61)</sup>动态类型（尤其是原始类型）导致了主要的性能瓶颈，并且正在探索向 ActionScript 运行时添加静态类型的方法。大约在同一时间，自 1998 年以来一直担任 TC39 代表的 Jeff Dyer 加入了 Macromedia。Dyer 确认了 TC39 对静态类型持有相同的观点。这种在基于虚拟机的语言中应用静态类型的观点广为流传，受到了对静态类型 Java 虚拟机（JVM）设计的强烈影响。Macromedia 的 Jonathan Gay 和 Lee Thornason 研发了实验性的 Maelstrom 项目，旨在研究 JVM 是否可以集成到 Flash 中，并用作静态类型版 ActionScript 的运行时。这个实验非常成功，以至于 Macromedia 向 Sun 就有关将 Java 2 Micro Edition（J2ME）版本 JVM 用于 Flash 的许可进行了洽谈。他们想使用 J2ME 的理由，是因为标准版 Java 运行时太大，无法嵌入 Flash Web 下载。但是 Macromedia 这项对使用 Java Micro Edition 技术的提议，与 Sun 的 Java 许可策略并不相符。于是 Edwin Smith 经过大量工作，创建了一系列概念验证性的虚拟机。这些虚拟机帮助 Macromedia 构建了自己的静态类型 JVM 式虚拟机 AVM2 [[Adobe 2007](./references.md#AVM2)]，并在其上运行了新版本的 ActionScript。这种新语言是由 Gary Grossman，Jeff Dyer 和 Edwin Smith 设计的，它受到了 Horwat 的初版 ES4 / JS2 规范草案的重度影响。但是与 JScript .NET 一样，ActionScript 3.0 是初版 ES4 设计的简化。它不像 JS2 那样动态，并且与 JScript .NET 不同的是，它不受 .NET 类型模型的约束。另外 ActionScript 3.0 与 JScript .NET 还有一点相似之处，那就是它们都不会重度受制于旧版的兼容性问题。Flash 会同时附带用于支持 ActionScript 3.0 的 AVM2，以及用于支持 ActionScript 1.0 和 2.0 的 AVM1。这项创建新版 ActionScript 和新虚拟机的工作耗时三年才得以完成，相应产物在 2006 年作为 Flash Player 9 的组件而发布，最终于 2007 年交付。在工作完成之际，Adobe 收购了 Macromedia，而 Flash 则成为了 Adobe Flash。

## 对 ES4 的第二轮尝试
虽然初版 ES4 的开发工作在 2003 年停滞了，但 Web 上对 JavaScript 的使用仍在继续增长。不到一年内，TG1 成员就再次开始考虑设计一个被称为「ES4」的新版本 ECMAScript 了。

### 重置 TC39-TG1
Macromedia 于 2003 年 11 月成为了 Ecma 会员，Jeff Dyer 则成为了 TC39 的代表之一。Macromedia 此举的意图是很明显的，因为 ActionScript 3 的设计受到了 TG1 最初开发的 ES4 规范的强烈影响。对 Macromedia 而言，让 ActionScript 的设计与将来的 ECMAScript 规范保持一致非常重要，并且他们也需要 TG1 考虑来自 ActionScript 的需求和先例。

2004 年春季，Mozilla 基金会发布了 Firefox 浏览器的技术预览版，有望在年底之前发布 Firefox 1.0。Mozilla 的首席技术官 Brendan Eich 对开放 Web 的未来感到担忧。此时业界对基于浏览器的 Web 应用的兴趣正在迅速增长，但当时最新的浏览器标准并不足以支持交互足够丰富的应用。像 Flash 和微软 WPF 与 .NET 这样封闭的专有应用平台，正在竞相取代 HTML / CSS / JavaScript 的 Web 技术栈，但负责开放 Web 的标准化组织并未响应这一挑战。1998 年，W3C [[W3C 1998](./references.md#w3c:htmlfuture)] 决定停止发展 HTML，转而支持基于 XML 的替代方法。但是 XHTML 在语法和语义上都不兼容 HTML，并没有被浏览器厂商和 Web 开发者普遍接受。同样地，Ecma TC39-TG1 对发展 ECMAScript 规范的尝试也陷入困境，它的注意力已经转移到了设计 ECMAScript 的 XML 支持上。Web 技术社区的一些成员担心「ECMAScript 已死」[[Schulze 2004b](./references.md#ecma:ga:2004:76)]。

在这个时候，Brendan Eich [[2004](./references.md#brendan:non-www)] 站了出来，促进了 WHATWG（Web 超文本应用技术工作组）[[Hickson 2004](./references.md#whatwg:announcement)] 的成立，这个工作组专注于 HTML 的未来。他还开始重新介入 TG1。Eich 于 2004 年 3 月会见了 Ecma 秘书长 [[Marcey 2004](./references.md#ecma:TC39:2004:18)]。当年 5 月，Mozilla 基金会申请了 Ecma 会员资格。在 2004 年 6 月，Eich 自 1998 年 2 月以来首次参加了 TG1 会议 [[Schulze 2004a](./references.md#ecma:TC39-TG1:2004:006)]。

在 6 月的会议 [[Schulze 2004b](./references.md#ecma:ga:2004:76)] 上，TG1 的召集人（Convener）职责从微软的 Rok Yu 移交给了 Macromedia 的 William Schulze。Jeff Dyer 则成为了 ECMA-262 的编辑。代表们再次致力于完成 ECMAScript 规范的第四版，但决定不再继续投入 Waldemar Horwat 的初版 ES4 草案。根据 Schulze 的报告，「初版 ES4 太过于笼统而宽泛，难以完成或获得采用」。取而代之地，成员们同意采取「一种更为增量的途径」[[Schulze 2004a](./references.md#ecma:TC39-TG1:2004:006)]。基于这种方式，新版语言可以集成到包括 ActionScript 在内的现有实现中。被列为候选待集成的特性包括：包、命名空间、条件属性、运行时类型检查，以及 XML 支持。这份列表包括了原有初版 ES4 草案中一些最复杂的部分，但成员们仍然认可了新版 ES4 的 12 个月开发周期。Dyer 同意准备一份介绍变更计划的草案，以在 2004 年 10 月的会议上进行介绍。

TG1 暂时还无法处理这些新需求。在 2004 年下半年和 2005 年的大部分时间里，委员会的大部分注意力都集中在修订 E4X 规范 [[Schneider et al. 2005](./references.md#E4X:2)] 上，这是 ISO 快速通道流程的一部分。直到 2005 年 10 月，委员会才对新版 ES4 开始了认真的工作。但在这段时间里，Brendan Eich 熟悉了 ECMAScript 当时的标准化状态，并开始在会议演讲和博客文章中公开表达其对下一版的想法 [[Eich 2005a](./references.md#brendan:JS1-2), [b](./references.md#Brendan:icfp:slides)]。在 2005 年 9 月的会议 [[TC39-TG1 2005](./references.md#TC39-TG1:2005:006)] 上，Eich 成为了 TG1 的召集人，开始推动新版 ES4 的开发。

### 重新设计 ES4
在 2005 年 10 月的博客文章中，Brendan Eich [[2005d](./references.md#brendan:recap)] 列举了下一轮 ES4 工作的四个目标，如下所述：

* 让第 4 版重新朝向当前的语言发展。这样一来，「基于原型的委托」就不再属于残留的兼容模式，而是组成语言对象系统的动态部分。这个对象系统中所包含的类，可以带有不会被隐藏或覆盖的固定成员。
* 允许标准实现者让语言自举<sup>[62](./notes.md#62)</sup>，从而表达出所有「原生」对象使用的「元对象协议」黑魔法（参见 ECMA-262 第 3 版第 15 节），包括读取、设置、调用 、构造等操作，以及对属性标记（如可枚举性）的控制。
* 加入类型注解以支持大规模编程，前提是不破坏现有版本与新版本之间的互操作性。XUL<sup>[63](./notes.md#63)</sup> 框架和现代 Web 应用都越来越需要这样的特性。
* 修复其他长期困扰着几乎所有 JS 开发者的问题。

据 Eich 所述，他的预期是在 2006 年底之前完成这项工作，其中包括初步实现以及对互操作性的测试。

Brendan Eich [[2005d](./references.md#brendan:JS2:design-notes)] 在 2005 年 11 月的博客文章中简化了这些目标，如下所示：

1. 以更强大的类型和命名支持大型编程。
2. 支持自举、*自托管*<sup>[g](./appendices.md#self-hosting)</sup> 和反射。
3. 保证向后兼容性，一些简化语言的更改则例外。

他还指出，标准的目标并不是让 ECMAScript 更像 Java 或任何其他语言，也不是让 ECMAScript 更易于被优化。在随后的演讲中，Eich [[2006a](./references.md#Brendan:XTech2006:slides)] 认可了对初版 ES4 规范的批评，这其中也包括了对于是否需要「声明式的静态类型」或者「类定义」的质疑。对此 Eich 反驳说，对此什么都不做是不行的。他认为，随着 Web 开发者构建出日益复杂的应用，ES3 语言在未来十年内的扩展性会显得很差。他特别指出，要想支持这样的应用，需要的是一种保证语言不变性（invariance，描述类型严谨程度的概念，译者注）的类型系统，这样的类型系统可以选择性地执行静态检查。不过做这种改变的机会只有一次，所以现在就是时候了。

Brendan Eich 乐观地认为，在编程语言规范和类型系统领域的现代研究，可以帮助解决初版 ES4 原始工作中某些领域的问题。在 2006 年初，他招来 Dave Herman 加入了 TG1 新版 ES4 的设计团队<sup>[64](./notes.md#64)</sup>。Herman 是美国东北大学的博士研究生，当时正致力于开发 ES3 的操作语义（operational semantics，用于保证程序在数学上严谨性的概念，译者注）。通过 Herman 的推荐，Eich 还邀请了圣克鲁斯大学教授 Cormac Flanagan 加入。Flanagan 是混合类型系统 [[Flanagan 2006](./references.md#Flanagan:2006:HTC:1111037.1111059)] 领域的专家。大约在同一时间，Opera Web 浏览器上的软件架构师 Lars Thomas Hansen 成为了 TG1 的经常性参与者。Herman、Hansen 和 Flanagan 都与美国东北大学的编程语言研究社区有着直接或间接的联系。

<table>
  <tr><td>Jeff Dyer</td><td>Adobe<sup><a href="./notes.md#65">65</a></sup></td></tr>
  <tr><td>Brendan Eich</td><td>Mozilla</td></tr>
  <tr><td>Cormac Flanagan</td><td>University of California, Santa Cruz</td></tr>
  <tr><td>Lars T Hansen</td><td>Opera/Adobe</td></tr>
  <tr><td>Dave Herman</td><td>Northeasten University</td></tr>
  <tr><td>Graydon Hoare<sup><a href="./notes.md#66">66</a></sup></td><td>Mozilla</td></tr>
  <tr><td>Edwin Smith</td><td>Adobe</td></tr>
</table>

图 26. 2006 年新版 ES4 的核心设计团队。

2005 年末，TG1 为新版 ES4 项目制定了每周电话会议和每月面对面会议的时间表。图 26 列出了 2006 年的新版 ES4 核心设计团队。这些人定期参加会议，参与关键决策，并不断做出重要贡献。来自 Adobe、Mozilla 和其他组织的其他人员偶尔会参加会议和（或）做出贡献，但很少积极参与这个项目。

在 JS2 / ES4 的第一轮开发中，要想进行与现有 ECMAScript 程序不兼容的更改是非常容易的。它假定在浏览器中，HTML `<script>` 元素里的版本信息，可以用来选择语言的不同版本。在与新版 ES4 有关的新工作中，人们进一步地意识到了变更的潜在影响，但仍然希望能够通过版本控制的方式，来纠正委员眼中属于早期 JavaScript 设计错误的内容。Brendan Eich 曾经在他的博客文章和演讲中谈及这种可能性，但也有一些 TG1 成员提出了反对意见。Douglas Crockford 代表雅虎在 2006 年 7 月的 TG1 会议 [[TC39-TG1 2006c](./references.md#TC39-TG1:2006:032)] 上指出，「向后兼容是困难且重要的」。不过对于雅虎来说安全还是最大的问题。如果是为了解决与安全相关的问题，那么也可以忍受后向的不兼容性。微软的 Pratap Lakshman 则表示：「向后兼容属于最高优先级。除非为了修复安全性问题，否则向后兼容性不应该被破坏。」

2005 年，Brendan Eich 在 ICFP（函数式编程的学术会议，译者注）发表了纪念 JavaScript 十周年的主题演讲。演讲后的问答环节中，他对 Python 做出了积极的评价 [[Danvy 2005](./references.md#brendan:icfp:QA)]。他甚至还推测对于较大规模的 Web 脚本来说，Python 可能比 JavaScript 更好。在接下来的一年里他都在做游说，希望在新版 ES4 中再加入一些根据等价的 Python 特性直接建模的特性，包括迭代器、生成器、*解构*<sup>[g](./appendices.md#destructuring)</sup>赋值和数组推导式。他还提倡使用具备块级作用域的 `let` 和 `const` 关键字来声明变量，从而替代函数级作用域的 `var` 声明。在很大程度上，它们与人们为新版 ES4 提出的其他（所谓）更复杂的「大规模编程」特性并没有关系。这些特性被添加到了基于 SpiderMonkey 的 JavaScript 1.7 引擎 [[Mozilla 2006a](./references.md#moz:new1.7)] 中，相应的 Firefox 2 浏览器版本于 2006 年 10 月发布。但是这些特性未被其他浏览器接纳，因此并未在 XUL 之外的地方获得广泛的使用。

Eich 担心其他浏览器厂商（尤其是微软）会选择非常缓慢地接纳新版 ES4 的 JavaScript 改进。另外还有一个令人担忧之处，那就是 JavaScript 引擎可能无法继续提高性能，满足不了 AJAX Web 应用涌现出的需求。有种能解决这两个问题的方法，即打造出支持设想中新版 ES4 规范的高性能开源 JavaScript 引擎。为此，Eich 说服了 Adobe 基于开源许可将其 AVM2 引擎实现贡献给了 Mozilla。Mozilla 将获得的代码库命名为「Tamarin」[[Mozilla 2006b](./references.md#moz:tamarin)]。在后面几个月中，Mozilla 发布了 [[Eich 2007a](./references.md#brendan:roadmap:july07)] 两个项目：一个是旨在用 Tamarin 代码库替代 SpiderMonkey 的 ActionMonkey，而另一个是基于 Tamarin 的 JavaScript 引擎 ScreamingMonkey，它可以当作 Internet Explorer 的第三方插件扩展来安装。这两个项目都没有完成。

在执行这些工程行动之际，TG1 同时也在继续致力于新版 ES4 的设计。新版 ES4 的主要目标是提供一种类型系统和类型注解符号，用来在大型程序中验证对复杂数据抽象的使用。只要是恰当地写出的程序，都应该能在部署前做静态类型分析。但这样的类型系统不仅需要能处理新程序和现有未加注解的程序，还要能处理当前语言所支持的对象动态结构变化。在 2006 年的大部分时间里，委员会都在理解这些需求的含义，并尝试设计出一种类型系统来适应它们 [[TC39-TG1 2006a](./references.md#TC39-TG1:2006:020), [d](./references.md#TC39-TG1:2006:015)]。

委员会的工作起点，是 ActionScript 3 规范 [[Macromedia 2005](./references.md#AS3spec)] 中具备非正式描述的类型系统。这是一个名义化类型系统，其中的类和接口类型与 Java 类似，而泛型则是在这基础上加入的。ActionScript 3 支持为声明添加类型注解，而对于缺少显式类型注解的声明，语言还引入了一种通用类型。ActionScript 3 规范没有明确加入「函数子类型」的概念，并且对类和接口子类型的定义也并不完整。语言还具有严格模式，这个模式下会使用具有类型注解的声明和有限的类型推断，来执行提前（ahead-of-time）的静态类型检查。另外也有一种标准模式，可以用来根据类型注解来动态验证实际数据值。

Dave Herman 和 Cormac Flanagan 早期提出的建议，是使用契约模型（contract model）[[Findler and Felleisen 2002](./references.md#Findler:2002:CHF:581478.581484)] 来更好地统一严格和标准模式，以及类型化和非类型化的声明。随着工作的进行，结构化类型（structural type）[[TC39 ES4 2006d](./references.md#es4:structualtypes)] 也被加入了进来，用于处理对象和数组字面量。一并加入的还有用于处理数组类型的参数化类型。TG1 在内部<sup>[67](./notes.md#67)</sup> Wiki 网站 [[TC39 ES4 2007f](./references.md#es4:priv-wiki-jan-2007)] 上为此考虑并记录了许多可选的方法 [[TC39 ES4 2006b](./references.md#es4:typesystem)]。Herman 和 Flanagan 还试验了类型系统的形式化 [[TC39 ES4 2007a](./references.md#es4:formaltypes)]。到 2007 年初，语言设计仍不完整，但已演变到覆盖了许多现代类型概念，包括函数类型和协变 / 逆变（co/contra-variance）[[TC39 ES4 2007b](./references.md#es4:typesystem07)]。语言还需要支持可选类型（optional typing）和历史遗留的动态类型程序，这个现实需求一直是复杂性的重要来源。

在整个 2006 年和 2007 年的大部分时间里，TG1 继续致力于制定新提案和完善现有提案，最终在内部 Wiki 上整理出了一份列表。这其中包括了 54 份已批准的提案，它们都被规划进了新版 ES4 规范里。另外的 26 个提案则被推迟或删除。

在 Brendan Eich 发现了 Dave Herman 介绍如何对 ES3 的形式化语义进行文档化实验的网页 [[Herman 2005](./references.md#Herman:CEKS)] 后，Herman 也被招募进了 TG1。2006 年 2 月的 TG1 会议 [[TC39-TG1 2006b](./references.md#TC39-TG1:2006:011)] 上，Herman 介绍了用于规范化编程语言的形式化技术。他解释说，除了为实现者提供指导之外，形式化的规范还提供了一种在规范中查找和纠正错误的方法。有人担心 ECMAScript 实现者和规范的其他使用者是否能阅读这种形式化的规范。对此 Herman 认为，基于操作语义的形式化是可以变得非常易读的。在接下来的几个月中，Herman 尝试使用 Maude [[Clavel et al. 2003](./references.md#Clavel:2003:MS:1759148.1759156)]、Stratego [[Visser 2001](./references.md#Visser:2001:SLP:647200.718711)] 和 PLT Redex [[Matthews et al. 2004](./references.md#matthews2004visual)] 等工具来确定 ECMAScript 的语义，但最终发现它们都不够令人满意。在同一时期，TG1 还讨论了 [[TC39-TG1 2006e](./references.md#TC39-TG1:2006:041)] 根据参考实现（Reference Implementation）来定义语言的可能性。还有一种可能性是专门为 ECMAScript 设计一种新的形式化规范语言。在 2006 年 10 月的会议上，TG1 讨论了这种语言的可能语法和语义。最后 Cormac Flanagan 指出，工作组现在已经在讨论定义两种语言（规范语言和新版 ECMAScript）的工作。于是工作组很快同意使用现有的语言来为新版 ES4 编写定义解释器，并迅速决定使用 SML<sup>[68](./notes.md#68)</sup> 语言 [[Milner et al. 1997](./references.md#Milner:1997:DSM:549659)]。到 11 月中旬，TG1 已经为此搭建了工具和基础架构，相关成员也在着手编写解释器。Herman 和 Flanagan [[2007](./references.md#HermanFlan:JSML)] 描述了这对委员会工作风格的影响，如下所述：

> 在我们选择了确定性的解释器后，委员会的互动方式就发生了很大变化，从每月一天半的讨论型会议转为了为期 3 天的 *hackathon*<sup>[g](./appendices.md#hackathon)</sup>。这中途也会进行技术讨论，涉及语言设计和实现时的各种极端情况。这些问题都被逐一发现和解决。

### 阻力
微软几乎没有参与重启新版 ES4。虽然 DevDiv 在组织上远离了负责 IE 的微软 Windows 团队，但 JScript 的开发始终由 DevDiv 负责。在 2000 年初，DevDiv 为支持 .NET 计划进行了重组，其中的 C# 产品部门同时负责 JScript .NET 和 IE 中更传统的 JScript 引擎。这也包括了参加 ECMAScript 标准化活动的责任。但由于客户对 JScript .NET 的接受程度较弱，而且 Windows 团队对于增强 IE 的兴趣不大，因此与 JScript 和 ECMAScript 相关的工作，在 C# 团队中属于低优先级的事项。

在 2000 年代，微软通常将战略上重要的开发工作放在华盛顿州 Redmond 市的总部里，并经常将更多的战术项目分配到世界各地的其他分部中。在 2006 财年（2005 年 7 月至 2006 年 6 月）里，微软 DevDiv 决定将所有与 JScript 和 ECMAScript 相关工作的职责交接给位于印度 Hyderabad 市的印度研发中心（IDC）。DevDiv 之前已经将类似 Java 的 J# .NET 产品交接给了 IDC [[Prasanna 2002](./references.md#VJ.net)]。到 2006 年春季，交接工作得以基本完成。在 TG1 上代表微软的任务，则交给了曾经在 J# 团队工作过，并参与过 Ecma C# 标准工作组 TC39-TG3 的 Pratap Lakshman。Lakshman 在 2006 年 4 月第一次远程参加了 TG1 会议，并开始参加电话会议和一些面对面的会议。但在此期间，他并不是新版 ES4 开发工作的重要贡献者。

本文作者之一 Allen Wirfs-Brock 于 2003 年加入微软，担任软件架构师，负责研究新 IDE 体系结构的探索性项目。在加入微软前，他已经在 Smalltalk 编程语言和开发环境方面工作了二十多年。Wirfs-Brock 曾是首个商用 Smalltalk 虚拟机实现 [[Caudill and Wirfs-Brock 1986](./references.md#Caudill:1986:TGS:28697.28709)] 的首席开发者。他致力于增强 Smalltalk 的特性以支持大型编程，设计了标准的 Smalltalk 异常处理系统，并编写了 ANSI Smalltalk 标准 [[ANSI X3J20 1998](./references.md#ansiSmalltalk)] 中的语言定义部分。

到 2006 年底，IDE 项目似乎已经进入了正轨，Wirfs-Brock 也开始寻找新的机会。这时 DevDiv 内部对于动态语言的兴趣正在增加。由于还没有单独的 DevDiv 产品组负责动态语言，各个产品组的经理都抢着想揽下这份工作。Wirfs-Brock 当时担任资深架构师，向 Visual Basic 产品组经理 Julia Liuson 汇报，为她提供动态语言技术和机遇方面的建议。

Allen Wirfs-Brock 的新岗位从 2007 年 1 月的第一周起开始。在一次偶然的谈话中，Liuson 问他是否了解 JavaScript。Wirfs-Brock 回忆说他的回复大致是这样：「我不太了解，只知道这是一种用于网页的动态语言，我认为它与 Self 有一定关系。」随后 Liuson 将显示器转了过来，给他看了一封她刚刚收到的电子邮件，问他是否有什么想法。

这封邮件是 Pratap Lakshman 发给所有 DevDiv 产品组经理的，希望获知他对 Ecma TC39 正在开发的一个新 JavaScript 标准所应采取的立场。据 Wirfs-Brock 回忆，Lakshman 的信息说新的标准基于 Adobe Flash。与当时的浏览器相比，这将会是个实质性的变化。Lakshman 说，TC39 正在开发的是一门强大的语言，对 Web 来说可能太复杂了。他还列举了一长串新特性和变化，包括基于类的静态类型、结构化类型、参数化类型，以及方法重载。他还说，修订后的语言将通过 Standard ML 编写的参考实现来定义。

Allen Wirfs-Brock 回复 Julia Liuson 说，这听起来像是一次彻底的重新设计。根据他的经验，通过增加静态类型来改进动态语言的尝试很少成功。他对 JavaScript 或 Web 开发还不够了解，无法给出更确切的意见。不过，他提出要进一步研究一下。

Wirfs-Brock 花了几天时间来熟悉 JavaScript、当时的 ES3 规范以及公开 Wiki 快照中的 TG1 提案 [[TC39 ES4 2007f](./references.md#es4:priv-wiki-jan-2007)]。他与 Lakshman、IE 团队的软件架构师和从事 Web 应用开发的微软工程师都进行了交谈。他意识到 JavaScript 在 Web 上发挥的作用，明显属于 Richard Gabriel [[1990](./references.md#WiB)]「Worse Is Better」理念的实例。它最早只是个最低限度上的创造，并以一种分散的方式成长，现在则已经深深地根植在了 Web 之中。相比之下，新版 ES4 的努力在 Wirfs-Brock 看来，则属于被 Gabriel 称为「做正确的事」的项目，不太可能获得成果。哪怕取得了成果，也会对 Web 造成很大的破坏。作为结论，他认为在技术上负责任的做法，是尝试让 ECMAScript 的演化重新回到增量演进的道路上。

鉴于微软当时对 Web 浏览器技术缺乏战略兴趣，Wirfs-Brock 认为 DevDiv 管理层不太可能有兴趣将资源分配给与 Web 浏览器相关的工作。他决定在向 DevDiv 内部公开时，需要关注新版 ES4 倘若成功所可能带来的后果。他确定的主要关注点是 Adobe 在 ActionScript 3 语言定义和虚拟机方面的贡献。DevDiv 特别关注的地方是 .NET 平台和 C# 旗舰语言，这些产品的主要客户是企业级应用的开发者。虽然 .NET 的主要竞争对手是 Sun 公司的 Java 平台，但 DevDiv 也开始将 Adobe 公司基于 ActionScript 的 Flash 和 Flex 产品视为 .NET 的竞争对手。Wirfs-Brock 预计新版 ES4 如果成功落地，可以将 ActionScript 转变为一线企业级语言，其功能和实用性可以与 C# 或 Java 相媲美。基于这一点，再加上 JavaScript 作为 Web 开发主要语言的标准化，可以推测出新语言可能对微软的语言和开发者产品造成严重的竞争威胁。

Allen Wirfs-Brock 写了一份备忘录，说明了这些担忧，并建议微软在 TG1 内部积极开展工作，试图将 TG1 重新引导到对 ECMAScript 标准增量、非破坏性演进的道路上。到 1 月中旬，这个建议获得采纳，Wirfs-Brock 则被授权执行该建议。2007 年 1 月 18 日，Pratap Lakshman 在 TG1 内部邮件列表上发布了一条消息 [[TC39 2003](./references.md#tc39:reflector)]，介绍 Wirfs-Brock 为新的微软 TG1 代表。

3 月份的 TG1 面对面会议将由微软主办，Wirfs-Brock 决定在这次会议上首次参会。但他还觉得，必须尽快打消委员会对「微软支持新版 ES4 工作」态度的认识。他要求 Pratap Lakshman 在 2 月的会议上传达这一信息。Lakshman 照做了，并在 TG1 的内部 Wiki 上发布了一个页面 [[Lakshman 2007a](./references.md#browserprofile)]，提出了一种描述简化的 ES4 浏览器模式（browser profile）的设想。他报告说自己收到的回应相当不友好，但在一次茶歇时间，Douglas Crockford 找到了他，提出雅虎愿意和微软一起反对新版 ES4。

Allen Wirfs-Brock 联系了 Douglas Crockford，他们同意一起合作制定微软 - 雅虎的联合提案，以替代新版 ES4 项目。Crockford [[2002d](./references.md#crock2002)] 此前曾发布过一小套关于修改 ECMAScript 语言的建议，其目的是通过纠正原始设计中的错误和不便，从而使语言「更好一点」。Wirfs-Brock 和 Crockford 同意将这些建议作为联合提案在技术上的出发点。Pratap Lakshman 则提出了一份进行最小化修改的提案 [[Lakshman 2007b](./references.md#minimalES4)]，其中能纳入 Crockford 所建议的许多 ES3 改动，相当于他对自己「浏览器模式」设想的后续行动。同时，Wirfs-Brock 与 Crockford 和 Lakshman 合作，起草了一份更正式的提案，并在微软和雅虎内部流传，以供内部批准。在 3 月 21 到 23 日的 TG1 会议前，他们于 2007 年 3 月 15 日发布了提案 [[Crockford et al. 2007](./references.md#crock:refocus)]。Crockford 将提案通过 TG1 的内部邮件列表进行了分发。

这份提案名为《关于重新聚焦 TC39-TG1 对 ECMAScript 第三版规范维护的提案》，其开篇段落如下：

> 我们认为，目前 TC39-TG1 正在开发的 ECMAScript 4 规范，与目前的标准完全不同，它本质上是一种新的语言。对于一个被广泛使用的标准化语言的修订版来说，这样剧烈的改动是不合适的。而且鉴于目前 ECMAScript 第三版在 AJAX 式 Web 应用中的广泛采用，这样的改动也是不合理的。我们认为，基于目前的语言设计工作，TC39-TG1 内部无法达成共识。然而，我们相信可以找到一个替代性的解决方案，并将这一提案作为可能的解决途径。

这份提案建议，TG1 应围绕三个工作项目进行重组。第一个工作项目是维护当时的 ECMAScript 语言，即由第三版规范定义的 ECMAScript 语言。维护工作将包括：澄清第三版规范中未明确的部分，纳入新特性（如 Mozilla 的 JavaScript 1.6 / 1.7 中的新特性），以及一些如 Crockford 所列举的小型修正和改进。第二个工作项目是为 ActionScript 起草一份标准定义。第三个工作项目是为浏览器定义一种新的编程语言，这门语言可以与 ECMAScript 共存，同时不受 ECMAScript 兼容性的限制。提案还提出了将工作项目二和三合并的可能性。它建议将这两者分配给一个新的 TC39 工作组，而不是 TG1 工作组。

正如预期的那样，TG1 内部邮件列表<sup>[69](./notes.md#69)</sup>上对此的反应普遍是负面的，但它确实显示出苹果的 Maciej Stachowiak [[2007b](./references.md#maciej:refocus)] 也对新版 ES4 的发展方向持保留意见。Brendan Eich [[2007b](./references.md#brendan:refocus1)] 是最有分量的回应者，他为静态类型和其他新版 ES4 的特性辩护，认为这些特性对于增强性能和大型应用的结构化至关重要。他还质疑了微软和雅虎提出这份提案的动机 [[Eich 2007c](./references.md#brendan:refocus0)]。

随着 3 月会议日期的临近，电子邮件上的讨论愈演愈烈。Pratap Lakshman 要求将会议第二天的大部分时间用于讨论微软和雅虎的提案。Brendan Eich 反驳说讨论一个小时就应该足够了。他和 Jeff Dyer 都表示希望将会议的大部分时间继续作为新版 ES4 的 hackathon。并且 Eich 和 Dyer 都认为，新版 ES4 的开发代表了微软帮助建立的 TG1 长期以来形成的共识，并质疑微软和雅虎现在试图打破这一共识是否合适。Allen Wirfs-Brock 对此回复说，现在共识已经被打破了，因为微软和雅虎是 Ecma 三个标准会员（Ordinary Member）中的两个，他们都经常参加 TG1。

3 月份会议第二天 [[TC39-TG1 2007c](./references.md#TC39-TG1:2007:013)] 的出席人数比平时多。除了 Allen Wirfs-Brock 和 Pratap Lakshman 外，微软的代表还有 Scott Isaacs 和 Chris Wilson。Isaacs 是微软「live.com」的框架架构师，还是 DHTML<sup>[70](./notes.md#70)</sup> 的初始开发者之一。Wilson 则是 Internet Explorer 的平台架构师，并积极参与 W3C Web 标准的制定。Isaacs 和 Douglas Crockford 都谈到了在浏览器 ECMAScript 实现的互操作性不佳的情况下，Web 应用开发上的困难。Crockford 认为，更完整的 ES3 级特性规范将有助于消除互操作性问题，从而提高 Web 的稳定性。Isaacs 特别关注的是，应当尽量减少新的语言语法扩展，因为这些新的扩展可能导致旧浏览器在执行新网页时出现解析错误。Isaacs 和 Crockford 都强调了 Web 应用中安全和隐私功能的重要性。对此 Eich、Dyer 和 Graydon Hoare 则反驳说，要想构建更稳定、更安全、更高性能的浏览器编程环境，新版 ES4 的类型系统是必需的基础。Wirfs-Brock 认为，进化后的「ES3.1」规范将有助于稳定 Web，并为 ES4 的实现和流行提供时间。Eich 担心这只是一种拖延策略，让微软有时间建立他们基于 .NET 的富互联网应用平台<sup>[71](./notes.md#71)</sup>，从而与基于标准的 HTML / CSS / JavaScript 平台进行竞争。他警告说，现在社区里已经有很多人对 ES4 充满了热情，如果微软和雅虎强行推迟开发 ES4，会给微软和雅虎带来负面影响。

最终，大家一致认为，开发「ES3.1」规范可能有一定的价值，微软和雅虎可以在 TG1 的背景下进行工作。这也就是 Wirfs-Brock 在筹备会议时所希望的结果。新版 ES4 的支持者坚持认为 ES3.1 必须是新版 ES4 的一个子集，其规范必须使用为新版 ES4 开发的规范风格。Wirfs-Brock 对这些限制并不太担心，因为他仍然认为新版 ES4 规范不太可能完成并发布。

会后，Pratap Lakshman、Allen Wirfs-Brock 和 Douglas Crockford 开始着手定义 ES3.1 项目。Wirfs-Brock 和 Crockford 在 3 月 29 日举行了会议，并同意 Lakshman 应起草一份初步提案，在 4 月 TG1 会议前分发。Crockford 提出了一些设计准则，并建议 3.1 规范采用与 ES3 规范相同的风格。这与 3 月会议上达成的共识有冲突，但在新版 ES4 规范的最终形式尚未确定的情况下，使用相同的规范形式也是有问题的。

4 月 15 日，Pratap Lakshman 以《ES3.1 提案工作草案》[[Lakshman et al. 2007](./references.md#es3.1:wd0)] 为题，在 Wiki 上发布了一些页面。它列出了一系列目标、前后向兼容性要求，以及设计准则（图 27）。它还包括了大约 20 个修复、修改和新特性的描述，这些特性都是候选的，其中有许多来自于 Douglas Crockford 的《ECMAScript 修改建议》文档。他于 4 月初更新了这份文档，并在 ES3.1 开发过程中进行了两次更新 [[Crockford 2007b](./references.md#crock:2007b), [c](./references.md#crock:2007a), [d](./references.md#crock:2007c)]。

```
目标
1. 通过重写规范来提高实现的一致性，提高规范的严谨性和明确性，并纠正已知的模糊点或不够规范之处。
2. 在标准中添加已被实现和使用的常见扩展（特别是大多数 JavaScript 1.6 和 1.7 的特性）。
3. 纳入增量扩展，着重支持当前的使用经验和最佳实践。
4. 采用影响较小的语言修改，纠正已知的性能或可靠性问题。
5. 将确定有问题的特性标记为废弃。
6. 最大限度地提高 ES3 和 ES3.1 之间，以及 ES3.1 和 ES4 之间的前向和后向兼容性。

设计准则
1. 主要重点是纠正已知的错误和澄清已知的歧义。
2. 只有在以下情况下才考虑新特性：
  a. 不引入新的语法
  b. 提供重要的新价值
3. 倾向于现有实现方案中已被证明的特性。
4. 如果已有特性会造成重大的安全性或可靠性问题，则可能被标记为废弃。
  a. 考虑废弃那些会导致重大性能问题的低价值特性。
```

图 27. ES3.1 的初始目标和设计准则 [[Lakshman et al. 2007](./references.md#es3.1:wd0)]。

在 4 月的会议 [[TC39-TG1 2007a](./references.md#TC39-TG1:2007:017)] 上，委员会讨论了 ES3.1 工作草案。新版 ES4 开发者的主要关注点是 ES3.1 工作与新版 ES4 规范之间的关系。他们希望 ES3.1 工作遵循他们打算在新版 ES4 中使用的 ML 参考实现规范技术。ES3.1 小组反驳说，为一个规范的维护版本完全改变规范技术，其意义似乎并不大。Jeff Dyer 最后建议，鉴于观点的不同，ES3.1 的人应该继续他们手头的工作。但他也提出了警告，认为在 ES3 规范的背景下所做的工作，对小组的其他成员没有什么价值。

在 2007 年春夏之交的其余时间里，这两个小组基本上都持续在各自的项目上工作。ES3.1 小组分析了现有的 ES3 规范及其实现，以确定由于规范化程度不够或未能遵循规范而存在的互操作性问题 [[Lakshman 2007c](./references.md#jscriptdeviations); [Wirfs-Brock 2007b](./references.md#awb:mozextensions); [Wirfs-Brock and Crockford 2007](./references.md#awb:aug07crockmeeting)]。新版 ES4 小组则以其 ML 参考实现为工具，继续完善他们的各种提案。

新版 ES4 项目的时间安排仍然非常紧迫。在 2007 年 5 月初，一份提交给 Ecma 共同管理委员会的报告 [[Miller 2007](./references.md#TC39:2007:002)] 指出，新版 ES4 规范的最终草案将在 2007 年 10 月前完成，以便 Ecma GA 大会在 12 月批准它。2007 年 6 月 8 日，Dave Herman [[2007](./references.md#Herman:LtU); Appendix K] 在 *Lambda the Ultimate*<sup>[72](./notes.md#72)</sup> 博客上宣布 ES4 参考实现的「M0」版本<sup>[73](./notes.md#73)</sup>已经可用。

在 6 月的会议 [[TC39-TG1 2007b](./references.md#TC39-TG1:2007:025)] 上，有人呼吁立即启动 ES4 的规范编写进程。但当时仍有重大的技术设计问题未能解决，也经常发现新的问题。例如在 7 月的会议 [[Eich 2007d](./references.md#TC39:2007:008)] 上人们意识到，新版语言在对结构化类型做运行时类型检查时还有重大问题。

9 月 7 日的 TG1 召集人报告指出，想在 2007 年完成新版规范是不现实的，新的完成日期被推后一年至 2008 年 9 月。报告中还介绍 Lars Hansen 将担任新版 ES4 的编辑。这份报告既没有提到正在进行的 ES3.1 工作，也没有提到雅虎和微软对新版 ES4 的保留。

9 月会议 [[TC39-TG1 2007d](./references.md#TC39-TG1:2007:036)] 的目标之一，是接受、拒绝或推迟 ES4 Wiki 上所有未决的新版 ES4 提案。从新版 ES4 工作组的角度来看，这包括了被标记为「维护 ES3」的提案，这是 ES3.1 工作的总括性提案。Jeff Dyer 在会上的立场是，这份提案需要在当天被接受或拒绝（并在 Wiki 上标明）。如果被否决，该提案将不再作为 TG1 的工作项目。从会议记录中可以看出，他不认为提案有可能被接受。Brendan Eich 的立场则更为微妙。作为新版 ES4 的公开支持者，他认为 ES3.1 的努力让他分心，并非常怀疑微软的动机。他不希望 ES3.1 的开发与新版 ES4 竞争，并建议 ES3.1 的支持者们考虑离开 TG1，看看 TC39 是否愿意为他们建立一个新的任务组。然而作为 TG1 的召集人，他希望找到一种避免组织分裂的方法。他建议，ES3.1 小组的工作成果可以作为 Ecma 技术报告来发表，或发表为其他一些不太正式、非 ISO、非标准轨道的文档。整个谈话过程非常激烈，对新版 ES4 和 ES3.1 的支持者来说都很紧张。Pratap Lakshman 一度沮丧地表示：「不论是全部还是部分，我们都既不支持也不同意目前的 ES4 提案。我们打算继续与有兴趣的任务组成员合作，制定一份对现行规范进行更多增量修订的提案。」尽管这不是个非常政治化的声明，但它也反映了微软的立场，只是在范围涉及全部新版 ES4 这一点上略有出入。最后「维护 ES3」提案状态的问题得以变通解决，方法是将关于 ES3.1 的页面从 Wiki 的「提案」命名空间下移到了新的「ES3.1」命名空间下。然而，ES3.1 和新版 ES4 的支持者们在目标上的冲突仍然存在，相关言论很快就公开化了 [[Kanaracus 2007](./references.md#sabers)]。

### 寻求和谐
2007 年期间，活跃的 TG1 参与者开始增加，这其中部分原因在于 ES3.1 和新版 ES4 小组都努力鼓励新成员和目前不活跃的成员参加会议。在当年春季，先前并不活跃的 TG1 成员 IBM 和苹果，也开始更经常地派代表参加 TG1 会议，并参与在线讨论。Google 作为标准会员加入了 Ecma，并任命 Waldemar Horwat 为其 GA 代表和 TG1 代表领导。Dojo 基金会作为非营利会员加入，由 Alex Russell 和 Chris Zyp 代表。Allen Wirfs-Brock 和 Douglas Crockford 都鼓励对象能力（OCAP）[[Miller 2006](./references.md#ocap)] 语言<sup>[74](./notes.md#74)</sup>专家 Mark S. Miller 参与进来。Miller 曾在 Google 工作，他开始以 Google 代表的身份参加会议。一些新的与会者为小组带来了属于 Web 开发者的视角，在以前小组一直是由语言设计者和引擎实现者主导的。

2007 年初，TG1 的目标是在 10 月前完成新版 ES4 规范。这一目标没有实现，但 Lars Hansen [[2007e](./references.md#es4overview)] 在 10 月完成了一份文件，其初稿 [[Hansen 2007b](./references.md#lars:overview0)] 名为《ECMAScript 第四版语言概述》。这不是一份详细的规范，而是对语言主要特性的 40 页总结。其摘要的第一段是这样描述新版 ES4 语言的：

> 第四版的 ECMAScript 语言（ES4）代表了 ECMA 在 1999 年批准的 ECMA-262 标准语言第三版（ES3）的重要演变。ES4 与 ES3 兼容，并增加了重要的设施，用于大型程序设计（类、接口、命名空间、包、程序单元、可选的类型注解，以及可选的静态类型检查和验证）、演化式编程和脚本编写（结构化类型、鸭子类型、类型定义和方法多重派发）、数据结构构建（参数化类型、getter / setter 和元级方法）、控制抽象（适当的尾调用、迭代器和生成器）以及类型自省（类型元对象和堆栈标记）。

最终证明，这份文档是对人们设想中新版 ES4 语言的最佳整体描述。然而，Allen Wirfs-Brock [[2007c](./references.md#awb:overview0)] 和 Douglas Crockford [[2007a](./references.md#crock:2007d)] 都对「ECMAScript 第四版」这一名称被不加限定地使用表示担心，这暗示了其所描述的语言已非常接近最终批准的 Ecma 标准。此外这份文档在导言中宣称，其整体设计代表了 Ecma TC39-TG1 的共识，并未提及任何 TG1 中对新版 ES4 在设计上的不同意见。在沟通后，Hansen 同意在文档标题前加上「拟议」字样，并在文档导言中插入了一段话，指出 TG1 中有少数成员对该设计的标准化表示反对。在新版 ES4 小组成员为分发概览文件和参考实现代码而建立的网站 [[TC39 ES4 2007c](./references.md#es4:es4doc)] 上，人们也提出了类似的意见。这些事件增加了 ES3.1 支持者对新版 ES4 支持者们的担忧，担心他们继续公开宣传 ES4，同时继续无视或贬低 ES3.1 的开发。

Allen Wirfs-Brock 经常与微软的企业标准小组保持联系，其中包括 Ecma 共同协调委员会（CC）的成员 Isabelle Valet-Harper。协调委员会 [[Ecma International 2007b](./references.md#GA:2007:088)] 关注的是，TG1 将外部托管的私有 Wiki 作为文档和会议记录的载体，Ecma 秘书处和一般会员无法访问它们。秘书处要求 TG1 将议程、会议记录和重要文档格式化，以便发表到对 Ecma 内部成员专用的网站上。TG1 决定，对此最简单的办法是将整个 TG1 的 Wiki 网站都设为公开可读 [[TC39 2007](./references.md#TC39:wiki)]。

在 2007 年 10 月的 Ecma CC 会议 [[Ecma International 2007a](./references.md#GA:2007:202)] 上，委员会讨论了 TC39-TG1 的运作问题。在 2001 年之前，TC39 的章程只涉及 ECMAScript。2001 年它进行了扩张，包含了更多的编程语言和平台，其中每种都由一个基本独立的 TG 任务组负责。ECMAScript 的开发工作则交由 TC39-TG1 负责。Ecma 秘书处一般侧重于监督和支持 TC 技术委员会一级的活动，而非监督 TG 工作组。在 2007 年，TG1 工作组的独立运作似乎缺乏 TC39 或秘书处的监督。一些协调委员会成员担心，TG1 可能没有完全遵守 Ecma 的政策和程序。会议还讨论了 TG1 工作组内部据称对其当时的工作缺乏共识的问题。人们讨论了一种可能的解决办法，那就是将 TC39-TG1 升格为正式的 TC 技术委员会，这样它将得到秘书处更大的监督。时任 Ecma 主席 John Neumann 同意出席 2007 年 11 月的 TG1 会议，试图使情况明朗化。

这次会议 [[TC39 2007](./references.md#TC39:2007:012)] 主要用于表达协调委员会的关切，并讨论了 ES3.1 和新版 ES4 项目之间显著缺乏共识的问题。John Neumann 强调了他对 TG1 在向 Ecma 传达会议通知、议程、会议记录和关键文档时缺乏沟通的关切，并坚持认为这种情况需要改变。他还提出了警告，认为从 Ecma 委员会的角度来看，TG1 在某些情况下过于公开。特别是 Ecma 管理部门内也有人担心，TG1 成员之间的分歧会在网络博客和论坛上公开争论。Neumann 宣布，他将建议把与 ECMAScript 相关的活动再次作为 TC39 的唯一关注点。总体上看来，TC39-TG1 将被重命名为 TC39。这将使与 ECMAScript 相关的工作在 Ecma 内部得到更多的关注，并使 Ecma 秘书处能直接为其提供支持和监督。TC39 内其他正在开展工作的任务组，则将转入新成立的 TC49 任务组。这一改组在 2007 年 12 月的 Ecma GA 大会上获得批准。自 2008 年 1 月起，TC39-TG1 再次成为了 TC39。

11 月的会议还讨论了 TC39 的后续章程。Douglas Crockford 提议，应该有个新项目来定义一种*安全的 ECMAScript*<sup>[g](./appendices.md#Secure-ECMAScript)</sup>（SES），以支持 *mashup*<sup>[g](./appendices.md#mashup)</sup> 和其他注重安全性的应用。Allen Wirfs-Brock [[2007](./references.md#tc39-tg1:2007:042)] 则发布了一份新的《微软立场声明》，重申了微软的呼吁，即采取循序渐进的方式推进 ES3 语言和规范的发展，而非继续现有的新版 ES4 工作。Crockford 宣布雅虎支持这一立场。Lars Hansen 断言称「3.1 的提案一直停滞，最终在 9 月份被搁置，我们在这里致力于 ES4 而非 3.1」。Brendan Eich 也认为自 4 月以来 ES3.1 都没有多少进展。Wirfs-Brock 不接受 ES3.1 被搁置的说法，指出已有多份分析 ES3 互操作性问题的文档 [[Lakshman 2007c](./references.md#jscriptdeviations); [Wirfs-Brock 2007a](./references.md#awb:loopholes), [b](./references.md#awb:mozextensions); [Wirfs-Brock and Crockford 2007](./references.md#awb:aug07crockmeeting)]，它们都属于对 ES3.1 开发的投入。

为了评估对 TC39 三项可能的开发活动的兴趣，委员会进行了一次投票调查。与会的所有人（代表九个组织）都支持继续开展新版 ES4 的工作。继续开发 ES3.1 的工作得到了微软、雅虎、苹果、谷歌和 Mozilla 的支持。安全 ECMAScript 的启动工作得到了微软、雅虎、苹果和谷歌的支持。从 Ecma 的角度来看，这一支持度已足以证明在新的 TC39 中推进这些活动是合理的。不过微软也支持新版 ES4，这并不符合其立场文件中的说法。Allen Wirfs-Brock 回忆说，他认为不必在这一点上更进一步，因为他仍然预测对新版 ES4 的努力最后不会成功。

在 2007 年 12 月的 Ecma GA 大会后，Isabelle Valet-Harper 与 Allen Wirfs-Brock 讨论了谁可能是新 TC39 的合适主席。Brendan Eich 无法担任主席，因为 Ecma 当时的规则要求 TC 主席必须是一名来自标准会员的代表，而 Mozilla 则是一个非营利性会员。Wirfs-Brock 和 Valet-Harper 达成了一致，认为理想的主席应该是对 ES4、ES3.1 或任何其他可能的 TC39 项目没有利益相关或意见的人。Valet-Harper 建议微软和 Adobe 本着合作的精神，分别与 John Neumann 签约，由 John Neumann 代表他们，并共同提名他担任 TC39 主席。这一想法获得了 Adobe 的同意，并在 2008 年 1 月的 TC39 会议上得以宣布。在 2008 年 3 月的会议上，Neumann 被正式选为 TC39 主席。

2007 年 11 月，Lars Hansen [[2007c](./references.md#TC39-TG1:2007:044)] 编写了一份《编辑报告》，并提出了新的时间表，目标是在 2008 年 10 月前完成新版 ES4 的最终草案，并在 2008 年 12 月将其作为 Ecma 标准发布。他还写了一篇论文 [[Hansen 2007a](./references.md#TC39-TG1:2007:046)]，总结了新版 ES4 与 ES3 的有意不兼容之处，并写了一篇关于如何用新版 ES4 的渐进式类型支持演化式编程的教程 [[Hansen 2007d](./references.md#TC39-TG1:2007:045)]。2008 年 2 月，Jeff Dyer [[2008a](./references.md#ES4work)] 发布了一份新的工作计划，目标仍然定在 12 月，而中间的草案将在 5 月、7 月和 9 月完成。Hansen 和 Dyer [[2008](./references.md#ES4Defer)] 还发布了一份题为《在拟议的 ECMAScript 4 中将推迟的特性》的立场声明。声明中认为，当时的新版 ES4 计划包括了一些「奇怪的、未经证实的或代价高昂的」特性。而推迟实现这些特性：

> 将会大大增加在 2008 年完成规范的可能性，增加社区的参与度，有助于保持实现的复杂性可控，降低标准化的风险，并在一定程度上减少 TG1 成员之间的分歧。

声明中建议推迟的特性包括：数值转换、int 和 uint、十进制小数运算、运算符重载、泛型函数、`wrap`<sup>[75](./notes.md#75)</sup>、堆栈标记、生成器、尾调用、nullability、程序单位、重构的 `with`、修订后的 `eval` 和命名空间过滤器。在说明了这些特性被推迟的原因之后，声明提出了 Adobe 对 ECMAScript 未来发展的修订后意见：

> 我们认为 ES 相比于我们目前所看到的 ES4，应该更多地以一种零散的方式发展。从 E262-3 的发布到 E262-4 的发布已经过去了 9 年，这本身并不是一次性引入大量新特性的有效理由。每个特性都必须有其重要性，而且必须基于经验来指导我们。即便如此，本文并不主张接纳一个被注水的「ES3.1」（其实应该叫「ES3.01」）。我们主张现在就采用 80% 完成度的解决方案「ES3.8」，然后计划在不久的将来，当这些需求更明确的时候，再发展到满足新的需求。

在 TC39 的会议记录中，或者在 TC39 的内部或公开的电子邮件渠道中，都没有关于这份立场文件的实质性讨论记录。唯一有记录的回应是 IBM 对于排除十进制小数运算的建议表示反对。在同一时期，还出现了大量对新版 ES4 在设计、方法论和开发进程等各方面的批评意见。这些批评意见被发布到了 `es4-discuss`<sup>[g](./appendices.md#es4-discuss)</sup> 邮件列表中，其中一些批评来自于有影响力的框架开发者，以及苹果和谷歌的 ECMAScript 实现者。2008 年 3 月，新版 ES4 的设计者们发现 [[Dyer 2008b](./references.md#pckmustgo)] 用于定义模块的新版 ES4 包抽象存在着根本性的语义问题，在 5 月还发现了命名空间的问题 [[Stachowiak 2008b](./references.md#namesAsSugar)]。

在 2008 年的春天，Lars Hansen 发布了新版 ES4 个别规范部分的初稿以征求反馈意见。5 月 16 日，Hansen [[2008](./references.md#es4draft1-announce)] 公布了他的规范初稿 [[Hansen et al. 2008a](./references.md#TC39:2008:042), [b](./references.md#TC39:2008:040), [c](./references.md#TC39:2008:041)]。

> 随本文附上的是拟议的 ECMAScript 第四版规范相当不完整的初稿。这份草案包括一个简短的介绍，语言的表层语法，以及对核心语义的描述——包括值、存储、类型、名称、作用域和名称解析。更多的内容将在准备就绪后陆续发布，可能（或多或少地）每两个月发布一次。

在同一时期，ES3.1 子组开始开发一个由 ES3 规范衍生的规范。来自 Google、IBM、Dojo 基金会和苹果等组织的参与者不断扩大。ES3.1 规范的初稿于 5 月 28 日发布 [[Lakshman 2008](./references.md#es3.1:draft1announce); [Lakshman et al. 2008](./references.md#es3.1:28-5-08-draft)]。

在 2008 年 5 月 29 日到 30 日的会议上，这两份规范都由其编辑进行了介绍。详细的讨论时间被推迟到了 7 月份的会议上，以使成员们有时间阅读规范。从进展速度、剩余的写作量以及尚未解决的设计问题的数量来看，新版 ES4 的最终规范明显不可能在 2008 年 12 月前完成，其发布时间更可能是 2009 年 6 月或 2009 年 12 月。而对 ES3.1 来说，为了使其能在 2008 年 12 月前完成，所有主要的设计决策都需要在 2008 年 7 月会议前完成。将其发布时间定于 2009 年 6 月似乎是个较为现实的目标。

2008 年 6 月底，John Neumann 组织了一次电话会议，与会者包括 Brendan Eich、Allen Wirfs-Brock、Douglas Crockford、Adobe 的 Dan Smith<sup>[76](./notes.md#76)</sup>，以及 Adobe 的 Ecma GA 代表 David McAllister。McAllister 和 Smith 宣布，Adobe 将停止对新版 ES4 的支持，分配给它的工作人员将转到其他事项中去。在场的每个人都明白，这标志着新版 ES4 已经告终，下面应该为此仔细安排一份更为公开的声明。他们同意在 7 月份即将召开的 的 TC39 会议上向全体 TC39 成员宣读这一决定，并在会上决定如何发表公开声明。而对 Eich 来说，Adobe 已经事先告知了他这一决定。他对此表示同意，并希望 TC39 的所有成员都能围绕着完成 ES3.1 的工作，制定出一个不受过去 ES4 设计决定限制的共同计划。他也同意在即将举行的会议上提出这一设想。接下来的会议将于 7 月 23 日至 25 日在挪威奥斯陆举行。这次会议的议程被修订 [[TC39 2008f](./references.md#TC39:2008:054-Rev1)]，将「ECMAScript 的和谐化（Harmonization ）」列为了第一个新议题。

在 2018 年的电子邮件讨论中，Jeff Dyer 和 Lars Hansen 回忆说，退出是他们与经理 Dan Smith 协商后做出的决定。他们已经确信，新版 ES4 不太可能完成。他们认为，ES3.1 工作组成员的反对意见使得新版 ES4 的工作停滞不前，而且很明显，在 ES3 现状基础上进行修复的方法在 TC39 中已经成为了主流，已经不再有空间来整合 ActionScript 3 的静态特性了。

Cormac Flanagan 在 2019 年的个人交流中推测，Adobe 的退出确实表明了新版 ES4 存在的问题。他的事后感想还包括以下几点：

* 为 ES4 计划的大量语言扩展（回头看来）是种高风险、非保守的做法。
* 在标准化进程中，主要由于静态类型系统的加入，标准涉及到了最前沿的语言技术（十多年后的 2019 年，这里仍然有一些未解决的研究和性能问题 [[Greenman et al. 2019](./references.md#DBLP:journals/jfp/GreenmanTNFFVF19)]）。在 TFP 07 上发表的《空间高效的渐进式类型》论文 [[Herman et al. 2011](./references.md#Herman:tfp07)] 受到了 ES4 中的性能问题的启发，这或许也体现了 ES4 工作的研究性质。
* 在 TC39 中，围绕 ES4 的「是否买入」担忧虽然一直是个问题，但从来都不是致命的。
* 尽管在后来的版本中被废弃，但基于 ML 的参考规范是个可行的设想。现在回想起来，也许从参考规范开始实现 ES3 会更好。

Douglas Crockford [[2008c](./references.md#crock:premature)] 在一篇博文中，则将新版 ES4 的失败归咎于「未经证实的过度创新」：

> 事实证明，标准机构不是创新的好地方。这是属于实验室和初创公司的领域。标准必须通过共识来起草。标准必须是没有争议的。如果一个特性过于模糊，以至于无法形成共识，那么它就不应该成为标准化的备选项。正由于这个原因，「委员会设计」是个贬义词。标准化机构不应该参与到设计的工作中来。他们应该坚持认真制定规范，这也是一项重要而艰巨的工作。

Allen Wirfs-Brock 回忆说，当 Adobe 宣布退出新版 ES4 时，他感到松了一口气。他知道，微软负责 IE 浏览器的高管们已经意识到，放弃对 IE 浏览器的投资是个战略错误。当时 IE 的市场份额正大量流失到 Firefox 浏览器，而且高管们也知道谷歌正准备推出新的浏览器。微软正在主动面对 Web 开发者中所流传的「微软反对 Web 技术进步」的观点。微软对新版 ES4 的反对（特别是经由 Brendan Eich 和微软 Chris Wilson 的公开争论所暴露出的事实）也更加印证了这种观点。到 2008 年 6 月，Wirfs-Brock 担心微软可能会因为纯粹的商业原因而改变决定：与其公开反对，不如顺其自然地支持新版 ES4。

在奥斯陆举行的 TC39 会议 [[TC39 2008g](./references.md#TC39:2008:067-Rev1)] 上，委员会的大部分时间都在围绕一套共同可实现的目标来解释「和谐化 TC39」的概念。总体计划是这样的：整个委员会的重点是在 2009 年完成 ES3.1 版本的发布，同时合作规划一个更重要的后续版本，即代号「和谐」（Harmony）的项目，它不受十年来 ES4 设计决策的限制。会议上讨论了一些特性算或不算「和谐的」，但在会上或会后与未参会的 TC39 成员的邮件讨论中，都没有人对基本计划提出严重的反对意见。会后编写的一份白皮书 [[Eich et al. 2008](./references.md#TC39:2008:074)] 总结了实施这一计划的步骤：

1. 在各方的充分合作下，将工作重点放在 ES3.1 上，目标是在明年初实现两个具备互操作性的实现。
2. 在 ES3.1 以外的下一步工作上进行合作，这将包括在语义和句法创新方面比目前 ES4 的建议更适度的语法扩展。
3. 删除 ES4 中的「包」、「命名空间」和「早期绑定」等概念。
4. 改写 ES4 中的其他目标和想法，以保持委员会的共识。这其中包括了「类」概念，它应当根据现有的 ES3 概念结合拟议的 ES3.1 扩展来实现。

8 月 13 日，Brendan Eich [[2008b](./references.md#Eich:ES-harmony); Appendix M] 通过电子邮件向 `es4-discuss` 邮件列表发送了一份略为个性化的白皮书。8 月 19 日，Ecma 国际 [[2008](./references.md#TC39:2008:073)] 发布了一份简短的新闻稿，宣布 TC39 将把工作重点放在 ES3.1 上。8 月 15 日，Eich 录制了一个播客 [[Openweb 2008](./references.md#openweb)]。他在其中解释了自己在技术层面和现实层面上对新版 ES4 失败的看法，以及他对 TC39 内部「和谐的未来」的希望。在播客开始不久，他说「通过命名空间来统一早期绑定和延迟绑定的尝试已经失败了。」后来他做了详细的说明：

> 首先我们把 ES4 的包给砍掉了，这是我们砍的。然后我们把 ES4 的命名空间也砍掉了，这也是我们砍的。我们这样做不是为了讨好 3.1。我们这样做是因为命名空间的问题。
> 
> ……
> 
> 这并不是让步，也不是对立斗争——这（新版 ES4）确实是个很好的尝试，它试着把事情统一起来，回到 Waldemar Horwat 的规范（也许甚至是 Common Lisp）去尝试命名空间和包，然后认识到它们不适合 Web。


# 插曲：认真对待 JavaScript
从 20 世纪 90 年代末开始，TC39 成员试图将 JavaScript 作为一种面向专业程序员的语言进行重新设计。到 2000 年代末，浏览器和其他相关平台的开发者们终于意识到，JavaScript 是他们平台中需要认真对待的工程部分。

## JavaScript 性能革命
当 Brendan Eich 在 1995 年 5 月构建 Mocha 时，性能既不是个关注点，也不是个目标。当时还没有任何 JavaScript 程序，为其预期的程序只要能对「基于其他更高效的语言实现的对象」做简单组合就够了。在当时的设想中，JavaScript 并不是用来编写哪怕稍复杂点的算法的。早期的 JavaScript 引擎使用简单的字节码解释器或解析树求值器来直接解释 JavaScript 函数，并使用简单的内存管理方案。它们没有利用 20 世纪 80 年代和 90 年代初为 Lisp、Smalltalk、Self 和其他动态语言开发的复杂的高性能实现技术。对 Netscape / Mozilla 的 SpiderMonkey 和微软的 JScript 引擎而言，其基本架构在十年来基本没有变化。在十年间，新的 ES3 级语言特性得以加入，安全问题也得到了解决。但无论这期间有什么性能提升，它们都可以归功于摩尔定律 [[Moore 1975](./references.md#moore1975)] 下的硬件性能进步。在这一时期的大部分时间里，维护浏览器的 JavaScript 引擎不过是一位软件开发者的兼职工作。

在 2000 年代的前半段，AJAX 式大型 Web 应用的出现，开始严重突破了第一代引擎的性能限制。到 2006 与 2007 年，Web 开发者对性能问题的呼声越来越高，浏览器厂商也开始派出团队来解决其 JavaScript 引擎的性能限制。对性能的度量是提高性能的重要起点，苹果的 *WebKit*<sup>[g](./appendices.md#WebKit)</sup> 团队为此创建了 SunSpider JavaScript 基准测试套件（benchmark suite）[[Stachowiak 2007a](./references.md#sunspider)]。SunSpider 远非完美，由相对较小的测试用例组成，但它来自于实际的 Web 应用代码。在它发布后不久，Web 应用开发者社区就开始经常使用 SunSpider 来比较浏览器的 JavaScript 性能，并对结果进行讨论。浏览器博弈论基本上阻止了浏览器厂商以 JavaScript 特性为基础进行竞争，但他们「可以并且确实」开始在 JavaScript 性能上进行竞争。

不同厂商采取了不同的路线来实现高性能的 JavaScript 引擎。2006 年，Google 开始研发一款最终成为了 *Chrome*<sup>[g](./appendices.md#Chrome)</sup> 的浏览器。Lars Bak 领导了 Chrome 的 *V8*<sup>[g](./appendices.md#V8)</sup> JavaScript 引擎的开发。这个引擎建立在他所开发的 Smalltalk、Self 和 Java 虚拟机 [[Google 2008b](./references.md#v8design)] 的技术基础上。当 Chrome 浏览器于 2008 年 9 月发布时，它成为了代表良好 JavaScript 性能的新基准。同时期的一份报告 [[Hobbs 2008](./references.md#hobbs:chrome)] 显示，在当时的 Firefox 版本中，V8 运行 Google 基准测试 [[Google 2008a](./references.md#v8benchmarks)] 的速度比当时发布的 SpiderMonkey 快约 10 倍<sup>[77](./notes.md#77)</sup>。然而在 SunSpider 基准测试中，V8 大约只快了 2 倍。

Mozilla 最初使用的路线称为 TraceMonkey [[Gal et al. 2009](./references.md#Gal2009)]，这是基于加州大学欧文分校的 Andreas Gal 博士毕业作品的引擎。它使用了现有的 SpiderMonkey 解释器，并在其基础上增加了一个跟踪驱动的 JIT 编译器。这个编译器能动态识别出执行热点，并为其生成优化后的原生代码。苹果的 SquirrelFish Extreme [[Stachowiak 2008a](./references.md#squirrelfish)]（也就是 Nitro）则使用了受 Self 和高性能 Lua 实现启发的技术。微软最初试图逐步重新设计其遗留的 JScript 引擎，以便在 IE8 中使用。但在 IE9 中微软推出了 Chakra，这是一个基于 JIT 的全新 JavaScript 引擎 [[Niyogi 2010](./references.md#chakra)]。

所有这些努力仅仅是优化 JavaScript 性能的起点。今天，每一个主流浏览器的开发都需要一个实质性的 JavaScript 团队，专注于性能、安全性和 ECMAScript 标准的新语言特性。这些团队所开发的每个引擎都是在兼容的开源许可下发布的。因此这些团队能在彼此的工作基础上分享想法，有时还可以分享完整的子系统。最快的 JavaScript 实现就是这样在他们的竞争中产生的。

## CommonJS 和 Node.js
从诞生之初起，JavaScript 也会部署在服务端平台上，提供基本的脚本功能。然而每个平台都有所不同，提供了自己特有的 JavaScript API。在 JavaScript 诞生的前 15 年里，并没有一个通用的、领域独立的、可互操作的非浏览器 JavaScript 应用环境。2009 年 1 月，曾在 Adobe 和 Mozilla 工作过的 Khan Academy 开发者 Kevin Dangoor 决定改变这种状况。他写了一篇博客文章 [[Dangoor 2009](./references.md#Dangoor1)] 描述了这些问题，并邀请服务端 JavaScript 社区通过在线讨论组和 Wiki 参与到解决问题中来。一年后，他在一篇后续的博文 [[Dangoor 2010](./references.md#Dangoor2)] 中，将自己最初希望创造的东西总结为如下：

* 一个模块系统（module system）
* 一个跨解释器的标准库
* 若干个标准接口
* 一个包系统（package system）
* 一个包仓库（package repository）

在一周内，有 224 名成员加入了讨论组 [[Kowal 2009a](./references.md#kowalars)]，其中许多人表示有兴趣为这个项目做出贡献。这个提议最初被称为 ServerJS，但在 2009 年 8 月更名为 *CommonJS*<sup>[g](./appendices.md#CommonJS)</sup>，因为这一技术的适用性已经超出了服务端的范畴。提议的重点在于编写规范，而非实现。

到 2009 年 4 月，小组获得了一份初步的模块规范 [[CommonJS Project 2009](./references.md#cjs1.0)]。这个 CommonJS 模块规范主要基于 Kris Kowal 和 Ihab Awad 的设计 [[2009a](./references.md#tc39:2009:11)]。一个 CommonJS 模块就是一个 JavaScript 函数体，其作用域内包括了多个变量绑定，这些绑定使得函数体内的代码能与其他模块进行交互。这一能力是由一个同步模块加载器实现的。模块加载器会获取模块的源码，用一个骨架函数定义包裹它们，接着解析并调用合成函数（synthesized function）来初始化该模块，并初始化它到其他模块的连接。如图 28 所示，模块级的作用域声明会成为合成函数的局部变量。模块系统的控制钩子则作为函数参数暴露出来，其值由加载器提供。`require` 参数是一个函数，它同步地对所请求的模块执行上下文加载过程，并返回其 `exports` 的值<sup>[78](./notes.md#78)</sup>。默认情况下，`exports` 的值是一个由加载器提供的对象。在 CommonJS 中，从模块的名称，到实际的 `exports` 值，再到模块所导出属性的名称和值，都可以被动态生成。这使得想要预先获知程序「需要哪些模块，以及有哪些实体在这些模块之间共享」变得困难，有时这甚至是无法实现的。

``` js
// moda.js - 源码
var modp = require("modp");
exports.n = modp.p++;
exports.modName = "prefix" + exports.n;


// modb.js - 源码
var modx = require(require("moda").modName);
var propName = Object.keys(modx)[0];
exports[propName] = modx[propName];


// moda.js - CJS 展开后
(function (exports, require, module) {
  var modp = require("modp");
  exports.n = modp.p++;
  exports.modName = "prefix" + exports.n;
});

// modb.js - CJS 展开后
(function (exports, require, module) {
  var modx = require(require("moda").modName);
  var propName = Object.keys(modx)[0];
  exports[propName] = modx[propName];
});
```

图 28. CommonJS 模块被模块加载器转换成了「实现模块模式的函数」。模块之间的共享，是通过动态构造出的 `exports` 对象上的属性来实现的。

CommonJS 模块的早期使用者之一，就是 2009 年初由 Ryan Dahl 开发的 *Node.js*<sup>[g](./appendices.md#Nodejs)</sup>。在其设想中，Node.js 是个用于通过 JavaScript 构建服务端应用的开源平台，其能力足以处理大量的客户端同时连接。Node.js 支持一种异步的 I/O 模型，并为此提供了一个带有库的 JavaScript 编程环境。它连接起了常见的 POSIX 接口、JavaScript 回调，以及简化的浏览器事件循环，其整体实现主要包含了谷歌的 V8 JavaScript 引擎、一个 CommonJS 模块加载器，以及一组 C 语言实现的模块。这些模块提供了许多平台接口的非阻塞版本，包括 POSIX API 和其他高层面的文件和网络操作。Node.js 的首个公开版本是在 2009 年 5 月发布的 [[Node Project 2009](./references.md#node0.1)]。但直到 2009 年 11 月 Dahl [[2009](./references.md#dahlvideo)] 在 jsconf.eu 上做了一次演讲后，它才引起了人们的重视。此后不久，Dahl 被 Joyent 雇用。Joyent 负责管理和支持 Node.js 的进一步开发，直到 2015 年将其交接给 Node.js 基金会为止 [[Node Foundation 2018](./references.md#node2018)]。

Node.js 最早被设想为一种用于构建服务端应用的技术。但它已经成为了一个平台，使 JavaScript 能作为通用编程语言，应用在包括小型嵌入式设备在内的各种平台上。Node.js 的 I/O 模块与高性能的 V8 引擎相结合，在能力上足以与 Python 和 Ruby 等其他动态应用语言相媲美，在性能上也往往更胜一筹，成为了编写命令行 JavaScript 应用时的事实标准。Node.js 使掌握了 JavaScript 的 Web 程序员能将其技能转移到其他类型的应用和非浏览器环境中。最初许多客户端 Web 应用的开发者们之所以使用 JavaScript 编程，是因为他们别无选择。而许多 Node.js 开发者选择使用它，反而是因为他们更喜欢用 JavaScript 编程。

## 成为浏览器通用运行时的 JavaScript
JavaScript 这门语言属于一系列 Web 标准套件中的一部分，这些标准定义出了可互操作的浏览器平台。它是仅有的一门网页开发者们可以预期在每个浏览器中都能使用<sup>[79](./notes.md#79)</sup>的语言。如 Java、Adobe Flash 和微软 *Silverlight*<sup>[g](./appendices.md#Silverlight)</sup> 等其他语言环境，都不属于这个标准平台的一部分，必须使用特定于浏览器的扩展机制来集成到浏览器中——前提是这门语言支持这个浏览器。通常情况下，语言引擎必须由浏览器用户单独安装，并且可能无法完全集成到浏览器的标准服务中，比如基于 DOM 的图形模型。

浏览器博弈论预测，任何「通过增加另一种编程语言来扩展标准浏览器平台」的尝试，其成功的可能性都极低。浏览器厂商需要大量投入来设计、实现和推广一种新的 Web 语言，却不能保证它能在 Web 开发者中流行。要想让这门语言获得接纳，需要所有的主流浏览器都同意支持一种由竞争对手设计，且用户群很小甚至根本不存在的语言。而且这种语言还将成为长期的维护负担。例如在 2011 年，Google 推出了 *Dart*<sup>[g](./appendices.md#Dart)</sup> 语言，将其作为一种更好的 Web 编程语言进行推广 [[Krill 2011](./references.md#infoworld:dart)]。Google 分发了一个实验性的 *Chromium*<sup>[g](./appendices.md#Chromium)</sup> 版本 [[Google 2012a](./references.md#chromium2012)]（这是他们的 Chrome 浏览器的开源基础），其中包含了一个 Dart 虚拟机 [[Google 2012b](./references.md#dartium)]，但这个虚拟机从未被纳入 Chrome 浏览器的生产版本或任何其他浏览器中。

随着 2005 年 AJAX 和 Web 2.0 风格应用的出现，Web 开发者开始编写更大型、更复杂的 Web 应用，其中有些人开始寻找一种能比 ES3 级的 JavaScript 更适合此类应用的编程语言。如果开发者需要编写的代码可以作为网页的一部分在任何浏览器中运行，而他们又需要或想要用 JavaScript 以外的语言编写代码，该怎么办呢？唯一的选择是使用 JavaScript 作为运行时支持的替代语言。这可能可以通过用 JavaScript 为替代语言编写一个解释器来实现。但在 2000 年代中期，JavaScript 引擎仍然是以相对较慢的解释器来实现的，而且 JavaScript 对编写高效解释器而言并不是种很好的语言。实现一个慢上加慢的解释器，显然并非有足够吸引力的解决方案。一种更可行的方法是通过「源对源翻译器」来承载替代语言，即经由编译器，将替代语言的源代码翻译成「可在浏览器 JavaScript 引擎上运行的 JavaScript 代码」。如果替代语言的语义和 JavaScript 的语义之间有合理而接近的匹配，那么用这种方式编译出的程序，其运行时性能就可以相对接近于手写的 JavaScript。

2006 年 5 月公开发布的 Google Web Toolkit（GWT）[[Google 2006](./references.md#gwt2006)]，是首个使用源到源翻译的 AJAX 工具套件。GWT 集成了 Java 到 JavaScript 的编译器，它被成功地应用于一些 Google 重要的对外 Web 应用，并在 Google 以外也得到了大量使用。GWT 的成功，证明了将 JavaScript 用于源对源翻译的可行性，许多其他语言的翻译器也随之而来。有一份文档记录了「可编译到 JS」的语言列表。它在 2011 年 1 月共有 19 个条目 [[Ashkenas et al. 2011](./references.md#langlist2011)]，但到 2018 年则包括了 270 多种语言 [[Ashkenas 2018](./references.md#langlist2018)]。这些语言要么被翻译到 JavaScript，要么以 JavaScript 为宿主。这些语言中有一些是玩具级或不完整的实现，然而其中也有许多是拥有大量用户的严肃编译器，甚至还有一个针对 JavaScript 的 Dart 编译器。

源对源翻译不仅被用来支持 Web 页面上的遗留语言，还为实验新语言和扩展 JavaScript 提供了一种手段。*CoffeeScript*<sup>[g](./appendices.md#CoffeeScript)</sup> [[Ashkenas 2010](./references.md#coffee2)] 是最成功的源对源翻译器之一，它由 Jeremy Ashkenas 在 2009 年到 2010 年开发。在成为 Web 开发者前，Ashkenas 曾用 Ruby 语言编程，他更喜欢 Ruby 相对无标点符号的语法和 Python 式的留白缩进，而非 JavaScript 使用的 C 风格语法。他创建了 CoffeeScript 作为 JavaScript 的新表层语法，同时保留了 JavaScript 的底层运行时语义。Ashkenas [[2009](./references.md#coffee1)] 这样描述他在 CoffeeScript 上的工作：

> 长期以来，JavaScript 都把一个漂亮的对象模型隐藏在了 Java 式的语法中。CoffeeScript 试图通过偏重表达式而非语句的语法，减少标点符号的噪音，提供优雅的函数字面量，从而展示出 JavaScript 好的部分。像 `square: x => x * x` 这行 CoffeeScript，就可以编译成这样的 JavaScript：

``` js
var square = function (x) {
  return x * x;
};
```

除了「漂亮的函数」以外，CoffeeScript 还引入了许多提高编程便利性的语法糖，包括类声明和解构操作。这些内容都很容易转为 JavaScript 代码。许多 CoffeeScript 的特性与 ECMAScript Harmony 所考虑的特性类似。CoffeeScript 验证了 JavaScript 程序员对这些特性的兴趣。CoffeeScript 很快就变得相当流行，并被许多主要网站的开发者所采用。但在 ES2015 普及后，它的使用量就逐渐减少了。

在 2011 年 5 月的 JSConf 大会上，Brendan Eich 与 Jeremy Ashkenas 一起分享了 CoffeeScript 及其在 JavaScript 的 Harmony 演化中的作用。在他的演讲中，Eich [[2011c](./references.md#eich:transpiler)] 介绍了一个名为「转译器<sup>[g](./appendices.md#transpiler)</sup>」的术语，用来描述像 CoffeeScript 这样的源对源编译器。这并非「转译器」一词首次出现，但在 Eich 的演讲前，这个词并未被广泛地了解和使用。后来，这个概念开始在 JavaScript 开发者社区内外被普遍使用。

Alon Zakai [[2011](./references.md#Zakai11)] 的 Emscripten 是一个能将 C/C++ 翻译成高效 JavaScript 代码的转译器。它的诞生前提，在于作者发现通过 JavaScript 的 32 位算术编码模式和二进制的 TypedArray 数据结构，可以定义出一个易于被基于 JIT 的 JavaScript 引擎优化的 C 语言执行环境。Emscripten 启发了 asm.js [[Herman et al. 2014](./references.md#asmjs)]，这是个定义了一组 JavaScript 代码模式的规范。相应编译器所生成的符合规范的 JavaScript 代码，都应该能被引擎识别和优化。asm.js 的成功进一步带来了 WebAssembly [[Haas et al. 2017](./references.md#Haas17)]，它以字节码级接口扩展了 JS 引擎，可以作为 C/C++ 和类似的低级语言的编译目标。
