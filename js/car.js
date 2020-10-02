/**
 * Car - Super Class (Parent)
 * 
 * SUV, MPV, Hatchback (types of car) --> Child
 *
 * Object of each types:
 * SUV -> Merc SLR
 * MPV -> BMW X3 
 * Hatchback -> Volkswagen Golf SV 
 *
 * 1. Define the properties and behaviors of each of these classes
 * 2. Create the classes
 * 3. Create the inheritance relationship between the classes
 * 4. Create object of the different types of cars
 *
 */

//Parent Class
function Car(brand, model, sports, engine, nooftires) {
    this.brand = brand;
    this.model = model;
    this.sports = sports;
    this.engine = engine;
    this.nooftires = nooftires;
  }

//Child Class for SUV
 function suv(brand, model, sports, engine, nooftires, allwheelcontrol) {
    Car.call(this, brand, model, sports, engine, nooftires);
    this.allwheelcontrol = allwheelcontrol;
  }

  //SUV's Prototype and Constructor definition
  suv.prototype = new Car();
  suv.prototype.constructor = suv;

  //Object for SUV
  var suv = new suv("Mercedes-Benz", "SLR McLaren 722 Edition", true, "Non-Electric", 4, true);
  console.log(suv);

  //Child Class for MPV
  function mpv(brand, model, sports, engine, nooftires, noofseats) {
    Car.call(this, brand, model, sports, engine, nooftires);
    this.noofseats = noofseats;
  }

  //MPV's Prototype and Constructor definition
  mpv.prototype = new Car();
  mpv.prototype.constructor = mpv;

  //Object for MPV
  var mpv = new mpv("BMW", "BMW X3 sDrive20i", false, "Non-Electric", 4, 4);
  console.log(mpv);

  //Child Class for HATCHBACK
  function hatchBack(brand, model, sports, engine, nooftires, cargospace) {
    Car.call(this, brand, model, sports, engine, nooftires);
    this.cargospace = cargospace;
  }

  //HATCHBACK's Prototype and Constructor definition
  hatchBack.prototype = new Car();
  hatchBack.prototype.constructor = hatchBack;

  //Object for HATCHBACK
  var hatchBack = new hatchBack("Volkswagen", "Golf SV", true, "Electric", 4, "Small");
  console.log(hatchBack);
  