function CreatesCalc() {

    this.inputCalc = document.querySelector('.input-calc');

    this.inicia = () => {
        this.clicksOfButton();
        this.keyListener();
    };

    this.keyListener = () => {
        this.inputCalc.addEventListener('keypress', (event) => {

            if (event.keyCode === 13) {
                this.realizesOperation();
                this.inputCalc.focus();
            }
        })
    };

    this.btnToInput = (val) => {
        this.inputCalc.value += val;
        this.inputCalc.focus();
    }

    this.clearsInput = () => this.inputCalc.value = '';

    this.deleteC = () => this.inputCalc.value = this.inputCalc.value.slice(0, -1);



    this.realizesOperation = () => {
        let operation = this.inputCalc.value;
        /*Expressão que verifica  se a entrada é apenas nums ou caracteres */
        const regex = /^[0-9+\-*/.]+$/;

        try {
            //Testando se a entrada é apenas num e caracts.
            if (!regex.test(operation)) {
                alert('Conta inválida!');
                return;
            }
            operation = eval(operation);
            this.inputCalc.value = operation;
        } catch (error) {
            alert('Conta inválida');
            return;
        }
    };

    this.clicksOfButton = () => {
        document.addEventListener('click', (event) => {
            const elemnt = event.target;
            if (elemnt.classList.contains('btn-num')) this.btnToInput(elemnt.innerText);

            if (elemnt.classList.contains('btn-clear')) this.clearsInput();

            if (elemnt.classList.contains('btn-delete')) this.deleteC();

            if (elemnt.classList.contains('btn-equal')) this.realizesOperation();

            this.inputCalc.focus();
        });
    };

};

const inputCalc = document.querySelector('.input-calc');

const calc = new CreatesCalc();
calc.inicia(); 