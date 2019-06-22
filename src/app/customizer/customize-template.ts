export class CustomizeTemplate {
    private pizzaTemplate;
    private toppingsTemplate;

    constructor() {
        this.createTemplates();
    }

    private createTemplates() {
        this.createPizzaTemplate();
        this.createToppingsTemplate();
    }

    private createPizzaTemplate() {
        this.pizzaTemplate = [
            {
                name: 'base',
                img: 'base.png',
                price: 0,
                checked: true
            },
            {
                name: 'anchovies-full',
                img: 'anchioves-full.png',
                price: 1.99,
                checked: true
            },
            {
                name: 'bacon-full',
                img: 'bacon-full.png',
                price: 1.99,
                checked: true
            },
            {
                name: 'artichokes-full',
                img: 'artichokes-full.png',
                price: 1.99,
                checked: true
            }, {
                name: 'artichokes-left',
                img: 'artichokes-left.png',
                price: 0.99,
                checked: true
            }, {
                name: 'artichokes-right',
                img: 'artichokes-right.png',
                price: 1.99,
                checked: true
            }, {
                name: 'brocolli-full',
                img: 'brocolli-full.png',
                price: 1.99,
                checked: true
            },
        ]
    }

    private createToppingsTemplate() {
        this.toppingsTemplate = [
            {
                title: 'Anchovies',
                img: 'ezgif-1-b5c1c929453a.png',
                name: 'anchovies',
                choice: 'none',  
                selections: [
                    { selection: 'none'},
                    { selection: 'full'},                    
                    { selection: 'left'},
                    { selection: 'right'}
                ],
                double: false
            },
            {
                title: 'Artichokes',
                img: 'anchioves-2.png',
                name: 'artichokes',
                choice: 'none',  
                selections: [
                    { selection: 'none'},
                    { selection: 'full'},
                    { selection: 'left'},
                    { selection: 'right'},
                ]
           }
        ]
    }
}
