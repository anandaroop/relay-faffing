/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type GeneFamily_geneFamily$ref: FragmentReference;
declare export opaque type GeneFamily_geneFamily$fragmentType: GeneFamily_geneFamily$ref;
export type GeneFamily_geneFamily = {|
  +slug: string,
  +name: string,
  +$refType: GeneFamily_geneFamily$ref,
|};
export type GeneFamily_geneFamily$data = GeneFamily_geneFamily;
export type GeneFamily_geneFamily$key = {
  +$data?: GeneFamily_geneFamily$data,
  +$fragmentRefs: GeneFamily_geneFamily$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "GeneFamily_geneFamily",
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
(node/*: any*/).hash = 'ba49f3f7cb951817dd1f7356a9e61c52';
module.exports = node;
