
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function xx2()
{
  var clone=document.getElementById("aa2").cloneNode(true);
  var foo = document.getElementById("educont");
  clone.style.display='block';
  foo.appendChild(clone);
}

function xx3()
{
  var clone=document.getElementById("aa3").cloneNode(true);
  var foo = document.getElementById("skillcont");
  clone.style.display='flex';
  foo.appendChild(clone);
}

function xx4()
{
  var clone=document.getElementById("aa4").cloneNode(true);
  var foo = document.getElementById("procont");
  clone.style.display='block';
  foo.appendChild(clone);
}

function xx5()
{
  var clone=document.getElementById("aa5").cloneNode(true);
  var foo = document.getElementById("expcont");
  clone.style.display='block';
  foo.appendChild(clone);
}

function xx6()
{
  var clone=document.getElementById("aa6").cloneNode(true);
  var foo = document.getElementById("achcont");
  clone.style.display='flex';
  foo.appendChild(clone);
}

function checkboxfn(){
  var sel1=event.target.parentElement.parentElement.children[0].children[1].children[0];
  var sel2=event.target.parentElement.parentElement.children[0].children[2].children[0];
  var check=event.target;
  if(check.checked){
    sel1.disabled=true;
    sel2.disabled=true;
    sel1.style.opacity=0.5;
    sel2.style.opacity=0.5;
  }
	else{
    sel1.disabled=false;
    sel2.disabled=false;
    sel1.style.opacity=1;
    sel2.style.opacity=1;
	}
}

function othdeg(){
  var e = event.target;
  var s1 = e.options[e.selectedIndex].value;
  var s2 = e.parentElement.parentElement.parentElement.children[1];
  if(s1=="Other")
  {
    s2.style.display='flex';
  }
  else
  {
    s2.style.display='none';
	}
}

function yearr()
{
  var a56=document.getElementsByClassName('a56')[0];
  var a58=document.getElementsByClassName('a58')[0];
  var a28=document.getElementsByClassName('a28')[0];
  var a210=document.getElementsByClassName('a210')[0];

  var currentTime = new Date()
  var year = currentTime.getFullYear();
  for(var i=year;i>=1950;i--)
  {
    var opt1 = document.createElement('option');
    opt1.appendChild( document.createTextNode(i) );
    opt1.value = i; 
    var opt2 = document.createElement('option');
    opt2.appendChild( document.createTextNode(i) );
    opt2.value = i; 
    var opt3 = document.createElement('option');
    opt3.appendChild( document.createTextNode(i) );
    opt3.value = i; 
    var opt4 = document.createElement('option');
    opt4.appendChild( document.createTextNode(i) );
    opt4.value = i; 
    a56.appendChild(opt1);
    a58.appendChild(opt2);
    a28.appendChild(opt3);
    a210.appendChild(opt4);
  }
}
yearr();

