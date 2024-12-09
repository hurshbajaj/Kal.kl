@new class => name{
    @onEntry{}
}
@new obj => name{}

@new => name "hello"


---------------------------------------

@msg "hello"
>msg

@func1 [name : age : favGame]{

    }
>func1["joe":11:catch]

@obj1 {
    @name "Joseph"

}
>obj1 //object
>obj>name //property

@class1 !{}

@arr1 <"jack":"rose":"amanda">
>arr1   //arr
>arr1?2 //index 2

@const1 !3000
@const2 ! "Roderick"