import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Policy} from '../models/policy.model';
import {Employee} from '../models/employee.model';
import { HttpClientService} from 'src/app/services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

  constructor(private firestore: AngularFirestore) { }
  getPolicies() {
    return this.firestore.collection('policies').snapshotChanges();
}
createEmployees(user){
  return this.firestore.collection('employees').add(user);
}
createPolicy(policy: Policy){
  return this.firestore.collection('policies').add(policy);
}
updatePolicy(policy: Policy){
  delete policy.id;
  this.firestore.doc('policies/' + policy.id).update(policy);
}
deletePolicy(policyId: string){
  this.firestore.doc('policies/' + policyId).delete();
}
}
