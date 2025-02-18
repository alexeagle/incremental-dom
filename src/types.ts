/**
 * @license
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface ElementConstructor {new(): Element};

// tslint:disable-next-line:no-any
export type AttrMutator = (a: HTMLElement, b: string, c: any) => void;

export type AttrMutatorConfig = {[x: string]: AttrMutator};

export type NameOrCtorDef = string|ElementConstructor;

export type Key = string|number|null|undefined;

export type Statics = Array<{}>|null|undefined;

export type PatchFunction<T, R> = (
    node: Element|DocumentFragment,
    template: (a: T|undefined) => void,
    data?: T|undefined
) => R;

export type MatchFnDef = (
    matchNode: Node,
    nameOrCtor: NameOrCtorDef,
    expectedNameOrCtor: NameOrCtorDef,
    key: Key,
    expectedKey: Key
) =>  boolean;

export type PatchConfig = {
  matches?: MatchFnDef,
};
