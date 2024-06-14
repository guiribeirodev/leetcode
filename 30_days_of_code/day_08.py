# Enter your code here. Read input from STDIN. Print output to STDOUT
import sys

count, *data = sys.stdin.read().splitlines()
phone_book = {}

for i in range(int(count)):
    name, phone = data[i].split(" ")
    phone_book[name] = phone
    
for i in range(int(count), len(data)):
    name = data[i]
    
    if (name in phone_book):
        print(f"{name}={phone_book[name]}")
    else:
        print("Not found")
        