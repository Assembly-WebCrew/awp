import { db, Repository } from '../core/database';
import { ContentType, ContentTypeInstance } from '../models/ContentType';

export class ContentTypeRepository implements Repository<number, ContentType> {
  list(): Promise<ContentType[]> {
    return undefined;
  }

  find(predicate): Promise<ContentType> {
    return undefined;
  }

  add(instance: ContentType): Promise<ContentType> {
    return undefined;
  }

  update(id: number, instance: ContentType): Promise<boolean> {
    return undefined;
  }

  delete(id: number): Promise<ContentType> {
    return undefined;
  }
}

export class ContentTypeInstanceRepository implements Repository<number, ContentTypeInstance> {
  list(): Promise<ContentTypeInstance[]> {
    return undefined;
  }

  find(predicate): Promise<ContentTypeInstance> {
    return undefined;
  }

  add(instance: ContentTypeInstance): Promise<ContentTypeInstance> {
    return undefined;
  }

  update(id: number, instance: ContentTypeInstance): Promise<boolean> {
    return undefined;
  }

  delete(id: number): Promise<ContentTypeInstance> {
    return undefined;
  }

}