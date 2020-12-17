<!-- 注意：如果你直接复制所有代码到本地，上述js路径需要改成你本地的 -->

    layui.use('table', function(){
    var table = layui.table;

    //方法级渲染
    table.render({
    elem: '#LAY_table_user'
    ,url: '../../static/json/tecorselconfirm.json'
    ,toolbar: '#toolbarDemo' //开启头部工具栏，并为其绑定左侧模板
    ,cols: [[
{checkbox: true, fixed: true}
    ,{field:'id', title: '班级号', width:190, sort: true, fixed: true}
    ,{field:'name', title: '班级名', width:120}
    ,{field:'sex', title: '所属学院', width:120}
    ,{field:'major', title: '所属专业', width:150}
    ,{field:'major', title: '班级人数', width: 90}
    ,{field:'experience', title: '班主任', width:80}
    ,{field:'score', title: '班主任联系方式', width:150}
    ,{field:'right', title: '操作', width:135, align:'center', toolbar: '#barDemo'}
    ]]
    ,id: 'testReload'
    ,page: true
});

    //头工具栏事件
    table.on('toolbar(user)', function(obj){
    var checkStatus = table.checkStatus(obj.config.id);
    switch(obj.event){
    case 'getCheckAdd':
    layer.open({
    type: 1 //Page层类型
    ,area: ['400px', '500px']
    ,title: '请输入信息'
    ,shade: 0.6 //遮罩透明度
    ,maxmin: false //允许全屏最小化
    ,anim: 5 //0-6的动画形式，-1不开启
    ,content: '' +
    '<br>' +
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">班级号</label>' +
    '   <div class="layui-input-block">' +
    '       <input type="text" name="classID" class="layui-input" required  lay-verify="required" placeholder="请输入班级号" autocomplete="off">' +
    '   </div>' +
    '</div>' +
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">班级名</label>' +
    '   <div class="layui-input-block">' +
    '       <input type="text" name="className" class="layui-input" required  lay-verify="required" placeholder="请输入班级名" autocomplete="off">' +
    '   </div>' +
    '</div>'+
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">所属学院</label><div class="layui-input-block">' +
    '       <input type="text" name="classType" class="layui-input" required  lay-verify="required" placeholder="请输入所属学院" autocomplete="off">' +
    '   </div>' +
    '</div>' +
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">所属专业</label><div class="layui-input-block">' +
    '       <input type="text" name="classIntrudution" class="layui-input" required  lay-verify="required" placeholder="请输入所属专业" autocomplete="off">' +
    '   </div>' +
    '</div>' +
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">班级人数</label><div class="layui-input-block">' +
    '       <input type="text" name="beforeClass" class="layui-input" required  lay-verify="required" placeholder="请输入班级人数" autocomplete="off">' +
    '   </div>' +
    '</div>' +
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">班主任</label><div class="layui-input-block">' +
    '       <input type="text" name="beforeClass" class="layui-input" required  lay-verify="required" placeholder="请输入班主任" autocomplete="off">' +
    '   </div>' +
    '</div>' +
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">联系方式</label><div class="layui-input-block">' +
    '       <input type="text" name="beforeClass" class="layui-input" required  lay-verify="required" placeholder="请输入班主任联系方式" autocomplete="off">' +
    '   </div>' +
    '</div>' +
    '<div style="text-align:center">' +
    '<button type="button" class="layui-btn" onclick="layer.msg(999-998)">确认</button>' +
    '</div>'
});
    break;
    case 'getCheckDelete':
    var data = checkStatus.data;
    layer.alert('确认删除吗？');
    break;
};
});

    //监听行工具事件
    table.on('tool(user)', function(obj){
    var data = obj.data;
    //console.log(obj)
    if(obj.event === 'del'){
    layer.confirm('真的删除行么', function(index){
    obj.del();
    layer.close(index);
});
} else if(obj.event === 'edit'){
    layer.open({
    type: 1 //Page层类型
    ,area: ['400px', '500px']
    ,title: '请输入信息'
    ,shade: 0.6 //遮罩透明度
    ,maxmin: false //允许全屏最小化
    ,anim: 5 //0-6的动画形式，-1不开启
    ,content: '' +
    '<br>' +
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">班级号</label>' +
    '   <div class="layui-input-block">' +
    '       <input type="text" name="classID" class="layui-input" required  lay-verify="required" placeholder="请输入班级号" autocomplete="off">' +
    '   </div>' +
    '</div>' +
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">班级名</label>' +
    '   <div class="layui-input-block">' +
    '       <input type="text" name="className" class="layui-input" required  lay-verify="required" placeholder="请输入班级名" autocomplete="off">' +
    '   </div>' +
    '</div>'+
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">所属学院</label><div class="layui-input-block">' +
    '       <input type="text" name="classType" class="layui-input" required  lay-verify="required" placeholder="请输入所属学院" autocomplete="off">' +
    '   </div>' +
    '</div>' +
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">所属专业</label><div class="layui-input-block">' +
    '       <input type="text" name="classIntrudution" class="layui-input" required  lay-verify="required" placeholder="请输入所属专业" autocomplete="off">' +
    '   </div>' +
    '</div>' +
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">班级人数</label><div class="layui-input-block">' +
    '       <input type="text" name="beforeClass" class="layui-input" required  lay-verify="required" placeholder="请输入班级人数" autocomplete="off">' +
    '   </div>' +
    '</div>' +
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">班主任</label><div class="layui-input-block">' +
    '       <input type="text" name="beforeClass" class="layui-input" required  lay-verify="required" placeholder="请输入班主任" autocomplete="off">' +
    '   </div>' +
    '</div>' +
    '<div class="layui-form-item">' +
    '   <label class="layui-form-label">联系方式</label><div class="layui-input-block">' +
    '       <input type="text" name="beforeClass" class="layui-input" required  lay-verify="required" placeholder="请输入班主任联系方式" autocomplete="off">' +
    '   </div>' +
    '</div>' +
    '<div style="text-align:center">' +
    '<button type="button" class="layui-btn" onclick="layer.msg(999-998)">确认</button>' +
    '</div>'
});
}
});

    var $ = layui.$, active = {
    reload: function(){
    var demoReload = $('#demoReload');

    //执行重载
    table.reload('testReload', {
    page: {
    curr: 1 //重新从第 1 页开始
}
}, 'data');
}
};

    $('.demoTable .layui-btn').on('click', function(){
    var type = $(this).data('type');
    active[type] ? active[type].call(this) : '';
});
});
