//JavaScript代码区域
layui.use('element', function(){
    var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块

    //监听导航点击
    element.on('nav(demo)', function(elem){
        //console.log(elem)
        layer.msg(elem.text());
    });
});
layui.use('table', function(){
    var table = layui.table;

    table.render({
        elem: '#test'
        , url: '../../static/json/jj.json'
        ,cols: [[
            {type:'checkbox'}
            ,{field:'id', width:150, title: '学号', sort: true}
            ,{field:'username', width:100, title: '姓名'}
            ,{field:'sex', width:80, title: '性别', sort: true}
            ,{field:'city', width:160, title: '年级'}
            ,{field:'city', width:160, title: '专业'}
            ,{field:'experience', width:160, title: '班级'}
            ,{field:'sign', title: '二级学院'}
        ]]
        ,page: true
    });
});
layui.use('form', function(){
    var form = layui.form;

    //监听提交
    form.on('submit(formDemo)', function(data){
        layer.msg(JSON.stringify(data.field));
        return false;
    });
});