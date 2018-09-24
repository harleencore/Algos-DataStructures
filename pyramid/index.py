def pyramid(n):
    for i in range (n):
        pounds = 1 + 2*i
        spaces = n-1-i
        print(" "*spaces + "#"*pounds+" "*spaces)

pyramid(3)


def f(n):
    for row in range(n):
        nhash = 1 + 2*row
        nspace = n - 1 - row
        print(" " * nspace + "#" * nhash + " "*nspace)

f(3)
f(2)
