import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {

  private numeberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw Error("Prefix cannot be empty!")
    }
    const uniqueId = this.generateUniqueId();
    this.numeberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueId(): number {
    return this.numeberOfGeneratedIds;
  }
  private generateUniqueId(): string {
    return uuidv4();
  }


}
