// Type definitions for spdx-license-list 6.2
// Project: https://github.com/sindresorhus/spdx-license-list
// Definitions by: David Dooling <https://github.com/ddgenome>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const SpdxLicenseList: Record<string, {
    name: string;
    url: string;
    osiApproved: boolean;
}>;
export = SpdxLicenseList;
