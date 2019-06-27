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
                    {id: 1, name: 'anchovies', selection: 'none', price: 0, img: ''},
                    {id: 1, name: 'anchovies', selection: 'both', price: 2.00,  img: 'anchovies-full.png'},                    
                    {id: 1, name: 'anchovies', selection: 'left', price: 2.00,  img: 'anchovies-left.png'},
                    {id: 1, name: 'anchovies', selection: 'right', price: 2.00,  img: 'anchovies-right.png'}
                ],
                double: false
            },
            {
                title: 'Artichokes',
                img: 'artichokes-2.png',
                name: 'artichokes',
                choice: 'none',  
                selections: [
                    {id: 2, name: 'artichokes', selection: 'none', price: 0, img: ''},
                    {id: 2, name: 'artichokes', selection: 'both', price: 2.00,  img: 'artichokes-full.png'},                    
                    {id: 2, name: 'artichokes', selection: 'left', price: 2.00,  img: 'artichokes-left.png'},
                    {id: 2, name: 'artichokes', selection: 'right', price: 2.00,  img: 'artichokes-right.png'}
                ],
                double: false
            },
            {
                title: 'Brocolli',
                img: 'brocolli.png',
                name: 'brocolli',
                choice: 'none', 
                selections: [
                    {id: 3, name: 'brocolli', selection: 'none', price: 0, img: ''},
                    {id: 3, name: 'brocolli', selection: 'both', price: 2.00,  img: 'brocolli-full.png'},                    
                    {id: 3, name: 'brocolli', selection: 'left', price: 2.00,  img: 'brocolli-left.png'},
                    {id: 3, name: 'brocolli', selection: 'right', price: 2.00,  img: 'brocolli-right.png'}
                ],
                double: false
            },
            {
                title: 'Bacon Crumbs',
                img: 'bacon-crumbs.png',
                name: 'bacon-crumbs',
                choice: 'none', 
                selections: [ 
                    {id: 4, name: 'bacon-crumbs', selection: 'none', price: 0, img: ''},
                    {id: 4, name: 'bacon-crumbs', selection: 'both', price: 2.00,  img: 'bacon-crumbs-full.png'},                    
                    {id: 4, name: 'bacon-crumbs', selection: 'left', price: 2.00,  img: 'bacon-crumbs-left.png'},
                    {id: 4, name: 'bacon-crumbs', selection: 'right', price: 2.00,  img: 'bacon-crumbs-right.png'}
                ],
                double: false
            },
            {
                title: 'Beacon Strips',
                img: 'bacon-strips.png',
                name: 'bacon-strips',
                choice: 'none', 
                selections: [
                    {id: 5, name: 'bacon-strips', selection: 'none', price: 0, img: ''},
                    {id: 5, name: 'bacon-strips', selection: 'both', price: 2.00,  img: 'bacon-strips-full.png'},                    
                    {id: 5, name: 'bacon-strips', selection: 'left', price: 2.00,  img: 'bacon-strips-left.png'},
                    {id: 5, name: 'bacon-strips', selection: 'right', price: 2.00,  img: 'bacon-strips-right.png'}
                ],
                double: false
            },            
            {
                title: 'Bruschetta',
                img: 'bruschetta.png',
                name: 'bruschetta',
                choice: 'none', 
                selections: [
                    {id: 6, name: 'bruschetta', selection: 'none', price: 0, img: ''},
                    {id: 6, name: 'bruschetta', selection: 'both', price: 2.00,  img: 'bruschetta-full.png'},                    
                    {id: 6, name: 'bruschetta', selection: 'left', price: 2.00,  img: 'bruschetta-left.png'},
                    {id: 6, name: 'bruschetta', selection: 'right', price: 2.00,  img: 'bruschetta-right.png'}
                ],
                double: false
            },
            {
                title: 'Buffalo Chicken',
                img: 'buffalo-chicken.png',
                name: 'buffalo-chicken',
                choice: 'none', 
                selections: [
                    {id: 7, name: 'buffalo-chicken', selection: 'none', price: 0, img: ''},
                    {id: 7, name: 'buffalo-chicken', selection: 'both', price: 2.00,  img: 'buffalo-chicken-full.png'},                    
                    {id: 7, name: 'buffalo-chicken', selection: 'left', price: 2.00,  img: 'buffalo-chicken-left.png'},
                    {id: 7, name: 'buffalo-chicken', selection: 'right', price: 2.00,  img: 'buffalo-chicken-right.png'}
                ],
                double: false
            },
            {
                title: 'Caramelized Onions',
                img: 'caramelized-onions.png',
                name: 'caramelized-onions',
                choice: 'none', 
                selections: [
                    {id: 8, name: 'caramelized-onions', selection: 'none', price: 0, img: ''},
                    {id: 8, name: 'caramelized-onions', selection: 'both', price: 2.00,  img: 'caramelized-onions-full.png'},                    
                    {id: 8, name: 'caramelized-onions', selection: 'left', price: 2.00,  img: 'caramelized-onions-left.png'},
                    {id: 8, name: 'caramelized-onions', selection: 'right', price: 2.00,  img: 'caramelized-onions-right.png'}
                ],
                double: false
            },
            {
                title: 'Chicken',
                img: 'chicken-menu.png',
                name: 'chicken',
                choice: 'none', 
                selections: [
                    {id: 9, name: 'chicken', selection: 'none', price: 0, img: ''},
                    {id: 9, name: 'chicken', selection: 'both', price: 2.00,  img: 'chicken-full.png'},                    
                    {id: 9, name: 'chicken', selection: 'left', price: 2.00,  img: 'chicken-left.png'},
                    {id: 9, name: 'chicken', selection: 'right', price: 2.00,  img: 'chicken-right.png'}
                ],
                double: false
            },
            {
                title: 'Chipotle Chicken',
                img: 'chipotle-chicken-menu.png',
                name: 'chipotle-chicken',
                choice: 'none', 
                selections: [
                    {id: 9, name: 'chipotle-chicken', selection: 'none', price: 0, img: ''},
                    {id: 9, name: 'chipotle-chicken', selection: 'both', price: 2.00,  img: 'chipotle-chicken-full.png'},                    
                    {id: 9, name: 'chipotle-chicken', selection: 'left', price: 2.00,  img: 'chipotle-chicken-left.png'},
                    {id: 9, name: 'chipotle-chicken', selection: 'right', price: 2.00,  img: 'chipotle-chicken-right.png'}
                ],
                double: false
            },
            {
                title: 'Chipotle Steak',
                img: 'Chipotle-Steak-menu.png',
                name: 'chipotle-steak',
                choice: 'none', 
                selections: [
                    {id: 10, name: 'chipotle-steak', selection: 'none', price: 0, img: ''},
                    {id: 10, name: 'chipotle-steak', selection: 'both', price: 2.00,  img: 'chipotle-steak-full.png'},                    
                    {id: 10, name: 'chipotle-steak', selection: 'left', price: 2.00,  img: 'chipotle-steak-left.png'},
                    {id: 10, name: 'chipotle-steak', selection: 'right', price: 2.00,  img: 'chipotle-steak-right.png'}
                ],
                double: false
            },
            {
                title: 'Ciantro',
                img: 'ciantro.png',
                name: 'ciantro',
                choice: 'none', 
                selections: [
                    {id: 11, name: 'ciantro', selection: 'none', price: 0, img: ''},
                    {id: 11, name: 'ciantro', selection: 'both', price: 2.00,  img: 'ciantro-full.png'},                    
                    {id: 11, name: 'ciantro', selection: 'left', price: 2.00,  img: 'ciantro-left.png'},
                    {id: 11, name: 'ciantro', selection: 'right', price: 2.00,  img: 'ciantro-right.png'}
                ],
                double: false
            },
            {
                title: 'Fine Roasted Peppers',
                img: 'fine-roasted-peppers.png',
                name: 'fine-roasted-peppers',
                choice: 'none', 
                selections: [
                    {id: 12, name: 'fine-roasted-peppers', selection: 'none', price: 0, img: ''},  
                    {id: 12, name: 'fine-roasted-peppers', selection: 'both', price: 2.00,  img: 'fine-roasted-peppers-full.png'},                    
                    {id: 12, name: 'fine-roasted-peppers', selection: 'left', price: 2.00,  img: 'fine-roasted-peppers-left.png'},
                    {id: 12, name: 'fine-roasted-peppers', selection: 'right', price: 2.00,  img: 'fine-roasted-peppers-right.png'}
                ],
                double: false
            },
            {
                title: 'Ground Beef',
                img: 'ground-beef-menu.png',
                name: 'ground-beef',
                choice: 'none', 
                selections: [
                    {id: 13, name: 'ground-beef', selection: 'none', price: 0, img: ''},  
                    {id: 13, name: 'ground-beef', selection: 'both', price: 2.00,  img: 'ground-beef-full.png'},                    
                    {id: 13, name: 'ground-beef', selection: 'left', price: 2.00,  img: 'ground-beef-left.png'},
                    {id: 13, name: 'ground-beef', selection: 'right', price: 2.00,  img: 'ground-beef-right.png'}
                ],
                double: false
            },
            {
                title: 'Mozzarella Cheese',
                img: 'mozzarella-cheese.png',
                name: 'mozzarella-cheese',
                choice: 'none', 
                selections: [
                    {id: 14, name: 'mozzarella-cheese', selection: 'none', price: 0, img: ''},  
                    {id: 14, name: 'mozzarella-cheese', selection: 'both', price: 2.00,  img: 'mozzarella-cheese-full.png'},                    
                    {id: 14, name: 'mozzarella-cheese', selection: 'left', price: 2.00,  img: 'mozzarella-cheese-full.png'},
                    {id: 14, name: 'mozzarella-cheese', selection: 'right', price: 2.00,  img: 'mozzarella-cheese-full.png'}
                ],
                double: false
            },
            {
                title: 'Red Onions',
                img: 'red-onions.png',
                name: 'red-onions',
                choice: 'none', 
                selections: [
                    {id: 15, name: 'red-onions', selection: 'none', price: 0, img: ''},  
                    {id: 15, name: 'red-onions', selection: 'both', price: 2.00,  img: 'red-onions-full.png'},                    
                    {id: 15, name: 'red-onions', selection: 'left', price: 2.00,  img: 'red-onions-left.png'},
                    {id: 15, name: 'red-onions', selection: 'right', price: 2.00,  img: 'red-onions-right.png'}
                ],
                double: false
            },
            {
                title: 'Roasted Garlic',
                img: 'roasted-garlic.png',
                name: 'roasted-garlic',
                choice: 'none', 
                selections: [
                    {id: 16, name: 'roasted-garlic', selection: 'none', price: 0, img: ''},  
                    {id: 16, name: 'roasted-garlic', selection: 'both', price: 2.00,  img: 'roasted-garlic-full.png'},                    
                    {id: 16, name: 'roasted-garlic', selection: 'left', price: 2.00,  img: 'roasted-garlic-left.png'},
                    {id: 16, name: 'roasted-garlic', selection: 'right', price: 2.00,  img: 'roasted-garlic-right.png'}
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
