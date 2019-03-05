import {
  trigger,
  state,
  animate,
  transition,
  style
} from "@angular/animations";

const titleAnimation = [
  trigger("title", [
    state("void", style({ transform: "translateX(0)" })),
    transition("void <=> *", [
      style({ transform: "translateX(-100%)" }),
      animate(2000)
    ]),
    transition(":leave", [
      animate("0.3s ease-out", style({ transform: "translateX(100%)" }))
    ])
  ])
];
export { titleAnimation };
//
