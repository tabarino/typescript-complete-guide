type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Ivan',
  privileges: ['create-server'],
  startDate: new Date()
};

// The intersection in this example is only number
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;
