import { Locator, Page, expect } from '@playwright/test';
import { RESPONSIBLE_TYPE, ValuesAsUnion } from '@axonivy/inscription-protocol';
import { ScriptInput } from './CodeEditor';
import { Select } from './Select';

export class ResponsibleSelect {
  private readonly locator: Locator;
  private readonly type: Locator;
  private readonly script: ScriptInput;
  private readonly select: Select;

  constructor(page: Page, parentLocator: Locator, label: string) {
    this.locator = parentLocator.locator('.responsible-select', { has: page.getByLabel(label) }).first();
    this.type = parentLocator.getByLabel(label).first();
    this.script = new ScriptInput(page, this.locator);
    this.select = new Select(page, parentLocator, { nth: 1 });
  }

  async fill(value: string) {
    const type = await this.type.textContent();
    switch (type) {
      case 'Role from Attr.':
      case 'User from Attr.':
        await this.script.fill(value);
        break;
      case 'Role':
        await this.select.choose(value);
        break;
      case 'Nobody & delete':
        throw new Error("There is not value to expect if type is 'Nobody & delete'");
    }
  }

  async clear() {
    await this.chooseType('Role');
    await this.select.choose('Everybody');
  }

  async chooseType(type: ValuesAsUnion<typeof RESPONSIBLE_TYPE>) {
    await this.type.click();
    await this.locator.getByRole('option', { name: type }).first().click();
  }

  async expectType(type: ValuesAsUnion<typeof RESPONSIBLE_TYPE>) {
    await expect(this.type).toHaveText(type);
  }

  async expectValue(value: string) {
    const type = await this.type.textContent();
    switch (type) {
      case 'Role from Attr.':
      case 'User from Attr.':
        await this.script.expectValue(value);
        break;
      case 'Role':
        await this.select.expectValue(value);
        break;
      case 'Nobody & delete':
        throw new Error("There is not value to expect if type is 'Nobody & delete'");
    }
  }
}
