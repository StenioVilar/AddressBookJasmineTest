function AddressBook() {
	
	this.contactList = [];
	
}

function Contact() {
		
	this.nome;
	
}

function Contact(nome) {
		
	this.nome = nome;
	
}


AddressBook.prototype.addContact = function (contact) {
		
	this.contactList.push(contact);
	 	 	 
}

AddressBook.prototype.getContact  = function (index) {
	
	return this.contactList[index];
	
}

AddressBook.prototype.deleteContact  = function (index) {
	
	this.contactList.splice(index,1);
	
}
