package com.api.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NombrePropioController {
	
	@GetMapping("/nombre")
	public NombrePropio formato(@RequestParam(value = "nombres") String nombres, @RequestParam(value = "apPaterno") String apPaterno, @RequestParam(value = "apMaterno") String apMaterno, @RequestParam(value="genero") String genero){
		String nombrePropio;
		nombrePropio = NombrePropio.nombrePropio(nombres, apPaterno, apMaterno, genero);
		return new NombrePropio(nombres, apPaterno, apMaterno, genero, nombrePropio);
	}
}
