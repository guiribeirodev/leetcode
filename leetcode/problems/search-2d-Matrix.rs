impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {   
        let rows = matrix.len();
        let cols = matrix[0].len();
        let mut lo = 0;
        let mut hi = (rows * cols) as i32 - 1;
        
        while lo <= hi {
            let mid = lo + (hi - lo) / 2;
            let r = (mid as usize) / cols;
            let c = (mid as usize) % cols;
            
            if matrix[r][c] == target {
                return true;
            }
            if target > matrix[r][c] {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        
        false
    }
}
