// INTERFAZ
interface IQueue<T> {
  enqueue(element: T): void;
  dequeue(): T | undefined;
  front(): T | undefined;
  rear(): T | undefined;
  size(): number;
  isEmpty(): boolean;
  getItems(): T[];
}

// CLASE
class Queue<T> implements IQueue<T> {
  private items: T[] = [];

  enqueue(element: T): void {
    this.items.push(element);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.items.shift();
  }

  front(): T | undefined {
    return this.items[0];
  }

  rear(): T | undefined {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  getItems(): T[] {
    return this.items;
  }
}