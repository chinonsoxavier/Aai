export interface FancyButtonInterface {
  text:string,
  className?:string,
  borderNone?:false | true,
  accent?:"dark" | "light",
}

export interface AnimationControllerInterface {
  child:React.ReactNode
}