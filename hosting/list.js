var list = document.querySelector('.list');


// Insert fetch data method bellow

// Insert fetch data method above

WeDeploy
	.data('http://data.tutorial-data-js.wedeploy.io')
	.limit(5)
	.orderBy('id', 'desc')
	.watch('tasks')
	.on('changes', function(tasks) {
		appendTasks(tasks);
	});

function appendTasks(tasks) {
	var taskList = '';

	tasks.forEach(function(task) {
		taskList += `<input type="text" value="${task.name}" readonly>`;
	});

	list.innerHTML = taskList;
}
