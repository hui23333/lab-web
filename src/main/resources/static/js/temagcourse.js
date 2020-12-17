layui.use(['table', 'element', 'layer','form'], function() {
	var table = layui.table,
		element = layui.element,
		layer = layui.layer,
		form = layui.form;
	var $ = layui.$;

	//监听提交
	form.on('submit(formDemo)', function(data){
		layer.msg(JSON.stringify(data.field));
		return false;
	});

	table.render({
		elem: '#test',
		url: '../../static/json/temagcoursenow.json',
		method:"post",
		// autoSort: false,
		defaultToolbar:['filter'],
		where:{
			field:'applyId',
			order:''
		},
		toolbar: '#toolbarDemo', //开启头部工具栏，并为其绑定左侧模板
		cols: [
			[{
					type: 'checkbox',
					fixed: 'left'
				},
				{
					field: 'courseId',
					title: '课程编号',
					align:'center',
					sort:true
				},
				{
					field: 'courseName',
					title: '课程名',
					align: "center",
					sort:true
				},
				{
					field: 'courseType',
					title: '课程类型',
					align: "center",
					sort:true
				},
				{
					field: 'courseBriefIntroduction',
					title: '课程简介',
					align: 'center',
					templet:function (d) {
						return '<p class="layui-layer-own1 alyui-showDetails" aa="'+d.courseBriefIntroduction+'">'+d.courseBriefIntroduction+'</p>';
					}
				},
				{
					field: 'teacher',
					title: '任课教师',
					align: "center"
				},
				{
					field: 'optionalClass',
					title: '可选班级',
					align:'center'
				},
				{
					field:"credit",
					title:"学分",
					align:"center",
					sort:true
				},
				{
					field:"classHours",
					title:"学时",
					align:"center",
					sort:true
				},
				{
					field:"optionalNumberOfPeople",
					title:"可选人数",
					align:"center",
					sort:true
				},
				{
					field:"numberOfPeopleSelected",
					title:"已选人数",
					align:"center",
					sort:true
				},
				{
					title: '操作',
					fixed: 'right',
					toolbar: '#barDemo',
					align: "center"
				}
			]
		],
		done: function(res, curr, count) {
			//查看详细信息
			$('.alyui-showDetails').each(function(i) {
				this.onclick = function() {
					imgArrStr = this.getAttribute("aa");
					layer.open({
						content: imgArrStr
					});
				}
			});
		}
	});

	//头工具栏事件
	table.on('toolbar(test)', function(obj) {
		var checkStatus = table.checkStatus(obj.config.id);
		var data = checkStatus.data;

		switch (obj.event) {
			case 'addcourse':
				layer.msg("添加课程");
				window.location.href='./teAddCourse.html';
				window.location.
				break;
			case 'removecourse':
				layer.msg("关闭课程");
				break;
		};
	});

	//监听行工具事件
	table.on('tool(test)', function(obj) {
		var data = obj.data;
		if (obj.event === 'closecourseselection') {
			layer.msg("关闭课程");
		}
	});

	//sort
	table.on('sort(test)', function(obj) {
		table.reload('test', {
			initSort: obj, //记录初始排序，如果不设的话，将无法标记表头的排序状态。 layui 2.1.1 新增参数
			where: { //请求参数（注意：这里面的参数可任意定义，并非下面固定的格式）
				field: obj.field, //排序字段   在接口作为参数字段  field order
				order: obj.type , //排序方式   在接口作为参数字段  field order
				page:1
			}
		});
	});

	table.render({
		elem: '#test2',
		url: '../../static/json/temagcourseold.json',
		method:"post",
		// autoSort: false,
		where:{
			field:'applyId',
			order:''
		},
		cols: [
			[{
				type: 'checkbox',
				fixed: 'left'
			},
				{
					field: 'courseId',
					title: '课程编号',
					align:'center',
					sort:true
				},
				{
					field: 'courseName',
					title: '课程名',
					align: "center"
				},
				{
					field: 'courseType',
					title: '课程类型',
					align: "center",
					sort:true
				},
				{
					field: 'courseBriefIntroduction',
					title: '课程简介',
					align: 'center',
					templet:function (d) {
						return '<p class="layui-layer-own1 alyui-showDetails" aa="'+d.courseBriefIntroduction+'">'+d.courseBriefIntroduction+'</p>';
					}
				},
				{
					field: 'teacher',
					title: '任课教师',
					align: "center"
				},
				{
					field: 'semester',
					title: '上课学期',
					align: "center",
					sort:true
				},
				{
					field: 'optionalClass',
					title: '可选班级',
					align:'center'
				},
				{
					field:"credit",
					title:"学分",
					align:"center",
					sort:true
				},
				{
					field:"classHours",
					title:"学时",
					align:"center",
					sort:true
				},
				{
					field:"optionalNumberOfPeople",
					title:"可选人数",
					align:"center",
					sort:true
				},
				{
					field:"numberOfPeopleSelected",
					title:"已选人数",
					align:"center",
					sort:true
				}
			]
		],
		done: function(res, curr, count) {
			//查看详细信息
			$('.alyui-showDetails').each(function(i) {
				this.onclick = function() {
					imgArrStr = this.getAttribute("aa");
					layer.open({
						content: imgArrStr
					});
				}
			});
		}
	});

	//sort
	table.on('sort(test2)', function(obj) {
		table.reload('test', {
			initSort: obj, //记录初始排序，如果不设的话，将无法标记表头的排序状态。 layui 2.1.1 新增参数
			where: { //请求参数（注意：这里面的参数可任意定义，并非下面固定的格式）
				field: obj.field, //排序字段   在接口作为参数字段  field order
				order: obj.type , //排序方式   在接口作为参数字段  field order
				page:1
			}
		});
	});


});
