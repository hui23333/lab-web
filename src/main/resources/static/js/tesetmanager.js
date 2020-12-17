layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider'], function(){
    var layer = layui.layer //弹层
        ,table = layui.table //表格
        ,element = layui.element;//元素操作
    //执行一个 table 实例
    table.render({
        elem: '#demo'
        ,height: 600
        ,url: '../../static/json/lay.json' //数据接口
        ,title: '用户表'
        ,page: true //开启分页
        ,toolbar: 'default' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
        ,totalRow: true //开启合计行
        ,cols: [[ //表头
            {type: 'checkbox'}
            ,{field: 'id', title: 'ID', width:100, sort: true,totalRowText: '合计：'}
            ,{field: 'relid', title: '教师工号', width: 150, sort: true,totalRow: true}
            ,{field: 'relname', title: '姓名', width:100, sort: true}
            ,{field: 'relsex', title: '性别', width:70}
            ,{field: 'relcollege', title: '所属学院', width: 180, totalRow: true}
            ,{field: 'reldepartment', title: '所属系', width: 150, totalRow: true}
            ,{field: 'posid', title:'权限', width: 150}
            ,{field: 'perid',title: '操作', align:'center', toolbar: '#barDemo'}
        ]]
    });

    //监听头工具栏事件
    table.on('toolbar(test)', function(obj){
        var checkStatus = table.checkStatus(obj.config.id)
            ,data = checkStatus.data; //获取选中的数据
        switch(obj.event){
            case 'add':
                layer.msg('添加');
                break;
            case 'update':
                if(data.length === 0){
                    layer.msg('请选择一行');
                } else if(data.length > 1){
                    layer.msg('只能同时编辑一个');
                } else {
                    layer.alert('编辑 [id]：'+ checkStatus.data[0].id);
                }
                break;
            case 'delete':
                if(data.length === 0){
                    layer.msg('请选择一行');
                } else {
                    layer.msg('删除');

                }
                break;
        };
    });

    //监听行工具事件
    table.on('tool(test)', function(obj){ //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
        var data = obj.data //获得当前行数据
            ,layEvent = obj.event; //获得 lay-event 对应的值
            if(layEvent === 'del'){
            layer.confirm('真的删除行么', function(index){
                obj.del(); //删除对应行（tr）的DOM结构
                layer.close(index);
                //向服务端发送删除指令
            });
        } else if(layEvent === 'edit'){
            layer.msg('编辑操作');
        }
    });

    //底部信息
    // var footerTpl = lay('#footer')[0].innerHTML;
    // lay('#footer').html(layui.laytpl(footerTpl).render({}))
    //     .removeClass('layui-hide');
});