(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(5),a=n.n(o),s=n(3),r=n(6),c=n(7),i=n(9),d=n(8),u=n(1),l=n.n(u),p=n(2),j=n.n(p),b=n(0),f=function(t){var e=t.goods;return Object(b.jsx)("ul",{className:"GoodsList",children:e.map((function(t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("li",{className:"GoodsList__list",children:Object(b.jsx)("span",{style:{color:t.color},children:t.name})},t.id)})}))})};n(16);function h(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var m=function(){return h()},g=function(){return h()},O=function(t){Object(i.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={goods:[]},t.loadData=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t.loadFiveItem=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:(n=e.sent).length=5,t.setState({goods:n});case 5:case"end":return e.stop()}}),e)}))),t.loadRedItem=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:n=e.sent.filter((function(t){return"red"===t.color})),t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.goods;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"App__title",children:"Dynamic list of Goods"}),Object(b.jsx)("button",{className:"App__button",type:"button",onClick:this.loadData,children:"Load All goods"}),Object(b.jsx)("button",{className:"App__button",type:"button",onClick:this.loadFiveItem,children:"Load 5 first goods"}),Object(b.jsx)("button",{className:"App__button",type:"button",onClick:this.loadRedItem,children:"Load red goods"}),Object(b.jsx)(f,{goods:t})]})}}]),n}(j.a.Component);a.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3914c900.chunk.js.map