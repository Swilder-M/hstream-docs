(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{459:function(a,t,s){a.exports=s.p+"docs-assets/img/add-panel.784eb70b.png"},460:function(a,t,s){a.exports=s.p+"docs-assets/img/add-a-panel.3f5942e1.png"},461:function(a,t,s){a.exports=s.p+"docs-assets/img/create-dashboard.f765342e.png"},462:function(a,t,s){a.exports=s.p+"docs-assets/img/save.a03b99af.png"},510:function(a,t,s){"use strict";s.r(t);var e=s(11),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"monitoring-hstreamdb-with-grafana"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-hstreamdb-with-grafana"}},[a._v("#")]),a._v(" Monitoring HStreamDB with Grafana")]),a._v(" "),e("p",[a._v("A comprehensive metrics visualisation of the deployed HStreamDB cluster makes it\neasier to analyse the status and diagnose problems. This document describes the\ndeployment of Grafana and related tools with a running HStreamDB instance.")]),a._v(" "),e("h2",{attrs:{id:"installations-and-set-up"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installations-and-set-up"}},[a._v("#")]),a._v(" Installations and Set-up")]),a._v(" "),e("h3",{attrs:{id:"setup-data-source-for-grafana-setup-hstream-http-server-and-prometheus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-data-source-for-grafana-setup-hstream-http-server-and-prometheus"}},[a._v("#")]),a._v(" Setup Data Source for Grafana (Setup HStream Http Server and Prometheus)")]),a._v(" "),e("p",[a._v("Download the HStream HTTP Server binary from the\n"),e("a",{attrs:{href:"https://github.com/hstreamdb/http-services/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("release page"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[a._v("Start the HTTP Server with")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('http-server -services-url "127.0.0.1:6570" -address "127.0.0.1:9290"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("as a dependency of HStream Metrics Exporter. The HTTP Server will be responsible\nfor collecting metrics and executing admin requests.")]),a._v(" "),e("p",[a._v("Setting up HStream Metrics Exporter is similar. Usages and releases are\navailable on its\n"),e("a",{attrs:{href:"https://github.com/hstreamdb/hstream-metrics-exporter",target:"_blank",rel:"noopener noreferrer"}},[a._v("homepage"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("hstream-metrics-exporter -host 127.0.0.1 -port 9270 -http-server-host 127.0.0.1 -http-server-port 9290\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("This exports the metrics to Prometheus as a Prometheus target.")]),a._v(" "),e("p",[a._v("Another Prometheus target we need is the Node Exporter, an exporter for hardware\nand OS metrics. It should be deployed on every HStream node. Information about\nthe installation and usage is available on its\n"),e("a",{attrs:{href:"https://github.com/prometheus/node_exporter",target:"_blank",rel:"noopener noreferrer"}},[a._v("homepage"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[a._v("After setting up the targets, users can start Prometheus via Docker with\nconfiguration files.")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run -p 9090:9090 -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("The configuration files must set scrape intervals and configure HStream Metrics\nExporter as the target. We would also need the HStream Metrics Exporter's\naddress in the Prometheus configuration. Check the\n"),e("a",{attrs:{href:"https://prometheus.io/docs/prometheus/latest/getting_started/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Prometheus guide"),e("OutboundLink")],1),a._v("\nfor details.")]),a._v(" "),e("h3",{attrs:{id:"install-and-start-grafana"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-and-start-grafana"}},[a._v("#")]),a._v(" Install and Start Grafana")]),a._v(" "),e("p",[a._v("We can install and run Grafana with Docker")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run -p 3000:3000               \\\n  -e GF_AUTH_ANONYMOUS_ORG_ROLE=Admin \\\n  -e GF_AUTH_ANONYMOUS_ENABLED=true   \\\n  -e GF_AUTH_DISABLE_LOGIN_FORM=true  \\\n      grafana/grafana-oss\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("Here are a few options making "),e("strong",[a._v("just having a preview")]),a._v(" of monitoring HStreamDB\neasier.")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("GF_AUTH_ANONYMOUS_ORG_ROLE=Admin")]),a._v(": enable anonymous organisation as Grafana\nadmin, which is able to add data sources")]),a._v(" "),e("li",[e("code",[a._v("GF_AUTH_ANONYMOUS_ENABLED=true")]),a._v(": enable and use an anonymous organisation as\nthe default")]),a._v(" "),e("li",[e("code",[a._v("GF_AUTH_DISABLE_LOGIN_FORM=true")]),a._v(": make the above two options work and skip\nthe log-in screen")])]),a._v(" "),e("h2",{attrs:{id:"provision-grafana"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#provision-grafana"}},[a._v("#")]),a._v(" Provision Grafana")]),a._v(" "),e("p",[a._v("To start with, create a folder with the following hierarchy:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("provisioning/\n├── dashboards/\n└── datasources/\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("When run with Docker, use "),e("code",[a._v("-v <path-to>/provisioning:/etc/grafana/provisioning")]),a._v("\nto mount the file into the container.")]),a._v(" "),e("p",[a._v("Create "),e("code",[a._v("datasources.yml")]),a._v(" under the "),e("code",[a._v("datasources")]),a._v(" folder to provision data\nsources.")]),a._v(" "),e("p",[a._v("An example would be:")]),a._v(" "),e("div",{staticClass:"language-yml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("datasources")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Prometheus\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("uid")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" TNX2D3rnk\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("orgId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" prometheus\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("typeName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Prometheus\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("typeLogoUrl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" public/app/plugins/datasource/prometheus/img/prometheus_logo.svg\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("access")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" proxy\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//localhost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("9090")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("database")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("basicAuth")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("isDefault")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("jsonData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("httpMethod")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" POST\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("readOnly")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br")])]),e("p",[a._v("Create "),e("code",[a._v("dashboards.yml")]),a._v(" under the "),e("code",[a._v("dashboards")]),a._v(" folder to provision dashboards.")]),a._v(" "),e("p",[a._v("An example would be:")]),a._v(" "),e("div",{staticClass:"language-yml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("providers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"DS_PROMETHEUS"')]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("orgId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("folder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" file\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("disableDeletion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("updateIntervalSeconds")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("allowUiUpdates")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("options")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /etc/grafana/provisioning/dashboards\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("foldersFromFilesStructure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br")])]),e("p",[a._v("The "),e("code",[a._v("path")]),a._v(" field here is the path Docker options bound to, for example,\n"),e("code",[a._v("/etc/grafana/provisioning")]),a._v(". Grafana will treat all JSON files in the "),e("code",[a._v("path")]),a._v("\nfolder as dashboards, which will be imported on start-up. Dashboards created\nlater can also be exported to JSON files.")]),a._v(" "),e("h2",{attrs:{id:"query-metrics-and-create-dashboards-with-grafana"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-metrics-and-create-dashboards-with-grafana"}},[a._v("#")]),a._v(" Query Metrics and Create Dashboards with Grafana")]),a._v(" "),e("p",[a._v("With services all set up, we can now run metrics queries and visualise data with\nGrafana.")]),a._v(" "),e("p",[a._v("The following creates a new metrics panel on the Dashboards tab:")]),a._v(" "),e("p",[a._v('Click on "Add panel":')]),a._v(" "),e("p",[e("img",{attrs:{src:s(459),alt:""}})]),a._v(" "),e("p",[a._v('Click on "Add a new panel":')]),a._v(" "),e("p",[e("img",{attrs:{src:s(460),alt:""}})]),a._v(" "),e("p",[a._v('Under the "Query" tab, use the metrics explorer under the "Metrics" tab to\nselect the HStream metrics. Use the query builder to construct the query and\nprovide attributes. Then save the new panel.')]),a._v(" "),e("p",[e("img",{attrs:{src:s(461),alt:""}})]),a._v(" "),e("p",[a._v('Click on "Save dashboard", then export as JSON for provisioning and import\nusages.')]),a._v(" "),e("p",[e("img",{attrs:{src:s(462),alt:""}})])])}),[],!1,null,null,null);t.default=n.exports}}]);