layui.config({
    version: '1605453739808' //为了更新 js 缓存，可忽略
});

layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider'], function(){
    var layer = layui.layer //弹层
        ,table = layui.table //表格
        ,element = layui.element //元素操作

    //向世界问个好
    layer.msg('Hello World');



    //执行一个 table 实例
    table.render({
        elem: '#demo'
        ,height: 600
        ,url: '../../static/json/lay.json' //数据接口
        ,title: '用户表'
        ,page: true //开启分页
        ,toolbar: '#toolbar1' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
        ,totalRow: false //开启合计行
        ,cols: [[ //表头
            {type: 'checkbox', fixed: 'left'}
            ,{field: 'mid', title: '专业编号', sort: true}
            ,{field: 'mname', title: '专业名'}
            ,{field: 'schid', title: '所属学院'}
            ,{field: 'depid', title: '所属系'}
            ,{field: 'sex', title: '专业简介'}
            ,{fixed: 'right',title: '操作', align:'center', toolbar: '#barDemo'}
        ]]
    });

    //监听头工具栏事件
    table.on('toolbar(test)', function(obj){
        var checkStatus = table.checkStatus(obj.config.id)
            ,data = checkStatus.data; //获取选中的数据
        switch(obj.event){
            case 'add':
                layer.open({
                    type: 1 //Page层类型
                    ,area: ['700px', '400px']
                    ,title: '请输入信息'
                    ,shade: 0.6 //遮罩透明度
                    ,maxmin: false //允许全屏最小化
                    ,anim: 1 //0-6的动画形式，-1不开启
                    ,content: '<br>' +
                        '<div class="layui-form-item">' +
                        '   <label class="layui-form-label">专业号</label>' +
                        '   <div class="layui-input-block">' +
                        '       <input type="text" name="classID" class="layui-input" required  lay-verify="required" placeholder="请输入专业号" autocomplete="off">' +
                        '   </div>' +
                        '</div>' +
                        '<div class="layui-form-item">' +
                        '   <label class="layui-form-label">专业名</label>' +
                        '   <div class="layui-input-block">' +
                        '       <input type="text" name="className" class="layui-input" required  lay-verify="required" placeholder="请输入专业名" autocomplete="off">' +
                        '   </div>' +
                        '</div>'+
                        '<div class="layui-form-item">' +
                        '   <label class="layui-form-label">所属学院</label><div class="layui-input-block">' +
                        '       <input type="text" name="classType" class="layui-input" required  lay-verify="required" placeholder="请输入所属学院" autocomplete="off">' +
                        '   </div>' +
                        '</div>' +
                        '<div class="layui-form-item">' +
                        '   <label class="layui-form-label">学生人数</label><div class="layui-input-block">' +
                        '       <input type="text" name="classIntrudution" class="layui-input" required  lay-verify="required" placeholder="请输入专业学生人数" autocomplete="off">' +
                        '   </div>' +
                        '</div>' +
                        '<div class="layui-form-item">' +
                        '   <label class="layui-form-label">专业简介</label><div class="layui-input-block">' +
                        '       <input type="text" name="beforeClass" class="layui-input" required  lay-verify="required" placeholder="请输入专业简介" autocomplete="off">' +
                        '   </div>' +
                        '</div>' +
                        '<div style="text-align:center"><button type="button" class="layui-btn" onclick="layer.msg(123)"}>确认</button></div>'
                });
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

                }
                break;
        };
    });

    //监听行工具事件
    table.on('tool(test)', function(obj){ //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
        var data = obj.data //获得当前行数据
            ,layEvent = obj.event; //获得 lay-event 对应的值
        if(layEvent === 'detail'){
            layer.msg('查看操作');
        } else if(layEvent === 'del'){
            layer.confirm('真的删除行么', function(index){
                obj.del(); //删除对应行（tr）的DOM结构
                layer.close(index);
                //向服务端发送删除指令
            });
        } else if(layEvent === 'edit'){
            layer.open({
                type: 1 //Page层类型
                ,area: ['600px', '350px']
                ,title: '请输入信息'
                ,shade: 0.6 //遮罩透明度
                ,maxmin: true //允许全屏最小化
                ,anim: 1 //0-6的动画形式，-1不开启
                ,content: '<br>' +
                    '<div class="layui-form-item">' +
                    '   <label class="layui-form-label">专业号</label>' +
                    '   <div class="layui-input-block">' +
                    '       <input type="text" name="classID" value="'+data.id+'" class="layui-input" required  lay-verify="required" placeholder="请输入专业号" autocomplete="off">' +
                    '   </div>' +
                    '</div>' +
                    '<div class="layui-form-item">' +
                    '   <label class="layui-form-label">专业名</label>' +
                    '   <div class="layui-input-block">' +
                    '       <input type="text" name="className" value="'+data.wealth+'" class="layui-input" required  lay-verify="required" placeholder="请输入专业名" autocomplete="off">' +
                    '   </div>' +
                    '</div>'+
                    '<div class="layui-form-item">' +
                    '   <label class="layui-form-label">所属学院</label><div class="layui-input-block">' +
                    '       <input type="text" name="classType" value="'+data.username+'" class="layui-input" required  lay-verify="required" placeholder="请输入所属学院" autocomplete="off">' +
                    '   </div>' +
                    '</div>' +
                    '<div class="layui-form-item">' +
                    '   <label class="layui-form-label">学生人数</label><div class="layui-input-block">' +
                    '       <input type="text" name="classIntrudution" value="'+data.experience+'" class="layui-input" required  lay-verify="required" placeholder="请输入专业学生人数" autocomplete="off">' +
                    '   </div>' +
                    '</div>' +
                    '<div class="layui-form-item">' +
                    '   <label class="layui-form-label">专业简介</label><div class="layui-input-block">' +
                    '       <input type="text" name="beforeClass" value="'+data.sex+'" class="layui-input" required  lay-verify="required" placeholder="请输入专业简介" autocomplete="off">' +
                    '   </div>' +
                    '</div>' +
                    '<button type="button" class="layui-btn" onclick="layer.msg(123)"}>确认</button>'
            });
        }
    });

    //底部信息
    var footerTpl = lay('#footer')[0].innerHTML;
    lay('#footer').html(layui.laytpl(footerTpl).render({}))
        .removeClass('layui-hide');
});