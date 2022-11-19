sjcl.test.vector.ocb2 = [
/* Official OCB-mode test vectors */
{ key:   "000102030405060708090A0B0C0D0E0F",
  iv:    "000102030405060708090A0B0C0D0E0F",
  adata: "",
  pt:    "",
  ct:    "",
  tag:   "BF3108130773AD5EC70EC69E7875A7B0"
},

{ key:   "000102030405060708090A0B0C0D0E0F",
  iv:    "000102030405060708090A0B0C0D0E0F",
  adata: "",
  pt:    "0001020304050607",
  ct:    "C636B3A868F429BB",
  tag:   "A45F5FDEA5C088D1D7C8BE37CABC8C5C"
},

{ key:   "000102030405060708090A0B0C0D0E0F",
  iv:    "000102030405060708090A0B0C0D0E0F",
  adata: "",
  pt:    "000102030405060708090A0B0C0D0E0F",
  ct:    "52E48F5D19FE2D9869F0C4A4B3D2BE57",
  tag:   "F7EE49AE7AA5B5E6645DB6B3966136F9"
},

{ key:   "000102030405060708090A0B0C0D0E0F",
  iv:    "000102030405060708090A0B0C0D0E0F",
  adata: "",
  pt:    "000102030405060708090A0B0C0D0E0F1011121314151617",
  ct:    "F75D6BC8B4DC8D66B836A2B08B32A636CC579E145D323BEB",
  tag:   "A1A50F822819D6E0A216784AC24AC84C"
},

{ key:   "000102030405060708090A0B0C0D0E0F",
  iv:    "000102030405060708090A0B0C0D0E0F",
  adata: "",
  pt:    "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F",
  ct:    "F75D6BC8B4DC8D66B836A2B08B32A636CEC3C555037571709DA25E1BB0421A27",
  tag:   "09CA6C73F0B5C6C5FD587122D75F2AA3"
},

{ key:   "000102030405060708090A0B0C0D0E0F",
  iv:    "000102030405060708090A0B0C0D0E0F",
  adata: "",
  pt:    "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F2021222324252627",
  ct:    "F75D6BC8B4DC8D66B836A2B08B32A6369F1CD3C5228D79FD6C267F5F6AA7B231C7DFB9D59951AE9C",
  tag:   "9DB0CDF880F73E3E10D4EB3217766688"
},

{ key:   "000102030405060708090A0B0C0D0E0F",
  iv:    "000102030405060708090A0B0C0D0E0F",
  adata: "0001020304050607",
  pt:    "0001020304050607",
  ct:    "C636B3A868F429BB",
  tag:   "8D059589EC3B6AC00CA31624BC3AF2C6"
},

{ key:   "000102030405060708090A0B0C0D0E0F",
  iv:    "000102030405060708090A0B0C0D0E0F",
  adata: "000102030405060708090A0B0C0D0E0F",
  pt:    "000102030405060708090A0B0C0D0E0F",
  ct:    "52E48F5D19FE2D9869F0C4A4B3D2BE57",
  tag:   "4DA4391BCAC39D278C7A3F1FD39041E6"
},

{ key:   "000102030405060708090A0B0C0D0E0F",
  iv:    "000102030405060708090A0B0C0D0E0F",
  adata: "000102030405060708090A0B0C0D0E0F1011121314151617",
  pt:    "000102030405060708090A0B0C0D0E0F1011121314151617",
  ct:    "F75D6BC8B4DC8D66B836A2B08B32A636CC579E145D323BEB",
  tag:   "24B9AC3B9574D2202678E439D150F633"
},

{ key:   "000102030405060708090A0B0C0D0E0F",
  iv:    "000102030405060708090A0B0C0D0E0F",
  adata: "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F",
  pt:    "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F",
  ct:    "F75D6BC8B4DC8D66B836A2B08B32A636CEC3C555037571709DA25E1BB0421A27",
  tag:   "41A977C91D66F62C1E1FC30BC93823CA"
},

{ key:   "000102030405060708090A0B0C0D0E0F",
  iv:    "000102030405060708090A0B0C0D0E0F",
  adata: "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F2021222324252627",
  pt:    "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F2021222324252627",
  ct:    "F75D6BC8B4DC8D66B836A2B08B32A6369F1CD3C5228D79FD6C267F5F6AA7B231C7DFB9D59951AE9C",
  tag:   "65A92715A028ACD4AE6AFF4BFAA0D396"
}
];
