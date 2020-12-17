$(document).ready(function (e) {
    $("#consul1").click(function (e) {
        $("[name='b']").hide();
        $("#1b").show();

    });
    $("#consul2").click(function (e) {
        $("[name='b']").hide();
        $("#2b").show();

    });
    $("#consul3").click(function (e) {
        $("[name='b']").hide();
        $("#3b").show();

    });
    $("#consul4").click(function (e) {
        $("[name='b']").hide();
        $("#4b").show();

    });
    $("#consul5").click(function (e) {
        $("[name='b']").hide();
        $("#5b").show();

    });
    $("#consul6").click(function (e) {
        $("[name='b']").hide();
        $("#6b").show();

    });
    $("#consul7").click(function (e) {
        $("[name='b']").hide();
        $("#7b").show();

    });
    $("#consul8").click(function (e) {
        $("[name='b']").hide();
        $("#8b").show();

    });
    $("#consul9").click(function (e) {
        $("[name='b']").hide();
        $("#9b").show();

    });
});



layui.use('layedit', function () {
    var layedit = layui.layedit
        , $ = layui.jquery;

    //构建一个默认的编辑器
    var index = layedit.build('LAY_demo1');

    //编辑器外部操作
    var active = {
        content: function () {
            alert(layedit.getContent(index)); //获取编辑器内容
        }
        , text: function () {
            alert(layedit.getText(index)); //获取编辑器纯文本内容
        }
        , selection: function () {
            alert(layedit.getSelection(index));
        }
    };

    $('.site-demo-layedit').on('click', function () {
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });
});

//JavaScript代码区域
layui.use('element', function () {
    var element = layui.element;

});