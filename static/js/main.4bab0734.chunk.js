(this.webpackJsonpmusicmaster=this.webpackJsonpmusicmaster||[]).push([[0],{13:function(e,t,a){},18:function(e,t,a){e.exports=a(26)},26:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(14),l=a.n(s),i=a(5),c=a(6),o=a(9),u=a(7),m=a(10),p="Bearer ".concat("BQAIXPXoX1MWl57UFPi6sAtw_5RDfa-4d4Ywj-3AECj5id1kYaVChadzsjmhrHW7bLETSAQGeVkR4Btn7YMlNKqs7oNXNjWxDO5XbvSFa9W3hcsEvFWURk3rqx5CHKuuxfqb7VmSPFqzkYvalU_2MU-nXKbUIS__PoUL_UE7AUF8DUMYUW8DqBWsMdmpbb8WN98RESGDBAX7qpM4-_rPXU-S-0fFIn5MXj8YZKL12vXpCRQdgEoUC3j39KAXj-cKhzEzbuul89ptgyBkHwtcPtVf-_RDnjT-7g"),h=(a(13),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={name:"",followers:{total:""},images:[{url:""}],genres:[]};return e=null!==this.props.artist&&void 0!==this.props.artist?this.props.artist:e,void 0!==this.props.artist&&null!==this.props.artist?n.a.createElement("div",{className:"profile"},n.a.createElement("img",{className:"profile-img",src:e.images[0].url,alt:""}),n.a.createElement("div",{className:"profile-info"},n.a.createElement("div",{className:"profile-name"},"Artist Name: ",e.name),n.a.createElement("div",{className:"profile-followers"},"Total followers: ",e.followers.total),n.a.createElement("div",{className:"profile-genres"},"Artist genres: ",e.genres.map((function(t,a){var r=e.genres;return t=t!==r[r.length-1]&&t!==r[r.length-2]?"".concat(t,", "):t===r[r.length-2]?"".concat(t," "):"& ".concat(t),n.a.createElement("span",{key:a},t)}))))):void 0===this.props.artist?n.a.createElement("div",null,n.a.createElement("p",null,"Please provide a valid artist name and search again.")):""}}]),t}(r.Component)),f=a(28),v=a(29),d=a(31),E=a(30),g=a(17),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={query:"",artist:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"searchArtist",value:function(){var e=this;console.log("this.state",this.state);var t="".concat("https://api.spotify.com/v1/search?","q='").concat(this.state.query,"&type=artist&limit=1");fetch(t,{method:"GET",headers:{"Content-Type":"application/json",Authorization:p},mode:"cors",cache:"default"}).then((function(e){return e.json()})).then((function(t){var a=t.artists.items[0];console.log("artist",a),e.setState({artist:a})}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"app-title"},"Music Master"),n.a.createElement(f.a,null,n.a.createElement(v.a,null,n.a.createElement(d.a,{type:"text",placeholder:"search for an artist",value:this.state.query,onChange:function(t){e.setState({query:t.target.value})},onKeyPress:function(t){return"Enter"===t.key?e.searchArtist():""}}),n.a.createElement(v.a.Append,null,n.a.createElement(E.a,{onClick:function(){return e.searchArtist()}},n.a.createElement(g.a,null))))),n.a.createElement(h,{artist:this.state.artist}),n.a.createElement("div",{className:"gallery"},"Gallery"))}}]),t}(r.Component);l.a.render(n.a.createElement(j,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4bab0734.chunk.js.map