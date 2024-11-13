//Se cambiaron los nombres de las variables y funciones para una mejor legibilidad
//Se corrigió el estilo para que se muestre correctamente en la consola las líneas 14 y 15
//Se corrigió el operador ternario de la línea 23 y se incorporó correctamente el Scanner
//Se corrigieron los errores que impedían que funcionara adecuadamente el programa y ya se muestran correctamente los múltiplos resaltados.

import java.util.Scanner;

public class codigoOtros6 {
	  
	public static void main (String[] args) {
	    int [] number = new int [20];

	    for (int i = 0; i < 20; i++) {
	      number[i] = (int)(Math.random() * 381) + 20;
	      System.out.println(number[i] + " ");
	    }
	    
	    Scanner scanner = new Scanner (System.in);
	    System.out.println("\n¿Qué números quiere resaltar? "); 
	    System.out.println("1) los múltiplos de 5\n2) los múltiplos de 7");
	    int opcion = scanner.nextInt();

	    int multiplo = (opcion == 1) ? 5 : 7;

	    System.out.println("\nNúmeros resaltados: ");
	    
	    for (int num : number) {
	      if (num % multiplo == 0) {
	        System.out.println("[" + num + "] ");
	      } else {
	        System.out.println(num + " ");
	      }
	    }
	  scanner.close();
	};
};
