var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

// Insert save data method bellow
	WeDeploy
		.data(`data.${DOMAIN}`)
		.create('tasks', {name: form.item.value })
			.then(function(response) {
				form.reset();
				form.item.focus();
				console.info('Saved:', response);
			})
			.catch(function(error) {
				console.error(error);
			});
// Insert save data method above
});
