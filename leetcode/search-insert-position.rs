impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
            let mut bottom_index = 0;
    let mut top_index = nums.len() as i32 - 1;

    while bottom_index <= top_index {
        let middle_index = (bottom_index + top_index + 1) / 2;
        let current_target = nums[middle_index as usize];

        if current_target == target {
            return middle_index;
        } else if current_target < target {
            bottom_index = middle_index + 1;
        } else {
            top_index = middle_index - 1;
        }
    }

    bottom_index
    }
}