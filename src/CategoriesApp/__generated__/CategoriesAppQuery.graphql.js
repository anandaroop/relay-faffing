/**
 * @flow
 * @relayHash dfac77bc2b76b193806130ea500bec72
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type GeneFamilies_viewer$ref = any;
type GeneFamilyNav_viewer$ref = any;
export type CategoriesAppQueryVariables = {||};
export type CategoriesAppQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: GeneFamilyNav_viewer$ref & GeneFamilies_viewer$ref
  |}
|};
export type CategoriesAppQuery = {|
  variables: CategoriesAppQueryVariables,
  response: CategoriesAppQueryResponse,
|};
*/


/*
query CategoriesAppQuery {
  viewer {
    ...GeneFamilyNav_viewer
    ...GeneFamilies_viewer
  }
}

fragment GeneFamilyNav_viewer on Viewer {
  geneFamilies(first: 20) {
    edges {
      node {
        ...GeneFamilyNavLink_geneFamily
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

fragment GeneFamilies_viewer on Viewer {
  geneFamilies(first: 20) {
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
    ...Gene_gene
    id
  }
}

fragment Gene_gene on Gene {
  slug
  name
}

fragment GeneFamilyNavLink_geneFamily on GeneFamily {
  slug
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
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
    "name": "CategoriesAppQuery",
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
            "name": "GeneFamilyNav_viewer",
            "args": null
          },
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
    "name": "CategoriesAppQuery",
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
            "storageKey": "geneFamilies(first:20)",
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
                      (v3/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
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
                          (v1/*: any*/),
                          (v2/*: any*/),
                          (v3/*: any*/)
                        ]
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
            "key": "GeneFamilyNav_geneFamilies",
            "filters": []
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
    "name": "CategoriesAppQuery",
    "id": null,
    "text": "query CategoriesAppQuery {\n  viewer {\n    ...GeneFamilyNav_viewer\n    ...GeneFamilies_viewer\n  }\n}\n\nfragment GeneFamilyNav_viewer on Viewer {\n  geneFamilies(first: 20) {\n    edges {\n      node {\n        ...GeneFamilyNavLink_geneFamily\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment GeneFamilies_viewer on Viewer {\n  geneFamilies(first: 20) {\n    edges {\n      node {\n        ...GeneFamily_geneFamily\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment GeneFamily_geneFamily on GeneFamily {\n  slug\n  name\n  genes {\n    ...Gene_gene\n    id\n  }\n}\n\nfragment Gene_gene on Gene {\n  slug\n  name\n}\n\nfragment GeneFamilyNavLink_geneFamily on GeneFamily {\n  slug\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dd50c3904597fea052a508c02ea49893';
module.exports = node;
