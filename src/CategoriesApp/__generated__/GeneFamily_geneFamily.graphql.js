/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Gene_gene$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type GeneFamily_geneFamily$ref: FragmentReference;
declare export opaque type GeneFamily_geneFamily$fragmentType: GeneFamily_geneFamily$ref;
export type GeneFamily_geneFamily = {|
  +slug: string,
  +name: string,
  +genes: ?$ReadOnlyArray<?{|
    +name: ?string,
    +$fragmentRefs: Gene_gene$ref,
  |}>,
  +$refType: GeneFamily_geneFamily$ref,
|};
export type GeneFamily_geneFamily$data = GeneFamily_geneFamily;
export type GeneFamily_geneFamily$key = {
  +$data?: GeneFamily_geneFamily$data,
  +$fragmentRefs: GeneFamily_geneFamily$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
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
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "genes",
      "storageKey": null,
      "args": null,
      "concreteType": "Gene",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "FragmentSpread",
          "name": "Gene_gene",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ead6a8998eb6a213af9ba51045ff8bce';
module.exports = node;
