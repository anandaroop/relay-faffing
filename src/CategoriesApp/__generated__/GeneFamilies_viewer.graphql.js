/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type GeneFamily_geneFamily$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type GeneFamilies_viewer$ref: FragmentReference;
declare export opaque type GeneFamilies_viewer$fragmentType: GeneFamilies_viewer$ref;
export type GeneFamilies_viewer = {|
  +geneFamilies: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: GeneFamily_geneFamily$ref
      |}
    |}>
  |},
  +$refType: GeneFamilies_viewer$ref,
|};
export type GeneFamilies_viewer$data = GeneFamilies_viewer;
export type GeneFamilies_viewer$key = {
  +$data?: GeneFamilies_viewer$data,
  +$fragmentRefs: GeneFamilies_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "GeneFamilies_viewer",
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
      "name": "__GeneFamilies_geneFamilies_connection",
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
                  "name": "GeneFamily_geneFamily",
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
(node/*: any*/).hash = 'a09da0edc71afb89aedd8ff9e932ab91';
module.exports = node;
