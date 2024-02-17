def raw_sum(n):
    sum = 0
    for i in range(n+1):
        current_value = (i*(i+1))
        sum = sum + current_value
    return sum

result = raw_sum(21)
print(result) #expect 3542

def rawSquaredSum(n):
    rawTotal = 0
    squaredTotal =0
    for i in range(1, n+1):
        rawTotal = rawTotal+i
    squaredTotal = squaredTotal+ (i*i)
    return rawTotal+squaredTotal

print(rawSquaredSum(255)) # 5592320

def chadFn(n):
    nCubed = n**3
    nSquared = n**2
    numerator = nCubed + 3*nSquared + 2*n
    return numerator/3

print(chadFn(876)) #expect 224841752
# Feel free to implement the test function
