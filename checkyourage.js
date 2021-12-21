//alert('heello world')
//console.log('he!!');


///challenge :age in days
function ageInDays(){
    var birthyear=prompt('what year were you born.....Good Frinds');

    var agedays=(2018-birthyear)*365;
//this will show result in screen
    var h1=document.createElement('h1');
    var textanswer=document.createTextNode('YOU ARE '+agedays+'days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1)
    // console.log(agedays);//show result in console

}
function reset(){
    document.getElementById('ageInDays').remove();
}