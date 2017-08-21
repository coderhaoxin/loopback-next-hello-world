import {
    Entity,
    model,
    ModelDefinition,
    PropertyDefinition
} from '@loopback/repository';

export class User extends Entity {
    id: String;
    username: String;
    visited: Number;

    constructor(body?: Object) {
        super();
        if (body) {
            Object.assign(this, body);
        }

    }
    
    getVisited(): Number {
        return this.visited;
    }
}
