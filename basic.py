import time
def type_lyrics(line):
    for char in line:
        print(char,end ='', flush = True)
        time.sleep(0.12)
    print()

def print_lyrics():
    listen = [

        "Yeh shaam dhal to le zara ",
        "Yeh dil sambhal to le zara",
        "Main thodi deir jee to loon",
        "Nashe ke ghoont pee to loon",
        "Nashe ke ghoont pee to loon",
        "Abhi to kuchh kaha nahi",
        "Abhi to kuchh suna nahi",
        "Abhi na jao chhod kar ke dil abi bhara nahi...",
        ]
    
    delay = [.3, 0.3, 0.4, 0.5, .6, .8, 0.7, 1.2]   
    
    for i, line in enumerate(listen):
        type_lyrics(line)
        time.sleep(delay[i])

print("\n....Abhi na jao chhod kar......")
print_lyrics()
print("........Thank you......")
time.sleep(2)