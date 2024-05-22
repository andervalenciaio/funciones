
//1

const calcularIMC = (peso, altura) => {
    const imc = peso / (altura * altura);
    let clasificacion = "";
    if (imc < 18.5) {
     clasificacion = "Bajo peso";
    } else if (imc < 25) {
     clasificacion = "Normal"
    } else if (imc < 30) {
     clasificacion = "Sobrepeso"
    } else {
     clasificacion = "Obesidad"
    }
    return { imc, clasificacion };
    };
   
    
    console.log(calcularIMC(56,1.70))


    //2
    const generarContraseña = (longitud) => {
        const caracteres = 
       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        let password = "";
        for (let i = 0; i < longitud; i++) {
        password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return password;
       };
 
       console.log(generarContraseña(5))


    //3
    const contarPalabras = (texto) => texto.split(/\s+/).filter(palabra => palabra !== 
        "").length;
         // 4. Buscador de elementos en un array
         const buscarElemento = (array, elemento) => {
         return array.includes(elemento)
         }
         console.log(buscarElemento([1, 5, 8, 12, 20], 5));
         // 5. Conversor de temperatura
         const celsiusAFahrenheit = (celsius) => {
         return (celsius * 9/5) + 32
         }
         console.log(celsiusAFahrenheit(20));
         const fahrenheitACelsius = (fahrenheit) => {
         return (fahrenheit - 32) * 5/9
         }
         console.log(fahrenheitACelsius(20));