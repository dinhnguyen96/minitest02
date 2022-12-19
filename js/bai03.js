function tongPhanTuChia5(arrayElement)
{
    let sum = 0;
    for (let i = 0; i < arrayElement.length;i++)
    {
        if (arrayElement[i] % 5 === 0)
        {
            sum += arrayElement[i];
        }
    }
    alert("Tổng phần tử chia hết cho 5 bằng " + sum);
}
let arr = [5,10,34,86,25,30];
tongPhanTuChia5(arr);