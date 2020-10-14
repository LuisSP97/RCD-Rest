package com.api.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ValidadorRutController {
	
	@GetMapping("/validar")
	public ValidadorRut validador(@RequestParam(value = "rut") String rut) {
		boolean valido = false;
		valido = ValidadorRut.validarRut(rut, valido);
		return new ValidadorRut(rut, valido);
	}
}
