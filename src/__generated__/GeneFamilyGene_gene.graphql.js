/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type GeneFamilyGene_gene$ref: FragmentReference;
declare export opaque type GeneFamilyGene_gene$fragmentType: GeneFamilyGene_gene$ref;
export type GeneFamilyGene_gene = {|
  +slug: string,
  +name: ?string,
  +$refType: GeneFamilyGene_gene$ref,
|};
export type GeneFamilyGene_gene$data = GeneFamilyGene_gene;
export type GeneFamilyGene_gene$key = {
  +$data?: GeneFamilyGene_gene$data,
  +$fragmentRefs: GeneFamilyGene_gene$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "GeneFamilyGene_gene",
  "type": "Gene",
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
(node/*: any*/).hash = '9f4d8e54469178e431324021eba49c99';
module.exports = node;
