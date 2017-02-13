(function(){
  'use strict';

  var myCode = require('./person.js');
 
  describe("Person Class: Create a person, name, age and sex", function() {

    it("The person should be a type of `object`, and an instance of the `Person` class", function() {
      var person1 = new myCode.Person('Yinka', 'Alabi', "1987/04/29", 'male');
      expect(typeof person1).toEqual(typeof {});
      expect(person1 instanceof myCode.Person).toBeTruthy();
    });

    it("The person should be a type of `object`, and an instance of the `AndelaPerson` class", function() {
      var andelan = new myCode.AndelaPerson('Anu', 'Oluwapo', "1980/08/10", 'female', 'slappy');
      expect(typeof andelan).toEqual(typeof {});
      expect(andelan instanceof myCode.AndelaPerson).toBeTruthy();
    });

    it("The person should be called 'FirstName LastName' if no name is passed as a parameter", function() {
      var general = new myCode.Person();
      expect(general.name.firstName).toEqual('FirstName');
      expect(general.name.lastName).toEqual('LastName');
      expect(general.gender).toBe('Gender');
    });

    it("The person name, age and gender should be a property of the person", function() {
      var person2  = new myCode.Person('Yinka', 'Alabi', "1987/04/29", 'male');
      expect(person2.name.lastName).toBe('Alabi');
      expect(person2.getAge()).toBe(29);
      expect(person2.gender).toBe('male');
    });

    it("The andela person name, age and gender should be a property of the person", function() {
      var andelite = new myCode.AndelaPerson('Anu', 'Oluwapo', "1980/08/10", 'female', 'slappy');
      expect(andelite.name.firstName).toBe('Anu');
      expect(andelite.name.lastName).toBe('Oluwapo');
      expect(andelite.getAge()).toBe(36);
      expect(andelite.gender).toBe('female');
      expect(andelite.slack).toBe('slappy');
    });

    it("The person should have no slack handle", function() {
      var person3  = new myCode.Person('Yinka', 'Alabi', "1987/04/29", 'male');
      expect(person3.bio()).toBe('Yinka Alabi is 29 years old and he is male.');
    });

    it("The person should have no slack handle except its an Andela Person", function() {
      var person4 = new myCode.AndelaPerson('Anu', 'Oluwapo', "1980/08/10", 'female', 'slappy');
      expect(person4.bio()).toBe('Anu Oluwapo is 36 years old and she is female. Her slack name is slappy.');
    });

    it("The person should be of constructor 'Person'", function() {
      var person5 = new myCode.Person('Paul', 'Bombo', "1985/01/25", 'male');
      expect(person5.constructor.name).toBe('Person');
    });

    it("The person should be of constructor 'AndelaPerson'", function() {
      var person6 = new myCode.AndelaPerson('Rachel', 'Sweetie', "Nil", 'female', 'angel');
      expect(person6.constructor.name).toBe('AndelaPerson');
    });

    it("The person should give a greeting", function() {
      var person7 = new myCode.Person('Paul', 'Bombo', "1985/01/25", 'male');
      expect(person7.greeting()).toBe("Hi! I'm Paul.");

      var person8 = new myCode.AndelaPerson('Rachel', 'Sweetie', "Nil", 'female', 'angel');
      expect(person8.greeting()).toBe("Hi! I'm Rachel.");
    });


  });

})();