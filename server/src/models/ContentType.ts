import { TranslatableText } from './TranslatableText';
import { ContentField, ContentFieldValue, TranslatableContentFieldValue } from './ContentField';

export class ContentType {
  id: number;
  name: TranslatableText;
  description: TranslatableText;
  fields: ContentField[];
}

export class ContentTypeInstance {
  id: number;
  type: ContentType;
  values: (ContentFieldValue|TranslatableContentFieldValue)[];
}