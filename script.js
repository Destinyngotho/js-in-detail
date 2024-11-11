// var n1=prompt('Enter the no1:')
// var n2=prompt('Enter the no2:')
// sum=Number(n1)|+Number(n2)
// document.write(sum)
// var name='destiny';
// document.write(name.search('t')+'<br>')
// var sentence='I am happy';
// let pattern = /sad/;
// let result = pattern.test(sentence)
// document.write(result+'<br>')ry {
try{
    let number = 10;
    
    let divisor = 9;
    
    if (divisor === 0)
    
    {
    
    throw new Error("Cannot divide by zero");
    
    }
    
    let result = number / divisor;
    
    document.write("Result: " + result + "<br>");
    
    }
    
    catch (error)
    
    {
    
    document.write("An error occurred: " + error.message + "<br>");
    
    }
    
    finally
    
    {
    
    // This code runs no matter what
    
    document.write("Operation completed.<br>");
    
    }t