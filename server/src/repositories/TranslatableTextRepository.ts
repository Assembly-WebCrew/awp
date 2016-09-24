import { db, Repository } from '../core/database';
import { TranslatableText } from '../models/TranslatableText';

export class TranslatableTextRepository implements Repository<number, TranslatableText> {
  list(): Promise<TranslatableText[]> {
    return undefined;
  }

  find(predicate): Promise<TranslatableText> {
    return undefined;
  }

  add(instance: TranslatableText): Promise<TranslatableText> {
    return undefined;
  }

  update(id: number, instance: TranslatableText): Promise<boolean> {
    return undefined;
  }

  delete(id: number): Promise<TranslatableText> {
    return undefined;
  }
}