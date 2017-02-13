function Person(firstName, lastName, dob, gender) {
  if (typeof(firstName)==='undefined') firstName = 'FirstName';
  if (typeof(lastName)==='undefined') lastName = 'LastName';
  if (typeof(dob)==='undefined') dob = new Date();
  if (typeof(gender)==='undefined') gender = 'Gender';
  this.name = {
    firstName,
    lastName
  };
  this.dob = dob;                //Please enter date of birth as string "YYYY/MM/DD", e.g. "1980/08/10"
  this.gender = gender;
};


Person.prototype.greeting = function() {
    return ("Hi! I'm " + this.name.firstName + '.');
};


Person.prototype.getAge = function() {
    var today = new Date();
    var birthDate = new Date(this.dob);
    var age = today.getFullYear() - birthDate.getFullYear();                    //evaluates age based on year alone
    var months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {        //updates age based on months or/and days
        age--;
    }
    return age;
}


Person.prototype.bio = function() {
  var prefix1;
  var prefix2;

    if (this.gender.toLowerCase() === 'male' || this.gender === 'm' || this.gender === 'M') {
      prefix1 = 'he';
      this.prefix2 = 'His';
    }    
    else if (this.gender.toLowerCase() === 'female' || this.gender === 'f' || this.gender === 'F') {
      prefix1 = 'she';
      this.prefix2 = 'Her';
    }
    else{
      prefix1 = '';
      this.prefix2 = 'The';
    }
    return (this.name.firstName + ' ' + this.name.lastName + ' is ' + this.getAge() + ' years old and ' + prefix1 + ' is ' + this.gender 

+'.');
};


function AndelaPerson(firstName, lastName, age, gender, slack){
  Person.call(this, firstName, lastName, age, gender);
  this.slack = slack;
}
AndelaPerson.prototype = Object.create(Person.prototype);
AndelaPerson.prototype.constructor = AndelaPerson;
AndelaPerson.prototype.bio = function(){
  return Person.prototype.bio.call(this) + ' ' + this.prefix2 + ' slack name is '+ this.slack + '.';
}

module.exports = {
    Person : Person,
    AndelaPerson: AndelaPerson
}

