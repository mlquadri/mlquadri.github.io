# hwk9 prob2 (digitprop.py)
# mquadr8 661351305

# Function definitions and docstrings to copy into your own `digitprop.py`
# Then, add function bodies!

def has_small_digits(n,maxdigit):
    """
    Determines whether or not the digits of `n` are all between 0 and `maxdigit` (inclusive).
    Returns `True` or `False` accordingly.
    e.g.
    has_small_digits(1021,1) returns False - third digit is larger than 1
    has_small_digits(1021,2) returns True - all digits between 0 and 2
    has_small_digits(1021,5) returns True - all digits between 0 and 5
    has_small_digits(351622,5) returns False - fourth digits if larger than 5
    has_small_digits(351622,6) returns True - all digits between 0 and 6
    """
    digits = [int(num) for num in str(n)]
    return all([num <= maxdigit for num in digits]) 
    
def is_antipalindrome(n):
    """
    Takes a positive integer `n`.
    Returns `True` if reversing the order of the digits in `n` gives the same
    result as replacing each digit d of `n` with 9-d ("flipping" the digits).
    Otherwise, returns `False`.
    (A number `n` for which this function returns `True` might be called an *antipalindrome*.)
    e.g.
    is_antipalindrome(5128) returns False, because reversing order gives 8215 while flipping digits gives 4871.
    is_antipalindrome(4815) returns True, because reversing order or flipping digits each gives 5184.
    """
    digits = [int(num) for num in str(n)]
    reverseDigits = digits[::-1]
    return all([reverseDigits[i]==(9-digits[i]) for i in range(len(digits))])
    
#print( has_small_digits(123456, 7) )
#print( is_antipalindrome(4815) )