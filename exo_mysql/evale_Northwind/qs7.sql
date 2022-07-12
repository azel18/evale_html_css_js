SELECT ROUND(SUM((`order details`.UnitPrice * `order details`.Quantity) - `order details`.Discount), 2) AS 'Montant Ventes 97'
FROM `order details`
INNER JOIN orders ON `order details`.OrderID = orders.OrderID
WHERE YEAR(orders.OrderDate) = 1997;

/* Exercice 8 : Montant des ventes de 1997 mois par mois */
SELECT MONTH(orders.OrderDate) AS 'Mois 97', ROUND(SUM((`order details`.UnitPrice * `order details`.Quantity) - `order details`.Discount), 2) AS 'Montant Ventes'
FROM `order details`
INNER JOIN orders ON `order details`.OrderID = orders.OrderID
WHERE YEAR(orders.OrderDate) = 1997
GROUP BY MONTH(orders.OrderDate);