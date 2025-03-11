impl Solution {
    pub fn my_sqrt(x: i32) -> i32 {
    let mut bot = 0;
    let mut top = x as i64;

    while bot <= top {
        let middle = (top + bot) / 2;
        let square_root = middle * middle;

        if square_root == x as i64 {
            return middle as i32;
        } else if square_root < x as i64 {
            bot = middle + 1;
        } else {
            top = middle - 1;
        }
    }

    return (bot - 1) as i32;
    }
}