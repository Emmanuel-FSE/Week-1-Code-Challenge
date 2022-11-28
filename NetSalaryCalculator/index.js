//definition of variables
const salary = document.getElementById("salary");
const benefits = document.getElementById("benefits");
let gSalary;
let benefit;
let taxablePay;
const nssf = 200;
let PAYE;

// calculating PAYE
function netSalary(){
    gSalary = salary.value;
    benefit = benefits.value;
    taxablePay = gSalary - benefit;

    document.getElementById("grossP").textContent = `Your gross salary is ${gSalary} KSH`;
    document.getElementById("benefitP").textContent = `Your benefits totals to ${benefit} KSH`;
    document.getElementById("taxable").textContent = `Your taxable pay totals to ${taxablePay} KSH`;
    document.getElementById("NSSF").textContent = `NSSF old rates total to ${nssf} KSH`;
    
    if(taxablePay < 24000){
        PAYE = (taxablePay * 10)/100;
        document.getElementById("paye").textContent = `Your PAYE pay totals to ${PAYE} KSH`;
        return PAYE;
    }
    else if(taxablePay > 24000 && taxablePay <= 32333){
        PAYE = (taxablePay * 25)/100;
        document.getElementById("paye").textContent = `Your PAYE pay totals to ${PAYE} KSH`;
        return PAYE;
    }
    else if(taxablePay > 32333){
        PAYE = (taxablePay * 30)/100;
        document.getElementById("paye").textContent = `Your PAYE pay totals to ${PAYE} KSH`;
        return PAYE;
    }
    
}

// calculating NHIF fee
let NHIF;
function switchStatement(){
     let grossSalary = salary.value;
    switch (true) {
        case (grossSalary <= 5999):
            NHIF = 150;
            break;
        case (grossSalary >= 6000 && grossSalary <= 7999):
            NHIF = 300;
            break;
        case (grossSalary >= 8000 && grossSalary <= 11999):
            NHIF = 400;
            break;
        case (grossSalary >= 12000 && grossSalary <= 14999):
            NHIF = 500;
            break;
        case (grossSalary >= 15000 && grossSalary <= 19999):
            NHIF = 600;
            break;
        case (grossSalary >= 20000 && grossSalary <= 24999):
            NHIF = 750;
            break;
        case (grossSalary >= 25000 && grossSalary <= 29999):
            NHIF = 850;
            break;
        case (grossSalary >= 30000 && grossSalary <= 34999):
            NHIF = 900;
            break;
        case (grossSalary >= 35000 && grossSalary <= 39999):
            NHIF = 950;
            break;
        case (grossSalary >= 40000 && grossSalary <= 44999):
            NHIF = 1000;
            break;
        case (grossSalary >= 45000 && grossSalary <= 49999):
            NHIF = 1100;
            break;
        case (grossSalary >= 50000 && grossSalary <= 59999):
            NHIF = 1200;
            break;
        case (grossSalary >= 60000 && grossSalary <= 69999):
            NHIF = 1300;
            break;
        case (grossSalary >= 70000 && grossSalary <= 79999):
            NHIF = 1400;
            break;
        case (grossSalary >= 80000 && grossSalary <= 89999):
            NHIF = 1500;
            break;
        case (grossSalary >= 90000 && grossSalary <= 99999):
            NHIF = 1600;
            break;
        case (grossSalary >= 100000):
            NHIF = 1700;
            break;
        default:
            NHIF = "Invalid amount."
            

        return NHIF;
    }
    document.getElementById("nhif").textContent = `Your NHIF pay totals to ${NHIF} KSH`;
    return NHIF;
}

// calculating and displaying net salary
 function netSalaryAfter(){
    const netSalaryAll = (gSalary - PAYE - nssf - NHIF);
    document.getElementById("net").textContent = `Net Salary = ${netSalaryAll} KSH.`
    document.getElementById("showResult").classList.remove("visually-hidden");
    document.getElementById("showResult").classList.remove("text-start");
 }
