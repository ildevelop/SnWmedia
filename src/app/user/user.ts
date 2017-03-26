/**
 * Created by Radu on 3/25/2017.
 */
export class User {
  id:{};
  gender:string;
  name:{};
  location:{};
  email:string;
  login:{};
  phone:string;
  picture:{};
  dob:string;
  registered:string;


  constructor(id,gender,name,location,email,login,phone,picture,dob,reg){
    //
    this.id=id;
    this.gender=gender;
    this.name=name;
    this.location=location;
    this.email=email;
    this.login=login;
    this.phone=phone;
    this.picture=picture;
    this.dob=dob;
    this.registered=reg;
  }

  toString(){
    return "User{name:"+this.name+" email:"+this.email+"}"
  }
}
