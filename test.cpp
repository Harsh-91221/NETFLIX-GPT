class Solution
{
public:
    long long findScore(vector<int> &nums)
    {
        long long ans = 0;
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        vector<bool> check(nums.size(), false);
        int n = nums.size();
        for (int i = 0; i < n; i++)
        {
            pq.push({nums[i], i});
        }
        while (pq.size())
        {
            long long mini = pq.top().first;
            long long pos = pq.top().second;
            if (check[pos] == false)
            {
                ans += mini;
                if (pos + 1 < n)
                {
                    check[pos + 1] = true;
                }
                if (pos - 1 >= 0)
                {
                    check[pos - 1] = true;
                }
            }
            pq.pop();
        }
        return ans;
    }
};