---
title: Elixir - A crash course
categories:
  - notes
tags:
  - elixir
  - language
  - programming
  - notes
  - tutorial

date: '2016-11-06'
slug: elixir-crash-course
description: Basics in Elixir, especially the deviations from the norm
---

These are notes from the [official Elixir documentation][1]. It a quick walk-through of the unique features in Elixir for someone coming from years of C --- a way for me to remember and use as a reference. 

## Summary
 - [Types](#types)
 - [Operators](#operators)
 - [Control Structures](#control-structures)

## Types
### Atoms

Named contants with a value. `true` and `false` are atoms.

### Strings

- Supports unicode string natively! It's about time. [^1] 
- You can concatenate strings using `<>`. `"hello" <> " world"`. 

### Anonymous functions

Native support for closures -- called anonymous functions. Also, functions are first-class, i.e. can be passed as arguments into other functions. Special syntax is required to invoke ananymous functions.

```
iex(1)> add = fn a,b -> a + b end
#Function<12.52032458/2 in :erl_eval.expr/5>
iex(2)> add.(1,2)
3
iex(3)> mulby2 = fn a -> add.(a,a) end
#Function<6.52032458/1 in :erl_eval.expr/5>
iex(4)> mulby2.(4)
8
iex(5)> 
```

### Lists

Native support for lists. hd(list) and tl(list). A list of printable characters will be output as a string. Slower linear access to data, but really fast to prepend elements to the list. eg. `[ 0 | list]`. 

### Tuples

Native support for associative arrays. Any pair of values, stored contiguously. Indexes start from zero. mutable `put_elem(tuple, idx, "value")`. Fast access, but expensive to add or insert elements

### Keyword Lists

Lists of tuples where
 - Keys must be atoms.
 - Keys are ordered, as specified by the developer.
 - Keys can be given more than once.

Useful for making DSLs.

Elixir has special syntax for keyword lists

```
iex> list = [{:a, 1}, {:b, 2}]
[a: 1, b: 2]
iex> list ++ [c: 3]
[a: 1, b: 2, c: 3]

```
the [Keyword][3] module provides methods to manipulate keyword lists.

### Maps [^2]

For a key-value store, maps are the “go to” data structure in Elixir. A map is created using the %{} syntax:

 - Maps allow any value as a key.
 - Maps’ keys do not follow any ordering.
 - Matches a subset of a given value. 

 ```
 iex> map = %{:a => 1, 2 => :b}
 %{2 => :b, :a => 1}
 iex> map[:a]
 1
 ```

 - Matches as long as a key is found in the map.

 ```
 iex> %{:a => a} = %{:a => 1, 2 => :b}
 %{2 => :b, :a => 1}
 iex> a
 1
 iex> n = 1
 1
 ```

 - Variables can be used when accessing, matching and adding keys

 ```
 iex> map = %{n => :one}
 %{1 => :one}
 iex> map[n]
 :one
 iex> %{^n => :one} = %{1 => :one, 2 => :two, 3 => :three}
 %{1 => :one, 2 => :two, 3 => :three}
 ```

 - If all the keys are atoms, convienience syntax may be used.

 ```
 iex> map = %{:a => 1, 2 => :b}
 %{2 => :b, :a => 1}

 iex> map.a
 1
 ```

The [Map][4] module provides a very similar API to the Keyword module with convenience functions to manipulate maps.

### Nested data structures

Elixir supported special functions for working with nested structures. xpath like addressing into a specific level in a nested struct

 - [put_in/2](http://elixir-lang.org/docs/stable/elixir/Kernel.html#put_in/2)
 - [update_in/2](http://elixir-lang.org/docs/stable/elixir/Kernel.html#update_in/2)
 - [get_update_in/2](http://elixir-lang.org/docs/stable/elixir/Kernel.html#get_update_in/2)

Dynamic variants of the above:

 - [put_in/3](http://elixir-lang.org/docs/stable/elixir/Kernel.html#put_in/3)
 - [update_in/3](http://elixir-lang.org/docs/stable/elixir/Kernel.html#update_in/3)
 - [get_update_in/3](http://elixir-lang.org/docs/stable/elixir/Kernel.html#get_update_in/3)

### Other types

Port, Reference and PID


## Operators

Note that ===, and !== use type when comparing (thankfully, the defaults are sensible)

  - +, - , ++, --, <> (concatenate)
  - and, or, not
  - &&, ||, !
  - ==, !=, === (more strict), !== (more strict), <=, >=, < and > 
  - nil/false == false (everything else is true)

### The match operator (`=`)

Used to assign result of an operation to a variable. Can also be used to assign a tuple or list to a set of variables. 

```
{a, b, c} = {:hello, "world", 42}
[a, b, c] = [1, 2, 3]
[head | tail] = [1, 2, 3]   # head = [1], tail = [2, 3]
```

### The pin operator (`^`)

Useful when there is a need to check one of the values of list, but assign another.

```
iex> x = 1
1
iex> x = 2
2
iex> x = 1
1
iex> ^x = 2
** (MatchError) no match of right hand side value: 2
```

### The _ operator

Ignore the rest, or assign the rest to _

```
iex> [h | _] = [1, 2, 3]
[1, 2, 3]
iex> h
1
```

### The pipe operator

`left |> right`, passes left as a parameter to the right. It is useful to re-write code be easier to read. The following are the same:

```
iex> Enum.sum(Enum.filter(Enum.map(1..100_000, &(&1 * 3)), odd?))
7500000000

iex> 1..100_000 |> Enum.map(&(&1 * 3)) |> Enum.filter(odd?) |> Enum.sum
7500000000
```

## Control Structures

  - case - check for multiple matches.
  - cond - check for multiple conditions.
  - if, else, end - check for specific condition.
  - unless - check for a specific match. [^3]

Elixir allows a lot of variations of guards that are used in conditional to express conditions. See [here][2] for more information.

  - do/end - the syntax is a bit weird, but quite similar to do..while in C. They are just keyword lists.

	```
	iex> if true, do: 1 + 2
	3
	iex> if false, do: :this, else: :that
	:that
	```

	The following are equivalent aka `end` doesn't really matter

	```
	iex> if true do
	...>   a = 1 + 2
	...>   a + 10
	...> end
	13
	iex> if true, do: (
	...>   a = 1 + 2
	...>   a + 10
	...> )
	13
	```

	The following would result in a parsing error (is_number that takes two args `if` and `true` is not found)

	```
	iex> is_number if true do
	...>  1 + 2
	...> end
	** (CompileError) undefined function: is_number/2
	```

	This would be the correct way to acheive the normally "expected" behaviour

	```
	iex> is_number(if true do
	...>  1 + 2
	...> end)
	true
	```
[1]: http://elixir-lang.org/getting-started/
[2]: http://elixir-lang.org/getting-started/case-cond-and-if.html#expressions-in-guard-clauses
[3]: http://elixir-lang.org/docs/stable/elixir/Keyword.html
[4]: http://elixir-lang.org/docs/stable/elixir/Map.html
[5]: http://elixir-lang.org/docs/stable/elixir/HashDict.html

[^1]: `byte_size("hellö") != String.length("hellö")`. Also, (char list) `'hello' != "hello"` (string)
[^2]: Maps are supported from Elixir v1.2. For previous versions, use the [HashDict][5] module
[^3]: `if` and `unless` are macros and not first class constructs that are part of the language


<!--stackedit_data:
eyJoaXN0b3J5IjpbMzU3NTg5NDgxXX0=
-->
