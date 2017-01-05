function newPerson(name) {
  var person = {};
  person.name = name;

  Object.defineProperties(person, {
    log: {
      value: function() { console.log(this.name); },
      writable: false,
    },
  });

  return person;
}

var me = newPerson('Shane Riley');
me.log();      // Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();      // Shane Riley