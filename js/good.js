//实现顺序加载的代码
<script type="text/javascript">
12         function loadScript(url, callback) {
13             var script = document.createElement("script");
14             script.type = "text/javascript";
15 
16             //IE
17             if (script.readyState) {
18                 script.onreadystatechange = function () {
19                     if (script.readyState == "loaded" || script.readyState == "complete") {
20                         script.onreadystatechange = null;
21                         callback();
22                     }
23                 }
24             } else {
25                 //非IE
26                 script.onload = function () {
27                     callback();
28                 }
29             }
30             script.src = url;
31             document.getElementById("head").appendChild(script);
32         }
33         //第一步加载jquery类库
34         loadScript("jquery/jquery-1.4.1.js", function () {
35             //第二步加载hello.js
36             loadScript("js/hello.js", function () {
37                 //第三步加载world.js
38                 loadScript("js/world.js", function () {
39 
40                 });
41             });
42         });
43     </script>