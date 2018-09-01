const homeTpl = require('./views/home.html');
const positionTpl = require('./views/position.html');
//这里只是做了一个假的路由,给首页和职业两个li标签添加 link自定义属性,用来连接转换渲染页面
$('.sidebar-menu li[link]')//选择ul标签下的 带link属性的li标签
     .on('click', function(){
    //     switch($(this).attr('link')) {
    //         case 'home.html':
    //             $('.content').html(homeTpl);
    //             break;
    //         case 'position.html':
    //             $('.content').html(positionTpl);
    //             break;
    //     }
     /*$('.content').html($(this).attr('link'));*/ //这一句相当于上面代码
    
     let map = new Map();
     map.set('home.html', homeTpl);
     map.set('position.html', positionTpl);

     $('.content').html(map.get($(this).attr('link')))
            
    })