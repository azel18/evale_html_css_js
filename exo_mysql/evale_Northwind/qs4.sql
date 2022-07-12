SELECT customers.CompanyName AS 'Client', COUNT(orders.OrderID) AS 'Nbre commandes'
FROM orders
INNER JOIN customers ON orders.CustomerID = customers.CustomerID
WHERE customers.CustomerID IN (
    SELECT customers.CustomerID
    FROM customers
    WHERE customers.Country = 'France'
)
GROUP BY customers.CustomerID
HAVING COUNT(orders.OrderID) > 10;