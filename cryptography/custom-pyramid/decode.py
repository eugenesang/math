# for the sequence 1+2+3+...+n f(n)=(n*n+n)/2
def triangular_number(n): 
    return (n ** 2 + n) // 2

# return a list of indices with maximum no being the length of our words; [1, 3, 6, 10, 15, 21, ..., maximum]
def get_indices(maximum):
    arr = []
    index = 1
    while triangular_number(index) < maximum:
        arr.append(triangular_number(index))
        index += 1

    arr.append(maximum)

    return [d - 1 for d in arr]

def print_pyramid(maximum):
    arr = list(range(1, maximum + 1))
    cur = 1

    while arr:
        print(" ".join(str(num) for num in arr[:cur]))
        arr = arr[cur:]
        cur += 1

def decode(filename):
    # Open and read the coding dictionary file
    with open(filename, "r") as file:
        raw = file.readlines()
        
    # Initialize an empty list to store parsed data
    arr = []

    # Parse each line and populate the list
    for line in raw:
        if line.strip():  # Ignore empty lines
            n, t = line.split(' ')
            arr.append({'n': int(n), 't': t.strip()})
            
    # Sort the list based on the 'n' value
    arr.sort(key=lambda x: x['n'])
    
    indices = get_indices(len(arr))
    print_pyramid(len(arr))
    
    words = [arr[d]['t'] for d in indices]
    
    return " ".join(words)


words = decode("./coding_qual_input.txt")

print(words)