word = ['P', 'I', 'K', 'A', 'C', 'H', 'U']
guessed = ['_', '_', '_', '_', '_', '_', '_']

def guessLetter(guess):
    found = False
    for i in range(len(word)):
        if word[i] == guess:
            guessed[i] = word[i]
            found = True
    return found

while '_' in guessed:
    print('The word is currently: ', end='')
    for i in guessed:
        print(i, end='')
    print()
    guess = input('Enter your guess letter: ').upper()
    if guessLetter(guess):
        print(guess, 'was found in the word!')
    else:
        print(guess, 'was not found in the word!')

print('\nThe word was PIKACHU! You got it!')
