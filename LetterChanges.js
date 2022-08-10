//Girilen stringin her bir harfini bir sonraki harfe dönüştüren Javascript Programı
var A_code="A".charCodeAt(0);
var Z_code="Z".charCodeAt(0);
var a_code="a".charCodeAt(0);
var z_code="z".charCodeAt(0);

function LetterChanges(str){

    var output="";

    for(var i=0; i<str.lenght; i++)
    {
      code=str.charCodeAt(i);  // charCodeAt() unicode değerini döndürür

      if(code>= A_code && code<= Z_code)
      {
        code= A_code + (code- A_code +1) %26 // english letter 
      }

      else if( code>=a_code && code<=z_code)
      {
        code= a_code + (code- a_code +1) %26
      }

      var char=String.fromCharCode(code); //fromCharCode() unicode değerlerinden bir string oluşturur.

      if(char=="a" || char=="e" || char=="i"|| char=="o"|| char=="u")
         char=char.toUpperCase();

      output+= char;
    }
    
    return output;
}
LetterChanges("")