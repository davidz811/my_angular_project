import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private fs: Firestore) { }

  getStudents():Observable<EmployeeService[]>{
    console.log(this.fs);
    const myCollection: any = collection(this.fs, 'employees');
    return collectionData(myCollection);
  }

  addStudent(student:EmployeeService){
    const myCollection = collection(this.fs, 'employees')
    addDoc(myCollection, student);
  }
}