/**
 * Created by Jahongir on 25-Apr-17.
 */
import {
  Component, ViewContainerRef, ComponentFactoryResolver, ComponentRef,
  ViewChildren, QueryList, Input, Output
} from '@angular/core';
import { HeaderService } from '../shared/header.service';
import {Privilege, Vlan} from "../shared/components.model";
import {VlansIpComponent} from "./ip.vlan.component";

@Component({
  selector: 'vlan-app',
  templateUrl: '/app/components/views/vlan.component.html',
  providers: [ HeaderService ]
})

export class VlanComponent{
  @Input() user: Privilege;
  @Output() cmpName: string = "Virtual Local Area Network";

  vlans: Vlan[] = [];
  tariffs: any[] = [];

  SaveButton: boolean = true;
  AddButton: boolean = false;
  vlan: Vlan = new Vlan();
  _id; _gateway: string = "0"; _name;  _subnetMask;
  selectedIndex: String = "0";

  @ViewChildren('ipContent', {read: ViewContainerRef})
  parent: QueryList<any>;
  cmpRef: ComponentRef<Component>;

  constructor( private headerService: HeaderService,
               private componentFactoryResolver: ComponentFactoryResolver
  ){}

  ngOnInit(){
    this.headerService.getVlanContent()
      .subscribe((data)=>{

        this.tariffs = (<any>Object).values(data.tariff);
        data = data.vlan;

        for (let i=0; i < data.length; i++){
          let vlan = new Vlan((i+1), data[i].ID, data[i].gateway, data[i].name, data[i].tariff,
            data[i].subnetMask);
          this.vlans.push(vlan);
        }

      });
  }

  addNewVlan(vlan): void{
    vlan.tariff = this.selectedIndex;

    this.headerService.addNewVlan(vlan)
      .subscribe((data) => {
        let _vlan = new Vlan(this.vlans.length + 1, data.ID, data.gateway, data.name,
          data.id_tariff, data.subnet_mask);

        let index = this.tariffs.findIndex(x => x.ID == Number(data.id_tariff));
        _vlan.tariff = "" + this.tariffs[index].name;

        this.vlans.push(_vlan);

        this.clearForm();
      });
  }

  deleteVlan(id: number){
    this.headerService.deleteVlan(id)
      .subscribe(()=>{
        let index = this.vlans.findIndex(x => x.id == id);
        this.vlans.splice(index, 1);

        for (let i=0; i < this.vlans.length; i++)
          this.vlans[i].number = (i + 1);

      });
  }

  editVlan(id, gateway, name, tariff, subnetMask){
    this._id         = id.value;
    this._gateway    = gateway.innerHTML;
    this._name       = name.innerHTML;
    this._subnetMask = subnetMask.innerHTML;
    this.AddButton   = true;
    this.SaveButton  = false;

    let index = this.tariffs.findIndex(x => x.name == tariff.innerHTML);
    this.selectedIndex = "" + this.tariffs[index].ID;
  }

  clearForm(){
    this._gateway = "";
    this._name = "";
    this._subnetMask = "";
    this.SaveButton = true;
    this.AddButton = false;
  }

  updateVlan(gateway, name, subnetMask){

    let vlan = new Vlan(undefined, this._id,  gateway, name, this.selectedIndex.toString(),
                        subnetMask);

    if (!gateway)    vlan.gateway    = this._gateway;
    if (!name)       vlan.name       = this._name;
    if (!subnetMask) vlan.subnetMask = this._subnetMask;

    this.headerService.updateVlan(vlan)
      .subscribe((data)=>{

        let index = this.vlans.findIndex(x => x.id == this._id);
        let vlan = this.vlans[index];

        let index2 = this.tariffs.findIndex(x => x.ID == Number(data.id_tariff));

        vlan.tariff     = "" + this.tariffs[index2].name;
        vlan.gateway    = data.gateway;
        vlan.name       = data.name;
        vlan.subnetMask = data.subnet_mask;

        this.clearForm();
      });
  }

  showVlansIp(number){
    if(this.cmpRef) this.cmpRef.destroy();

    const childComponent = this.componentFactoryResolver.resolveComponentFactory(VlansIpComponent);
    this.parent.map((tabInstance, i) =>{

      number = Number(number);
        if(number - 1 == i){
          let index = this.vlans.findIndex(x => x.number == number);

          let CmpRef = tabInstance.createComponent(childComponent);
          CmpRef.instance.vlan = this.vlans[index];

          this.cmpRef = CmpRef;
        }
      }
    );
  }

  hideVlansIp(){
    if(this.cmpRef) this.cmpRef.destroy();
  }
}
