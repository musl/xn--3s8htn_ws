var emoji = Ractive({
	el: '#main',
	template: '#emoji-template',
	onrender: function() {
		this.on({
			activate: function() {
				console.log('activate');
			},
		});
	},
});
