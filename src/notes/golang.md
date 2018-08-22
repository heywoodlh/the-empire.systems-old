---
layout: post.html
title: 'Go Language Notes'
date: 2018-08-22
draft: false
---

Sources: [Derek Banas: Go Programming](https://youtu.be/CF9S4QZuV30)


### An example 'hello world' program:

#### Package declaration:

`package main`


Import modules with `import`:

`import "fmt"`


#### Comments:

`//mycomment`


#### Declare function:
```
func main() {
    
    fmt.Println("hello world")
    
}
```


#### All put together:

```
package main
import "fmt"

//my main function
func main {

    fmt.Println("hello world")

}
```


#### Run a go file:

`go run myfile.go`



### Go documentation:

[https://golang.org/doc/](https://golang.org/doc/)


#### Retrieve Go's documentation on a function: 

`godoc <pkg> <function>`
    
I.E.
    
`godoc fmt Println`




### Variables in Go:


#### Go Data types: 

Variables are statically typed, meaning the type can't change once defined. There are different types of integer types that are possible:

[https://www.tutorialspoint.com/go/go_data_types.htm](https://www.tutorialspoint.com/go/go_data_types.htm)

`Int`s are regular numbers. Look at the Go Data Type link for all the different type of 'int's that Go can use and what numbers can fit in which int type. 

`float`s are decimals. Look at the Go Data Type link for all the different type of floats that Go can use and what numbers can fit in which float type.



#### Variable assignment syntax:

`var [varName] [type] = [value]`

Assign int

`var myAge int = 12`

OR string

`var myName string = 'Cool Guy'`

OR const

`const myAge int = 12`

OR boolean

`var isTrue bool = false`


Go can also intelligently assign data types to variables:

`randNum := 3`


Multiple variables can also be assigned at once:

```
var (
    varOne = 3
    varTwo = 4
    varThree = 8
)
```




### Println:

`Println` is a function in the "fmt" module. It can be used to print lines, do arithmatic, etc. Very similar to Python's `print` function.


#### Print line:

`fmt.Println('my line of strings')`


#### Evaluate math problem:

```
func main {
    var myAge int = 20
    var yourAge int = 32

    fmt.Println(yourAge - myAge)
}
```



#### Types of math operations:

+ == Addition
- == Subtraction
* == Multiplication
/ == Division
% == Modulus (return remainder)


#### Variable substitution:

%s == string
%f == float
%d == int

%T == type
%t == boolean
%b == binary
%c == character code
%x == hex
%e == scientific notation

```
package main
import "fmt"

func main {
    var myString string = 'super cool guy'
    
    fmt.Println('Spencer is a %s', myString)
} 
```



#### Other:

`\n` == New line


