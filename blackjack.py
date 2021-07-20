# Name: Blackjack Game
# Author: Emily Port
# Description: Will allow users to play blackjack
# *******************************************************

import random
ready = input('ready to play? Enter "yes" ')
user_cards = []
dealer_cards = []
def draw_card_user():
    card = random.randint(1, 10)
    while card in user_cards or card in dealer_cards:
        card = random.randint(1, 10)
    else:
        user_cards.append(card)
        return
def draw_card_dealer():
    card = random.randint(1, 10)
    while card in user_cards or card in dealer_cards:
        card = random.randint(1, 10)
    else:
        dealer_cards.append(card)
        return


def dealer_play(sum_):
    while sum_ <= 16:
        draw_card_dealer()
        sum_ = sum(dealer_cards)
    return


def user_play(sum_):
    while sum_ > 0:
        again = input('draw again? Enter "yes" to draw again and "no" to finish turn ')
        if again == 'yes':
            draw_card_user()
            sum_ = sum(user_cards)
            print(user_cards)
            if sum_ > 21:
                print('you lose!')
                break
        elif again == 'no':
            return
        else:
            again = input("not a valid response try again ")

def comparison(sum_user, sum_dealer):
    if 21 >= sum_user > sum_dealer:
        print("the score is", sum_user, "for you with these cards", user_cards, "and", sum_dealer, "for the dealer with these cards", dealer_cards, "You win!!!!")
    elif sum_user <= sum_dealer < 21:
        print("the score is", sum_user, "for you with these cards", user_cards, "and", sum_dealer, "for the dealer with these cards", dealer_cards, " You lose :(")
    elif sum_user > 21:
        print("You scored", sum_user, "with these cards", user_cards)
    elif sum_dealer > 21 and sum_user <= 21:
        print("the score is", sum_user, "for you with these cards", user_cards, "and", sum_dealer, "for the dealer with these cards", dealer_cards, "You win!!!!")
i = 0
while i < 1:
    if ready == 'yes':
        draw_card_dealer()
        draw_card_user()
        draw_card_dealer()
        draw_card_user()
        print('dealers cards', dealer_cards[0],',',dealer_cards[1], 'your cards', user_cards[0],',',user_cards[1])
        user_play(sum(user_cards))
        dealer_play(sum(dealer_cards))
        sum_user = sum(user_cards)
        sum_dealer = sum(dealer_cards)
        comparison(sum_user, sum_dealer)
        i += 1
    elif ready == 'no':
        print("coward")
        i += 1
    else:
        ready = input("not a valid response please try again")