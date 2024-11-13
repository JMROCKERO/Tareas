package com.generation;

import java.util.Scanner;

public class Codigo4 {
	
	public static void main(String[] args) {
	Scanner s = new Scanner(System.in);
   
    System.out.println("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    String j1 = s.nextLine();
    
    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
    Scanner s2 = new Scanner(System.in);
    String j2 = s2.nextLine();
    //eliminar parentesis duplicado
    //Se agrega la funcion equals
    if (j1.equals(j2)) {
      System.out.println("Empate");
    } else {
      int g = 2;
      switch(j1) {
        case "piedra":
          if (j2.equals("tijeras") ) {
            g = 1;
          }
          break; // agregar break faltante

        case "papel":
          if (j2.equals("piedra")) {
            g = 1;
          }
          break; // agregar break faltante
        case "tijera":
          if (j2.equals("papel")) {
            g = 1;
          }// agregar llave faltante de caso tijera
          break;
        default:
        	System.out.println("Error entrada no reconocida");
        	return;
      }
      System.out.println("Gana el jugador " + g);
      
    }// fin del switch
      s.close();// Cerrar escaner
      
    }//Fin Main
}// Fin clase codigo4
  
