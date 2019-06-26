export class CustomizeTemplate {
    private pizzaTemplate;
    public toppingsTemplate;

    constructor() {
        this.createTemplates();
    }

    private createTemplates() {
        this.createToppingsTemplate();
    }

    private createToppingsTemplate() {
        this.toppingsTemplate = [
            {
                title: 'Anchovies',
                img: 'ezgif-1-b5c1c929453a.png',
                name: 'anchovies',
                choice: 'none',  
                selections: [
                    {name: 'anchovies', selection: 'none', price: 0, img: ''},
                    {name: 'anchovies', selection: 'both', price: 2.00,  img: 'anchovies-full.png'},                    
                    {name: 'anchovies', selection: 'left', price: 2.00,  img: 'anchovies-left.png'},
                    {name: 'anchovies', selection: 'right', price: 2.00,  img: 'anchovies-right.png'}
                ],
                double: false
            },
            {
                title: 'Artichokes',
                img: 'artichokes-2.png',
                name: 'artichokes',
                choice: 'none',  
                selections: [
                    {name: 'artichokes', selection: 'none', price: 0, img: ''},
                    {name: 'artichokes', selection: 'both', price: 2.00,  img: 'artichokes-full.png'},                    
                    {name: 'artichokes', selection: 'left', price: 2.00,  img: 'artichokes-left.png'},
                    {name: 'artichokes', selection: 'right', price: 2.00,  img: 'artichokes-right.png'}
                ],
                double: false
            },
            {
                title: 'Brocolli',
                img: 'brocolli.png',
                name: 'brocolli',
                choice: 'none', 
                selections: [
                    {name: 'brocolli', selection: 'none', price: 0, img: ''},
                    {name: 'brocolli', selection: 'both', price: 2.00,  img: 'brocolli-full.png'},                    
                    {name: 'brocolli', selection: 'left', price: 2.00,  img: 'brocolli-left.png'},
                    {name: 'brocolli', selection: 'right', price: 2.00,  img: 'brocolli-right.png'}
                ],
                double: false
            },
            {
                title: 'Bacon Crumbs',
                img: 'bacon-crumbs.png',
                name: 'bacon-crumbs',
                choice: 'none', 
                selections: [ 
                    {name: 'bacon-crumbs', selection: 'none', price: 0, img: ''},
                    {name: 'bacon-crumbs', selection: 'both', price: 2.00,  img: 'bacon-crumbs-full.png'},                    
                    {name: 'bacon-crumbs', selection: 'left', price: 2.00,  img: 'bacon-crumbs-left.png'},
                    {name: 'bacon-crumbs', selection: 'right', price: 2.00,  img: 'bacon-crumbs-right.png'}
                ],
                double: false
            },
            {
                title: 'Beacon Strips',
                img: 'bacon-strips.png',
                name: 'bacon-strips',
                choice: 'none', 
                selections: [
                    {name: 'bacon-strips', selection: 'none', price: 0, img: ''},
                    {name: 'bacon-strips', selection: 'both', price: 2.00,  img: 'bacon-strips-full.png'},                    
                    {name: 'bacon-strips', selection: 'left', price: 2.00,  img: 'bacon-strips-left.png'},
                    {name: 'bacon-strips', selection: 'right', price: 2.00,  img: 'bacon-strips-right.png'}
                ],
                double: false
            },            
            {
                title: 'Bruschetta',
                img: 'bruschetta.png',
                name: 'bruschetta',
                choice: 'none', 
                selections: [
                    {name: 'bruschetta', selection: 'none', price: 0, img: ''},
                    {name: 'bruschetta', selection: 'both', price: 2.00,  img: 'bruschetta-full.png'},                    
                    {name: 'bruschetta', selection: 'left', price: 2.00,  img: 'bruschetta-left.png'},
                    {name: 'bruschetta', selection: 'right', price: 2.00,  img: 'bruschetta-right.png'}
                ],
                double: false
            },
            {
                title: 'Buffalo Chicken',
                img: 'buffalo-chicken.png',
                name: 'buffalo-chicken',
                choice: 'none', 
                selections: [
                    {name: 'buffalo-chicken', selection: 'none', price: 0, img: ''},
                    {name: 'buffalo-chicken', selection: 'both', price: 2.00,  img: 'buffalo-chicken-full.png'},                    
                    {name: 'buffalo-chicken', selection: 'left', price: 2.00,  img: 'buffalo-chicken-left.png'},
                    {name: 'buffalo-chicken', selection: 'right', price: 2.00,  img: 'buffalo-chicken-right.png'}
                ],
                double: false
            },
            {
                title: 'Caramelized Onions',
                img: 'caramelized-onions.png',
                name: 'caramelized-onions',
                choice: 'none', 
                selections: [
                    {name: 'caramelized-onions', selection: 'none', price: 0, img: ''},
                    {name: 'caramelized-onions', selection: 'both', price: 2.00,  img: 'caramelized-onions-full.png'},                    
                    {name: 'caramelized-onions', selection: 'left', price: 2.00,  img: 'caramelized-onions-left.png'},
                    {name: 'caramelized-onions', selection: 'right', price: 2.00,  img: 'caramelized-onions-right.png'}
                ],
                double: false
            },
            {
                title: 'Chicken',
                img: 'chicken-menu.png',
                name: 'chicken',
                choice: 'none', 
                selections: [
                    {name: 'chicken', selection: 'none', price: 0, img: ''},
                    {name: 'chicken', selection: 'both', price: 2.00,  img: 'chicken-full.png'},                    
                    {name: 'chicken', selection: 'left', price: 2.00,  img: 'chicken-left.png'},
                    {name: 'chicken', selection: 'right', price: 2.00,  img: 'chicken-right.png'}
                ],
                double: false
            },
            {
                title: 'Chipotle Chicken',
                img: 'chipotle-chicken-menu.png',
                name: 'chipotle-chicken',
                choice: 'none', 
                selections: [
                    {name: 'chipotle-chicken', selection: 'none', price: 0, img: ''},
                    {name: 'chipotle-chicken', selection: 'both', price: 2.00,  img: 'chipotle-chicken-full.png'},                    
                    {name: 'chipotle-chicken', selection: 'left', price: 2.00,  img: 'chipotle-chicken-left.png'},
                    {name: 'chipotle-chicken', selection: 'right', price: 2.00,  img: 'chipotle-chicken-right.png'}
                ],
                double: false
            },
            {
                title: 'Chipotle Steak',
                img: 'Chipotle-Steak-menu.png',
                name: 'chipotle-steak',
                choice: 'none', 
                selections: [
                    {name: 'chipotle-steak', selection: 'none', price: 0, img: ''},
                    {name: 'chipotle-steak', selection: 'both', price: 2.00,  img: 'chipotle-steak-full.png'},                    
                    {name: 'chipotle-steak', selection: 'left', price: 2.00,  img: 'chipotle-steak-left.png'},
                    {name: 'chipotle-steak', selection: 'right', price: 2.00,  img: 'chipotle-steak-right.png'}
                ],
                double: false
            },
            {
                title: 'Ciantro',
                img: 'ciantro.png',
                name: 'ciantro',
                choice: 'none', 
                selections: [
                    {name: 'ciantro', selection: 'none', price: 0, img: ''},
                    {name: 'ciantro', selection: 'both', price: 2.00,  img: 'ciantro-full.png'},                    
                    {name: 'ciantro', selection: 'left', price: 2.00,  img: 'ciantro-left.png'},
                    {name: 'ciantro', selection: 'right', price: 2.00,  img: 'ciantro-right.png'}
                ],
                double: false
            },
            {
                title: 'Fine Roasted Peppers',
                img: 'fine-roasted-peppers.png',
                name: 'fine-roasted-peppers',
                choice: 'none', 
                selections: [
                    {id: 7, name: 'fine-roasted-peppers', selection: 'none', price: 0, img: ''},  
                    {id: 7, name: 'fine-roasted-peppers', selection: 'both', price: 2.00,  img: 'fine-roasted-peppers-full.png'},                    
                    {id: 7, name: 'fine-roasted-peppers', selection: 'left', price: 2.00,  img: 'fine-roasted-peppers-left.png'},
                    {id: 7, name: 'fine-roasted-peppers', selection: 'right', price: 2.00,  img: 'fine-roasted-peppers-right.png'}
                ],
                double: false
            },
            {
                title: 'Ground Beef',
                img: 'ground-beef-menu.png',
                name: 'ground-beef',
                choice: 'none', 
                selections: [
                    {id: 7, name: 'ground-beef', selection: 'none', price: 0, img: ''},  
                    {id: 7, name: 'ground-beef', selection: 'both', price: 2.00,  img: 'ground-beef-full.png'},                    
                    {id: 7, name: 'ground-beef', selection: 'left', price: 2.00,  img: 'ground-beef-left.png'},
                    {id: 7, name: 'ground-beef', selection: 'right', price: 2.00,  img: 'ground-beef-right.png'}
                ],
                double: false
            },
            {
                title: 'Mozzarella Cheese',
                img: 'mozzarella-cheese.png',
                name: 'mozzarella-cheese',
                choice: 'none', 
                selections: [
                    {id: 7, name: 'mozzarella-cheese', selection: 'none', price: 0, img: ''},  
                    {id: 7, name: 'mozzarella-cheese', selection: 'both', price: 2.00,  img: 'mozzarella-cheese-full.png'},                    
                    {id: 7, name: 'mozzarella-cheese', selection: 'left', price: 2.00,  img: 'mozzarella-cheese-full.png'},
                    {id: 7, name: 'mozzarella-cheese', selection: 'right', price: 2.00,  img: 'mozzarella-cheese-full.png'}
                ],
                double: false
            },
            {
                title: 'Red Onions',
                img: 'red-onions.png',
                name: 'red-onions',
                choice: 'none', 
                selections: [
                    {id: 7, name: 'red-onions', selection: 'none', price: 0, img: ''},  
                    {id: 7, name: 'red-onions', selection: 'both', price: 2.00,  img: 'red-onions-full.png'},                    
                    {id: 7, name: 'red-onions', selection: 'left', price: 2.00,  img: 'red-onions-left.png'},
                    {id: 7, name: 'red-onions', selection: 'right', price: 2.00,  img: 'red-onions-right.png'}
                ],
                double: false
            },
            {
                title: 'Roasted Garlic',
                img: 'roasted-garlic.png',
                name: 'roasted-garlic',
                choice: 'none', 
                selections: [
                    {id: 7, name: 'roasted-garlic', selection: 'none', price: 0, img: ''},  
                    {id: 7, name: 'roasted-garlic', selection: 'both', price: 2.00,  img: 'roasted-garlic-full.png'},                    
                    {id: 7, name: 'roasted-garlic', selection: 'left', price: 2.00,  img: 'roasted-garlic-left.png'},
                    {id: 7, name: 'roasted-garlic', selection: 'right', price: 2.00,  img: 'roasted-garlic-right.png'}
                ],
                double: false
            },
        ]
    }

    public getTopping(name, location) {
        let template = this.toppingsTemplate.find(template => template.name == name );     
        template.choice = 'both';
        let topping = template.selections.find(topping => topping.selection == location );
        topping.title = template.title;
        return topping;
    }
}
