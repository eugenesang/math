#include <iostream>
#include <cmath>
using std::cout;
using std::endl;

int rawSum(int n)
{
    int answer = 0;
    for (int i = 1; i <= n; i++)
    {
        int currentNum = i * (i + 1);
        answer += currentNum;
    }
    return answer;
}

int rawSquareSum(int n)
{
    int rawTotal = 0;
    int squareTotal = 0;
    for (int i = 1; i <= n; i++)
    {
        rawTotal += i;
        squareTotal += (i * i);
    }
    int total = rawTotal + squareTotal;
    return total;
}

int chadFn(int n)
{
    int nSquared = pow(n, 2);
    int nCubed = pow(n, 3);
    int numerator = nCubed + 3 * nSquared + 2 * n;
    return numerator / 3;
}

int main()
{
    unsigned int n = 255; // select your preferred value
    int ans = chadFn(n);
    int count = rawSum(n);
    int sqSum = rawSquareSum(n);
    cout << ans << "\n" << count << "\n" << sqSum << endl;
    // Should show three lines of the same value 5592320
}