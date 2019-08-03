/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type GeneFamilyNavLink_geneFamily$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type GeneFamilyNav_viewer$ref: FragmentReference;
declare export opaque type GeneFamilyNav_viewer$fragmentType: GeneFamilyNav_viewer$ref;
export type GeneFamilyNav_viewer = {|
  +geneFamilies: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: GeneFamilyNavLink_geneFamily$ref
      |}
    |}>
  |},
  +$refType: GeneFamilyNav_viewer$ref,
|};
export type GeneFamilyNav_viewer$data = GeneFamilyNav_viewer;
export type GeneFamilyNav_viewer$key = {
  +$data?: GeneFamilyNav_viewer$data,
  +$fragmentRefs: GeneFamilyNav_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "GeneFamilyNav_viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "geneFamilies"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "geneFamilies",
      "name": "__GeneFamilyNav_geneFamilies_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "GeneFamilyConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "GeneFamilyEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "GeneFamily",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "GeneFamilyNavLink_geneFamily",
                  "args": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2d8c4b6d0254592baeac4b2d6a2aee33';
module.exports = node;
