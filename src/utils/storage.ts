import { createEffect } from "solid-js";
import { createStore, SetStoreFunction, Store } from "solid-js/store";
type Switch = { enabled: boolean }
export function createNamedSwitcher(
  name: string,
): [Store<Switch>, SetStoreFunction<Switch>] {
  const localState = localStorage.getItem(name);
  const [state, setState] = createStore<Switch>(localState ? JSON.parse(localState) : { enabled: false });
  createEffect(() => localStorage.setItem(name, JSON.stringify(state)));
  return [state, setState];
}

