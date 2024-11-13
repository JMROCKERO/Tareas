//Se cambiaron los nombres de las variables y funciones para una mejor legibilidad (por ejemplo: number, luckyCount, unluckyCount)
//Se reescribió el código para que funcione adecuadamente.
//Se incorporó correctamente el Scanner
//Se arregló el error que hacía un bucle infinito si ponías números no afortunados
//Se corrigieron los errores que impedían que funcionara adecuadamente el programa y ya se muestran correctamente los números afortunados.


import java.util.Scanner;
public class CodigoOtros5 {
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
	    System.out.print("Introduzca un número: ");
	    String input = scanner.nextLine();
	    
	    try {
	    	int number = Integer.parseInt(input);
	    	
	    	if (isLucky(number)) {
	    		System.out.println("El " + number + " es un número afortunado.");
	    	} else {
	    		System.out.println("El " + number + " no es un número afortunado.");
	    	}
	    } catch (NumberFormatException exception) {
	    	System.out.println("Por favor, introduzca un número válido");
	    } finally {
	    	scanner.close();
	    }
	}
	
	public static boolean isLucky(int number) {
		int luckyCount = 0;
		int unluckyCount = 0;
		
		while (number > 0) {
			int digit = number % 10;
			
			if (digit == 3 || digit == 7 || digit == 8 || digit == 9) {
				luckyCount++;
			} else {
				unluckyCount++;
			}
			
			number /= 10;
		}
		
		return luckyCount > unluckyCount;
	}
}


