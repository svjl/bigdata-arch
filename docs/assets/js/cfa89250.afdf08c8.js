(self.webpackChunkbigdata=self.webpackChunkbigdata||[]).push([[290],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(d,".").concat(m)]||c[m]||s[m]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},252:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d},default:function(){return p}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),l={},i={unversionedId:"bigdata/hadoop/installation",id:"bigdata/hadoop/installation",isDocsHomePage:!1,title:"Hadoop windows installation",description:"Choose Hadoop 3.2.2",source:"@site/docs/bigdata/hadoop/installation.md",sourceDirName:"bigdata/hadoop",slug:"/bigdata/hadoop/installation",permalink:"/bigdata-arch/docs/bigdata/hadoop/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/bigdata/hadoop/installation.md",version:"current",frontMatter:{},sidebar:"bigdataSidebar",previous:{title:"Big data Tutorial Intro",permalink:"/bigdata-arch/docs/bigdata/intro"},next:{title:"Hbase windows installation",permalink:"/bigdata-arch/docs/bigdata/hbase/installation"}},d=[{value:"Prepare folders and install JDK &amp; Hadoop",id:"prepare-folders-and-install-jdk--hadoop",children:[]},{value:"Configration Guide for pseudo-distributed mode",id:"configration-guide-for-pseudo-distributed-mode",children:[]},{value:"Format namenode",id:"format-namenode",children:[]},{value:"Start services",id:"start-services",children:[]}],u={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Choose Hadoop 3.2.2"),(0,o.kt)("h2",{id:"prepare-folders-and-install-jdk--hadoop"},"Prepare folders and install JDK & Hadoop"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"C:\\bigdata\\RedHat\\java-1.8.0-openjdk-1.8.0.282-1"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ensure Java installed to a folder without any space "),(0,o.kt)("li",{parentName:"ul"},"set JAVA_HOME on it"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"C:\\bigdata\\hadoop-3.2.2"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"set HADOOP_HOME on it"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add %JAVA_HOME%\\bin and %HADOOP_HOME% to PATH")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"C:\\bigdata\\data\\namenode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"C:\\bigdata\\data\\datanode"))),(0,o.kt)("h2",{id:"configration-guide-for-pseudo-distributed-mode"},"Configration Guide for pseudo-distributed mode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"C:\\bigdata\\hadoop-3.2.2\\etc\\hadoop\\core-site.xml"),(0,o.kt)("configuration",null,(0,o.kt)("property",null,(0,o.kt)("name",null,"fs.defaultFS"),(0,o.kt)("value",null,"hdfs://localhost:9000")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"C:\\bigdata\\hadoop-3.2.2\\etc\\hadoop\\hdfs-site.xml"),(0,o.kt)("configuration",null,(0,o.kt)("property",null,(0,o.kt)("name",null,"dfs.replication"),(0,o.kt)("value",null,"1")),(0,o.kt)("property",null,(0,o.kt)("name",null,"dfs.namenode.name.dir"),(0,o.kt)("value",null,"file:///C:/bigdata/data/namenode")),(0,o.kt)("property",null,(0,o.kt)("name",null,"dfs.datanode.data.dir"),(0,o.kt)("value",null,"file:///C:/bigdata/data/datanode")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"C:\\bigdata\\hadoop-3.2.2\\etc\\hadoop\\mapred-site.xml"),(0,o.kt)("configuration",null,(0,o.kt)("property",null,(0,o.kt)("name",null,"mapreduce.framework.name"),(0,o.kt)("value",null,"yarn")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"C:\\bigdata\\hadoop-3.2.2\\etc\\hadoop\\yarn-site.xml"),(0,o.kt)("configuration",null,(0,o.kt)("property",null,(0,o.kt)("name",null,"yarn.resourcemanager.hostname"),(0,o.kt)("value",null,"localhost")),(0,o.kt)("property",null,(0,o.kt)("name",null,"yarn.nodemanager.aux-services"),(0,o.kt)("value",null,"mapreduce_shuffle"))))),(0,o.kt)("h2",{id:"format-namenode"},"Format namenode"),(0,o.kt)("p",null,"bin\\hdfs namenode -format"),(0,o.kt)("h2",{id:"start-services"},"Start services"),(0,o.kt)("p",null,"sbin\\start-dfs.cmd\nNameNode, DateNode\nhttp://localhost:9870/"),(0,o.kt)("p",null,"sbin\\start-yarn.cmd\nResourceManager, NodeManager\nhttp://localhost:8088/"),(0,o.kt)("p",null,"bin\\mapred.cmd historyserver\nMapReduce JobHistory Server\nhttp://localhost:19888/"))}p.isMDXComponent=!0}}]);