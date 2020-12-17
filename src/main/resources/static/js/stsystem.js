
    layui.use(['form', 'layedit', 'laydate'], function(){
    var form = layui.form
    ,layer = layui.layer
    ,layedit = layui.layedit
    ,laydate = layui.laydate;

    //自定义验证规则
    form.verify({
    title: function(value){
    if(value.length < 5){
    return '标题至少得5个字符啊';
}
}
    ,pass: [
    /^[\S]{6,12}$/
    ,'密码必须6到12位，且不能出现空格'
    ]
    ,content: function(value){
    layedit.sync(editIndex);
}
});

    //监听指定开关
    form.on('switch(switchTest)', function(data){
    layer.msg('开关checked：'+ (this.checked ? 'true' : 'false'), {
    offset: '6px'
});
    layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis)
});

    //监听提交
    form.on('submit(demo1)', function(data){
    layer.alert(JSON.stringify(data.field), {
    title: '最终的提交信息'
})
    return false;
});
});
        layui.use(['layer', 'element', 'form', 'layedit'], function() {
        var layer = layui.layer;
        var form = layui.form;
        var element = layui.element;
        var layedit = layui.layedit;
        $(function() {
        $("#butt").click(function() {
        layer.open({
        type: 1,
        title: "找回密码页面",
        area: ['600px', '700px'],
        offset: '20px',
        content: $("#gb"),
        success: function() {
        form.on('submit(formDemo)', function(data) {

    });
    }
    })
        form.render();
    })

    });
        //创建一个编辑器
        var editIndex = layedit.build('LAY_demo_editor');
        //自定义验证规则
        form.verify({
        title: function(value) {
        if(value.length < 5) {
        return '标题至少得5个字符啊';
    }
    },
        truename: [
        /^[\u4e00-\u9fa5]{2,4}$/, '您的输入有误，请输入2-4位中文'
        ],
        content: function(value) {
        layedit.sync(editIndex);
    }
    });
    });
