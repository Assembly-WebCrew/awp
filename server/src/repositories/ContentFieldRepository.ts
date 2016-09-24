import { db, Repository } from '../core/database';
import { ContentField, ContentFieldValue, TranslatableContentFieldValue } from '../models/ContentField';

export class ContentFieldRepository implements Repository<number, ContentField> {
  list(): Promise<ContentField[]> {
    return undefined;
  }

  find(predicate): Promise<ContentField> {
    return undefined;
  }

  add(instance: ContentField): Promise<ContentField> {
    return undefined;
  }

  update(id: number, instance: ContentField): Promise<boolean> {
    return undefined;
  }

  delete(id: number): Promise<ContentField> {
    return undefined;
  }
}

export class ContentFieldValueRepository implements Repository<number, ContentFieldValue> {
  list(): Promise<ContentFieldValue[]> {
    return undefined;
  }

  find(predicate): Promise<ContentFieldValue> {
    return undefined;
  }

  add(instance: ContentFieldValue): Promise<ContentFieldValue> {
    return undefined;
  }

  update(id: number, instance: ContentFieldValue): Promise<boolean> {
    return undefined;
  }

  delete(id: number): Promise<ContentFieldValue> {
    return undefined;
  }
}

export class TranslatableContentFieldValueRepository implements Repository<number, TranslatableContentFieldValue> {
  list(): Promise<TranslatableContentFieldValue[]> {
    return undefined;
  }

  find(predicate): Promise<TranslatableContentFieldValue> {
    return undefined;
  }

  add(instance: TranslatableContentFieldValue): Promise<TranslatableContentFieldValue> {
    return undefined;
  }

  update(id: number, instance: TranslatableContentFieldValue): Promise<boolean> {
    return undefined;
  }

  delete(id: number): Promise<TranslatableContentFieldValue> {
    return undefined;
  }
}