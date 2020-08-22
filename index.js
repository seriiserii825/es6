const object = {
	name: 'some',
	action: function () {
		setTimeout(() => {
			console.log('name: ' + this.name);
		}, 2000);
	}
};
object.action();