/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type GeneFamilyNavLink_geneFamily$ref: FragmentReference;
declare export opaque type GeneFamilyNavLink_geneFamily$fragmentType: GeneFamilyNavLink_geneFamily$ref;
export type GeneFamilyNavLink_geneFamily = {|
  +slug: string,
  +name: string,
  +$refType: GeneFamilyNavLink_geneFamily$ref,
|};
export type GeneFamilyNavLink_geneFamily$data = GeneFamilyNavLink_geneFamily;
export type GeneFamilyNavLink_geneFamily$key = {
  +$data?: GeneFamilyNavLink_geneFamily$data,
  +$fragmentRefs: GeneFamilyNavLink_geneFamily$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "GeneFamilyNavLink_geneFamily",
  "type": "GeneFamily",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "slug",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3073cee1bff631bc91aa0d015b27bcd2';
module.exports = node;
