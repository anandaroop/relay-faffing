/**
 * @flow
 * @relayHash 6dd2fdd0aa590b08cb8fe8d1a08fd896
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppGeneQueryVariables = {||};
export type AppGeneQueryResponse = {|
  +gene: ?{|
    +slug: string,
    +name: ?string,
    +isPublished: ?boolean,
    +description: ?string,
  |}
|};
export type AppGeneQuery = {|
  variables: AppGeneQueryVariables,
  response: AppGeneQueryResponse,
|};
*/


/*
query AppGeneQuery {
  gene(id: "old-master-influenced-fantasy") {
    slug
    name
    isPublished
    description
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "old-master-influenced-fantasy"
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
  "name": "isPublished",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppGeneQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "gene",
        "storageKey": "gene(id:\"old-master-influenced-fantasy\")",
        "args": (v0/*: any*/),
        "concreteType": "Gene",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppGeneQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "gene",
        "storageKey": "gene(id:\"old-master-influenced-fantasy\")",
        "args": (v0/*: any*/),
        "concreteType": "Gene",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppGeneQuery",
    "id": null,
    "text": "query AppGeneQuery {\n  gene(id: \"old-master-influenced-fantasy\") {\n    slug\n    name\n    isPublished\n    description\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '379e234ea5fd7c19e00053e88ddf5a30';
module.exports = node;
