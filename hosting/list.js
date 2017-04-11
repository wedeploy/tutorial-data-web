var list = document.querySelector('.list');

// Insert fetch data method bellow
WeDeploy
	.data(`ata.${DOMAIN}`)
	.orderBy('id', 'desc')
	.limit(5)
	.get('tasks')
		.then(function(response) {
			appendTasks(response);
		})
		.catch(function(error) {
			console.error(error);
		});
// Insert fetch data method above

