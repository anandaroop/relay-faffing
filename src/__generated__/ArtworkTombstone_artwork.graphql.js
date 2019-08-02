/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ArtworkTombstone_artwork$ref: FragmentReference;
declare export opaque type ArtworkTombstone_artwork$fragmentType: ArtworkTombstone_artwork$ref;
export type ArtworkTombstone_artwork = {|
  +title: ?string,
  +imageUrl: ?string,
  +artist: ?{|
    +name: ?string
  |},
  +$refType: ArtworkTombstone_artwork$ref,
|};
export type ArtworkTombstone_artwork$data = ArtworkTombstone_artwork;
export type ArtworkTombstone_artwork$key = {
  +$data?: ArtworkTombstone_artwork$data,
  +$fragmentRefs: ArtworkTombstone_artwork$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ArtworkTombstone_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "imageUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "artist",
      "storageKey": null,
      "args": null,
      "concreteType": "Artist",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f9437defe1929beec595b8c247076d93';
module.exports = node;
