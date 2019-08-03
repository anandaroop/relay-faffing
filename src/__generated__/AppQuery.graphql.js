/**
 * @flow
 * @relayHash 4210d5f21c44f15de07d73501b82bd20
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type GeneFamilies_viewer$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: GeneFamilies_viewer$ref
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  viewer {
    ...GeneFamilies_viewer
  }
}

fragment GeneFamilies_viewer on Viewer {
  geneFamilies(first: 3) {
    edges {
      node {
        ...GeneFamily_geneFamily
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment GeneFamily_geneFamily on GeneFamily {
  slug
  name
  genes {
    ...GeneFamilyGene_gene
    id
  }
}

fragment GeneFamilyGene_gene on Gene {
  slug
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "GeneFamilies_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "geneFamilies",
            "storageKey": "geneFamilies(first:3)",
            "args": (v0/*: any*/),
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
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "genes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Gene",
                        "plural": true,
                        "selections": [
                          (v1/*: any*/),
                          (v2/*: any*/),
                          (v3/*: any*/)
                        ]
                      },
                      (v3/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
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
            "kind": "LinkedHandle",
            "alias": null,
            "name": "geneFamilies",
            "args": (v0/*: any*/),
            "handle": "connection",
            "key": "GeneFamilies_geneFamilies",
            "filters": []
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  viewer {\n    ...GeneFamilies_viewer\n  }\n}\n\nfragment GeneFamilies_viewer on Viewer {\n  geneFamilies(first: 3) {\n    edges {\n      node {\n        ...GeneFamily_geneFamily\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment GeneFamily_geneFamily on GeneFamily {\n  slug\n  name\n  genes {\n    ...GeneFamilyGene_gene\n    id\n  }\n}\n\nfragment GeneFamilyGene_gene on Gene {\n  slug\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '00b5668cf4827aa81772667ec7f497cc';
module.exports = node;
