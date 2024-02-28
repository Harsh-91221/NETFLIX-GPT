#include <iostream>
#include <cmath>
#include <set>
using namespace std;
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int a, b, l;
        cin >> a >> b >> l;
        set<int> pos;
        for (int i = 0; i <= l; ++i)
        {
            int pow_a = pow(a, i);
            if (pow_a > l)
            {
                break;
            }
            for (int j = 0; j <= l; j++)
            {
                int value = pow_a * pow(b, j);
                if (value > l)
                {
                    break;
                }
                if (l % value == 0)
                {
                    pos.insert(l / value);
                }
            }
        }
        cout << pos.size() << endl;
    }
    return 0;
}
