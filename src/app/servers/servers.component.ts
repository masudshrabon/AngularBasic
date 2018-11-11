import { Component, OnInit } from '@angular/core';

@Component({
    // selector: '[app-servers]',
    // selector: '.app-servers',
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName = 'Test Server';
    isServerCreated = false;
    serverList = ['server 1', 'server 2'];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
        this.serverList.push(this.serverName);
        this.isServerCreated = true;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}
