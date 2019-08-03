/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type GeneFamilyGene_gene$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type GeneFamily_geneFamily$ref: FragmentReference;
declare export opaque type GeneFamily_geneFamily$fragmentType: GeneFamily_geneFamily$ref;
export type GeneFamily_geneFamily = {|
  +slug: string,
  +name: string,
  +genes: ?$ReadOnlyArray<?{|
    +$fragmentRefs: GeneFamilyGene_gene$ref
  |}>,
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "genes",
      "storageKey": null,
      "args": null,
      "concreteType": "Gene",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "GeneFamilyGene_gene",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9cf74517677498b05ed0876bf045da25';
module.exports = node;
