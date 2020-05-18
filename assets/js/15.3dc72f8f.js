(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{424:function(e,t,a){e.exports=a.p+"assets/img/ServerSettings.e0eb09fd.png"},425:function(e,t,a){e.exports=a.p+"assets/img/Setup1.caaa2c95.png"},426:function(e,t,a){e.exports=a.p+"assets/img/Setup2.a1c3c7f5.png"},427:function(e,t,a){e.exports=a.p+"assets/img/Setup3.865d8a39.png"},428:function(e,t,a){e.exports=a.p+"assets/img/WalletSend.2832bd09.png"},551:function(e,t,a){"use strict";a.r(t);var s=a(26),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"btcpay-hot-wallet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-hot-wallet"}},[e._v("#")]),e._v(" BTCPay Hot Wallet")]),e._v(" "),s("p",[e._v("BTCPay Server also allows stores to generate or import a wallet while also (optionally) storing its private keys. This enables generating new wallets entirely within BTCPay, "),s("RouterLink",{attrs:{to:"/Payjoin.html"}},[e._v("Payjoin support")]),e._v(" and is a requirement for "),s("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/issues/1282",target:"_blank",rel:"noopener noreferrer"}},[e._v("Liquid support"),s("OutboundLink")],1),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"security-implications"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security-implications"}},[e._v("#")]),e._v(" Security Implications")]),e._v(" "),s("p",[e._v("Storing private keys on a public server comes with risks. This is similar to the risks of running and using the "),s("RouterLink",{attrs:{to:"/LightningNetwork.html"}},[e._v("Lightning Network")]),e._v(" (except that you can recover funds with a backup). "),s("strong",[e._v("Please, ALWAYS be sure to back up any seed that is generated by this feature and to never leave money you cannot afford to lose spendable by those private keys")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"requirements-for-hot-wallet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements-for-hot-wallet"}},[e._v("#")]),e._v(" Requirements for Hot Wallet")]),e._v(" "),s("p",[e._v('By default, you need to be a server admin to use the hot wallet feature. This is because server admins are able to extract the private key easily. If for some reason (such as allowing individuals that trust you enough with their store), you can enable the hot wallet for non-admins from Server Settings->Policies->"Allow non-admins to create hot wallets for their stores".')]),e._v(" "),s("figure",[s("img",{attrs:{src:a(424),alt:""}})]),e._v(" "),s("h3",{attrs:{id:"setting-up-your-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-your-store"}},[e._v("#")]),e._v(" Setting up your store")]),e._v(" "),s("p",[e._v("Setting up a hot wallet is quite easy.")]),e._v(" "),s("ol",[s("li",[e._v("Go to your BTCPay Server’s Store > General Settings > Derivation Scheme > "),s("strong",[e._v("Import from a new/existing seed.")])]),e._v(" "),s("li",[e._v("If you have already generated a seed, you can provide it to the hot wallet.")]),e._v(" "),s("li",[e._v('Be sure to tick "Is hot wallet" for the key to be stored (not ticking this will not store any private key).')]),e._v(" "),s("li",[e._v("Press Generate")]),e._v(" "),s("li",[e._v("If you did not provide an existing seed, a seed will be generated and shown to you. You MUST backup this seed responsibly.")]),e._v(" "),s("li",[e._v("The public key will automatically be imported in the store and configured to an appropriate format.")]),e._v(" "),s("li",[e._v("If you provided an existing seed, a list of preview addresses will be shown. Validate that they are the same as the one on your wallet and Save.")])]),e._v(" "),s("figure",[s("img",{attrs:{src:a(425),alt:""}})]),e._v(" "),s("figure",[s("img",{attrs:{src:a(426),alt:""}})]),e._v(" "),s("figure",[s("img",{attrs:{src:a(427),alt:""}})]),e._v(" "),s("h3",{attrs:{id:"spending-funds-with-btcpay-hot-wallet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spending-funds-with-btcpay-hot-wallet"}},[e._v("#")]),e._v(" Spending funds with BTCPay Hot Wallet")]),e._v(" "),s("p",[e._v("Once you’ve received funds to your wallet and you decide to spend them, you can sign the transaction automatically, all inside BTCPay Server.")]),e._v(" "),s("ol",[s("li",[e._v("In BTCPay Server, go to > Wallets > Manage > Send")]),e._v(" "),s("li",[e._v("Fill in the Destination address and the Amount")]),e._v(" "),s("li",[e._v("Select Sign with the seed saved in NBXplorer")]),e._v(" "),s("li",[e._v("Broadcast the transaction")])]),e._v(" "),s("figure",[s("img",{attrs:{src:a(428),alt:""}})]),e._v(" "),s("h2",{attrs:{id:"reducing-risk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reducing-risk"}},[e._v("#")]),e._v(" Reducing risk")]),e._v(" "),s("p",[e._v("As mentioned above, the hot wallet functionality includes risk of funds being stolen in the case of the server or account being compromised. To mitigate this risk, we advise you to:")]),e._v(" "),s("ul",[s("li",[e._v("Enable two factor or U2F authentiation")]),e._v(" "),s("li",[e._v("Occasionally move funds to your cold storage either manually or by configuring "),s("RouterLink",{attrs:{to:"/Transmuter/"}},[e._v("BTC Transmuter")]),e._v(" with automatic payment forwarding.")],1)]),e._v(" "),s("h2",{attrs:{id:"importing-seeds-with-an-existing-balance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#importing-seeds-with-an-existing-balance"}},[e._v("#")]),e._v(" Importing seeds with an existing balance")]),e._v(" "),s("p",[e._v("You can import an existing seed with an existing balance but will need to "),s("RouterLink",{attrs:{to:"/Wallet.html#re-scan"}},[e._v("rescan it")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);