namespace northbreeze;

entity Products {
  key ID       : Integer;
  name         : String;
  supplier     : Association to Suppliers;
	category     : Association to Categories;
	unitquantity : String(20);
	unitprice    : Decimal(19,4);
	unitsinstock : Integer;
	unitsonorder : Integer;
	reorderlevel : Integer;
	discontinued : Boolean;
}

entity Suppliers {
	key ID       : Integer;
	name         : String(40);
	country      : String(15);
	products     : Association to many Products on products.supplier = $self
}

entity Categories {
	key ID       : Integer;
	name         : String(15);
	description  : String;
	products     : Association to many Products on products.supplier = $self
}