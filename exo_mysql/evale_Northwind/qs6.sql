SELECT customers.Country AS 'Pays'
FROM ((customers
INNER JOIN orders ON customers.CustomerID = orders.CustomerID)
INNER JOIN `order details` ON orders.OrderID = `order details`.OrderID)
WHERE `order details`.ProductID IN (
    SELECT products.ProductID
    FROM products
    INNER JOIN suppliers ON products.SupplierID = suppliers.SupplierID
    WHERE suppliers.CompanyName = 'Exotic Liquids'
)
GROUP BY customers.Country;