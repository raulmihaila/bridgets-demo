/// <reference types="formidable" />
/// <reference types="qs" />
/// <reference types="express" />
import { Controller } from 'bridgets';
export declare class User extends Controller {
    get: import("bridgets").Endpoint<(p: {
        mid: ({
            user: {
                firstName: string;
                lastName: string;
            };
            association?: undefined;
        } | {
            association: {
                admins: string[];
            };
            user?: undefined;
        }) & {
            readonly Yo: 69;
        };
    } & {
        files: {
            image1: import("formidable").File;
            image2: import("formidable").File;
        };
    }) => string, [(req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>) => {
        error: {
            name: "You are not Dave !";
            data?: unknown;
            status: 401;
        };
    } | {
        user: {
            firstName: string;
            lastName: string;
        };
        association?: undefined;
    } | {
        association: {
            admins: string[];
        };
        user?: undefined;
    }, (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>) => {
        readonly Yo: 69;
    }]>;
}
