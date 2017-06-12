import DateTimeFormat = Intl.DateTimeFormat;
/**
 * Created by Jahongir on 18-Apr-17.
 */
export class Atc{
  constructor(
    public id?:    number,
    public port?:  number,
    public alc?:   number,
    public idAtc?: number,
    public name?:  string,
    public address?:    string,
    public passport?:   string,
    public telephone?:  string,
    public phone?:      string,
    public ipAddress?:  string,
    public vlan?:       string,
    public macAddress?: string,
    public stan?: number,
    public line?: number,
    public vpi?:  number,
    public vci?:  number,
    public idClient?: number,
    public isData?:   boolean
  ){}
}

export class Wifi{
  constructor(
    public number?: number,
    public id?:     number,
    public type?:     number,
    public name?:   string,
    public itMan?:  string,
    public address?:   string,
    public passport?:  string,
    public telephone?: string,
    public phone?:     string,
    public ipAddress?: string,
    public vlan?:      string,
    public idClient?:  number
  ){}
}

export class Report{
  constructor(
    public number?: number,
    // public id?: number,
    public date?: string,
    public user?: string,
    public client?:    string,
    public telephone?: string,
    public problem?:    string
  ){}
}

export class Sign{
  constructor(
    public number?: number,
    // public id?: number,
    public dateEntry?: string,
    public dateExit?:  string,
    public username?:  string
  ){}
}

export class Filter{
  constructor(
    // public id?: number,
    public dateFilter?: string,
    public userFilter?: string,
    public fromDate?:   string,
    public toDate?:     string,
    public type?:       string
  ){}
}

export class Problem{
  constructor(
    public id?:     number,
    public number?: number,
    public dateCreate?: string,
    public dateSolve?: string,
    public user?:    string,
    public problem?: string,
    public status?:  boolean,
    public changed?:  boolean
  ){}
}

class ICRUD{
  public read:   boolean;
  public remove: boolean;
  public update: boolean;
  public create: boolean;
}

export class CRUD{
  crud: ICRUD;
  constructor(public privilege: string){}
   getcrud(){
      this.crud = new ICRUD();
      this.crud.read   = (this.privilege.substr(0,1) == '1');
      this.crud.remove = (this.privilege.substr(1,1) == '1');
      this.crud.update = (this.privilege.substr(2,1) == '1');
      this.crud.create = (this.privilege.substr(3,1) == '1');

      return this.crud;
   }
}

export class Privilege{
  constructor(
    public id?: number,
    public number?: number,
    public username?: string,
    public position?: string,
    public pAtc?: ICRUD,
    public pVlan?: ICRUD,
    public pReport?: ICRUD,
    public pWifi?: ICRUD,
    public pOptics?: ICRUD,
    public changed?: boolean
  ){}
}


export class VlansClients{
  constructor(
    public number?: number,
    public name?: string,
    public telephone?: string,
    public ipAddress?:    string
  ){}
}

export class AtcList{
  constructor(
    public id?: number,
    public name?: string,
    public ipAddress?: string,
    public alcQuant?: number
  ){}
}

export class Vlan{
  constructor(
    public number?: number,
    public id?:     number,
    public gateway?: string,
    public name?:    string,
    public tariff?:  string,
    public subnetMask?: string
  ){}
}

export class Tariff{
  constructor(
    public number?: number,
    public id?: number,
    public name?: string,
    public price?: string,
    public incomingSpeed?: string,
    public outgoingSpeed?: string,
    public traffic?: number
  ){}
}

export class ChangePassword{
  constructor(
    public currentPassword?:   string,
    public newPassword?:       string,
    public repeatNewPassword?: string
  ){}
}
