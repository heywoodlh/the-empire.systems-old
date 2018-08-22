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

Variables are statically typed, meaning the type can't change once defined. There are different types of integer types that are possible:


#### Go Data types: 

[https://www.tutorialspoint.com/go/go_data_types.htm](https://www.tutorialspoint.com/go/go_data_types.htm)

Ints are regular numbers. Look at the Go Data Type link for all the different type of 'int's that Go can use and what numbers can fit in which int type. 

Floats are decimals. Look at the Go Data Type link for all the different type of floats that Go can use and what numbers can fit in which float type.


#### Variable syntax:

`var [varName] [type] = [value]`

I.E.

`var myAge int = 12`

 
