import { TranslatableText } from './TranslatableText';

export class ContentField {
  id: number;
  name: TranslatableText;
  description: TranslatableText;
  localizable: boolean;
  widget: string;
}

export class ContentFieldValue {
  id: number;
  field: ContentField;
  value: string;
}

export class TranslatableContentFieldValue {
  id: number;
  field: ContentField;
  value: TranslatableText;
}