(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{518:function(s,e,a){"use strict";a.r(e);var t=a(11),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"create-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-view"}},[s._v("#")]),s._v(" CREATE VIEW")]),s._v(" "),a("p",[s._v("Create a new hstream view with the given name. An exception will be thrown if a view or stream with the same name already exists.")]),s._v(" "),a("p",[s._v("A view is "),a("strong",[s._v("NOT")]),s._v(" just an alias but physically maintained in the memory and is updated incrementally. Thus queries on a view are really fast and do not require extra resources.")]),s._v(" "),a("h2",{attrs:{id:"synopsis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[s._v("#")]),s._v(" Synopsis")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" view_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" select_query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[s._v("#")]),s._v(" Notes")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("view_name")]),s._v(" is a valid identifier.")]),s._v(" "),a("li",[a("code",[s._v("select_query")]),s._v(" is a valid "),a("code",[s._v("SELECT")]),s._v(" (Stream) query. For more information, see "),a("code",[s._v("SELECT")]),s._v(" section. There is no extra restrictions on "),a("code",[s._v("select_query")]),s._v(" but we recommend using at least one aggregate function and a "),a("code",[s._v("GROUP BY")]),s._v(" clause. Otherwise, the query may be a little weird and consumes more resources. See the following examples:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// CREATE VIEW v1 AS SELECT id, SUM(sales) FROM s GROUP BY id EMIT CHANGES;\n// what the view contains at time\n//            [t1]                            [t2]                            [t3]\n//  {"id":1, "SUM(sales)": 10}  ->  {"id":1, "SUM(sales)": 10}  ->  {"id":1, "SUM(sales)": 30}\n//                                  {"id":2, "SUM(sales)": 8}       {"id":2, "SUM(sales)": 15}\n\n// CREATE VIEW AS SELECT id, sales FROM s EMIT CHANGES;\n// what the view contains at time\n//           [t1]                       [t2]                       [t3]\n// {"id":1, "sales": 10}  ->  {"id":1, "sales": 10}  ->  {"id":1, "sales": 10}\n//                            {"id":2, "sales": 8}       {"id":1, "sales": 20}\n//                                                       {"id":2, "sales": 8}\n//                                                       {"id":2, "sales": 7}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" s1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" b EMIT CHANGES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" s2 EMIT CHANGES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// valid but not recommended")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);