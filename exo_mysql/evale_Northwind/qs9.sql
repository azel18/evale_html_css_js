SELECT orders.OrderDate AS 'Date de dernière commande'
FROM customers
INNER JOIN orders ON customers.CustomerID = orders.CustomerID
WHERE customers.CompanyName = 'Du monde entier' AND DATEDIFF(CURRENT_TIMESTAMP, orders.OrderDate) = (
    SELECT MIN(DATEDIFF(CURRENT_TIMESTAMP, orders.OrderDate))
    FROM customers
    INNER JOIN orders ON customers.CustomerID = orders.CustomerID
    WHERE customers.CompanyName = 'Du monde entier'
);
