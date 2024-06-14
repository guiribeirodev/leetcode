#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':

    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))
        
    max_sum = float('-inf')

    for i in range(4):
        for j in range(4):
            currentLine = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
            halfLine = arr[i + 1][j + 1]
            bottomLine = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
            
            sum_hourglass = currentLine + halfLine + bottomLine
            if (sum_hourglass > max_sum):
                max_sum = sum_hourglass
    
    print(max_sum)
