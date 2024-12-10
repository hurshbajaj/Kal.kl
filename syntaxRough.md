-------------------------------------------------

<@str message> ;

>message> "hello" ;

<@str message> > "hello";

-------------------------------------------------

<@int number> ;

>number> 21 ;

<@int number> > 21;

-------------------------------------------------

<@arr numbers> ;

>numbers> { 11:19:271:16 };

<@arr numbers> > { "one": "nine": "ten" };
-------------------------------------------------

<@obj person> ;

>person> (
    <@str name>
    <@int age>
    <@arr hobbies>
);

<@obj person> > person> (
    <@str name>;
    <@int age>;
    <@arr hobbies>;
    );
-------------------------------------------------

<@struct person> ;

>person> (
    <instance? {...params}> > ();

    <@str name>
    <@int age>
    <@arr hobbies>
);

-------------------------------------------------

<@comp func1 {...params}> > (); //component
