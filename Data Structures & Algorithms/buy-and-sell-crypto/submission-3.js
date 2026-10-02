class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
let minCount = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] < minCount) {
        continue;
      } else if (prices[j] - prices[i] > minCount) {
        minCount = prices[j] - prices[i];
      }
    }
  }
  return minCount;
    }
}
