(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(21)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(6),l=a.n(r),s=a(7),i=a(1),c=a(2),u=a(3),m=a(4),d=function(t){var e=t.toDo,a=t.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Easy Todo"),o.a.createElement("div",{className:"flex-column"},0===e&&0===a?"List is empty now":o.a.createElement("span",{className:"badge badge-dark"},e," more to do, ",a," done")))},f=(a(14),d),b=function(t){var e=t.label,a=t.onFiltersChange;return o.a.createElement("input",{type:"text",value:e,onChange:function(t){return a("label",t.target.value)},className:"form-control search-panel",placeholder:"Type here to search"})},p=(a(15),b),g=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var t=this.props,e=t.status,a=t.onFiltersChange;return o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{type:"button",onClick:function(){return a("status","all")},className:"btn btn-outline-primary ".concat("all"===e?"active":"")},"All"),o.a.createElement("button",{type:"button",onClick:function(){return a("status","active")},className:"btn btn-outline-primary ".concat("active"===e?"active":"")},"Active"),o.a.createElement("button",{type:"button",onClick:function(){return a("status","done")},className:"btn btn-outline-primary ".concat("done"===e?"active":"")},"Done"))}}]),a}(n.Component),v=(a(16),g),h=a(8),D=function(t){var e=t.label,a=t.done,n=t.important,r=t.onToggleDone,l=t.onDeleted,s=t.onToggleImportant,i="todo-list-item text-info";return i+=a?" done":"",i+=n?" important":"",o.a.createElement("span",{className:i},o.a.createElement("span",{className:"todo-list-item-label",title:a?"":"Mark as done",onClick:r},e),o.a.createElement("button",{type:"button",onClick:l,title:"Remove task",className:"btn btn-outline-danger btn-sm float-right"},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{type:"button",onClick:s,title:n?"Not important":"Mark as important",className:"btn btn-outline-warning btn-sm float-right"},o.a.createElement("i",{className:"fa fa-exclamation"})))},E=(a(17),D),I=function(t){var e=t.todos,a=t.onToggleProp,n=t.onDeleted,r=t.filters,l=e.map((function(t){var e=t.id,l=Object(h.a)(t,["id"]),s=o.a.createElement("li",{className:"list-group-item",key:e},o.a.createElement(E,Object.assign({},l,{onToggleDone:function(){return a(e,"done")},onToggleImportant:function(){return a(e,"important")},onDeleted:function(){return n(e)}}))),i=-1!==l.label.toLowerCase().indexOf(r.label);switch(!0){case"all"===r.status&&i:case"active"===r.status&&!l.done&&i:case"done"===r.status&&l.done&&i:return s;default:return""}}));return o.a.createElement("ul",{className:"list-group todo-list"},l)},N=(a(18),I),y=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={newItemLabel:""},t.onAddItem=function(e){if(e.preventDefault(),!t.state.newItemLabel)return!1;t.props.onAddItem(t.state.newItemLabel),t.setState({newItemLabel:""})},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this,e="btn";return e+=this.state.newItemLabel?" btn-success":" btn-outline-success disabled",o.a.createElement("form",{className:"add-item d-flex",onSubmit:this.onAddItem},o.a.createElement("input",{type:"text",className:"form-control",value:this.state.newItemLabel,onChange:function(e){return t.setState({newItemLabel:e.target.value})},placeholder:"Add new task"}),o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{type:"submit",className:e},"Add")))}}]),a}(n.Component),k=(a(19),y),w=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a),(t=e.call(this)).saveData=function(){return localStorage.setItem("appData",JSON.stringify(t.state))},t.isFreeID=function(e){var a=!0;return t.state.todoData.forEach((function(t){t.id===e&&(a=!1)})),a},t.getFreeID=function(){for(var e=t.state.todoData.length+1;!t.isFreeID(e);)e++;return e},t.createTodoItem=function(e){return{label:e,done:!1,important:!1,id:t.getFreeID()}},t.addItem=function(e){return t.setState((function(a){var n=a.todoData;return{todoData:[].concat(Object(s.a)(n),[t.createTodoItem(e)])}}),t.saveData)},t.deleteItem=function(e){return t.setState((function(t){return{todoData:t.todoData.filter((function(t){return t.id!==e}))}}),t.saveData)},t.toggleProp=function(e,a){return t.setState((function(t){return{todoData:t.todoData.map((function(t){return t.id===e&&(t[a]=!t[a]),t}))}}),t.saveData)},t.setFilters=function(e,a){switch(e){case"label":t.setState({filters:{label:a.toLowerCase(),status:t.state.filters.status}},t.saveData);break;case"status":t.setState({filters:{label:t.state.filters.label,status:a}},t.saveData)}};var n=JSON.parse(localStorage.getItem("appData")),o=n||{filters:{label:"",status:"all"},todoData:[{label:"Learn React",done:!1,important:!0,id:1},{label:"Build awsome App",done:!1,important:!1,id:2},{label:"Build neural network",done:!1,important:!0,id:3},{label:"Drink Coffee",done:!1,important:!1,id:4},{label:"Take a look at bootstrap",done:!1,important:!1,id:5}]};return t.state=o,t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.state,e=t.filters,a=t.todoData,n=a.filter((function(t){return t.done})).length,r=a.length-n;return o.a.createElement("div",{className:"app"},o.a.createElement(f,{done:n,toDo:r}),a.length?o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(p,{label:e.label,onFiltersChange:this.setFilters}),o.a.createElement(v,{status:e.status,onFiltersChange:this.setFilters})):"",o.a.createElement(N,{filters:e,todos:a,onToggleProp:this.toggleProp,onDeleted:this.deleteItem}),o.a.createElement(k,{onAddItem:this.addItem}))}}]),a}(n.Component),C=(a(20),w);l.a.render(o.a.createElement(C,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.66b4d1be.chunk.js.map