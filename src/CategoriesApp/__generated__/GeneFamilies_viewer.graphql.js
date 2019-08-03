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
        +name: string,
        +$fragmentRefs: GeneFamily_geneFamily$ref,
      |}
    |}>
  |},
  +featuredGenesByFamily: ?$ReadOnlyArray<?{|
    +familyName: ?string,
    +genes: ?$ReadOnlyArray<?{|
      +id?: string,
      +title?: ?string,
      +href?: ?string,
      +image?: ?{|
        +url: ?string
      |},
    |}>,
  |}>,
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
                  "name": "name",
                  "args": null,
                  "storageKey": null
                },
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
    },
    {
      "kind": "LinkedField",
      "alias": "featuredGenesByFamily",
      "name": "orderedSets",
      "storageKey": "orderedSets(key:\"browse:gene-category\",size:20)",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "browse:gene-category"
        },
        {
          "kind": "Literal",
          "name": "size",
          "value": 20
        }
      ],
      "concreteType": "OrderedSet",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": "familyName",
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": "genes",
          "name": "items",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": true,
          "selections": [
            {
              "kind": "InlineFragment",
              "type": "FeaturedLink",
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "title",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "href",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "image",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Image",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "url",
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "version",
                          "value": "large_rectangle"
                        }
                      ],
                      "storageKey": "url(version:\"large_rectangle\")"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4a2ff27e091354f50b4c52faba2fe93e';
module.exports = node;
