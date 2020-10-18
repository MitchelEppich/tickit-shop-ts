# Summary
This codebase has been refactored to be more readable and more efficient while
ensuring all functionality specifications are being meet through various 
test cases.

# Tickit Shop Functionality

- All items have a sellIn value which denotes the number of days we have 
to sell the item
- All items have a Quality value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item
- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- "Sharp Cheddar" actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- "Ping-pong Paddle", being a legendary item, never has to be sold or decreases 
in Quality
- "Lady Gaga tickets", like sharp cheddar, increases in Quality as it's sellIn 
value approaches; Quality increases by 2 when there are 10 days or less 
and by 3 when there are 5 days or less but Quality drops to 0 after the 
concert
- "Conjured" items degrade in Quality twice as fast as normal items

Just for clarification, an item can never have its Quality increase 
above 50, however "Ping Pong Paddle" is a legendary item and as such its 
Quality is 80 and it never alters.

## Installation

`npm install`

## Run

`npm run test`
