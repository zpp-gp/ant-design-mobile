webpackJsonp([44,94],{363:function(n,a,s){n.exports={content:[],meta:{order:0,title:"\u793a\u4f8b",filename:"components/carousel/demo/basic.md",id:"components-carousel-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Carousel<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>need-left-right-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>normal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span>\n      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-carousel<span class="token punctuation">"</span></span> <span class="token attr-name">autoplay</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">infinite</span>\n      <span class="token attr-name">beforeChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`slide from </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">from</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>to<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">afterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'slide to\'</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'AiyWuByWklrrUDlFignR\'</span><span class="token punctuation">,</span> <span class="token string">\'TekJlZRVCjLFexlOCuWn\'</span><span class="token punctuation">,</span> <span class="token string">\'AiyWuByWklrrUDlFignR\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>ii <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>ii<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`https://zos.alipayobjects.com/rmsportal/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ii<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.png`</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>vertical<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-carousel<span class="token punctuation">"</span></span>\n      <span class="token attr-name">dots</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">dragging</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">swiping</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">autoplay</span> <span class="token attr-name">infinite</span> <span class="token attr-name">vertical</span>\n    <span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>v-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Carousel <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>v-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Carousel <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>v-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Carousel <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(3),s(16),s(15)),p=n(t),o=(s(130),s(129)),e=n(o),c=function(){return a.createElement("div",{className:"need-left-right-margin"},a.createElement("div",{className:"sub-title"},"normal"),a.createElement(e["default"],{className:"my-carousel",autoplay:!1,infinite:!0,beforeChange:function(n,a){return console.log("slide from "+n+" to "+a)},afterChange:function(n){return console.log("slide to",n)}},["AiyWuByWklrrUDlFignR","TekJlZRVCjLFexlOCuWn","AiyWuByWklrrUDlFignR"].map(function(n){return a.createElement("a",{href:"#",key:n},a.createElement("img",{src:"https://zos.alipayobjects.com/rmsportal/"+n+".png"}))})),a.createElement(p["default"],null),a.createElement("div",{className:"sub-title"},"vertical"),a.createElement(e["default"],{className:"my-carousel",dots:!1,dragging:!1,swiping:!1,autoplay:!0,infinite:!0,vertical:!0},a.createElement("div",{className:"v-item"},"Carousel 1"),a.createElement("div",{className:"v-item"},"Carousel 2"),a.createElement("div",{className:"v-item"},"Carousel 3")))};return a.createElement(c,null)},style:".my-carousel {\n  background: #fff;\n}\n.my-carousel a {\n  display: inline-block;\n  width: 100%;\n  margin: 0; padding: 0;\n}\n.my-carousel a img {\n  width: 100%;\n  vertical-align: top;\n}\n.my-carousel .v-item {\n  height: 0.72rem;\n  line-height: 0.72rem;\n  padding-left: 0.2rem;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.my-carousel</span> </span><span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.my-carousel</span> a </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.my-carousel</span> a img </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.my-carousel</span> <span class="token class">.v-item</span> </span><span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">0.72</span>rem<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">0.72</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token number">0.2</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},485:function(n,a,s){n.exports={basic:s(363)}}});