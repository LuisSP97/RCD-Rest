package com.api.rest;

public class ValidadorRut {
	
	//Variables
	private String rut;
	private boolean valido;
	
	
	//Getters and Setters
	public String getRut() {
		return rut;
	}
	public void setRut(String rut) {
		this.rut = rut;
	}
	public boolean isValido() {
		return valido;
	}
	public void setValido(boolean valido) {
		this.valido = valido;
	}
	
	//Constructors
	public ValidadorRut(String rut, boolean valido) {
		super();
		this.rut = rut;
		this.valido = valido;
	}
	
	public static boolean validarRut(String rut, boolean valido) {
	    try {
	        rut =  rut.toUpperCase();
	        rut = rut.replace(".", "");
	        rut = rut.replace("-", "");
	        int rutAux = Integer.parseInt(rut.substring(0, rut.length() - 1));
	        char dv = rut.charAt(rut.length() - 1);
	        int m = 0, s = 1;
	        for (; rutAux != 0; rutAux /= 10) {
	            s = (s + rutAux % 10 * (9 - m++ % 6)) % 11;
	        }
	        if (dv == (char) (s != 0 ? s + 47 : 75)) {
	            valido = true;
	        }
	    } catch (java.lang.NumberFormatException e) {
	    } catch (Exception e) {
	    }
	    return valido;
	}
}
