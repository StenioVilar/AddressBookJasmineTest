describe('Address Book',function (){
	
	it('should ble able to add a contact', function () {
		var addressBook = new AddressBook(),
			thisContact = new Contact();
		
			addressBook.addContact(thisContact);
			
			expect(addressBook.getContact(0)).toBe(thisContact);
	});
	
	it('should ble able to delete a contact', function () {
		var addressBook = new AddressBook(),
			thisContact = new Contact();
		
			addressBook.addContact(thisContact);
			addressBook.deleteContact(0);
			
			expect(addressBook.getContact(0)).not.toBeDefined();
	});
	
});