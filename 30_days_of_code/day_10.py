#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    rests = []
    count = 0
    max_sequence = 0
    
    if (n == 0 or n == 1):
        print(n)

    while (n / 2 > 0):
        rest = n % 2
        rests.append(rest)
        n = math.floor(n / 2)
        
    for number in rests:
        if (number == 1):
            count +=1
            if (count > max_sequence):
                max_sequence = count
        else:
            count = 0
            
    print(max_sequence)
        