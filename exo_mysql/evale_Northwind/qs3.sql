ELECT suppliers.CompanyName AS 'Fournisseur', COUNT(products.ProductID) AS 'Nbre produits'
FROM suppliers
INNER JOIN products ON suppliers.SupplierID = products.SupplierID
WHERE suppliers.Country = 'France'
GROUP BY suppliers.SupplierID
ORDER BY COUNT(products.ProductID) DESC, Fournisseur;
