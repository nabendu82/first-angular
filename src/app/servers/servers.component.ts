import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['SR1', 'SR2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverStatus = `Server ${this.serverName} created`;
  }

  onUpdate(event: any){
    this.serverName = event.target.value;
  }
}
