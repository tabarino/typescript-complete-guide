class Util {
  static fiscalYear = 2021;

  static addEquipment(name: string) {
    return { name };
  }
}

class Department {
  // By default we have public on properties and methods
  protected employess: string[] = [];

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

  addEmployee(employee: string) {
    if (employee === 'Ivan') {
      return;
    }

    this.employess.push(employee);
  }
}

class AccountingDepartment extends Department {
  private _lastReport: string;

  public get lastReport(): string {
    if (this._lastReport) {
      return this._lastReport;
    }

    throw new Error('No Report Found');
  }

  public set lastReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReport(value);
    // this._lastReport = value;
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this._lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this._lastReport = text;
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
console.log(accounting.lastReport);
accounting.lastReport = 'Report12';
console.log(accounting.lastReport);

const itDepartment = new ITDepartment('2', ['Ivan']);
itDepartment.addEmployee('Matheus');
itDepartment.describe();
itDepartment.printEmployeeInformation();

const equipment1 = Util.addEquipment('Computer');
console.log(equipment1);
console.log(Util.fiscalYear);

// const accountingCopy = { name: accounting.name, describe: accounting.describe };
// accountingCopy.describe();
