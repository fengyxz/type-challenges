import type { Equal, Expect } from '@type-challenges/utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

interface ReadonlyTodo1 {
  readonly title: string
  readonly description: string
  readonly completed: boolean
  readonly meta: {
    author: string
  }
}

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
  Expect<Equal<MyReadonly<Todo1>, ReadonlyTodo1>>,
]
export type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
