/**
 * Created by Jahongir on 23-May-17.
 */
import { Component, Input } from '@angular/core';

import { HeaderService } from '../shared/header.service';
import { VlansClients  } from "../shared/components.model";

@Component({
  selector: 'tr[vlansIp]',
  templateUrl: '/app/components/views/ip.vlan.component.html',
  providers: [ HeaderService ],
  host: {'class': 'ipTr'}
})

export class VlansIpComponent{
  @Input() vlan;

  clients: VlansClients[] = [];
  client: VlansClients;

  constructor(private headerService: HeaderService) {}

  ngOnInit(){
    this.headerService.getClientsByVlan(this.vlan)
      .subscribe((clients)=>{
           this.clients = clients;
      });
  }

}

