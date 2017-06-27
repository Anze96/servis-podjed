function validator() {
    var ime = document.forms["form"]["ime"].value;
	var email = document.forms["form"]["email"].value;
	var sporocilo = document.forms["form"]["sporocilo"].value;
	
	var stanjeZaMargin = true;
	var stanje = true;
    
	
	
	
	
	if (ime == "" || ime == null) 
	{
		document.getElementById("ime").style.borderColor = "red";
		document.getElementById("ime").style.background = "url(Images/Kontakt/klicaj.png) no-repeat 98%";
		document.getElementById("ime").style.backgroundSize = "20px"; 
		
		//funkciji za obarvanje obrob za BLUR in FOCUS stanje
		document.getElementById("ime").addEventListener("blur", changeBorderColorBlur);
		function changeBorderColorBlur() 
		{
			document.getElementById("ime").style.borderColor = "red";
		}
		
		document.getElementById("ime").addEventListener("focus", changeBorderColorFocus);
		function changeBorderColorFocus() 
		{
			document.getElementById("ime").style.borderColor = "red";
		}
				
		stanje = false;
    }
	
	else 
	{
		document.getElementById("izpis1").innerHTML = "";
		document.getElementById("ime").style.borderColor = "#bbbbbb"
		document.getElementById("ime").style.background = "";
		
		//funkciji za obarvanje obrob za BLUR in FOCUS stanje
		document.getElementById("ime").addEventListener("blur", changeBorderColorBlur);
		function changeBorderColorBlur() 
		{
			document.getElementById("ime").style.borderColor = "#bbbbbb";
		}
		
		document.getElementById("ime").addEventListener("focus", changeBorderColorFocus);
		function changeBorderColorFocus() 
		{
			document.getElementById("ime").style.borderColor = "#9cd45e";
		}		
	}

	
	
	
	
	if (email == "" || email == null) 
	{
		document.getElementById("email").style.borderColor = "red";
		document.getElementById("email").style.background = "url(Images/Kontakt/klicaj.png) no-repeat 98%";
		document.getElementById("email").style.backgroundSize = "20px";
		
		//funkciji za obarvanje obrob za BLUR in FOCUS stanje
		document.getElementById("email").addEventListener("blur", changeBorderColorBlur);
		function changeBorderColorBlur() 
		{
			document.getElementById("email").style.borderColor = "red";
		}
		
		document.getElementById("email").addEventListener("focus", changeBorderColorFocus);
		function changeBorderColorFocus() 
		{
			document.getElementById("email").style.borderColor = "red";
		}
		
		stanje = false;
    }
	
	else if (email.indexOf("@") < 0) 
	{
		document.getElementById("izpis2").innerHTML = "Vnesite pravilni elektronski naslov.";
		document.getElementById("izpis2").style.color = "red";
		document.getElementById("email").style.borderColor = "red";
		document.getElementById("email").style.background = "url(Images/Kontakt/klicaj.png) no-repeat 98%";
		document.getElementById("email").style.backgroundSize = "20px";
		
		//funkciji za obarvanje obrob za BLUR in FOCUS stanje
		document.getElementById("email").addEventListener("blur", changeBorderColorBlur);
		function changeBorderColorBlur() 
		{
			document.getElementById("email").style.borderColor = "red";
		}
		
		document.getElementById("email").addEventListener("focus", changeBorderColorFocus);
		function changeBorderColorFocus() 
		{
			document.getElementById("email").style.borderColor = "red";
		}
		
		stanjeZaMargin = false;
		stanje = false;
	}
	
	else 
	{
		document.getElementById("izpis2").innerHTML = "";
		document.getElementById("email").style.borderColor = "#bbbbbb"
		document.getElementById("email").style.background = "";
		
		//funkciji za obarvanje obrob za BLUR in FOCUS stanje
		document.getElementById("email").addEventListener("blur", changeBorderColorBlur);
		function changeBorderColorBlur() 
		{
			document.getElementById("email").style.borderColor = "#bbbbbb";
		}
		
		document.getElementById("email").addEventListener("focus", changeBorderColorFocus);
		function changeBorderColorFocus() 
		{
			document.getElementById("email").style.borderColor = "#9cd45e";
		}
	}

	
	
	
	
	if (sporocilo == "" || sporocilo == null) 
	{
		document.getElementById("sporocilo").style.borderColor = "red";
		document.getElementById("sporocilo").style.background = "url(Images/Kontakt/klicaj.png) no-repeat 98%";
		document.getElementById("sporocilo").style.backgroundSize = "20px";
		
		//funkciji za obarvanje obrob za BLUR in FOCUS stanje
		document.getElementById("sporocilo").addEventListener("blur", changeBorderColorBlur);
		function changeBorderColorBlur() 
		{
			document.getElementById("sporocilo").style.borderColor = "red";
		}
		
		document.getElementById("sporocilo").addEventListener("focus", changeBorderColorFocus);
		function changeBorderColorFocus() 
		{
			document.getElementById("sporocilo").style.borderColor = "red";
		}
		
		stanje = false;
    }
	
	else 
	{
		document.getElementById("izpis4").innerHTML = "";
		document.getElementById("sporocilo").style.borderColor = "#bbbbbb"
		document.getElementById("sporocilo").style.background = "";
		
		//funkciji za obarvanje obrob za BLUR in FOCUS stanje
		document.getElementById("sporocilo").addEventListener("blur", changeBorderColorBlur);
		function changeBorderColorBlur() 
		{
			document.getElementById("sporocilo").style.borderColor = "#bbbbbb";
		}
		
		document.getElementById("sporocilo").addEventListener("focus", changeBorderColorFocus);
		function changeBorderColorFocus() 
		{
			document.getElementById("sporocilo").style.borderColor = "#9cd45e";
		}
	}
	
	
	
	
	
	if (stanjeZaMargin == false)
	{
		document.getElementById("container").style.marginBottom = "72px";		
	}
	
	
	if (stanje == false) 
	{
		return stanje;
	}
}