function fn()
{
  var ax1=document.getElementById('name').value;
  var ax2=document.getElementById('email').value;
  var ax3=document.getElementById('phone').value;
  var ax4=document.getElementById('address').value;
  var ax5=document.getElementById('city').value;
  var ax6=document.getElementById('state').value;
  var ax7=document.getElementById('pin').value;
  var ax8=document.getElementById('obj').value;
  
  var ax9=ax4;
  if(ax9!="")
  {
    ax9=ax9+', '+ax5;
  }
  else
  {
    ax9=ax5;
  }
  if(ax9!="")
  {
    ax9=ax9+', '+ax6;
  }
  else
  {
    ax9=ax6;
  }
  if(ax9!="")
  {
    ax9=ax9+', '+ax7;
  }
  else
  {
    ax9=ax7;
  }

  var ay1=[ax1,ax2,ax3,ax9,ax8];

  var a61=document.getElementsByClassName('a61');
  var ay6=[];
  for(var i=1;i<a61.length;i++)
  {
    var z=a61[i].value;
    if(z!="")
      ay6.push(z);
  }

  var a41=document.getElementsByClassName('a41');
  var a42=document.getElementsByClassName('a42');
  var ay4=[];
  for(var i=1;i<a41.length;i++)
  {
    var z1=a41[i].value, z2=a42[i].value;
    if(z1!=""||z2!="")
    {
      var z=[z1,z2];
      ay4.push(z);
    }
  }

  var a31=document.getElementsByClassName('a31');
  var a32=document.getElementsByClassName('a32');
  var ay3=[];
  for(var i=1;i<a31.length;i++)
  {
    var z1=a31[i].value, z2=a32[i].value;
    if(z1!="")
    {
      var z=[z1,z2];
      ay3.push(z);
    }
  }

  var a21=document.getElementsByClassName('a21');
  var a22=document.getElementsByClassName('a22');
  var a23=document.getElementsByClassName('a23');
  var a24=document.getElementsByClassName('a24');
  var a25=document.getElementsByClassName('a25');
  var a26=document.getElementsByClassName('a26');
  var a27=document.getElementsByClassName('a27');
  var a28=document.getElementsByClassName('a28');
  var a29=document.getElementsByClassName('a29');
  var a210=document.getElementsByClassName('a210');
  var a211=document.getElementsByClassName('a211');
  var a212=document.getElementsByClassName('a212');
  var a220=document.getElementsByClassName('a220');
  var ay2=[];
  
  for(var i=1;i<a21.length;i++)
  {
    var b21=a21[i].value;
    var b22=a22[i].value;
    var b23=a23[i].value;
    var b24=a24[i].value;
    var b25=a25[i].value;
    var b26=a26[i].value;
    var b27=a27[i].value;
    var b28=a28[i].value;
    var b29=a29[i].value;
    var b210=a210[i].value;
    var b211=a211[i].checked;
    var b212=a212[i].value;
    var b220=a220[i].value;
  
    var b213=b21;
    if(b213!=""&&b22!="")
    {
      b213+=', '+b22;
    }
    if(b213!=""&&b23!="")
    {
      b213+=', '+b23;
    }
    
    var b214="";
    if(b24=="Other")
    {
      b214=b25;
    }
    else
    {
      b214=b24;
    }
    var b215="";
    b215+=b27;
    if(!(b27==""||b28==""))
    {
      b215+=" ";
    }
    b215+=b28;
    var b216="";
    if(b211)
    {
      b216='present';
    }
    else
    {
      b216+=b29;
      if(!(b29==""||b210==""))
      {
        b216+=" ";
      }
      b216+=b210;
    }
    if(b215!=""&&b216!="")
    {
      b215+=" - "+b216;
    }
    else
    {
      b215+=b216;
    }

    if(b212!="")
    {
      b212+=b220;
    }

    if(b21!=""||b214!=""||b26!="")
    {
      ay2.push([b213,b214,b26,b215,b212]);
    }
  }
  // var axx4=document.getElementById('address');
  // axx4.value+=ay2.length;
  // for(var i=0;i<ay2.length;i++)
  // {
  //   axx4.value+=ay2[i][0]+ay2[i][1]+ay2[i][2]+ay2[i][3]+ay2[i][4]+ay2[i][5];
  // }
    
  var a51=document.getElementsByClassName('a51');
  var a52=document.getElementsByClassName('a52');
  var a53=document.getElementsByClassName('a53');
  var a54=document.getElementsByClassName('a54');
  var a55=document.getElementsByClassName('a55');
  var a56=document.getElementsByClassName('a56');
  var a57=document.getElementsByClassName('a57');
  var a58=document.getElementsByClassName('a58');
  var a59=document.getElementsByClassName('a59');
  var a510=document.getElementsByClassName('a510');
  
  var ay5=[];

  for(var i=1;i<a51.length;i++)
  {
    var b51=a51[i].value;
    var b52=a52[i].value;
    var b53=a53[i].value;
    var b54=a54[i].value;
    var b55=a55[i].value;
    var b56=a56[i].value;
    var b57=a57[i].value;
    var b58=a58[i].value;
    var b59=a59[i].checked;
    var b510=a510[i].value;
    
    var b513=b51;
    if(b513!=""&&b53!="")
    {
      b513+=', '+b53;
    }
    if(b513!=""&&b54!="")
    {
      b513+=', '+b54;
    }

    var b515="";
    b515+=b55;
    if(!(b55==""||b56==""))
    {
      b515+=" ";
    }
    b515+=b56;
    var b516="";
    if(b59)
    {
      b516='present';
    }
    else
    {
      b516+=b57;
      if(!(b57==""||b58==""))
      {
        b516+=" ";
      }
      b516+=b58;
    }
    if(b515!=""&&b516!="")
    {
      b515+=" - "+b516;
    }
    else
    {
      b515+=b516;
    }

    if(b51!=""||b52!=""||b510!="")
    {
      ay5.push([b52,b513,b515,b510]);
    }
  }
  // var axx4=document.getElementById('address');
  // axx4.value+=ay5.length;
  // for(var i=0;i<ay5.length;i++)
  // {
  //   axx4.value+=ay5[i][0]+ay5[i][1]+ay5[i][2]+ay5[i][3]+ay5[i][4];
  // }

  var cont = document.getElementById('content');
  cont.innerHTML = "";

  // ay1[0]='Akshat Goel'
  // ay1[1]='gakshat1999@gmail.com'
  // ay1[2]='9990434115'
  // ay1[3]='gzb';
  // ay1[4]='Zeal to work in a real professional atmosphere, contribute to achieve organizational goals as well as my personal goals using my technical skills with hard and sincere work and to succeed in an environment of growth and excellence.';

  var node=null;
  var textnode=null;

  node = document.createElement("b");
  textnode = document.createTextNode(ay1[0]);
  node.appendChild(textnode);
  node.style.fontSize = "xx-large";
  cont.appendChild(node);
  node=null;
  textnode=null;

  node = document.createElement("div");
  textnode = document.createTextNode(ay1[1]);
  node.appendChild(textnode);
  node.style.fontSize = "small";
  cont.appendChild(node);
  node=null;
  textnode=null;

  node = document.createElement("div");
  textnode = document.createTextNode(ay1[2]);
  node.appendChild(textnode);
  node.style.fontSize = "small";
  cont.appendChild(node);
  node=null;
  textnode=null;

  node = document.createElement("div");
  textnode = document.createTextNode(ay1[3]);
  node.appendChild(textnode);
  node.style.fontSize = "small";
  cont.appendChild(node);
  node=null;
  textnode=null;
  
  var hhr = document.createElement('h2');
  cont.appendChild(hhr)

  if(ay1[4]!="")
  {
    node = document.createElement("div");
    textnode = document.createTextNode('Objective');
    node.appendChild(textnode);
    node.style.fontSize = "x-large";
    node.style.color = "blue";
    cont.appendChild(node);
    node=null;
    textnode=null;
    node = document.createElement("div");
    textnode = document.createTextNode(ay1[4]);
    node.appendChild(textnode);
    node.style.fontSize = "medium";
    node.style.color = "black";
    cont.appendChild(node);
    node=null;
    textnode=null;
    var hhr = document.createElement('br');
    cont.appendChild(hhr)
    var hhr = document.createElement('br');
    cont.appendChild(hhr)
  }
  //ay5.push([b52,b513,b515,b510]);
  //ay2.push([b213,b214,b26,b215,b212]);
  if(ay2.length!=0)
  {
    node = document.createElement("div");
    textnode = document.createTextNode('Education');
    node.appendChild(textnode);
    node.style.fontSize = "x-large";
    node.style.color = "blue";
    cont.appendChild(node);
    node=null;
    textnode=null;
    var ull = document.createElement("ul");
    for(var i=0;i<ay2.length;i++)
    {
      node = document.createElement("li");
      var dd1 = document.createElement("div");
      var dd2 = document.createElement("div");
      var dd3 = document.createElement("div");
      
      var bn = document.createElement("b");
      var tt="";
      tt+=ay2[i][1]+" ";
      if(tt!=""&&ay2[i][2]!="")
      {
        tt+="("+ay2[i][2]+") ";
      }
      
      var ttt="";
      ttt+=ay2[i][0]+" ";
      if(ay2[i][3]!="")
      {
        ttt+='|'+ay2[i][3]+'| ';
      }

      // if(ttt!=""&&ay2[i][4]!="")
      // {
      //   ttt+='- ';
      // }
      var tttt="";
      if(ay2[i][4]!="")
      {
        tttt+="Grade- "+ay2[i][4];
      }
      // if(tt!=""&&ttt!="")
      // {
      //   tt+='- ';
      // }

      var bt = document.createTextNode(tt);
      bn.appendChild(bt);
      dd1.appendChild(bn);
      node.appendChild(dd1);
      
      var tx1 = document.createTextNode(ttt);
      var tx2 = document.createTextNode(tttt);
      dd2.appendChild(tx1);
      dd3.appendChild(tx2);
      node.appendChild(dd2);
      node.appendChild(dd3);
      
      node.style.fontSize = "medium";
      node.style.color = "black";
      ull.appendChild(node);
      node=null;
      textnode=null;
    }
    cont.appendChild(ull);
  }

  if(ay3.length!=0)
  {
    node = document.createElement("div");
    textnode = document.createTextNode('Skills');
    node.appendChild(textnode);
    node.style.fontSize = "x-large";
    node.style.color = "blue";
    cont.appendChild(node);
    node=null;
    textnode=null;
    var ull = document.createElement("ul");
    for(var i=0;i<ay3.length;i++)
    {
      node = document.createElement("li");
      var tt = ay3[i][1]+' in '+ay3[i][0];
      textnode = document.createTextNode(tt);
      node.appendChild(textnode);
      node.style.fontSize = "medium";
      node.style.color = "black";
      ull.appendChild(node);
      node=null;
      textnode=null;
    }
    cont.appendChild(ull);
  }

  if(ay4.length!=0)
  {
    node = document.createElement("div");
    textnode = document.createTextNode('Projects');
    node.appendChild(textnode);
    node.style.fontSize = "x-large";
    node.style.color = "blue";
    cont.appendChild(node);
    node=null;
    textnode=null;
    var ull = document.createElement("ul");
    for(var i=0;i<ay4.length;i++)
    {
      node = document.createElement("li");
      if(ay4[i][0]!="")
      {
        var bn = document.createElement("b");
        var ttt=ay4[i][0];
        if(ttt!=""&&ay4[i][1]!="")
        {
          ttt+='- ';
        }
        var bt = document.createTextNode(ttt);
        bn.appendChild(bt);
        node.appendChild(bn);
      }
      textnode = document.createTextNode(ay4[i][1]);
      node.appendChild(textnode);

      node.style.fontSize = "medium";
      node.style.color = "black";
      ull.appendChild(node);
      node=null;
      textnode=null;
    }
    cont.appendChild(ull);
  }

  if(ay5.length!=0)
  {
    node = document.createElement("div");
    textnode = document.createTextNode('Trainings, Internships and Work Experience');
    node.appendChild(textnode);
    node.style.fontSize = "x-large";
    node.style.color = "blue";
    cont.appendChild(node);
    node=null;
    textnode=null;
    var ull = document.createElement("ul");
    for(var i=0;i<ay5.length;i++)
    {
      node = document.createElement("li");
      var dd = document.createElement("div");
      var bn = document.createElement("b");
      var tt="";
      tt+=ay5[i][0];
      if(tt!=""&&ay5[i][1]!="")
      {
        tt+=' - ';
      }
      tt+=ay5[i][1];
      if(ay5[i][2]!="")
      {
        tt+=' |'+ay5[i][2]+'|';
      }
      if(tt!=""&&ay5[i][3]!="")
      {
        tt+='- ';
      }
      var bt = document.createTextNode(tt);
      bn.appendChild(bt);
      dd.appendChild(bn);
      node.appendChild(dd);
      
      // var hhr = document.createElement('h2');
      // node.appendChild(hhr)

      var ddd = document.createElement("div");
      textnode = document.createTextNode(ay5[i][3]);
      ddd.appendChild(textnode)
      node.appendChild(ddd);
      node.style.fontSize = "medium";
      node.style.color = "black";
      ull.appendChild(node);
      node=null;
      textnode=null;
    }
    cont.appendChild(ull);
  }

  if(ay6.length!=0)
  {
    node = document.createElement("div");
    textnode = document.createTextNode('Achievements');
    node.appendChild(textnode);
    node.style.fontSize = "x-large";
    node.style.color = "blue";
    cont.appendChild(node);
    node=null;
    textnode=null;
    var ull = document.createElement("ul");
    for(var i=0;i<ay6.length;i++)
    {
      node = document.createElement("li");
      textnode = document.createTextNode(ay6[i]);
      node.appendChild(textnode);
      node.style.fontSize = "medium";
      node.style.color = "black";
      ull.appendChild(node);
      node=null;
      textnode=null;
    }
    cont.appendChild(ull);
  }

  geneh();
}

function geneh()
{
  var doc = new jsPDF();
  var elementHandler = {
  '#ignorePDF': function (element, renderer) {
  return true;
  }};
  var source = window.document.getElementById("content");
  doc.fromHTML(
  source,
  15,
  15,
  {
  'width': 180,'elementHandlers': elementHandler
  });
  // doc.save('resume.pdf')
  doc.output("dataurlnewwindow")
}

xx2();
xx3();
xx4();
xx5();
xx6();