SELECT ROUND(AVG(DATEDIFF(ShippedDate, OrderDate))) AS 'Délai moyen de livraison en jours'
FROM orders
/*optionnelle, condition qui retire les entrées où la date de livraison n'a pas encore été enregistrée dans la base*/
/* WHERE ISNULL(ShippedDate) != 1 */
;
