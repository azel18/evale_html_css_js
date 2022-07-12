SELECT MONTH(orders.OrderDate) AS 'Mois 97', ROUND(SUM((`order details`.UnitPrice * `order details`.Quantity) - `order details`.Discount), 2) AS 'Montant Ventes'
FROM `order details`
INNER JOIN orders ON `order details`.OrderID = orders.OrderID
WHERE YEAR(orders.OrderDate) = 1997
GROUP BY MONTH(orders.OrderDate);