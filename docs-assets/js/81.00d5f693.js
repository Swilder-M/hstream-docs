(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{551:function(e,a,t){"use strict";t.r(a);var s=t(11),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"manage-shards-of-a-stream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manage-shards-of-a-stream"}},[e._v("#")]),e._v(" Manage Shards of a Stream")]),e._v(" "),t("h2",{attrs:{id:"sharding-in-hstreamdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sharding-in-hstreamdb"}},[e._v("#")]),e._v(" Sharding in HStreamDB")]),e._v(" "),t("p",[e._v("A stream is a logical concept for producer and consumer, and under the hood,\nthese data passing through are stored in the shards of the stream in an\nappend-only fashion. A shard is essentially the primary storage unit which\ncontains all the corresponding records with some partition keys. Every stream\nwill contain multiple shards spread across multiple server nodes. Since we\nbelieve that stream on itself is a sufficiently concise and powerful\nabstraction, the sharding logic is minimally visible to the user. For example,\nduring writing or consumption, each stream appears to be managed as an entity as\nfar as the user is concerned. However, for the cases where the user needs more\nfine-grained control and better flexibility, we offer interfaces to get into the\ndetails of shards of the stream and other interfaces to work with shards like\nReader.")]),e._v(" "),t("h2",{attrs:{id:"specify-the-number-of-shards-when-creating-a-stream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specify-the-number-of-shards-when-creating-a-stream"}},[e._v("#")]),e._v(" Specify the Number of Shards When Creating a Stream")]),e._v(" "),t("p",[e._v("To decide the number of shards which a stream should have, an attribute\nshardCount is provided when creating a stream[].")]),e._v(" "),t("h2",{attrs:{id:"list-shards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-shards"}},[e._v("#")]),e._v(" List Shards")]),e._v(" "),t("p",[e._v("To list all the shards of one stream.")])])}),[],!1,null,null,null);a.default=r.exports}}]);