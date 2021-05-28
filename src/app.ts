class Department {
  // By default we have public on properties and methods
  private name: string;
  private employess: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employess.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employess.length);
    console.log(this.employess);
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Ivan');
accounting.addEmployee('Rosana');

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: accounting.name, describe: accounting.describe };
// accountingCopy.describe();
