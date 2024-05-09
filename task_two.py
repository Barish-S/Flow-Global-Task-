#The Cost Of Stock on Each day is given in an array A[] of Size N.Find all the days on which you buy and sell the stock that in between those days your profit is maximum.

def stockBuySell(price, n): 
	i = 0
	while (i < (n - 1)): 
		while ((i < (n - 1)) and (price[i + 1] <= price[i])): 
			i += 1
		if (i == n - 1): 
			break
		
		buy = i 
		i += 1
		while ((i < n) and (price[i] >= price[i - 1])): 
			i += 1
			
		sell = i - 1
		print("Buy on day: ",buy," ", 
				"Sell on day: ",sell) 

		
price = [30, 180, 260, 310, 40, 535, 695] 
n = len(price) 
print(price)
stockBuySell(price, n)
