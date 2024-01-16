import{_ as e,o as i,c as n,e as d}from"./app-iGMGIGKa.js";const s="/Blog/assets/img_4-WOQ9lwA7.png",a="/Blog/assets/img_5-iPU4vYXO.png",l="/Blog/assets/img_6-bZPL2xFD.png",t="/Blog/assets/img_7-NgIayTQ2.png",r="/Blog/assets/img_8-ELu2oK0D.png",c="/Blog/assets/img_9-9J4Tosm4.png",v={},u=d(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>目前 css 布局方案中, 网格布局可以算得上是最强大的布局方案了。它可以将网页分为一个个网格，然后利用这些网格组合做出各种各样的布局。</p><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>在学习 grid 布局之前，我们需要了解一些基本概念</p><h3 id="_1-容器和项目" tabindex="-1"><a class="header-anchor" href="#_1-容器和项目" aria-hidden="true">#</a> 1. 容器和项目</h3><p>采用网格布局的区域，称为 “容器”。容器内部的采用网格定位的子元素称为 “项目”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;div class=&quot;wrapper&quot;&gt;
        &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
    &lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，wrapper 就是容器，item 就是项目</p><h4 id="_1-1-行、列和单元格" tabindex="-1"><a class="header-anchor" href="#_1-1-行、列和单元格" aria-hidden="true">#</a> 1.1 行、列和单元格</h4><p>容器里面的水平区域称为 “行”，垂直区域称为 “列”，行列重叠出来的空间组成单元格</p><p><img src="`+s+'" alt="img_4.png"></p><h4 id="_1-2-网格线" tabindex="-1"><a class="header-anchor" href="#_1-2-网格线" aria-hidden="true">#</a> 1.2 网格线</h4><p>划分网格的线，称为” 网格线 “</p><p><img src="'+a+`" alt="img_5.png"></p><p>黄色的代表是列(columns)的网格线，绿色代表的是行(rows)的网格线</p><p>Grid 和 flex 类似，布局的属性都是分为两类，一类定义在容器上，称为容器属性，一类定义在项目上，称为项目属性</p><h3 id="_2-容器属性" tabindex="-1"><a class="header-anchor" href="#_2-容器属性" aria-hidden="true">#</a> 2 容器属性</h3><h4 id="_2-1-display-属性" tabindex="-1"><a class="header-anchor" href="#_2-1-display-属性" aria-hidden="true">#</a> 2.1 display 属性</h4><p>display:grid 指定一个容器为网格布局</p><p>html 部分：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;div class=&quot;wrapper&quot;&gt;
        &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
    &lt;/div&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>css 部分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        .wrapper{
            width:450px;
            background: #f3f3f3;
            text-align:center;
            display: grid;
            grid-template-columns: 150px 150px 150px;
            grid-template-rows: 150px 150px 150px
        }
        .item{
            text-align: center;
            border:1px solid #fff;
            color:#fff;
            font-weight: bold;
            line-height: 150px;
        }
        .item:first-of-type{
            background:#ef342a
        }
        .item:nth-of-type(2){
            background:#00a0a0;
        }
        .item:nth-of-type(3){
            background:#a0a0ff;
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+'" alt="img_6.png"></p><p>在这里我定义的三个网格都是宽高为 150px</p><p>当然啦，我们也可以把它定义为行内元素，该元素内部就采用网格布局</p><h4 id="_2-2-display-inline-grid-效果" tabindex="-1"><a class="header-anchor" href="#_2-2-display-inline-grid-效果" aria-hidden="true">#</a> 2.2 display：inline-grid 效果</h4><p><img src="'+t+`" alt="img_7.png"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;span&gt;foo&lt;/span&gt;
    &lt;div class=&quot;wrapper&quot;&gt;
        &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
    &lt;/div&gt;
    &lt;span&gt;bar&lt;/span&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="http://common.cnblogs.com/images/copycode.gif" alt="">](javascript:void(0); &quot;复制代码&quot;)</p><h3 id="_3-grid-template-columns-和-grid-template-rows" tabindex="-1"><a class="header-anchor" href="#_3-grid-template-columns-和-grid-template-rows" aria-hidden="true">#</a> 3 grid-template-columns 和 grid-template-rows</h3><p>grid-template-columns：用来指定行的宽度</p><p>grid-template-rows：用来指定行的高度</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrapper{
            width:450px;
            background: #e5e5e5;
            text-align:center;
            display: inline-grid;
            grid-template-columns: 150px 150px 150px;
            grid-template-rows: 150px 150px 150px
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码指定的宽高各为 150px</p><p>当然来，出来能指定具体的数值之外，也可以使用百分比来表示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrapper {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-repeat" tabindex="-1"><a class="header-anchor" href="#_3-1-repeat" aria-hidden="true">#</a> 3.1 repeat</h4><p>有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用<code>repeat()</code>函数，简化重复的值。上面的代码用<code>repeat()</code>改写如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>repeat 接受两个参数：第一个数重复的次数（上面的例子是重复 3 次），第二个是重复的值（上面例子是 33.33%）</p><p>repeat 也可以是重复某种模式，例如下面的例子就是一只重复 100px,20px,80px</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;div class=&quot;wrapper&quot;&gt;
        &lt;div class=&quot;item item-1&quot;&gt;1&lt;/div&gt;
        &lt;div class=&quot;item item-2&quot;&gt;2&lt;/div&gt;
        &lt;div class=&quot;item item-3&quot;&gt;3&lt;/div&gt;
        &lt;div class=&quot;item item-4&quot;&gt;4&lt;/div&gt;
        &lt;div class=&quot;item item-5&quot;&gt;5&lt;/div&gt;
        &lt;div class=&quot;item item-6&quot;&gt;6&lt;/div&gt;
        &lt;div class=&quot;item item-7&quot;&gt;7&lt;/div&gt;
        &lt;div class=&quot;item item-8&quot;&gt;8&lt;/div&gt;
        &lt;div class=&quot;item item-9&quot;&gt;9&lt;/div&gt;
    &lt;/div&gt;
    &lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>css 部分：repeat（2，100px,20px,80px）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    .wrapper {
        display: grid;
        grid-template-columns: repeat(2, 100px 20px 80px);
        grid-template-rows: repeat(3, 100px);
    }

    .item {
        text-align: center;
        border: 1px solid #e5e4e9;
    }

    .item-1 {
        background-color: #ef342a;
    }

    .item-2 {
        background-color: #f68f26;
    }

    .item-3 {
        background-color: #4ba946;
    }

    .item-4 {
        background-color: #0376c2;
    }

    .item-5 {
        background-color: #c077af;
    }

    .item-6 {
        background-color: #f8d29d;
    }

    .item-7 {
        background-color: #b5a87f;
    }

    .item-8 {
        background-color: #d0e4a9;
    }

    .item-9 {
        background-color: #4dc7ec;
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="img_8.png"></p><h4 id="_3-2-auto-fill" tabindex="-1"><a class="header-anchor" href="#_3-2-auto-fill" aria-hidden="true">#</a> 3.2 auto-fill</h4><p>有时候单元格的大小是固定的，但是容器的大小不确定。如果希望每一行或则每一列都尽可能的容纳更多的单元格，我们就可以使用 auto-fill 来自动填充</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrapper{
  display:grid;
  //其中每列的宽度为100像素，并且根据容器的大小自动填充列的数量。
  grid-template-columns: repeat(auto-fill, 100px)  
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-fr" tabindex="-1"><a class="header-anchor" href="#_3-3-fr" aria-hidden="true">#</a> 3.3 fr</h4><p>为了表示比例关系，网格提供了 fr 关键字（fraction 的缩写，意为 “片段”），如果两列的宽度分别为 1fr 和 2fr，就表示后者是前者的 2 倍</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;div&gt;
        &lt;div&gt;1&lt;/div&gt;
        &lt;div&gt;2&lt;/div&gt;
        &lt;div&gt;3&lt;/div&gt; 
    &lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>css 部分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrapper{
            width:450px;
            background: #f3f3f3;
            text-align:center;
            display:grid;
            grid-template-columns: 1fr 2fr 1fr;
            grid-template-rows: 150px 150px 150px
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-minmax" tabindex="-1"><a class="header-anchor" href="#_3-4-minmax" aria-hidden="true">#</a> 3.4 minmax</h4><p>minmax() 产生一个长度范围，表示长度就在这个范围之中，它接受两个参数，分别为最小值和最大值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrapper{
grid-template-columns: 1fr 1fr minmax(100px,1fr);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码 (minmax(100px,1fr)) 表示列宽不小于 100px，不大于 1fr</p><h4 id="_3-5-auto-关键字" tabindex="-1"><a class="header-anchor" href="#_3-5-auto-关键字" aria-hidden="true">#</a> 3.5 auto 关键字</h4><p>表示浏览器自己决定宽度</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grid-template-columns: 100px auto 100px;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了<code>min-width</code>，且这个值大于最大宽度</p><h3 id="_4-grid-row-gap-和-grid-colunm-gap-属性" tabindex="-1"><a class="header-anchor" href="#_4-grid-row-gap-和-grid-colunm-gap-属性" aria-hidden="true">#</a> 4 grid-row-gap 和 grid-colunm-gap 属性</h3><p>grid-row-gap：设置行与行之间的间隔</p><p>grid-colunm-gap：设置列于列之间的间隔</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrapper {
  grid-row-gap: 10px;
  grid-column-gap: 10px;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>grid-row-gap 和 grid-colunms-gap 合并简写的话, 格式为 grid-gap</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrapper{
grid-gap: 10px 10px;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果省略第二个值的话，那么就默认第二个值等于第一个值</p><h3 id="_5-grid-auto-flow" tabindex="-1"><a class="header-anchor" href="#_5-grid-auto-flow" aria-hidden="true">#</a> 5 grid-auto-flow</h3><p>划分网格，容器的子元素排序是按照 “先行后列” 来排的通过该属性我们可以自定义排列的顺序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrapper{
  grid-auto-flow:colunm;  
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt="img_9.png"></p><h4 id="_6-1-justify-items、align-items-和-place-items-属性" tabindex="-1"><a class="header-anchor" href="#_6-1-justify-items、align-items-和-place-items-属性" aria-hidden="true">#</a> 6 .1 justify-items、align-items 和 place-items 属性</h4><p>justify-items 属性设置单元格内容的水平位置，align-items 设置单元格内容的垂直位置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrapper {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个属性的取值是完全一样的</p><ul><li>start：对齐单元格的起始边缘。</li><li>end：对齐单元格的结束边缘。</li><li>center：单元格内部居中。</li><li>stretch：拉伸，占满单元格的整个宽度（默认值）</li></ul><p>这个是在单元中内居中</p><p>place-item 是两者的合并写法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>place-items: &lt;align-items&gt; &lt;justify-items&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>place-items: start end;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-justify-content-属性、align-content-属性和-place-content-属性" tabindex="-1"><a class="header-anchor" href="#_6-2-justify-content-属性、align-content-属性和-place-content-属性" aria-hidden="true">#</a> 6.2 justify-content 属性、align-content 属性和 place-content 属性</h4><p>justify-content 属性是整个内容区域在容器里面的水平位置，align-content 属性是整个内容区域在容器里面的垂直位置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrapper {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>start</strong></p><p>水平方向和垂直方向都是 start</p><p><img src="https://img2018.cnblogs.com/blog/1034530/201905/1034530-20190520145628830-1246282026.png" alt=""></p><p><strong>center</strong></p><p>垂直和水平方向都是 center</p><p><img src="https://img2018.cnblogs.com/blog/1034530/201905/1034530-20190520150013854-1380928534.png" alt=""></p><p><strong>end</strong></p><p>垂直和水平都是 end</p><p><img src="https://img2018.cnblogs.com/blog/1034530/201905/1034530-20190520150132826-1266179475.png" alt=""></p><h4 id="_7-justify-content、align-content-和-place-content" tabindex="-1"><a class="header-anchor" href="#_7-justify-content、align-content-和-place-content" aria-hidden="true">#</a> 7 justify-content、align-content 和 place-content</h4><p>justify-content 属性是整个内容区域在容器里面的水平位置，<strong>align-conent</strong> 属性是整个内容区域的垂直位置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.wrapper {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个属性的写法是完全相同的，取的值是一样的</p><h2 id="项目属性" tabindex="-1"><a class="header-anchor" href="#项目属性" aria-hidden="true">#</a> 项目属性</h2><h3 id="grid-colunm-start-属性、grid-colunm-end-属性、grid-row-start-属性-grid-row-end-属性" tabindex="-1"><a class="header-anchor" href="#grid-colunm-start-属性、grid-colunm-end-属性、grid-row-start-属性-grid-row-end-属性" aria-hidden="true">#</a> grid-colunm-start 属性、grid-colunm-end 属性、grid-row-start 属性 \\ grid-row-end 属性</h3><p>项目的位置是可以指定的，具体方法就是指定项目的边框，分别定位在哪根网格线</p><ul><li><code>grid-column-start</code>属性：左边框所在的垂直网格线</li><li><code>grid-column-end</code>属性：右边框所在的垂直网格线</li><li><code>grid-row-start</code>属性：上边框所在的水平网格线</li><li><code>grid-row-end</code>属性：下边框所在的水平网格线</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.item-1 {
  grid-column-start: 2;
  grid-column-end: 4;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2018.cnblogs.com/blog/1034530/201905/1034530-20190520152750258-66095035.png" alt=""></p><p>编号为 1 的项目水平方向的网格线是从 2 开始的，到 4 结束。其他编号的没有指定位置，由浏览器自动布局，这时它们的位置由容器的<code>grid-auto-flow</code>属性决定，这个属性的默认值是<code>row</code>，因此会 &quot;先行后列&quot; 进行排列。读者可以把这个属性的值分别改成<code>column</code>、<code>row dense</code>和<code>column dense</code>，看看其他项目的位置发生了怎样的变化。</p><p>下面的例子是列的网格线布局</p><p>[<img src="http://common.cnblogs.com/images/copycode.gif" alt="">](javascript:void(0); &quot;复制代码&quot;)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="http://common.cnblogs.com/images/copycode.gif" alt="">](javascript:void(0); &quot;复制代码&quot;)</p><p><img src="https://img2018.cnblogs.com/blog/1034530/201905/1034530-20190520153621166-97559884.png" alt=""></p><p>除了这个四个属性的值之外，我们还可以使用 span 关键字，表示占几个网格，类似 table 的 colspan 和 rowspan</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.item-1 {
  grid-column-start: span 2;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2018.cnblogs.com/blog/1034530/201905/1034530-20190520154032431-651396243.png" alt=""></p><h3 id="grid-column-和-grid-row-属性" tabindex="-1"><a class="header-anchor" href="#grid-column-和-grid-row-属性" aria-hidden="true">#</a> grid-column 和 grid-row 属性</h3><p>grid -column 属性是 grid-column-start 和 grid-column-end 的合并写法，grid-row 是 grid-row-start 和 grid-row-end 的合并写法</p><p>[<img src="http://common.cnblogs.com/images/copycode.gif" alt="">](javascript:void(0); &quot;复制代码&quot;)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
/* 等同于 */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="http://common.cnblogs.com/images/copycode.gif" alt="">](javascript:void(0); &quot;复制代码&quot;)</p><p><img src="https://img2018.cnblogs.com/blog/1034530/201905/1034530-20190520154709935-1040859940.png" alt=""></p><p>这两个属性也可以使用 span 关键字，表示跨越多少个网格</p><p>[<img src="http://common.cnblogs.com/images/copycode.gif" alt="">](javascript:void(0); &quot;复制代码&quot;)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.item-1 {
  background: #b03532;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* 等同于 */
.item-1 {
  background: #b03532;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="http://common.cnblogs.com/images/copycode.gif" alt="">](javascript:void(0); &quot;复制代码&quot;)</p><p>斜杠及后面的部分可以被省略，默认跨越一个网格</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.item-1 {
  grid-column: 1;
  grid-row: 1;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2018.cnblogs.com/blog/1034530/201905/1034530-20190520155435955-1547516920.png" alt=""></p>`,127),m=[u];function o(p,g){return i(),n("div",null,m)}const h=e(v,[["render",o],["__file","CSS Grid wanggebuju2.html.vue"]]);export{h as default};
