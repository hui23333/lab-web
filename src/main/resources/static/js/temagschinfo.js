layui.use(['table','form','element'], function() {
    var table = layui.table;

    table.render({
        elem: '#list1',
        toolbar: '#toolbar1',
        height: 800,
        data: [{

            type: '正文',
            content: '  惠州学院地处全国文明城市、国家历史文化名城、粤港澳大湾区重要城市——惠州，是广东省属全日制公办本科高校、普通本科转型试点高校、省市共建本科高校和省硕士学位授予立项建设单位、第二批省级双创示范基地和省创建国家教师教育创新实验区立项院校。学校占地近2500亩，面向全国23个省（自治区、直辖市）招生，现有全日制在校生17812名。'
        }, {

            type: '尾部',
            content: '统计数据截止于2019年9月'
        }],
        page: true //开启分页
            ,
        cols: [
            [ //表头
                {
                    type: 'checkbox',
                    fixed: 'left'
                }, {
                    type: 'numbers',
                    field: 'line',
                    title: '行数',
                    width: 100,
                    fixed: 'left'
                }, {
                    field: 'type',
                    title: '类型',
                    width: 100,
                    fixed: 'left'
                }, {
                    field: 'content',
                    title: '内容',
                    fixed: 'left'
                }, {
                    fixed: 'right',
                    title: '操作',
                    width: 250,
                    align: 'center',
                    toolbar: '#barDemo1'
                }
            ]
        ]
    });

    table.render({
        elem: '#list2',
        toolbar: '#toolbar2',
        height: 800,
        data: [{
            position: '党委书记',
            name: '彭永宏'
        }],
        page: true //开启分页
            ,
        cols: [
            [ //表头
                {
                    type: 'checkbox',
                    fixed: 'left'
                }, {
                    type: 'numbers',
                    field: 'line',
                    title: '行数',
                    width: 100,
                    fixed: 'left'
            }, {
                    field: 'position',
                    title: '职位',
                    fixed: 'left'
                }, {
                    field: 'name',
                    title: '名字',
                    fixed: 'left'
                }, {
                    fixed: 'right',
                    title: '操作',
                    width: 250,
                    align: 'center',
                    toolbar: '#barDemo2'
                }
            ]
        ]
    });
    table.render({
        elem: '#list3',
        toolbar: '#toolbar3',
        height: 800,
        data: [{
            title: '校训',
            imgaddr: 'xiaoxun.jpg',
            content: '  我校校训体现历史、阐发精神，凝聚共识、面向未来。从我校办学实践来看，衡之古今，校之人我，验之成败，校训精神不出以下四端——'
        }],
        page: true //开启分页
            ,
        cols: [
            [ //表头
                {
                    type: 'checkbox',
                    fixed: 'left'
                }, {
                    type: 'numbers',
                    field: 'line',
                    title: '行数',
                    width: 100,
                    fixed: 'left'
            }, {
                    field: 'title',
                    title: '标题',
                    width: 150,
                    fixed: 'left'
                }, {
                    field: 'imgaddr',
                    width: 150,
                    title: '图片地址',
                    fixed: 'left'
                }, {
                    field: 'content',
                    title: '内容',
                    fixed: 'left'
                }, {
                    fixed: 'right',
                    title: '操作',
                    width: 250,
                    align: 'center',
                    toolbar: '#barDemo3'
                }
            ]
        ]
    });
    table.render({
        elem: '#list4',
        height: 800,
        data: [{
            name: '惠州学院',
            Xpoint:'114.417687',
            Ypoint:'23.050246',
            addr: '广东惠州市演达大道46号',
            code: '516007'
        }],
        page: true //开启分页
            ,
        cols: [
            [ //表头
                {
                    type: 'numbers',
                    field: 'line',
                    title: '行数',
                    width: 100,
                    fixed: 'left'
                }, {
                    field: 'name',
                    title: '学校名称',
                    width: 150,
                    fixed: 'left'
                },{
                    field: 'Xpoint',
                    title: 'X坐标',
                    width: 150,
                    fixed: 'left'
                },{
                    field: 'Ypoint',
                    title: 'Y坐标',
                    width: 150,
                    fixed: 'left'
                }, {
                    field: 'addr',
                    title: '详细地址',
                    fixed: 'left'
                }, {
                    field: 'code',
                    title: '邮政编码',
                    fixed: 'left',
                    width: 150
                }, {
                    fixed: 'right',
                    title: '操作',
                    width: 250,
                    align: 'center',
                    toolbar: '#barDemo4'
                }
            ]
        ]
    });
    table.render({
        elem: '#list5',
        height: 800,
        data: [{
            type: '顶、底部背景色',
            contain: '#b3080a'
        },{
            type: '顶部logo图片',
            contain: 'logo.jpg'
        },{
            type: '底部微信公众号图片',
            contain: 'wx.jpg'
        },{
            type: '手机版图片',
            contain: 'iphone.jpg'
        },{
            type: '地址',
            contain: '广东惠州市演达大道46号'
        },{
            type:'邮编',
            contain: '516007'
        },{
            type:'总机',
            contain: '0752-2529000'
        },{
            type:'E-mail',
            contain: 'webmaster@hzu.edu.cn'
        },{
            type:'版权所有',
            contain:'惠州学院 粤ICP备05008877号'
        },{
            type:'底部图片1',
            contain: "bottom1.jpg"
        }],
        page: true //开启分页
        ,
        cols: [
            [ //表头
                {
                    type: 'numbers',
                    field: 'line',
                    title: '行数',
                    width: 100,
                    fixed: 'left'
                }, {
                    field: 'type',
                    title: '类型',
                    width: 300,
                    fixed: 'left'
                }, {
                    field: 'contain',
                    title: '内容',
                    fixed: 'left'
                }, {
                    fixed: 'right',
                    title: '操作',
                    width: 100,
                    align: 'center',
                    toolbar: '#barDemo5'
                }
            ]
        ]
    });
    table.on('tool(list1)', function(obj){
        var data = obj.data;
        console.log(data)
        if(obj.event === 'edit'){
            // layer.open({
            //     type: 1
            //     ,title: false //不显示标题栏
            //     ,closeBtn: false
            //     ,area: '500px;'
            //     ,shade: 0.8
            //     ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
            //     ,btn: ['确认', '取消']
            //     ,btnAlign: 'c'
            //     ,moveType: 1 //拖拽模式，0或者1
            //     ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">你知道吗？亲！<br>layer ≠ layui<br><br>layer只是作为Layui的一个弹层模块，由于其用户基数较大，所以常常会有人以为layui是layerui<br><br>layer虽然已被 Layui 收编为内置的弹层模块，但仍然会作为一个独立组件全力维护、升级。<br><br>我们此后的征途是星辰大海 ^_^</div>'
            //     ,success: function(layero){
            //         var btn = layero.find('.layui-layer-btn');
            //         btn.find('.layui-layer-btn0').attr({
            //             href: 'http://www.layui.com/'
            //             ,target: '_blank'
            //         });
            //     }
            // });
            layer.open({
                title:'学校简介编辑',
                area:'500px',
                btn:['确认','取消'],
                id:'LAY_layuipro',
                content:''
            });
        }
    });
});

var liDom = document.querySelectorAll(".nav li");
var list = document.querySelectorAll(".list");

for (var i = 0; i < liDom.length; i++) {
    liDom[i].firstChild.index = i;
    liDom[i].addEventListener("click", function(eve) {
        for (var i = 0; i < list.length; i++)
            if (!hasClass(list[i], "hide"))
                addClass(list[i], "hide")
        removeClass(list[eve.target.index], "hide");
    })
}


function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
};

function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    };
};

function removeClass(elements, cName) {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    };
};