function inMuoiLamSoChia3()
{
    let count = 0,number = 0;

    let str = "";

    while(count < 15)
    {
       if (number % 3 === 0)
       {
           str += " "+ number;
           count++;
       }
       number++;
    }
    document.write(str);
}
inMuoiLamSoChia3();