//JavaScript代码区域
layui.use('element', function () {
    var element = layui.element;

});

layui.use('table', function () {
    var table = layui.table;

    //温馨提示：默认由前端自动合计当前行数据。从 layui 2.5.6 开始： 若接口直接返回了合计行数据，则优先读取接口合计行数据。
    //详见：https://www.layui.com/doc/modules/table.html#totalRow
    table.render({
        elem: '#test'
        , url: '../../static/json/jj.json'
        , toolbar: '#toolbarDemo'
        , title: '用户数据表'
        , totalRow: true
        , cols: [[
            { type: 'checkbox', fixed: 'left' }
            , { field: 'id', title: '学号', width: 80, fixed: 'left', unresize: true, sort: true, totalRowText: '合计' }
            , { field: 'username', title: '姓名', width: 120, edit: 'text' }
            , {
                field: 'sex', title: '性别', width: 150, edit: 'text', templet: function (res) {
                    return '<em>' + res.email + '</em>'
                }
            }
            , { field: 'ip', title: '宿舍号', width: 120 }
            , { field: 'city', title: '城市', width: 100 }
            , { field: 'phone', title: '电话', width: 80, sort: true, totalRow: true }
            , { fixed: 'right', title: '状态', toolbar: '#barDemo', width: 150 }
        ]]
        , page: true
    });


});