class Department {
  // By default we have public on properties and methods
  private employess: string[] = [];

  constructor(private readonly id: string, public name: string) { }

  public describe(this: Department) {
    console.log(`Department:  ${this.id} - ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employess.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employess.length);
    console.log(this.employess);
  }
}

const accounting = new Department('1', 'Accounting');

accounting.addEmployee('Ivan');
accounting.addEmployee('Rosana');

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: accounting.name, describe: accounting.describe };
// accountingCopy.describe();
