SELECT customers.CompanyName AS 'Société', customers.ContactName AS 'contact', customers.ContactTitle AS 'Fonction', customers.Phone AS 'Téléphone'
FROM customers
WHERE customers.Country = 'France';