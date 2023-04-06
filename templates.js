var template = {
    html:function(title,list,body, control, authStatusUI = '<a href="/login">login</a>'){
        return `
        <!doctype html>
        <html>
        <head>
        <title>Bookmark - ${title}</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/css/style.css">
        </head>
        <body id="root">
        ${authStatusUI}
        <h1 id="top"><a href="/">Bookmark</a></h1>
            <div id="list">
            ${list}
            </div>
            
            <div id="con">
            ${body}
        
            ${control}
            </div>
        </body>
        </html>
        `;
    },
    list:function(topic){
        var list = '<div class="back color-6"><div class="row columns"><ul class="menu align-center expanded text-center SMN_effect-6">';
        for(var i = 0 ; i < topic.length;i++){
            list += `<li ><a href = "/page/?id=${topic[i].id}" data-hover="${topic[i].title}">${topic[i].title}</a></li>`
        }
    
        list = list + '</ul></div></div>';
        return list;
    },
}


module.exports = template;