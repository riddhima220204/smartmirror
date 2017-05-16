Module.register("helloworld",{

	// Default module config.
	defaults: {
		text: "Hello Arpita"
	},
	notificationReceived: function (notification, payload, sender) {

	 if (notification === "CLEAR"){
			this.hide();
		}
	if (notification === "connect") {
		this.show();
	}


  	},


	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
