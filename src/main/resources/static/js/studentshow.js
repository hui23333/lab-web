function previewImg(obj) {
    var img = new Image();
    img.src = obj.src;
    //var height = img.height + 50; // 原图片大小
    //var width = img.width; //原图片大小
    var imgHtml = "<img src='" + obj.src + "' width='500px' height='500px'/>";
    //弹出层
    layer.open({
        type: 1,
        shade: 0.8,
        offset: 'auto',
        area: [500 + 'px',550+'px'],  // area: [width + 'px',height+'px']  //原图显示
        shadeClose:true,
        scrollbar: false,
        title: "图片预览", //不显示标题
        content: imgHtml, //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
        cancel: function () {
            //layer.msg('捕获就是从页面已经存在的元素上，包裹layer的结构', { time: 5000, icon: 6 });
        }
    });
    var myVarate = '../../static/images/head.jpg';
    layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function () {
        var layer = layui.layer, upload = layui.upload, $ = layui.$, demoText = $('#demoText');
        $('#demo1').attr('src', myVarate);//页面初始化的时候渲染图片
        //普通图片上传
        var uploadInst = upload.render({
            elem: '#demo1',
            url: 'http://bolg.lengff.xyz/test',//这里填写你的上传地址
            accept: 'images',
            method: 'post',
            acceptMime: 'image/*'
            , before: function (obj) {
                /*如果您不想用上面的URL 进行上传,也可以在这里,添加你的上传方式*/
                obj.preview(function (index, file, result) {
                    $('#demo1').attr('src', result);//图片链接（base64）
                });
            }, done: function (res) {
                if (res.code == 200) {//长传成功(具体返回code 看后台是怎么处理的)
                    return layer.msg('上传失败');
                    demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
                } else {
                    layer.msg('图片上传成功!');
                }
            }
            , error: function () {
                demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            }
        });
        //上传失败监听重试按钮的操作
        demoText.find('.demo-reload').on('click', function () {
            uploadInst.upload();
        });
    });
}