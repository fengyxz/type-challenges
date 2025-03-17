import type { Equal, Expect } from '@type-challenges/utils'

interface Todo {
  title: string
  description: string
  completed: boolean
}

type A1 = MyPick<Todo, 'title'>
type B1 = {
  title: string
}
type C1 = Expect<Equal<A1, B1>>

type A2 = MyPick<Todo, 'title' | 'completed'>
type B2 = {
  title: string
  completed: boolean
}
type C2 = Expect<Equal<A2, B2>>
type E = MyPick<Todo, 
// @ts-expect-error(2344) 
'title' | 'hello'
>
type MyPick<
  T,
  K extends keyof T,
> = {
  [P in K]: T[P]
}
