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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReport() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('1', []);
accounting.addEmployee('Ivan');
accounting.addEmployee('Rosana');
accounting.addReport('Something went wrong...');
accounting.describe();
accounting.printEmployeeInformation();
accounting.printReport();

const itDepartment = new ITDepartment('2', ['Ivan']);
itDepartment.addEmployee('Matheus');
itDepartment.describe();
itDepartment.printEmployeeInformation();

// const accountingCopy = { name: accounting.name, describe: accounting.describe };
// accountingCopy.describe();
