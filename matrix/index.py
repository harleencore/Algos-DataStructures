def matrix(n):
    dirn=[1,0] # initialize direction from right to left
    # M= [[0]*n] *n # creates a list of n 0s, then a list of n references to that
    M = [ [0]*n for _ in range(n) ] # init matrix of 0s
    x = 0
    y = 0
    i = 1
    stop = False

    # y handles rows (+ve vertically down-- changing y changes row)
    # x handles columns (+ve horizontally right-- changing x changes col)

    while not stop:
        M[y][x] = i
        if dirn[0] > 0:
            if x+dirn[0] >= n:
                dirn = [0,1]
                # continue
            elif M[y][x+dirn[0]] != 0:
                dirn = [0,1]
        elif dirn[0] < 0:
            if x+dirn[0] <0:
                dirn = [0,-1]
                # continue
            elif M[y][x+dirn[0]] != 0:
                dirn = [0,-1]
        elif dirn[1] > 0:
            if y+dirn[1] >= n:
                dirn = [-1,0]
                # continue
            elif M[ y+dirn[1]][x] != 0:
                dirn = [-1,0]
        elif dirn[1] < 0:
            if y+dirn[1] <0:
                dirn = [1,0]
                # continue
            elif M[ y+dirn[1]][x] != 0:
                dirn = [1, 0]
        if i== n*n:
            stop = True
        else:

            i+=1
            x+=dirn[0]
            y+=dirn[1]
    for row in range (n):
        print(M[row])

matrix(1)
matrix(2)
matrix(3)
matrix(4)
matrix(5)
