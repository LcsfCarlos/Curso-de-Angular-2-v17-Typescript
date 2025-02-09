import { animate, query, stagger, style, transition, trigger } from "@angular/animations";
import { signal } from "@angular/core";

export const mediaMax600 = trigger('list-itens', [
      transition(':enter', [
        query('li', [
          style({
            background: 'yellow',
            transform: 'translateY(100px)',
          }),
          stagger('700ms', [animate('1s')]),
          //group([
          //  animate('1s',
          //    style({
          //      background: 'red',
          //    }),
          //  ),

          //  animate('2s',
          //    style({
          //      background: 'blue',
          //    }),
          //  ),

          //  animate('7s',
          //    style({
          //      background: 'none',
          //      transform: 'translateY(0)',
          //    }),
          //  ),

          //  animate('1s',
          //    style({
          //      transform: 'translateY(100px)',
          //    }),
          //  ),
          //])
        ], { optional: true}),
      ]),

      transition(':decrement', [
        query('li:leave', [
          style({
            background: 'red',
            opacity: 1
          }),
          animate('1s', style({opacity: 0})),
        ], { optional: true}),
      ]),

      transition(':increment', [
        query('li:enter', [
          style({
            background: 'yellow',
            transform: 'translateY(100px)',
          }),
          stagger('700ms', [animate('1s')]),
        ]),
      ]),
]);

export const mediaMax700 = trigger('list-itens', [
  transition(':enter', [
    query('li', [
      style({
        background: 'yellow',
        transform: 'translateY(100px)',
      }),
      stagger('700ms', [animate('1s')]),
      //group([
      //  animate('1s',
      //    style({
      //      background: 'red',
      //    }),
      //  ),

      //  animate('2s',
      //    style({
      //      background: 'blue',
      //    }),
      //  ),

      //  animate('7s',
      //    style({
      //      background: 'none',
      //      transform: 'translateY(0)',
      //    }),
      //  ),

      //  animate('1s',
      //    style({
      //      transform: 'translateY(100px)',
      //    }),
      //  ),
      //])
    ], { optional: true}),
  ]),

  transition(':decrement', [
    query('li:leave', [
      style({
        background: 'red',
        opacity: 1
      }),
      animate('1s', style({opacity: 0})),
    ], { optional: true}),
  ]),

  transition(':increment', [
    query('li:enter', [
      style({
        background: 'yellow',
        transform: 'translateY(100px)',
      }),
      stagger('700ms', [animate('1s')]),
    ]),
  ]),
]);


export const listItensAnimations = () => {
    if (isMatchMedia(600)){
      return mediaMax600;
    }

    if (isMatchMedia(700)){
      return mediaMax700;
    }

    return;
};

const isMatchMedia = (value: number) => {
  return matchMedia(`(max-width: ${value}px)`).matches;
}
