import { Part } from '../../pageobjects/Part';
import { NewPartTest, PartObject } from './part-tester';
import { Section } from '../../pageobjects/Section';
import { Table } from '../../pageobjects/Table';
import { ScriptArea } from '../../pageobjects/CodeEditor';
import { TextArea } from '../../pageobjects/TextArea';
import { Combobox } from '../../pageobjects/Combobox';

class RestResponse extends PartObject {
  type: TextArea;
  mapping: Table;
  code: ScriptArea;
  errorSection: Section;
  clientError: Combobox;
  statusError: Combobox;

  constructor(part: Part) {
    super(part);
    this.type = part.textArea('Read body as type (result variable)');
    this.mapping = part.table(['label', 'label', 'expression']);
    this.code = part.scriptArea();
    this.errorSection = part.section('Error');
    this.clientError = this.errorSection.combobox('On Error (Connection, Timeout, etc.)');
    this.statusError = this.errorSection.combobox('On Status Code not successful (2xx)');
  }

  async fill() {
    await this.type.fill('type');
    await this.mapping.row(1).column(2).fill('"bla"');
    await this.code.fill('code');
    await this.errorSection.toggle();
    await this.clientError.choose('>> Ignore error');
    await this.statusError.choose('>> Ignore error');
  }

  async assertFill() {
    await this.type.expectValue('type');
    await this.mapping.row(1).column(2).expectValue('"bla"');
    await this.code.expectValue('code');
    await this.errorSection.expectIsOpen();
    await this.clientError.expectValue('>> Ignore error');
    await this.statusError.expectValue('>> Ignore error');
  }

  async clear() {
    await this.type.clear();
    await this.mapping.row(1).column(2).fill('');
    await this.code.clear();
    await this.clientError.choose('ivy:error:rest:client');
    await this.statusError.choose('ivy:error:rest:client');
  }

  async assertClear() {
    await this.type.expectEmpty();
    await this.mapping.row(1).column(2).expectValue('');
    await this.code.expectValue('');
    await this.errorSection.expectIsClosed();
  }
}

export const RestResponseTest = new NewPartTest('Response', (part: Part) => new RestResponse(part));
