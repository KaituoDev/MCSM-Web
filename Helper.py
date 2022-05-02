try:
    with open('./dist/index.html','r',encoding='utf-8') as f:
        i = f.read()
        a = i.replace('<script>!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();</script><script src="/js/chunk-vendors-legacy.js" nomodule></script><script src="/js/index-legacy.js" nomodule></script>','')
        print('[Helper] File has been read.')
    with open('./dist/index.html','w+',encoding='utf-8') as f:
        f.write('<!-- Themed by Lazy https://blog.imlazy.ink:233 -->')
        f.write(a)
except Exception as e:
    print('[Helper] Failed to rewrite file.')
    print(e)
else:
    print('[Helper] File has been written.')