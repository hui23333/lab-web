layui.use('table', function () {
    var table = layui.table;

    //温馨提示：默认由前端自动合计当前行数据。从 layui 2.5.6 开始： 若接口直接返回了合计行数据，则优先读取接口合计行数据。
    //详见：https://www.layui.com/doc/modules/table.html#totalRow
    table.render({
        elem: '#test'
        , url: '../../static/haveChoose.json'//数据源
        , page: false//分页
        , toolbar: '#toolbarDemo'
        , title: '用户数据表'
        , totalRow: true
        , cols: [[//表头
            {field: 'class', title: '课程', fixed: 'left', totalRowText: '合计'}
            , {field: 'score', title: '学分', fixed: 'left', totalRow: true}
            , {field: 'type', title: '类别'}
            , {field: 'teacher', title: '任课老师'}
            , {field: 'classnum', title: '上课班号'}
            , {field: 'limitchoose', title: '限选'}
            , {field: 'havechoose', title: '已选'}
            , {field: 'canchoose', title: '可选'}
            , {field: 'classpostion', title: '上课时间/上课地点'}
        ]]
    });

    //工具栏事件
    table.on('toolbar(test)', function (obj) {
        var checkStatus = table.checkStatus(obj.config.id);
        switch (obj.event) {
            case 'getCheckData':
                var data = checkStatus.data;
                layer.alert(JSON.stringify(data));
                break;
            case 'getCheckLength':
                var data = checkStatus.data;
                layer.msg('选中了：' + data.length + ' 个');
                break;
            case 'sumbit':
                var data = checkStatus.data;
                table.exportFile(ins1.config.id, data);
                JSON.stringify(data)
                break;
        }
        ;
    });
});