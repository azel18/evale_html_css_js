SELECT customers.CompanyName AS 'Client', ROUND(SUM((`order details`.UnitPrice * `order details`.Quantity) - `order details`.Discount), 2) AS 'CA', customers.Country AS 'Pays'
FROM ((orders
INNER JOIN customers ON orders.CustomerID = customers.CustomerID)
INNER JOIN `order details` ON orders.OrderID = `order details`.OrderID)
GROUP BY orders.CustomerID
HAVING CA > 30000
ORDER BY CA DESC;