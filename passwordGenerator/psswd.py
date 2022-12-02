import random

#A function do shuffle all the characters of a string
def shuffle(string):
  tempList = list(string)
  random.shuffle(tempList)
  return ''.join(tempList)

#Main program starts here
uppercaseLetter1=chr(random.randint(65,90)) #Generate a random Uppercase letter (based on ASCII code)
uppercaseLetter2=chr(random.randint(65,90)) #Generate a random Uppercase letter (based on ASCII code)
#Generate more characters here
lowerCaseLetter1 = chr(random.randint(97,122))
lowerCaseLetter2 = chr(random.randint(97,122))

randomChracter1 = chr(random.randint(32,191))
randomChracter2 = chr(random.randint(32,191))

zeroToNines1 = chr(random.randint(48,57))
zeroToNines2 = chr(random.randint(48,57))


#Generate password using all the characters, in random order
password = uppercaseLetter1 + uppercaseLetter2 + lowerCaseLetter1 + lowerCaseLetter2 + randomChracter1 + randomChracter2 + zeroToNines1 + zeroToNines2


#Ouput
print(password)
print(shuffle(password))
print(shuffle(password))