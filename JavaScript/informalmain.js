var a;
function show_hide()
{
    if(a==1)
        {
            document.getElementById("a61").style.display="block";
            document.getElementById("a62").style.display="none";
            return a=0;
        }
    else
        {
            document.getElementById("a61").style.display="none";
            return a=1;
        }
}

function show_hide2()
{
    if(a==1)
        {
            document.getElementById("a62").style.display="block";
            document.getElementById("a61").style.display="none";
            return a=0;
        }
    else
        {
            document.getElementById("a62").style.display="none";
            return a=1;
        }
}
// function inputname(){
//
// }
