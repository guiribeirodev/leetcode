# Enter your code here. Read input from STDIN. Print output to STDOUT
import sys

count, *data = sys.stdin.read().splitlines()

def separate_string(string):
    even_index = ""
    odd_index = ""
    
    for i in range(len(string)):
        if (i % 2 != 0):
            even_index += string[i]
        else:
            odd_index += string[i]
            
    print(odd_index, even_index)
    
for string in data:
    separate_string(string)