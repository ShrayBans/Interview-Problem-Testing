/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

 //array: [5,4,3,2,1]
//go through once and if higher, return that

function bestProfit(stock) {
	var max = 0;
	var tempMax = 0;
	if(stock.constructor !== Array) return 0;


	for(var i =0; i<stock.length; i++){
		for(var j =i+1; j<stock.length; j++){
			tempMax = stock[j] - stock[i];
			if (tempMax > max) max = tempMax;
		}
	}

	if(max.constructor === Number) return max;
	else return 0;

}

module.exports = bestProfit;
