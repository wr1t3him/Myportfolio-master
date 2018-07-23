
$("#ex1num1").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#ex1num2").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#ex1num3").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#ex1num4").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#ex1num5").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#factornum").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#fbnum1").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
$("#fbnum2").on('keypress', function (event) {
    if (event.keyCode < 48 || event.keyCode > 57)
        return false;
})
function FizzBuzz(fizz, buzz) {
    var result = [];
    for (var i = 1; i <= 100; i++) {
        var isFizz = ((i % fizz) == 0);
        var isBuzz = ((i % buzz) == 0);

        if (isFizz && isBuzz) { result.push("<span class='fizzbuzz'>FizzBuzz</span>"); }
        else if (isFizz) { result.push("<span class='fizz'>Fizz</span>"); }
        else if (isBuzz) { result.push("<span class='buzz'>Buzz</span>") }
        else { result.push("<b>" + i + "</b>"); }
    }
    return result.join(', ');
}

//I need a reference to the btnEx1 button
        $("#btnEx1").click(function () {
                //Collect the data
                var num1 = Number($("#ex1num1").val());
                var num2 = Number($("#ex1num2").val());
                var num3 = Number($("#ex1num3").val());
                var num4 = +($("#ex1num4").val());
                var num5 = +($("#ex1num5").val());

            if (num1 == " " || num2 == " " || num3 == " " || num4 == " " || num5 == " ") {
                alert("Please enter a number");
            }
            else {
                var result = "Sum: " + (num1 + num2 + num3 + num4 + num5);
                result += " and the Largest is:" + Math.max(num1, num2, num3, num4, num5);
                var result2 = "The Lowest number is " + Math.min(num1, num2, num3, num4, num5);
                var result3 = "The product of all the numbers is " + (num1 * num2 * num3 * num4 * num5);
                var result4 = "The mean is " + ((num1 + num2 + num3 + num4 + num5) / 5);
            }
            
        //Output a result to the results p tag
        $("#ex1output").text(result);
        $("#ex2output").text(result2);
        $("#ex3output").text(result3);
        $("#ex4output").text(result4);
})
$(document).ready(function () {
    $("#hide").click(function () {
        $("pre").hide();
    });
    $("#show").click(function () {
        $("pre").show();
    });
});
$(document).ready(function () {
    $("#hide1").click(function () {
        $("pre").hide();
    });
    $("#show1").click(function () {
        $("pre").show();
    });
});
$(document).ready(function () {
    $("#hide2").click(function () {
        $("pre").hide();
    });
    $("#show2").click(function () {
        $("pre").show();
    });
});
$(document).ready(function () {
    $("#hide3").click(function () {
        $("pre").hide();
    });
    $("#show3").click(function () {
        $("pre").show();
    });
});
    $("#btnEx2").click(function () {

        var num = Number($("#factornum").val());
        var j = num;
    if (num == " ") {
        alert("Please enter a number");
    }
    else {
        for (i = 1; i < num; i++) {
            j = i * j;

        }

        var output = j + " is the factorial of " + num;
        $("#joutput2").text(output);
    }
})
    
    $("#btnEx3").click(function () {
        var f = Number($("#finput").val());
        var b = Number($("#binput").val());
        if (f == " " || b == " ") {
            alert("Please enter a number");
        }
        else { //Step 1: Get the data from this page and push into the FizzBuzz JS function
        var fizzNum = parseInt($("#finput").val());
        var buzzNum = parseInt($("#binput").val());

        //Step 2: Call the external FizzBuzz function with the data collected from this page
            var identity = FizzBuzz(fizzNum, buzzNum);

            //Step 3: Use the returned data to populate an element on this page
            $("#fboutput").html(identity);
        }
    })
    $("#btnEx4").click(function () {

        var line = $("#sentence").val();
        var x = line.length;
        if (x == 0) {
            alert("Please enter a word or phrase");
        }
        else {
            var reversel = line.split("").reverse().join("");
            var tfans;
            if (line == reversel) {
                tfans = line + " is a pallandine";
                $("#joutput4").text(tfans);
            } else {
                tfans = line + " is NOT a pallandine";
                $("#joutput4").text(tfans);
            }
        }

    })