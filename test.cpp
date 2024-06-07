class Solution
{
public:
    vector<int> selfDividingNumbers(int left, int right)
    {
        vector<int> ans;
        for (int i = left; i <= right; i++)
        {
            int div = i;
            while (div != 0)
            {
                int dig = div % 10;
                if (dig == 0 || i % dig != 0)
                {
                    break;
                }
                div = div / 10;
            }
            if (div == 0)
            {
                ans.push_back(i);
            }
        }
        return ans;
    }
};