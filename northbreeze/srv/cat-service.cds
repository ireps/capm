using northbreeze from '../db/data-model.cds';

service Breezy {
	// @readonly entity Books as projection on my.Books;
	entity Products as projection on northbreeze.Products;
	entity Suppliers as projection on northbreeze.Suppliers;
	entity Categories as projection on northbreeze.Categories;
}
