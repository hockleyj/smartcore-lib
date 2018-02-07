'use strict';

var smartcore = module.exports;

// module information
smartcore.version = 'v' + require('./package.json').version;
smartcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of smartcore-lib found. ' +
      'Please make sure to require smartcore-lib and check that submodules do' +
      ' not also include their own smartcore-lib dependency.';
    throw new Error(message);
  }
};
smartcore.versionGuard(global._smartcore);
global._smartcore = smartcore.version;

// crypto
smartcore.crypto = {};
smartcore.crypto.BN = require('./lib/crypto/bn');
smartcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
smartcore.crypto.Hash = require('./lib/crypto/hash');
smartcore.crypto.Random = require('./lib/crypto/random');
smartcore.crypto.Point = require('./lib/crypto/point');
smartcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
smartcore.encoding = {};
smartcore.encoding.Base58 = require('./lib/encoding/base58');
smartcore.encoding.Base58Check = require('./lib/encoding/base58check');
smartcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
smartcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
smartcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
smartcore.util = {};
smartcore.util.buffer = require('./lib/util/buffer');
smartcore.util.js = require('./lib/util/js');
smartcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
smartcore.errors = require('./lib/errors');

// main bitcoin library
smartcore.Address = require('./lib/address');
smartcore.Block = require('./lib/block');
smartcore.MerkleBlock = require('./lib/block/merkleblock');
smartcore.BlockHeader = require('./lib/block/blockheader');
smartcore.HDPrivateKey = require('./lib/hdprivatekey.js');
smartcore.HDPublicKey = require('./lib/hdpublickey.js');
smartcore.Networks = require('./lib/networks');
smartcore.Opcode = require('./lib/opcode');
smartcore.PrivateKey = require('./lib/privatekey');
smartcore.PublicKey = require('./lib/publickey');
smartcore.Script = require('./lib/script');
smartcore.Transaction = require('./lib/transaction');
smartcore.URI = require('./lib/uri');
smartcore.Unit = require('./lib/unit');

// dependencies, subject to change
smartcore.deps = {};
smartcore.deps.bnjs = require('bn.js');
smartcore.deps.bs58 = require('bs58');
smartcore.deps.Buffer = Buffer;
smartcore.deps.elliptic = require('elliptic');
smartcore.deps.keccak256 = require('js-sha3').keccak256;
smartcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
smartcore.Transaction.sighash = require('./lib/transaction/sighash');
