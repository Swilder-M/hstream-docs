(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{530:function(s,a,e){"use strict";e.r(a);var t=e(11),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"hstream-admin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hstream-admin"}},[s._v("#")]),s._v(" HStream Admin")]),s._v(" "),e("p",[s._v("我们可以运行以下命令来使用 hstream admin：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker run -it --rm --name some-hstream-admin --network "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" hstreamdb/hstream:v0.8.0 hadmin --help\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" HStream Admin CLI "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\nUsage: hadmin COMMAND\n\nAvailable options:\n  -h,--help                Show this "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" text\n\nAvailable commands:\n  server                   Admin "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n  store                    Internal store admin "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("为了便于演示说明，我们将在 hstream 容器中执行一个交互式 bash shell 来使用 hstream admin，")]),s._v(" "),e("p",[s._v("下面的示例用法是在你在"),e("RouterLink",{attrs:{to:"/zh/latest/start/quickstart-with-docker.html"}},[s._v("快速启动")]),s._v("中启动的集群上演示的，请相应调整。")],1),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it docker_hserver0_1 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n$ hadmin server --help\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Usage: hadmin server [--host SERVER-HOST] [--port INT]\n                     [--log-level [critical|fatal|warning|info|debug]]\n                     (COMMAND | COMMAND)\n  Admin command\n\nAvailable options:\n  --host SERVER-HOST       server host admin value (default: "127.0.0.1")\n  --port INT               server admin port value (default: 6570)\n  --log-level [critical|fatal|warning|info|debug]\n                           log level (default: info)\n  -h,--help                Show this help text\n\nAvailable commands:\n  sql                      Start an interactive SQL shell\n  stats                    Get the stats of an operation on a stream\n  stream                   Stream command\n  sub                      Subscription command\n  view                     View command\n  status                   Get the status of the HServer cluster\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("h2",{attrs:{id:"检查集群状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查集群状态"}},[s._v("#")]),s._v(" 检查集群状态")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hadmin server status\n+---------+---------+-------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" node_id "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  state  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      address      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------+---------+-------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Running "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.4:6570 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Running "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.5:6572 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------+---------+-------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"资源管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资源管理"}},[s._v("#")]),s._v(" 资源管理")]),s._v(" "),e("h3",{attrs:{id:"streams"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#streams"}},[s._v("#")]),s._v(" Streams")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hadmin server stream create --name s1\nOK\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hadmin server stream list\n+------+----------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" replication_property "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------+----------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" s1   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" node:3               "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------+----------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"subscriptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscriptions"}},[s._v("#")]),s._v(" Subscriptions")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hadmin server sub create --name sub1 --stream s1\nOK\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hadmin server sub list\n+------+-------------+---------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" stream_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------+-------------+---------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sub1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" s1          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------+-------------+---------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"数据统计-hstream-stats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据统计-hstream-stats"}},[s._v("#")]),s._v(" 数据统计 (HStream Stats)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("hadmin server stats <stats_category> <stats_name>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("stream_counter\n"),e("ul",[e("li",[e("code",[s._v("append_total")])]),s._v(" "),e("li",[e("code",[s._v("append_failed")])])])]),s._v(" "),e("li",[s._v("stream\n"),e("ul",[e("li",[e("code",[s._v("appends")]),s._v(" or "),e("code",[s._v("append_in_bytes")])]),s._v(" "),e("li",[e("code",[s._v("append_in_record")])]),s._v(" "),e("li",[e("code",[s._v("append_in_requests")])]),s._v(" "),e("li",[e("code",[s._v("append_failed_requests")])])])]),s._v(" "),e("li",[s._v("subscription_counter\n"),e("ul",[e("li",[e("code",[s._v("resend_records")])])])]),s._v(" "),e("li",[s._v("subscription\n"),e("ul",[e("li",[e("code",[s._v("sends")]),s._v(" or "),e("code",[s._v("send_out_bytes")])]),s._v(" "),e("li",[e("code",[s._v("send_out_records")])]),s._v(" "),e("li",[e("code",[s._v("acks")]),s._v(" or "),e("code",[s._v("acknowledgements")])]),s._v(" "),e("li",[e("code",[s._v("request_messages")])]),s._v(" "),e("li",[e("code",[s._v("response_messages")])])])])]),s._v(" "),e("p",[s._v("更详细的解释请阅读 "),e("RouterLink",{attrs:{to:"/zh/latest/reference/metrics.html"}},[s._v("hstream metrics")]),s._v("。")],1),s._v(" "),e("h3",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("hadmin server stats stream appends\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-------------+--------------+--------------+---------------+\n| stream_name | appends_1min | appends_5min | appends_10min |\n+-------------+--------------+--------------+---------------+\n| s1          | 3570393      | 3570572      | 3570604       |\n+-------------+--------------+--------------+---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"交互式-sql-shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#交互式-sql-shell"}},[s._v("#")]),s._v(" 交互式 SQL shell")]),s._v(" "),e("p",[s._v("HAdmin 有一个交互式的 SQL shell，你可以在其中获得流的统计数据。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("hadmin server sql\nsql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"sql-shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql-shell"}},[s._v("#")]),s._v(" SQL Shell")]),s._v(" "),e("p",[s._v("使用 "),e("code",[s._v("show tables;")]),s._v(" 来获得从服务器上收集的所有 value tables 。它解释了所有存在的数据。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sql> show tables;\n+-------------------------------+------------------------------------------+\n|             Table             |               Description                |\n+-------------------------------+------------------------------------------+\n| streams                       | A  table that  lists the streams created |\n|                               | in the cluster.                          |\n+-------------------------------+------------------------------------------+\n|                               | For   each  server   node,  reports  the |\n| server_append_request_latency | estimated  percentiles latency of server |\n|                               | append request                           |\n+-------------------------------+------------------------------------------+\n|                               | For   each  server   node,  reports  the |\n| server_append_latency         | estimated  percentiles latency of server |\n|                               | appends                                  |\n+-------------------------------+------------------------------------------+\n| append_total_counter          | Total append requests server received.   |\n+-------------------------------+------------------------------------------+\n|                               | For   each  server   node,  reports  the |\n| append_throughput             | estimated  per-stream append  throughput |\n|                               | over various time periods.               |\n+-------------------------------+------------------------------------------+\n|                               | For   each  server   node,  reports  the |\n| subscription_throughput       | estimated  per-stream append  throughput |\n|                               | over various time periods.               |\n+-------------------------------+------------------------------------------+\n|                               | For   each  server   node,  reports  the |\n| read_throughput               | estimated   per-stream  read  throughput |\n|                               | over various time periods.               |\n+-------------------------------+------------------------------------------+\n| append_failed_counter         | Failed append requests.                  |\n+-------------------------------+------------------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br")])]),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("describe streams"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+----------------------+--------+------------------------------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        Column        "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  Type  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("               Description                "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----------------------+--------+------------------------------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" node_id              "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" int    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Node ID this row is for.                 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----------------------+--------+------------------------------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" name                 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" string "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" The name of the stream.                  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----------------------+--------+------------------------------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" replication_property "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" string "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Replication property configured "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" stream.                                  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----------------------+--------+------------------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("你可以直观地使用 "),e("code",[s._v("select")]),s._v(" 来获取和计算你想要的数据。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("sql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from streams"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+---------+------+----------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" node_id "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" replication_property "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------+------+----------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("       "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" demo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" node:3               "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------+------+----------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"示例-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),e("p",[s._v("找到过去10分钟内吞吐量最高的前 5 个 stream。")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" streams"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("append_throughput"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("throughput_10min"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" total_throughput\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" append_throughput\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" streams "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" streams"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" append_throughput"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stream_name\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" stream_name\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" total_throughput "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);