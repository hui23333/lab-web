layui.use(['table', 'element', 'transfer', 'layer', 'util','form'], function() {
    var table = layui.table,
        element = layui.element,
        layer = layui.layer,
        transfer = layui.transfer,
        util = layui.util,
        form = layui.form;
    var $ = layui.$;
    var data1 = [
        {"value": "1", "title": "公共任选课"}
        ,{"value": "2", "title": "专业任选课"}
        ,{"value": "3", "title": "专业限选课"}
    ];
    //显示搜索框
    transfer.render({
        elem: '#test1'
        ,data: data1
        ,title: ['可选课程类型', '当前课程类型']
        ,showSearch: true
    });
    var data2 = [
        {"value": "1", "title": "teacher1"}
        ,{"value": "2", "title": "teacher2"}
        ,{"value": "3", "title": "teacher3"}
    ];
    //显示搜索框
    transfer.render({
        elem: '#test2'
        ,data: data2
        ,title: ['可选任课教师', '当前任课教师']
        ,showSearch: true
    });
    var data3 = [
        {"value": "1", "title": "course1"}
        ,{"value": "2", "title": "course2"}
        ,{"value": "3", "title": "course3"}
    ];
    //显示搜索框
    transfer.render({
        elem: '#test3'
        ,data: data3
        ,title: ['可选班级', '当前班级']
        ,showSearch: true
    });
});