$(document).ready(function() {
	$.ajax({//需要服务器的支持
		url: "/getMaintainData",
		success: function(result) {//result中包含vm_left,vm_right的json数据
			eval(result)//实例化列表内容
		}
	});

	layui.use(['element','layedit'], function() {
		var element = layui.element,layedit = layui.layedit;
		layedit.build('demo'); //建立编辑器

	});

	var vm_left = new Vue({
		el: "#leftFrame",
		data: {
			applyAintList: [{
				applyId: '0004',
				title:'title1',
				applyContent: ['维护内容1', '维护内容2', '维护内容3', '维护内容4', '维护内容5']
			}, {
				applyId: '0005',
				title:'title1',
				applyContent: ['维护内容1', '维护内容2', '维护内容3', '维护内容4']
			}, {
				applyId: '0006',
				title:'title1',
				applyContent: ['维护内容1', '维护内容2', '维护内容3', '维护内容4', '维护内容5']
			}, {
				applyId: '0007',
				title:'title1',
				applyContent: ['维护内容1', '维护内容2', '维护内容3', '维护内容4', '维护内容5']
			}],
			historyAintList: [{
				applyId: '0001',
				title:'title1',
				applyContent: ['维护内容1', '维护内容2', '维护内容3', '维护内容4', '维护内容5'],
				dealContent: ['处理处理处理处理处理处理处理处理处理处理1', 'hello hello hello hello hello hello hello hello hello hello .', '处理3',
					'处理4', '处理5'
				]
			}, {
				applyId: '0002',
				title:'title1',
				applyContent: ['维护内容1', '维护内容2', '维护内容3', '维护内容4'],
				dealContent: ['处理处理处理处理处理处理处理处理处理处理1', 'hello hello hello hello hello hello hello hello hello hello .', '处理3',
					'处理4'
				]
			}, {
				applyId: '0003',
				title:'title1',
				applyContent: ['维护内容1', '维护内容2', '维护内容3', '维护内容4', '维护内容5', '维护内容2', '维护内容3', '维护内容4', '维护内容5'],
				dealContent: ['处理处理处理处理处理处理处理处理处理处理1', 'hello hello hello hello hello hello hello hello hello hello .', '处理3',
					'处理4', '处理5', 'hello hello hello hello hello hello hello hello hello hello .', '处理3', '处理4', '处理5'
				]
			}]
		},
		methods: {
			openApplyPage: function(item) {
				data = vm_right.$data;
				data.isDeal = true;
				data.maintenanceId = item.applyId;
				data.maintenanceContent = item.applyContent;
				data.dealAccordingly = '';
				//采用ajax的方式，获取当前编号的相关信息并且对其进行实例化
			},
			openHistoryPage: function(item) {
				data = vm_right.$data;
				data.isDeal = false;
				data.maintenanceId = item.applyId;
				data.maintenanceContent = item.applyContent;
				data.dealAccordingly = item.dealContent;
				//采用ajax的方式，获取当前编号的相关信息并且对其进行实例化
			}
		}
	});

	var vm_right = new Vue({
		el: "#rightFrame",
		data: {
			maintenanceId: '0001',
			isDeal: true, //查看历史维护情况才false
			maintenanceContent: ['维护内容1', '维护内容2', '维护内容3', '维护内容4', '维护内容5'],
			dealAccordingly: ''
		}
	})

});
