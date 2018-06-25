var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('/img/22252709_010df3379e_z.jpg');
	this.imgAttribution = ko.observable();
	this.array = ko.observableArray([
            { firstName: 'Bert', lastName: 'Bertington' },
            { firstName: 'Charles', lastName: 'Charlesforth' },
            { firstName: 'Denise', lastName: 'Dentiste' }
        ]);
	
	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
		if(this.clickCount() == 10){
			this.name("preso si 10");
		}
	};
};
ko.applyBindings(new ViewModel());