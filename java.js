
    function mymenufunction() {
        var  i = document.getElementById("navmenu");
          if(i.classname==="nav-menu"){
            i.classname += " responsive";
          }else{
            i.classname="nav-menu";
          }
    }

     
            var a=document.getElementsByIdName("login-btn");
            var b=document.getElementsByIdName("register-btn");
            var x=document.getElementsByIdName("login");
            var y=document.getElementsByIdName("register");


        function login() {
            x.style.left ="4px";
            y.style.right="-520px"
            a.classname += "white-btn";
            b.classname="btn";
            x.style.opacity = 1;
            y.style.opacity= 0;

        }
        function register() {
            x.style.left="-510px";
            y.style.right="5px";
            a.classname= "btn";
            b.classname+="white-btn";
            x.style.opacity =0;
            y.style.opacity=1;
         }
         
        