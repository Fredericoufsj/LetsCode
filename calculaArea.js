class Quadrado {
    constructor(base, altura) {
        // IsNaN = não é um número, e throw exibirá um amensagem de erro.
        if (isNaN(base) || isNaN(altura)) { throw "informação não numérica" }
        this.base = base;
        this.altura = altura;
        // Atributo não essencial
        this.cor = undefined
    }
    calculaArea() {
        return this.base * this.altura;
    }
    duplicaBase() {
            this.base = 2 * this.base
        }
        // imprimir(){return ` <div style='width:${this.base}px; height:${this.altura}px;background-color:${this.cor || "blue"}'></div>`}
}
const quadrado1 = new Quadrado(11, 12);
quadrado1.duplicaBase();
console.log(quadrado1.calculaArea());