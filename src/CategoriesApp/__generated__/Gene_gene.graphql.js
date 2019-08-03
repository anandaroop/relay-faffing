/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Gene_gene$ref: FragmentReference;
declare export opaque type Gene_gene$fragmentType: Gene_gene$ref;
export type Gene_gene = {|
  +slug: string,
  +name: ?string,
  +$refType: Gene_gene$ref,
|};
export type Gene_gene$data = Gene_gene;
export type Gene_gene$key = {
  +$data?: Gene_gene$data,
  +$fragmentRefs: Gene_gene$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Gene_gene",
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
(node/*: any*/).hash = '8ae35190972576ad471c4927810895c8';
module.exports = node;
