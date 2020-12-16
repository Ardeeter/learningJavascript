
/*

- 52 images (each card in deck of cards)
    - array of objects
    - [{}, {}, {}]
    - suit, value, imageURL
    - 2D.png, 3D, 4H

- deck: array of objects with 52 elements
- shuffle - provided
- 2 buttons (hit, stay)
- pop() (to move card from main deck to dealer or player)
- use the popped objects, place (dom manipulation) the images on your screen
- dealerArray, playerArray
    - cards pushed to these arrays (to keep track of the hands)
    - calculate the value of each hand
- hit button (event listener)
    - pop card from deck
    - push card to player hand
    - recalculate
- stand (event listener)
    - process starts for dealer
    - check value of dealer
    - as long as less than 17, then dealer gets another card




-

*/
