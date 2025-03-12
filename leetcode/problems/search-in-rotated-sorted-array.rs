impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut start = 0;
        let mut end = nums.len() - 1;

        while start <= end {
            let middle = (end + start) / 2;
            let current_number = nums[middle];

            if current_number == target  {
                return middle as i32;
            } 
            
            if nums[start] <= current_number {
                if nums[start] == target{
                    return start as i32;
                }

                if nums[start] < target && target < current_number{
                    end = middle - 1;
                } else {
                    start = middle + 1;
                }
            } 
            
            else {
                if nums[end] == target {
                    return end as i32;
                }
                
                if target < nums[end] && current_number < target {
                    start = middle + 1;
                } else {
                    end = middle - 1;
                }
            }
        }

        return -1;
        }
}