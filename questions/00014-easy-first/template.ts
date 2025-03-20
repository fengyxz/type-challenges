import type { Equal, Expect } from '@type-challenges/utils'

type A1 = First<[3, 2, 1]>
type B1 = 3
type C1 = Expect<Equal<A1, B1>>

type A2 = First<[() => 1, { a: string }]>
type B2 = () => 1
type C2 = Expect<Equal<A2, B2>>

type A3 = First<[]>
type B3 = never
type C3 = Expect<Equal<A3, B3>>

type A4 = First<[undefined]>
type B4 = undefined
type C4 = Expect<Equal<A4, B4>>

type First<T extends unknown[]> = T extends [] ? never : T[0]
