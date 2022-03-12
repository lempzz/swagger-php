import{_ as s,c as n,o as a,a as t}from"./app.9fd3944e.js";const b='{"title":"Attributes","description":"","frontmatter":{},"headers":[{"level":2,"title":"Nesting","slug":"nesting"}],"relativePath":"guide/attributes.md","lastUpdated":1647128670939}',e={},p=t(`<h1 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">Namespace</p><p>Using a namespace alias simplifies typing and improves readability.</p><p>All attributes are in the <code>OpenApi\\Attributes</code> namespace.</p></div><h2 id="nesting" tabindex="-1">Nesting <a class="header-anchor" href="#nesting" aria-hidden="true">#</a></h2><p>Similar to annotations attributes can be top level or nested. However, attributes <strong>may be put at the same level</strong> if there is no ambiguity. <code>swagger-php</code> will then merge attributes according to the defined rules about parent/child relationships.</p><p><strong>Example</strong></p><p>Nested:</p><div class="language-php"><pre><code>    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Get</span><span class="token punctuation">(</span>
        <span class="token attribute-class-name class-name">path</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;/api/users&#39;</span><span class="token punctuation">,</span>
        <span class="token attribute-class-name class-name">responses</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token attribute-class-name class-name">new</span> <span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Response</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">response</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">description</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;AOK&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token attribute-class-name class-name">new</span> <span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Response</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">response</span><span class="token punctuation">:</span> <span class="token number">401</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">description</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;Not allowed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">users</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
</code></pre></div><p>Not nested:</p><div class="language-php"><pre><code>    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Get</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">path</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;/api/users&#39;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Response</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">response</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">description</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;AOK&#39;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Response</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">response</span><span class="token punctuation">:</span> <span class="token number">401</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">description</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;Not allowed&#39;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">users</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
</code></pre></div><p>Depending on how much nesting there is this can make things a bit simpler and easier to read.</p><div class="warning custom-block"><p class="custom-block-title">Top level only</p><p>Automatic merging of attributes works only at the top level - in the example that would be the method <code>users()</code>.</p></div>`,11),c=[p];function o(i,l,u,r,k,d){return a(),n("div",null,c)}var g=s(e,[["render",o]]);export{b as __pageData,g as default};
