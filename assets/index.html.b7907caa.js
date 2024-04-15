import{_ as i,r as a,o as p,c as u,a as e,b as n,d as s,w as d,e as t}from"./app.0a456c9a.js";const h={},m={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},v=t(`<blockquote><p>vuepress@2.X</p><p>vue@3.X</p><p>elementPlus@2.x</p></blockquote><h1 id="docs-目录下" tabindex="-1"><a class="header-anchor" href="#docs-目录下" aria-hidden="true">#</a> /docs 目录下</h1><h2 id="规范" tabindex="-1"><a class="header-anchor" href="#规范" aria-hidden="true">#</a> 规范</h2><ol><li><code>/docs/readme.md</code>或<code>/docs/index.md</code>会被视为网站首页，其路由为<code>/</code>;</li><li>文件夹及md文件均以<code>小驼峰命名</code>；</li><li>约定以<code>Group</code>结尾的文件夹将会作为一个组；</li><li><code>Group文件夹</code>可以创建<code>config.json</code>文件用于配置组信息，若没有则以注释内容配置组信息，格式如下：</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>        <span class="token punctuation">{</span>
          <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试分组&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 没有则以文件夹名称为text</span>
          <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 组排序，number类型，没有则为0</span>
          <span class="token property">&quot;collapsable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 组默认展开或收起，不写默认false</span>
          <span class="token comment">// 其他组配置项</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),_={start:"5"},b=e("li",null,[n("每个"),e("code",null,"Group文件夹"),n("文件夹下面的"),e("code",null,"index.md"),n("或者"),e("code",null,"readme.md"),n("文件将会被视为该分组下首页，其路由为"),e("code",null,"/xxxGroup/"),n("；")],-1),k=e("code",null,".md",-1),x={href:"https://v2.vuepress.vuejs.org/zh/guide/page.html#frontmatter",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>        ---
        title<span class="token operator">:</span> &#39;介绍&#39; <span class="token comment">// 没有则以文件名称为title</span>
        order<span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// number类型，没有则为0</span>
        ---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意key-value间的空格</strong>，生成侧边栏数据时会读取<code>.md</code>文件夹下第一行的该声明内容，若未声明，则会以文件名为左侧标题名称且排序为0，文档搜索也是依据该格式下的title；</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><ol><li>每次增删<code>.md</code>文件或组都需要重新生成一下侧边栏数据；</li><li>同级目录下存在<code>index.md</code>和<code>readme.md</code>，左侧栏都会显示这两个路由名，但内容为后生成路由的那个文件；</li><li>非<code>Group</code>结尾的文件夹下的文件，将会以一级菜单形式粗在于左侧栏；</li><li><code>/.vuepress/components</code>文件夹存放的是vue3.x组件，不会自动全局注册，需要在<code>.vuepress/client.js</code>中<code>enhance</code>下注册，可以在<code>.md</code>文件中直接使用；</li><li>侧边栏默认是全展开的形式；</li><li>文中有二级标题的，点击该导航后将会在侧边栏生成二级导航，这种就是一篇到底的形式，采用锚点定位方式，如本页。</li><li>打包后的<code>/dist</code>文件夹在<code>.vuepress</code>文件夹下</li><li>贡献者功能在创建git后存在</li></ol><h2 id="内置组件" tabindex="-1"><a class="header-anchor" href="#内置组件" aria-hidden="true">#</a> 内置组件</h2><h3 id="codeshow" tabindex="-1"><a class="header-anchor" href="#codeshow" aria-hidden="true">#</a> CodeShow</h3><p>这个组件是一个代码演示组件，类似element组件演示那种 <strong>注意：直接预览md文件不会渲染组件</strong></p>`,7),g=e("div",{class:"language-vue","data-ext":"vue"},[e("pre",{class:"language-vue"},[e("code",null,"File not found")])],-1),j=t('<h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><p>先生成侧边栏目录：</p><p><code>npm run nav</code></p><p>会生成/utils/sidebar.js文件，里面是侧边栏的数组</p><p>本地运行：</p><p><code>npm run dev</code></p><p>打包：</p><p><code>npm run build</code></p><h2 id="相关链接" tabindex="-1"><a class="header-anchor" href="#相关链接" aria-hidden="true">#</a> 相关链接</h2>',9),q={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://gitee.com/mosowe/vuepress3",target:"_blank",rel:"noopener noreferrer"};function y(C,G){const o=a("ExternalLinkIcon"),c=a("Test"),l=a("codeShow"),r=a("ClientOnly");return p(),u("div",null,[e("p",null,[e("a",m,[n("基于vuepress2.X版本"),s(o)])]),v,e("ol",_,[b,e("li",null,[n("每个"),k,n("文件第一行应为如下"),e("a",x,[n("格式"),s(o)]),n("，均为可选：")])]),f,s(r,null,{default:d(()=>[s(l,null,{examples:d(()=>[s(c)]),default:d(()=>[g]),_:1})]),_:1}),j,e("p",null,[e("a",q,[n("vuepress"),s(o)])]),e("p",null,[e("a",w,[n("码云地址"),s(o)])])])}const S=i(h,[["render",y],["__file","index.html.vue"]]);export{S as default};
