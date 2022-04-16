const CODIGO = 25;

function misterio1(age) {
    if (typeof (age) === "number" && age >= 18 && age <= 120) {
            return "Puedes conducir";
    } else {
        return "Introduce un numero válido";
    }
}

function misterio2(month) {
     //The function receives one parameter, that should be a number from 1 to
    // 12 (or a string-number). It will return the name of the month: "Enero",
    // "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    // "Septiembre", "Octubre", "Noviembre", "Diciembre". If the parameter
    // is not correct, it will return " No es un mes"
    if (typeof (month) === "number" && month >= 1 && month <= 12) {
        switch (month) {
            case 1:
                return "Enero";
            case 2:
                return "Febrero";
            case 3:
                return "Marzo";
            case 4:
                return "Abril";
            case 5:
                return "Mayo";
            case 6:
                return "Junio";
            case 7:
                return "Julio";
            case 8:
                return "Agosto";
            case 9:
                return "Septiembre";
            case 10:
                return "Octubre";
            case 11:
                return "Noviembre";
            case 12:
                return "Diciembre";
        }
    } else {
        return "No es un mes";
    }
    return true;
}
function misterio3() {
    //The function receives three parameters: Operation, number1 and
    // number2. Operation must be "suma","resta","multiplicación" or "división.
    // Numbers must be numbers. If they are not numbers, it will return: " Los
    // valores no son números" If the operation is not one of those mentioned,
    // it will return: "Introduce operación válida". Otherwise, it will return the
    // result of the operation. In case of division, if the second number is 0, it
    // will return: " No dividir por 0"
    if (typeof (num1) === "number" && typeof (num2) === "number") {
        switch (operacion) {
            case "suma":
                return num1 + num2;
            case "resta":
                return num1 - num2;
            case "multiplicacion":
                return num1 * num2;
            case "division":
                if (num2 === 0) {
                    return "No dividir por 0";
                } else {
                    return num1 / num2;
                }
            default:
                return "Introduce operación válida";
        }
    } else {
        return "Los valores no son números";
    }
}
function misterio4() {
    return true;
}
function misterio5() {
    return true;
}
function misterio6() {
    //The function receives a parameter. It will check if it is A,B,C,D or E
    // (Change it first to uppercase):
    // If it is A, return "Nota entre 8 y 10".
    // If it is B, return "Nota entre 6.5 y 8".
    // If it is C, return "Nota entre 5 y 6.5".
    // If it is D, return "Nota entre 4 y 5".
    // If it is E, return "Nota entre 0 y 4".
    // If it is not one of those letters, return "Introduce una nota válida".
    if (typeof (nota) === "string") {
        nota = nota.toUpperCase();
        switch (nota) {
            case "A":
                return "Nota entre 8 y 10";
            case "B":
                return "Nota entre 6.5 y 8";
            case "C":
                return "Nota entre 5 y 6.5";
            case "D":
                return "Nota entre 4 y 5";
            case "E":
                return "Nota entre 0 y 4";
            default:
                return "Introduce una nota válida";
        }
    } else {
        return "Introduce una nota válida";
    }
}
function misterio7() {
    return true;
}
function misterio8() {
    return true;
}
function misterio9(row, col) {
    //The function receives two parameters: Rows and columns. The values
    // have to be numbers under 10. (String-numbers are not valid). It will
    // generate a string of an HTML table with the rows and the columns
    // specified. If the requirements are not met, it will return: "Introduce
    // dos números positivos menores que 10". If they are met, it will return
    // the table (without spaces). Examples:
    // Table 1x1:
    // <table><tr><td></td></tr></table>
    // Table 2x3:
    // <table><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td>
    // </tr></table>

    if (typeof (row) === "number" && typeof (col) === "number" && row >= 0 && col >= 0 && row < 10 && col < 10) {
        let tabla = "<table>";
        for (let i = 0; i < row; i++) {
            tabla += "<tr>";
            for (let j = 0; j < col; j++) {
                tabla += "<td></td>";
            }
            tabla += "</tr>";
        }
        tabla += "</table>";
        return tabla;
    } else {
        return "Introduce dos números positivos menores que 10";
    }






}
function misterio10() {
//The function gets the current date and returns the day and month as a
// string in the following format: "Hoy es el día 3 del mes 3". Use .getDay()
// and .getMonth() Date methods.

    return true;
}
function misterio11() {
    return true;
}
function misterio12() {
    return true;
}
function misterio13() {
    return true;
}
function misterio14() {
    return true;
}
function misterio15() {
    return true;
}
function misterio16() {
    return true;
}
function misterio17() {
    return true;
}
function misterio18() {
    return true;
}
function misterio19() {
    return true;
}
function misterio20() {
    return true;
}



module.exports = {
    misterio1,
    misterio2,
    misterio3,
    misterio4,
    misterio5,
    misterio6,
    misterio7,
    misterio8,
    misterio9,
    misterio10,
    misterio11,
    misterio12,
    misterio13,
    misterio14,
    misterio15,
    misterio16,
    misterio17,
    misterio18,
    misterio19,
    misterio20,
    CODIGO
}