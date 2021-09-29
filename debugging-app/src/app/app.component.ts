import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    servers: string[] = ['Hello', 'World'];

    onAddServer() {
        this.servers.push('Another Server');
    }

    onRemoveServer(id: number) {
        console.log(id);
        const position = id;
        this.servers.splice(position, 1);
    }

}
