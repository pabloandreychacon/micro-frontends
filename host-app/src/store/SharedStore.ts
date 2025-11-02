// Simple store compartido
class SharedStore {
  private data: Record<string, any> = {};
  private listeners: Record<string, Function[]> = {};

  setData(key: string, value: any) {
    this.data[key] = value;
    this.notifyListeners(key);
  }

  getData(key: string) {
    return this.data[key];
  }

  subscribe(key: string, callback: Function) {
    if (!this.listeners[key]) {
      this.listeners[key] = [];
    }
    this.listeners[key].push(callback);
  }

  private notifyListeners(key: string) {
    if (this.listeners[key]) {
      this.listeners[key].forEach(callback => callback(this.data[key]));
    }
  }
}

export const sharedStore = new SharedStore();
(window as any).sharedStore = sharedStore;