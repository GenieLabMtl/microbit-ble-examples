/**
 * Copyright GenieMob 2018
 * Propulser la créativité | Ignite creativity
 */


basic.showString("GenieMob");
basic.forever(() => {
  if(input.acceleration(Dimension.Z) < 500) {
    bluetooth.advertiseUrl("https://microbit.org/", 7, false);
    basic.showLeds(`
      . . . . .
      . . . . .
      . . # . .
      . . . . .
      . . . . .
    `);
    basic.showLeds(`
      . . . . .
      . . # . .
      . # . # .
      . . # . .
      . . . . .
    `);
    basic.showLeds(`
      . . # . .
      . # . # .
      # . . . #
      . # . # .
      . . # . .
    `);
    basic.showLeds(`
      . # . # .
      # . . . #
      . . . . .
      # . . . #
      . # . # .
    `);
  }
  else {
    bluetooth.stopAdvertising();
    basic.showLeds(`
      . . . . .
      . . . . .
      . . . . .
      . . . . .
      . . . . .
    `);
  }
});
