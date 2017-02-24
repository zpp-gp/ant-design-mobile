webpackJsonp([16,104],{295:function(n,s){n.exports={content:[["p","(",["a",{title:null,href:"https://github.com/react-component/form"},"rc-form \u6587\u6863"],")"]],meta:{order:0,title:"\u793a\u4f8b\u96c6\u5408",filename:"components/textarea-item/demo/basic.md",id:"components-textarea-item-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> TextareaItem<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'rc-form\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">TextareaItemExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    focused<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> getFieldProps <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>form<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\u81ea\u5b9a\u4e49\u83b7\u53d6\u5149\u6807\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextareaItem</span>\n            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6807\u9898<span class="token punctuation">"</span></span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u81ea\u52a8\u83b7\u53d6\u5149\u6807<span class="token punctuation">"</span></span>\n            <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span>\n            <span class="token attr-name">autoFocus</span>\n            <span class="token attr-name">autoHeight</span>\n          <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextareaItem</span>\n            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6807\u9898<span class="token punctuation">"</span></span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u70b9\u51fb\u4e0b\u65b9\u6309\u94ae\u8be5\u8f93\u5165\u6846\u4f1a\u83b7\u53d6\u5149\u6807<span class="token punctuation">"</span></span>\n            <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span>\n            <span class="token attr-name">autoHeight</span>\n            <span class="token attr-name">focused</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>focused<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onFocus</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                focused<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n          <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n              <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#108ee9\'</span><span class="token punctuation">,</span> textAlign<span class="token punctuation">:</span> <span class="token string">\'center\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                  focused<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n            <span class="token punctuation">></span></span>\n              \u70b9\u51fb\u83b7\u53d6\u5149\u6807\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\u53d7\u63a7 / \u975e\u53d7\u63a7\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'control\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            title<span class="token operator">=</span><span class="token string">"\u53d7\u63a7\u7ec4\u4ef6"</span>\n            placeholder<span class="token operator">=</span><span class="token string">"Hello World"</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'control\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            title<span class="token operator">=</span><span class="token string">"\u975e\u53d7\u63a7\u7ec4\u4ef6"</span>\n            placeholder<span class="token operator">=</span><span class="token string">"\u8bf7\u8f93\u5165\u5185\u5bb9"</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\u9ad8\u5ea6\u81ea\u9002\u5e94 / \u56fa\u5b9a\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'note3\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            title<span class="token operator">=</span><span class="token string">"\u9ad8\u5ea6\u81ea\u9002\u5e94"</span>\n            autoHeight\n            labelNumber<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'note1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            rows<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>\n            placeholder<span class="token operator">=</span><span class="token string">"\u56fa\u5b9a\u884c\u6570,rows"</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\u5e26\u6e05\u9664\u6309\u94ae\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'clear1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            clear\n            title<span class="token operator">=</span><span class="token string">"\u6807\u9898"</span>\n            placeholder<span class="token operator">=</span><span class="token string">"\u8f93\u5165\u4f1a\u663e\u793a\u6e05\u9664\u6309\u94ae"</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\u6807\u9898\u53ef\u81ea\u5b9a\u4e49\uff08\u6587\u5b57 / \u56fe\u7247 / \u65e0\u6807\u9898\uff09\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'title3\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            title<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'0.56rem\'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">\'0.56rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n            placeholder<span class="token operator">=</span><span class="token string">"\u6807\u9898\u53ef\u4ee5\u81ea\u5b9a\u4e49"</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\u9650\u5236\u8f93\u5165\u5b57\u7b26\u6570\u91cf\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'note4\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            placeholder<span class="token operator">=</span><span class="token string">"\u6700\u591a\u8f93\u516510\u4e2a\u5b57\u7b26"</span>\n            count<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\u5e26\u8ba1\u6570\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'count\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              initialValue<span class="token punctuation">:</span> <span class="token string">\'\u8ba1\u6570\u529f\u80fd,\u6211\u7684\u610f\u89c1\u662f...\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            rows<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span>\n            count<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\u4e0d\u53ef\u7f16\u8f91 / \u7981\u7528\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>TextareaItem\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'note6\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              initialValue<span class="token punctuation">:</span> <span class="token string">\'\u4e0d\u53ef\u7f16\u8f91\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            title<span class="token operator">=</span><span class="token string">"\u59d3\u540d"</span>\n            editable<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextareaItem</span>\n            <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8fd9\u4e2a\u662f\u7981\u7528\u7684\u6837\u5f0f<span class="token punctuation">"</span></span>\n            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u59d3\u540d<span class="token punctuation">"</span></span>\n            <span class="token attr-name">disabled</span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> TextareaItemExampleWrapper <span class="token operator">=</span> <span class="token function">createForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>TextareaItemExample<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextareaItemExampleWrapper</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],style:".demoTitle:before,\n.demoTitle:after {\n  border-bottom: none;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.demoTitle</span><span class="token pseudo-element">:before</span>,\n<span class="token class">.demoTitle</span><span class="token pseudo-element">:after</span> </span><span class="token punctuation">{</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},372:function(n,s,a){n.exports={basic:a(295)}}});