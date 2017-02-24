webpackJsonp([87,104],{231:function(e,t){e.exports={content:["section",["p","\u6700\u9002\u7528\u4e8e\u663e\u793a\u540c\u7c7b\u7684\u957f\u5217\u8868\u6570\u636e\u7c7b\u578b\uff0c\u5bf9\u6e32\u67d3\u6027\u80fd\u6709\u4e00\u5b9a\u7684\u4f18\u5316\u6548\u679c"]],meta:{category:"Components",type:"Combination",chinese:"\u957f\u5217\u8868",english:"ListView",filename:"components/list-view/index.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API-(-\u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native-)"},"API ( \u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native )"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5e38\u89c1\u95ee\u9898\u4e0e\u5b9e\u73b0\u539f\u7406"},"\u5e38\u89c1\u95ee\u9898\u4e0e\u5b9e\u73b0\u539f\u7406"]]],api:["section",["h2","API ( \u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native )"],["ul",["li",["p","React-Native \u5e73\u53f0\u76f4\u63a5\u4f7f\u7528 ",["a",{title:null,href:"https://facebook.github.io/react-native/docs/listview.html#content"},"React Native ListView"]]],["li",["p","WEB \u5e73\u53f0\u4f7f\u7528 ",["a",{title:null,href:"http://facebook.github.io/react-native/releases/0.26/docs/listview.html"},"React Native ListView(v0.26) \u7684 API"],"\uff0c\u4f46\u6709\u4e00\u4e9b\u5dee\u5f02\uff0c\u4ee5\u4e0b\u5217\u51fa\u5dee\u5f02\u8be6\u60c5"]]],["h4","React Native ListView \u5728 WEB \u5e73\u53f0\u4e0a\u4e0d\u88ab\u652f\u6301\u7684 API \u5217\u8868\uff1a"],["blockquote",["p","\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4e0d\u652f\u6301\u201c\u5e73\u53f0\u7279\u6709\u201d\u7684API\uff0c\u4f8b\u5982",["code","android"],"endFillColor\u3001",["code","iOS"],"alwaysBounceHorizontal\u3002\n\u53e6\u5916\uff0c\u4f7f\u7528 css \u4ee3\u66ff react-native \u7684 style \u8bbe\u7f6e\u65b9\u5f0f\u3002"]],["ul",["li",["p","onChangeVisibleRows"]],["li",["p","stickyHeaderIndices"]],["li",["p",["a",{title:null,href:"https://facebook.github.io/react-native/docs/scrollview.html#props"},"ScrollView"]," \u7ec4\u4ef6\u4e2d\u4e0d\u88ab\u652f\u6301\u7684 API:"],["ul",["li",["p","keyboardDismissMode"]],["li",["p","keyboardShouldPersistTaps"]],["li",["p","onContentSizeChange (\u53ef\u4f7f\u7528",["code","onLayout"],"\u66ff\u4ee3)"]],["li",["p","removeClippedSubviews"]],["li",["p","scrollEnabled"]],["li",["p","showsHorizontalScrollIndicator (\u53ef\u4f7f\u7528 css style \u66ff\u4ee3)"]],["li",["p","showsVerticalScrollIndicator (\u53ef\u4f7f\u7528 css style \u66ff\u4ee3)"]]]],["li",["p",["a",{title:null,href:"https://facebook.github.io/react-native/docs/view.html#props"},"View"]," \u7ec4\u4ef6 API: ",["strong","\u53ea\u652f\u6301",["code","onLayout"]]]]],["h4","WEB \u5e73\u53f0\u65b0\u589eAPI"],["ul",["li",["p","useBodyScroll (boolean, false) - \u4f7f\u7528 html \u7684 ",["code","body"]," \u4f5c\u4e3a\u6eda\u52a8\u5bb9\u5668"]],["li",["p","stickyHeader (boolean, false) - \u56fa\u5b9a\u533a\u5757\u6807\u9898\u5230\u9875\u9762\u9876\u90e8 (\u6ce8\u610f: \u8bbe\u7f6e\u540e\u4f1a\u81ea\u52a8\u4f7f\u7528 html \u7684 ",["code","body"]," \u4f5c\u4e3a\u6eda\u52a8\u5bb9\u5668)"],["ul",["li",["p","\u5f00\u542f sticky \u540e\u8fd8\u53ef\u4ee5\u8bbe\u7f6e stickyProps / stickyContainerProps (\u8be6\u89c1 ",["a",{title:null,href:"https://github.com/captivationsoftware/react-sticky"},"react-sticky"],")"]]]],["li",["p","renderBodyComponent (function, () => React.Element) - \u81ea\u5b9a\u4e49 body \u7684\u5305\u88f9\u7ec4\u4ef6"]],["li",["p","renderSectionBodyWrapper (function, (sectionID: any) => React.Element) - \u6e32\u67d3\u81ea\u5b9a\u4e49\u7684\u533a\u5757\u5305\u88f9\u7ec4\u4ef6"]],["li",["p","useZscroller (boolean, false) - \u4f7f\u7528 zscroller \u6765\u6a21\u62df\u5b9e\u73b0\u6eda\u52a8\u5bb9\u5668 (\u53ef\u7528\u4e8e\u4e00\u4e9b\u4f4e\u7aef Android \u673a\u4e0a)"],["ul",["li",["p","\u6ce8\u610f\uff1a\u5f00\u542f\u540e",["code","useBodyScroll"],"\u548c",["code","stickyHeader"],"\u8bbe\u7f6e\u4f1a\u81ea\u52a8\u88ab\u5ffd\u7565"]]]],["li",["p","scrollerOptions - \u8be6\u89c1 ",["a",{title:null,href:"https://github.com/yiminghe/zscroller#options"},"zscroller options"]]]],["h3","WEB \u5e73\u53f0\u65b0\u589e ListView.IndexedList \u7ec4\u4ef6"],["p","\u6b64\u7ec4\u4ef6\u5e38\u7528\u4e8e \u201c\u901a\u8baf\u5f55\u201d/\u201c\u57ce\u5e02\u5217\u8868\u201d \u7b49\u573a\u666f\u4e2d\uff0c\u652f\u6301\u7d22\u5f15\u5bfc\u822a\u529f\u80fd\u3002"],["blockquote",["p","\u6ce8\u610f\uff1a\u7531\u4e8e\u7d22\u5f15\u5217\u8868\u53ef\u4ee5\u70b9\u51fb\u4efb\u4e00\u9879\u7d22\u5f15\u6765\u5b9a\u4f4d\u5176\u5185\u5bb9\u3001\u5373\u5185\u5bb9\u9700\u8981\u76f4\u63a5\u6eda\u52a8\u5230\u4efb\u610f\u4f4d\u7f6e\uff0c\u8fd9\u6837\u5c31\u96be\u4ee5\u505a\u5230\u50cf ListView \u4e00\u6837\u80fd\u5728\u6eda\u52a8\u65f6\u81ea\u52a8\u61d2\u6e32\u67d3\u3002\n\u76ee\u524d\u5b9e\u73b0\u4e0a\u53ea\u652f\u6301\u5206\u4e24\u6b65\u6e32\u67d3\uff0c\u80fd\u501f\u6b64\u8fbe\u5230\u9996\u5c4f\u4f18\u5148\u663e\u793a\u76ee\u7684\uff0c\u4f46\u5982\u679c\u5217\u8868\u6570\u636e\u91cf\u8fc7\u5927\u65f6\u3001\u6574\u4f53\u6027\u80fd\u4ecd\u4f1a\u6709\u5f71\u54cd\u3002"]],["ul",["li",["p","quickSearchBarTop (object{value:string, label:string}, value/label \u9ed8\u8ba4\u4e3a'#') - \u5feb\u6377\u5bfc\u822a\u680f\u6700\u9876\u90e8\u6309\u94ae\u3001\u5e38\u7528\u4e8e\u56de\u5230\u9876\u90e8"]],["li",["p","quickSearchBarStyle (object) - quickSearchBar \u7684 style"]],["li",["p","onQuickSearch (function, (sectionID: any, topId?:any) => void) \u5feb\u6377\u5bfc\u822a\u5207\u6362\u65f6\u8c03\u7528"]],["li",["p","delayTime (number) - \u9ed8\u8ba4 100ms, \u5ef6\u8fdf\u6e32\u67d3\u65f6\u95f4\u8bbe\u7f6e\uff08\u7528\u4e8e\u9996\u5c4f\u4f18\u5316\uff0c\u4e00\u5f00\u59cb\u6e32\u67d3",["code","initialListSize"],"\u6570\u91cf\u7684\u6570\u636e\uff0c\u5728\u6b64\u65f6\u95f4\u540e\u3001\u5ef6\u8fdf\u6e32\u67d3\u5269\u4f59\u7684\u6570\u636e\u9879\u3001\u5373",["code","totalRowCount - initialListSize"],"\uff09"]],["li",["p","delayActivityIndicator (react node) - \u5ef6\u8fdf\u6e32\u67d3\u7684 loading \u6307\u793a\u5668"]]],["h2","\u5e38\u89c1\u95ee\u9898\u4e0e\u5b9e\u73b0\u539f\u7406"],["ul",["li",["p","onEndReached \u4e3a\u4ec0\u4e48\u4f1a\u4e0d\u505c\u8c03\u7528\uff1f ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/520#issuecomment-263510596"},"https://github.com/ant-design/ant-design-mobile/issues/520#issuecomment-263510596"]]],["li",["p","\u5982\u4f55\u8bbe\u7f6e\u6eda\u52a8\u5230\u5217\u8868\u7684\u67d0\u4e00\u4f4d\u7f6e\uff1f(\u4f8b\u5982\uff0c\u70b9\u51fb\u5217\u8868\u67d0\u4e00\u9879\u8fdb\u5165\u53e6\u4e00\u4e2a\u9875\u9762\uff0c\u518d\u8fd4\u56de\u5230\u539f\u4f4d\u7f6e) #541"]],["li",["p","\u5176\u4ed6\u95ee\u9898\uff1a#633 #573"]]],["p","ListView \u6709\u4e09\u79cd\u7c7b\u578b\u7684\u6eda\u52a8\u5bb9\u5668\uff1a"],["ol",["li",["p","html \u7684 body \u5bb9\u5668"]],["li",["p","\u5c40\u90e8 div \u5bb9\u5668 (\u901a\u8fc7 ref \u83b7\u53d6\u5230)"]],["li",["p","\u4f7f\u7528 zscroller \u7684\u6a21\u62df\u6eda\u52a8\u5bb9\u5668"]]],["p","\u524d\u4e24\u79cd\u83b7\u53d6\u5230\u76f8\u5e94\u5143\u7d20\u540e\uff0c\u8c03\u7528 scrollTo \u65b9\u6cd5\u3001\u6eda\u52a8\u5230\u6307\u5b9a\u4f4d\u7f6e\uff1b\n\u7b2c\u4e09\u79cd\u901a\u8fc7 ref \u83b7\u53d6\u5230\u7ec4\u4ef6\u5bf9\u8c61\u3001\u518d\u83b7\u53d6\u5230 domScroller \u3001\u8c03\u7528 scrollTo \u65b9\u6cd5\u3002\n\u4f46\u6eda\u52a8\u5230\u5177\u4f53\u4ec0\u4e48\u4f4d\u7f6e\uff0c\u4e1a\u52a1\u4e0a\u5176\u5b9e\u4e5f\u6bd4\u8f83\u96be\u786e\u5b9a\u3002"],["p","\u53e6\u4e00\u95ee\u9898\uff1a\u5bf9 dataSource \u5bf9\u8c61\u53d8\u5316\u65f6\u7684\u5904\u7406\u65b9\u5f0f\u662f\u4ec0\u4e48\uff1f\u4f55\u65f6\u8c03\u7528 onEndReached \u65b9\u6cd5\uff1f"],["p","ListView \u5728 componentWillReceiveProps \u91cc\u4f1a\u76d1\u542c dataSource \u5bf9\u8c61\u7684\u53d8\u5316\uff0c\u5e76\u505a\u4e00\u6b21\n",["a",{title:null,href:"https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L156"},["code","this._renderMoreRowsIfNeeded()"]]," \uff0c\n\u7531\u4e8e\u6b64\u65f6",["a",{title:null,href:"https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L348"},["code","this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()"]],"\n\u5373\u5df2\u7ecf\u6e32\u67d3\u7684\u6570\u636e\u4e0e dataSource \u91cc\u5df2\u6709\u7684\u6570\u636e\u9879\u4e2a\u6570\u76f8\u540c\uff0c\u6240\u4ee5 ListView \u8ba4\u4e3a\u5e94\u8be5\u518d\u8c03\u7528 onEndReached \u65b9\u6cd5\u3002"]]}}});