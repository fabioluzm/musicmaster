(this.webpackJsonpmusicmaster=this.webpackJsonpmusicmaster||[]).push([[0],{12:function(t,e,a){},20:function(t,e,a){t.exports=a(28)},28:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),s=a(16),i=a.n(s),l=a(6),c=a(7),o=a(9),u=a(8),p=a(10),m="Bearer ".concat("BQCcTQ9iADehshD8DNwRXadY_0dtQGZ8wRD1NO3ONB70TLWBY73zRn4-sDPFB7Xg-WoxJj1dsVVz59sG6oub-oifmxtEyUf4ZGhvsqsx2Y39wME82YA-ihHo_IiWk6AQQwPfl8kgem6t__SUZ8hjGkcaXtu90yayedGpFkWzkDaYe-lR3Uo-c-CQ3xLWiB62zK9bjHka_paCNuKaBBVvtDvR0CZXFv4hpNZPP8UUqjR5Y_vBgcy1x3WCcdVUYE5hKfNUy-5SsgQCyk9gAj-ewmK2p1X8tTQ-9w"),h=(a(12),function(t){function e(){return Object(l.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t={name:"",followers:{total:""},images:[{url:""}],genres:[]};return t=null!==this.props.artist&&void 0!==this.props.artist?this.props.artist:t,void 0!==this.props.artist?r.a.createElement("div",{className:"profile"},r.a.createElement("img",{className:"profile-img",src:t.images[0].url,alt:""}),r.a.createElement("div",{className:"profile-info"},r.a.createElement("div",{className:"profile-name"},t.name),r.a.createElement("div",{className:"profile-followers"},t.followers.total," followers"),r.a.createElement("div",{className:"profile-genres"},t.genres.map((function(e,a){var n=t.genres;return e=e!==n[n.length-1]&&e!==n[n.length-2]?"".concat(e,", "):e===n[n.length-2]?"".concat(e," "):"& ".concat(e),r.a.createElement("span",{key:a},e)}))))):r.a.createElement("div",null,r.a.createElement("p",null,"Please provide a valid artist name and search again."))}}]),e}(n.Component)),v=a(13),f=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={playingUrl:"",audio:null,playing:!1},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"playAudio",value:function(t){var e=new Audio(t);this.state.playing?this.state.playingUrl===t?(this.state.audio.pause(),this.setState({playing:!1})):(this.state.audio.pause(),e.play(),this.setState({playing:!0,playingUrl:t,audio:e})):(e.play(),this.setState({playing:!0,playingUrl:t,audio:e}))}},{key:"render",value:function(){var t=this,e=this.props.tracks;return r.a.createElement("div",null,e.map((function(e,a){console.log("track",e);var n=e.album.images[0].url;return r.a.createElement("div",{key:a,className:"track",onClick:function(){return t.playAudio(e.preview_url)}},r.a.createElement("img",{className:"track-img",src:n,alt:"track"}),r.a.createElement("div",{className:"track-play"},r.a.createElement("div",{className:"track-play-inner"},t.state.playingUrl===e.preview_url&&!0===t.state.playing?r.a.createElement(v.a,null):r.a.createElement(v.b,null))),r.a.createElement("p",{className:"track-text"},e.name))})))}}]),e}(n.Component),d=a(30),y=a(31),g=a(33),E=a(32),k=a(19),j=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={query:"",artist:null,tracks:[]},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"searchArtist",value:function(){var t=this;console.log("this.state",this.state);var e="".concat("https://api.spotify.com/v1/search?","q='").concat(this.state.query,"&type=artist&limit=1");fetch(e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:m}}).then((function(t){return t.json()})).then((function(a){var n=a.artists.items[0];console.log("artist",n),t.setState({artist:n}),e="".concat("https://api.spotify.com/v1/artists/").concat(n.id,"/top-tracks?country=PT"),fetch(e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:m}}).then((function(t){return t.json()})).then((function(e){console.log("artist's top tracks: ",e);var a=e.tracks;t.setState({tracks:a})}))}))}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app-title"},"Music Master"),r.a.createElement(d.a,null,r.a.createElement(y.a,null,r.a.createElement(g.a,{type:"text",placeholder:"search for an artist",value:this.state.query,onChange:function(e){t.setState({query:e.target.value})},onKeyPress:function(e){return"Enter"===e.key?t.searchArtist():""}}),r.a.createElement(y.a.Append,null,r.a.createElement(E.a,{onClick:function(){return t.searchArtist()}},r.a.createElement(k.a,null))))),null!==this.state.artist?r.a.createElement("div",null,r.a.createElement(h,{artist:this.state.artist}),r.a.createElement(f,{tracks:this.state.tracks})):r.a.createElement("div",null,"Welcome to music master. ",r.a.createElement("br",null),"Search for an artist to check his profile."))}}]),e}(n.Component);i.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.44b674c2.chunk.js.map