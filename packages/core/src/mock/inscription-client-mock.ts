import {
  DialogStart,
  InscriptionClient,
  InscriptionData,
  InscriptionEditorType,
  InscriptionSaveData,
  InscriptionType,
  InscriptionValidation,
  Role,
  Variable
} from '@axonivy/inscription-protocol';
import { Emitter } from 'vscode-jsonrpc';
import { DataMock } from './data';
import { MetaMock } from './meta';
import { ValiationMock } from './validation';

export class InscriptionClientMock implements InscriptionClient {
  constructor(readonly readonly = false, readonly type: InscriptionEditorType = 'UserTask') {}

  initialize(): Promise<boolean> {
    return Promise.resolve(true);
  }

  data(pid: string): Promise<InscriptionData> {
    const inscriptionType: InscriptionType = {
      id: this.type,
      label: 'User Task',
      shortLabel: 'User Task',
      description: '',
      iconId: 'UserTask'
    };
    return Promise.resolve({ pid: pid, type: inscriptionType, readonly: this.readonly, data: DataMock.USER_TASK });
  }

  saveData(args: InscriptionSaveData): Promise<InscriptionValidation[]> {
    return Promise.resolve(ValiationMock.validateData(args));
  }

  dialogStarts(): Promise<DialogStart[]> {
    return Promise.resolve(MetaMock.DIALOG_STARTS);
  }

  roles(): Promise<Role[]> {
    return Promise.resolve(MetaMock.ROLES);
  }

  outMapping(): Promise<Variable[]> {
    return Promise.resolve([]);
  }

  onDataChanged = new Emitter<InscriptionData>().event;
  onValidation = new Emitter<InscriptionValidation[]>().event;
}
