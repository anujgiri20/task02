var request=new XMLHttpRequest();//step one 
request.open('GET' ,'https://restcountries.eu/rest/v2/all',true);//step two
//sending connection
request.send();
//step 4 onces the server respond succesfuly then we have to process the data
request.onload=function()
{
    var cc="";
    var data=JSON.parse(this.response);
    console.log(data);
    for(var i=0;i<250;i++)
    {
        cc=cc+data[i].name
        console.log(data[i].name+"   "+data[i].capital+"  "+data[i].flag)
    }
   
}
