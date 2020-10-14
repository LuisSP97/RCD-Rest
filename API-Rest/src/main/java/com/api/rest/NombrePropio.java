package com.api.rest;

public class NombrePropio {
	
	//Variables
	String nombres;
	String apPaterno;
	String apMaterno;
	String genero;
	String nombrePropio;

	//Getters and Setters
	public String getNombrePropio() {
		return nombrePropio;
	}

	public void setNombrePropio(String nombrePropio) {
		this.nombrePropio = nombrePropio;
	}
	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApPaterno() {
		return apPaterno;
	}

	public void setApPaterno(String apPaterno) {
		this.apPaterno = apPaterno;
	}

	public String getApMaterno() {
		return apMaterno;
	}

	public void setApMaterno(String apMaterno) {
		this.apMaterno = apMaterno;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}
	
	//Constructor
	public NombrePropio(String nombres, String apPaterno, String apMaterno, String genero, String nombrePropio) {
		super();
		this.nombres = nombres;
		this.apPaterno = apPaterno;
		this.apMaterno = apMaterno;
		this.genero = genero;
		this.nombrePropio = nombrePropio;
	}

	//Functions
	public static String nombrePropio(String nombres, String apPaterno, String apMaterno, String genero){
		String resultado = null;
		String mayuscula;
				
		nombres = nombres.toLowerCase();
		
		for(int i=0; i<nombres.length();i++){
			if(i==0 || nombres.charAt(i-1) ==' '){
				mayuscula = String.valueOf(nombres.charAt(i));
				mayuscula = mayuscula.toUpperCase();
				nombres = nombres.replaceFirst(String.valueOf(nombres.charAt(i)), mayuscula);				
			}
		}
		apPaterno = apPaterno.toLowerCase();
		apMaterno = apMaterno.toLowerCase();
		mayuscula = String.valueOf(apPaterno.charAt(0));
		mayuscula = mayuscula.toUpperCase();
		apPaterno = apPaterno.replaceFirst(String.valueOf(apPaterno.charAt(0)), mayuscula);
		mayuscula = String.valueOf(apMaterno.charAt(0));
		mayuscula = mayuscula.toUpperCase();
		apMaterno = apMaterno.replaceFirst(String.valueOf(apMaterno.charAt(0)), mayuscula);
		if (genero.equals("M") || genero.equals("m")){
			resultado="Sr. ";
		}
		else if (genero.equals("F") || genero.equals("f")){
			resultado="Sra. ";
		} else{
			resultado="?. ";
		}
		resultado+=nombres;
		resultado+=" ";
		resultado+=apPaterno;
		resultado+=" ";
		resultado+=apMaterno;
		return resultado;
	}
}
