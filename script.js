
function data()
{
    $.get("/po",function(data){
        for(var i = 0;i<data.length;i++)
        {
            console.log(data[i].id);
        }
    });
}