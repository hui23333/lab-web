layui.use(['layer', 'element', 'form', 'layedit'], function () {
    var layer = layui.layer;
    var form = layui.form;
    var element = layui.element;
    var layedit = layui.layedit;
    $(function () {
        $("#butt").click(function () {
            layer.open({
                type: 1,
                title: "找回密码页面",
                area: ['600px', '700px'],
                offset: '20px',
                content: $("#gb"),
                success: function () {
                    form.on('submit(formDemo)', function (data) {

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
        title: function (value) {
            if (value.length < 5) {
                return '标题至少得5个字符啊';
            }
        },
        truename: [
            /^[\u4e00-\u9fa5]{2,4}$/, '您的输入有误，请输入2-4位中文'
        ],
        content: function (value) {
            layedit.sync(editIndex);
        }
    });
});