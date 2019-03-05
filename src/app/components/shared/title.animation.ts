import {
  trigger,
  state,
  animate,
  transition,
  style
} from "@angular/animations";

const titleAnimation = [
  trigger("title", [
    state(
      "void",
      style({
        transform: "translateX(0)"
      })
    ),
    transition("void <=> *", [
      style({
        color: "#18ffff",
        opacity: 0.2,
        transform: "translateX(-100%)"
      }),
      animate(3000)
    ]),
    transition(":leave", [
      animate("0.9s ease-out", style({ transform: "translateX(100%)" }))
    ])
  ])
];
export { titleAnimation };
