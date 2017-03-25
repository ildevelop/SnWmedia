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


  constructor(id,gender,name,location,email,login,phone,picture){
    //
    this.id=id;
    this.gender=gender;
    this.name=name;
    this.location=location;
    this.email=email;
    this.login=login;
    this.phone=phone;
    this.picture=picture;
  }

  toString(){
    return "User{name:"+this.name+" email:"+this.email+"}"
  }
}
