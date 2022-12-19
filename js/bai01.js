function tinhGiaiThua()
{
    let n = parseInt(prompt("Nhập số "));

    if (n === 0 || n === 1)
    {
        alert("Kết quả giai thừa của "+n+" là 1");
    }

    let giaiThua = 1;

    for (let i = 2; i <= n;i++)
    {
        giaiThua *= i;
    }

    alert("Kết quả giai thừa của "+n+" là "+giaiThua+"");
}
tinhGiaiThua();