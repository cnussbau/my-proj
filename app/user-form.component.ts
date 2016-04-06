import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {User} from './user';

@Component({
    selector : 'user-form',
    templateUrl: 'app/user-form.component.html'
})

export class UserFormComponent {
    model = new User(18, 'Your name');
    submitted = false;
    onSubmit() { this.submitted = true; }
    active = true;
    // TODO: Remove this when we're done

    newUser() {
        this.model = new User(42, '');
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }
    get diagnostic() { return JSON.stringify(this.model); }
}
