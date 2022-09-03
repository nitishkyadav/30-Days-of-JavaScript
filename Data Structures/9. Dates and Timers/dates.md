## Dates in JavaScript

1.  In Js, to get date we use constructor function _new Date()_ which returns the _Current Date_ as per the machines timezone.

    Example 1:

        console.log(new Date());

    Output:

        Wed Aug 17 2022 23:41:01 GMT+0530 (India Standard Time)
        (* Based upon Execution Time)

2.  The _new Date() Constructor_ is overloaded which can display different dates based upon the parameters passed to it.

    Example 2:

        console.log(new Date("Aug 22, 2020"));
        console.log(new Date("22 Aug, 2020"));
        console.log(new Date("2020, 22 Aug"));
        console.log(new Date("2020" Aug 22));
        console.log(new Date("2020 august 22"));

    Output:

        Sat Aug 22 2020 00:00:00 GMT+0530 (India Standard Time)
        Sat Aug 22 2020 00:00:00 GMT+0530 (India Standard Time)
        Sat Aug 22 2020 00:00:00 GMT+0530 (India Standard Time)
        Sat Aug 22 2020 00:00:00 GMT+0530 (India Standard Time)
        Sat Aug 22 2020 00:00:00 GMT+0530 (India Standard Time)

    Over here, we can observe that irrespective of the format of Date we are getting the same output.

3.  We can also specify the time by mentioning it in 24 hrs standard

    Example 3:

        console.log(new Date("Aug 22, 2020,15:20"));
        console.log(new Date("Aug 22, 2020, 15:20:59"));

    Output:

        Sat Aug 22 2020 15:20:00 GMT+0530 (India Standard Time)
        Sat Aug 22 2020 15:20:59 GMT+0530 (India Standard Time)

4.  Another way of specifying the date and time is by using multiple arguments within _new Date()_ which specifies the different parts

    Example 4:

        console.log(new Date(2020, 07, 22));

    Output:

        Sat Aug 22 2020 00:00:00 GMT+0530 (India Standard Time)

    Remember in this case, the arguments specify year, month and dates respectively.

5.  In JS, Months starts from 0th Index. Therefore _0 represents January_ and _11 represents December_.
6.  If Month's value is greater then 11, then it moves to next year. Same is the case with Days Also.

    Example 5:

        console.log(new Date(2020,12,12));
        console.log(new Date(2020,09,35));

    Output:

        Tue Jan 12 2021 00:00:00 GMT+0530 (India Standard Time)
        Wed Nov 04 2020 00:00:00 GMT+0530 (India Standard Time)

7.  To get the date along with time, we can mention hours and minutes in example 5, by passing minimum 2 arguments after date representing hours and minutes in 24 hours system.

    Example 6:

        console.log(new Date(2020,11,12,15,45));

    Output:

        Sat Dec 12 2020 15:45:00 GMT+0530 (India Standard Time)

8.  Here time, month , date can also be more then the maximum limit i.e AutoCorrect. It will be automatically handled by JS by incrementing the time and date values to match it.

    Example 7:

        console.log(new Date(2020,11,12,25,75));
        console.log(new Date(2020,12,12,25,75));

    Output:

        Sun Dec 13 2020 02:15:00 GMT+0530 (India Standard Time)
        Wed Jan 13 2021 02:15:00 GMT+0530 (India Standard Time)

9.  If we pass 0 as parameter to Date Constructor, it will return default date specified by UNIX systems in GMT which will be converted as per the system timezone ,but if we pass "0" as argument then the Date Constructor will return first date of the Century with time as 00:00:00 for all the timezone and will mention the timezone.

    Example 8:

        console.log(new Date(0));
        console.log(new Date("0"));

    Output:

        Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
        Sat Jan 01 2000 00:00:00 GMT+0530 (India Standard Time)

10. In JavaScript Dates are objects and therefore have certain methods associated with it which can be used to set and get different components of Date.

    Example 9:

        const future = new Date(2027, 10, 15, 15, 45,52);
        console.log(future);
        console.log(future.getFullYear());
        console.log(future.getMonth());
        console.log(future.getDate());
        console.log(future.getDay());
        console.log(future.getHours());
        console.log(future.getMinutes());
        console.log(future.getSeconds());

        console.log(future.setFullYear(2040));

    Output:

        Mon Nov 15 2027 15:45:52 GMT+0530 (India Standard Time)
        2027
        10
        15
        1
        15
        45
        52
        2040

11. Example:
    const future = new Date(2027, 10, 15, 15, 45,52);
    console.log(future.toISOString());
    console.log(future.getTime());
    console.log(new Date(future.getTime()));

    Output:

        2027-11-15T10:15:00.000Z
        1826273700000
        Mon Nov 15 2027 15:45:00 GMT+0530 (India Standard Time)
