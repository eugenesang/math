# Conversion

This topic covers conversion from base n1 to base n2

For starters we will do base 10 (decimal) and base 2 (binary)

I will be using mathematical terms

## Binary and Decimal

- A binary number `101` has the same value as a decimal number `5`
- A binary number `1010` has the same value as a decimal number `10`

Our task is to find a function that can covert a decimal number d to binary number b

Most functions are well established and proven so we will just discuss how they work and a few proofs

### Decimal to Binary

If you have a decimal number n you want to convert to binary:

- divide n by 2 until the result remains 0 or 1
- In each iteration record the remainder of the process
- In the end combine all the remainders from the latest to the earliest to be recorded
- The result is your binary number

Example:

Convert a decimal number 10 to a binary number

Solution:

| n | n/2 | rem |
|:--|:--:|:--:|
| 10 | 5 | 0 |
| 5 | 2 | 1 |
| 2 | 1 | 0 |
| 1 | 0 | 1 |

10 = 1010 in binary 
