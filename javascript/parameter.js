class Employee
{
    constructor(id,ename)
    {
     this.id=id;
     this.ename=ename;
    }
    displayInfo()
    {
        console.log(this.id+" "+this.ename);
    }
}
let emp=new Employee(1001,"rajesh");
emp.displayInfo()