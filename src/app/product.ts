export class Product {
  constructor(EmployeeID: number, Name: string, Year: number, Salary: number) {
    this.EmployeeID = EmployeeID;
    this.Name = Name;
    this.Year = Year;
    this.Salary = Salary;
  }

  EmployeeID: number;
  Name: string;
  Year: number;
  Salary: number;
}
