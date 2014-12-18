// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @filedescription Initializes the extension's background page.
 */

var trigger = new TriggerGuard();
chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    return {redirectUrl: "https://31.media.tumblr.com/tumblr_m8pwmcn9wy1qbbiyo.jpg"};
  },
  // filters
  {
    urls: [
      "https://i.chzbgr.com/*"
    ],
    types: ["image"]
  },
  // extraInfoSpec
  ["blocking"]
  );