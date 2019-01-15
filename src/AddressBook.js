describe('Address Book',function (){
	
	var adressBook, 
		thisContact;
	
	beforeEach(function () {
		
		addressBook = new AddressBook();
		thisContact = new Contact();
		
	});
	
	it('should ble able to add a contact', function () {	
		
			addressBook.addContact(thisContact);
			
			expect(addressBook.getContact(0)).toBe(thisContact);
	});
	
	it('should ble able to delete a contact', function () {
		
			addressBook.addContact(thisContact);
			addressBook.deleteContact(0);
			
			expect(addressBook.getContact(0)).not.toBeDefined();
	});
	
});

describe ('Async Adress Book', function() {
	
	var adressBook;
	
	beforeEach(function (done) {
		
		addressBook.getInitialContacts(function(){
			done();
		});
		
	});
	
	it('should grab initial contacts', function(done) {
		
		expect(addressBook.initialComplete).toBe(true);
		done();
		
	});
	
});