/// <reference types="qs" />
import { Controller } from 'bridgets';
import { Request } from 'express';
export declare class Friend extends Controller {
    get: import("bridgets").Endpoint<({ query }: {} & {
        query: {
            name: string;
        };
    }) => `Hello ${string}`, never>;
    getIfChepa: import("bridgets").Endpoint<({ query }: {} & {
        query: {
            name: string;
        };
    }) => `Hello ${string}`, never>;
}
export declare class User extends Controller {
    create: import("bridgets").Endpoint<(p: {
        mid: {
            readonly ip: string;
            readonly salut: "oui oui";
        } | {
            readonly ah: true;
        };
    } & {
        body: {
            name: string;
            age: number;
        };
        query: {
            name: string;
        };
    }) => {
        readonly error: {
            readonly status: 401;
            readonly name: "Wrong name";
            readonly data: readonly [];
        };
        readonly name?: undefined;
        readonly age?: undefined;
    } | {
        readonly name: "p.salut";
        readonly age: "ejjh";
        readonly error?: undefined;
    }, (((req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>) => {
        error: {
            name: "Wrong token";
            data?: unknown;
            status: 401;
        };
    } | {
        readonly ip: string;
        readonly salut: "oui oui";
    }) | ((req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>) => {
        readonly ah: true;
    }))[]>;
    update: import("bridgets").Endpoint<(p: {} & {
        query: {
            name: string;
            age: string;
        };
    }) => {
        readonly success: true;
    }, never>;
}
