export interface RecognizeCarInvoiceResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{
          "data": {
                "taxCode": "0492725/*+0/法55337*<56-24/*184-/*<94 16-6+9*-897+98546/<>74*++16<43800*>+-< 116*丰1<4201/*18+-/</56-7不5<+8-3839263 +5/+-0/48<<336/30983/96550*8<+75326252 728*3+*032*9*9*900430086-956347/250+",
                "invoiceDate": "2017-12-28",
                "invoiceCode": "141001720076",
                "invoiceNumber": "00357144",
                "machineCode": "661403540093",
                "purchaserName": "国军",
                "purchaseCode": "41052319206046072",
                "vehicleType": "轿车",
                "brandMode": "FV7152BAMBG",
                "origin": "长春市",
                "certificateNumber": "WAB011715201804",
                "importCertificateNumber": "",
                "commodityInspectionNumber": "",
                "engineNumber": "144878",
                "vinCode": "LFV2A1151H3201804",
                "invoiceAmountCn": "99000",
                "invoiceAmount": "99000.00",
                "sellerName": "安阳市汽车销售服务有限公司",
                "sellerContact": "0372-5378818",
                "sellerTaxNumber": "914105001924458113",
                "sellerBankAccount": "41001501210050224848",
                "sellerAddress": "安阳市文峰区光专路商段路(汽车市场对面)"，
                "sellerDepositaryBank": "中国建设银行安阳分行",
                "taxRate": "17%",
                "tax": "14384.62",
                "taxAuthoritiesInfo": "安阳县国家税务局341052200",
                "taxAuthoritiesName": "安阳县国家税务局",
                "taxAuthoritiesCode": "341052200",
                "preTaxAmount": "84615.38",
                "passengerLimitNumber": "5",
                "issuer": "赵迪",
                "tonnage": "",
                "purchaserTaxNumber": "410523197206046072",
                "taxPaymentNumber": ""
          },
          "height": 616,
          "orgHeight": 616,
          "orgWidth": 832,
          "prism_keyValueInfo": [
                {
                      "key": "taxCode",
                      "keyProb": 94,
                      "value": "0492725/*+0/法55337*<56-24/*184-/*<94 16-6+9*-897+98546/<>74*++16<43800*>+-< 116*丰1<4201/*18+-/</56-7不5<+8-3839263 +5/+-0/48<<336/30983/96550*8<+75326252 728*3+*032*9*9*900430086-956347/250+",
                      "valuePos": [
                            {
                                  "x": 744,
                                  "y": 131
                            },
                            {
                                  "x": 744,
                                  "y": 210
                            },
                            {
                                  "x": 412,
                                  "y": 210
                            },
                            {
                                  "x": 412,
                                  "y": 131
                            }
                      ],
                      "valueProb": 96
                },
                {
                      "key": "invoiceDate",
                      "keyProb": 100,
                      "value": "2017-12-28",
                      "valuePos": [
                            {
                                  "x": 233,
                                  "y": 98
                            },
                            {
                                  "x": 233,
                                  "y": 112
                            },
                            {
                                  "x": 142,
                                  "y": 112
                            },
                            {
                                  "x": 142,
                                  "y": 98
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "invoiceCode",
                      "keyProb": 100,
                      "value": "141001720076",
                      "valuePos": [
                            {
                                  "x": 764,
                                  "y": 72
                            },
                            {
                                  "x": 764,
                                  "y": 88
                            },
                            {
                                  "x": 647,
                                  "y": 88
                            },
                            {
                                  "x": 647,
                                  "y": 72
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "invoiceNumber",
                      "keyProb": 100,
                      "value": "00357144",
                      "valuePos": [
                            {
                                  "x": 728,
                                  "y": 92
                            },
                            {
                                  "x": 728,
                                  "y": 108
                            },
                            {
                                  "x": 647,
                                  "y": 108
                            },
                            {
                                  "x": 647,
                                  "y": 92
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "machineCode",
                      "keyProb": 100,
                      "value": "661403540093",
                      "valuePos": [
                            {
                                  "x": 288,
                                  "y": 188
                            },
                            {
                                  "x": 288,
                                  "y": 202
                            },
                            {
                                  "x": 176,
                                  "y": 202
                            },
                            {
                                  "x": 176,
                                  "y": 188
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "purchaserName",
                      "keyProb": 100,
                      "value": "国军",
                      "valuePos": [
                            {
                                  "x": 214,
                                  "y": 228
                            },
                            {
                                  "x": 214,
                                  "y": 243
                            },
                            {
                                  "x": 185,
                                  "y": 243
                            },
                            {
                                  "x": 185,
                                  "y": 228
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "purchaseCode",
                      "keyProb": 99,
                      "value": "41052319206046072",
                      "valuePos": [
                            {
                                  "x": 326,
                                  "y": 249
                            },
                            {
                                  "x": 326,
                                  "y": 262
                            },
                            {
                                  "x": 176,
                                  "y": 262
                            },
                            {
                                  "x": 176,
                                  "y": 249
                            }
                      ],
                      "valueProb": 99
                },
                {
                      "key": "vehicleType",
                      "keyProb": 100,
                      "value": "轿车",
                      "valuePos": [
                            {
                                  "x": 202,
                                  "y": 276
                            },
                            {
                                  "x": 202,
                                  "y": 291
                            },
                            {
                                  "x": 175,
                                  "y": 291
                            },
                            {
                                  "x": 175,
                                  "y": 276
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "brandMode",
                      "keyProb": 99,
                      "value": "FV7152BAMBG",
                      "valuePos": [
                            {
                                  "x": 457,
                                  "y": 278
                            },
                            {
                                  "x": 457,
                                  "y": 291
                            },
                            {
                                  "x": 383,
                                  "y": 291
                            },
                            {
                                  "x": 383,
                                  "y": 278
                            }
                      ],
                      "valueProb": 99
                },
                {
                      "key": "origin",
                      "keyProb": 100,
                      "value": "长春市",
                      "valuePos": [
                            {
                                  "x": 698,
                                  "y": 277
                            },
                            {
                                  "x": 698,
                                  "y": 293
                            },
                            {
                                  "x": 661,
                                  "y": 293
                            },
                            {
                                  "x": 661,
                                  "y": 277
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "certificateNumber",
                      "keyProb": 100,
                      "value": "WAB011715201804",
                      "valuePos": [
                            {
                                  "x": 270,
                                  "y": 311
                            },
                            {
                                  "x": 270,
                                  "y": 323
                            },
                            {
                                  "x": 174,
                                  "y": 323
                            },
                            {
                                  "x": 174,
                                  "y": 311
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "importCertificateNumber",
                      "keyProb": 100,
                      "value": "",
                      "valueProb": 100
                },
                {
                      "key": "commodityInspectionNumber",
                      "keyProb": 100,
                      "value": "",
                      "valueProb": 100
                },
                {
                      "key": "engineNumber",
                      "keyProb": 100,
                      "value": "144878",
                      "valuePos": [
                            {
                                  "x": 215,
                                  "y": 344
                            },
                            {
                                  "x": 215,
                                  "y": 356
                            },
                            {
                                  "x": 175,
                                  "y": 356
                            },
                            {
                                  "x": 175,
                                  "y": 344
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "vinCode",
                      "keyProb": 97,
                      "value": "LFV2A1151H3201804",
                      "valuePos": [
                            {
                                  "x": 708,
                                  "y": 345
                            },
                            {
                                  "x": 708,
                                  "y": 359
                            },
                            {
                                  "x": 551,
                                  "y": 359
                            },
                            {
                                  "x": 551,
                                  "y": 345
                            }
                      ],
                      "valueProb": 97
                },
                {
                      "key": "invoiceAmountCn",
                      "keyProb": 100,
                      "value": "99000",
                      "valuePos": [
                            {
                                  "x": 270,
                                  "y": 373
                            },
                            {
                                  "x": 270,
                                  "y": 388
                            },
                            {
                                  "x": 193,
                                  "y": 388
                            },
                            {
                                  "x": 193,
                                  "y": 373
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "invoiceAmount",
                      "keyProb": 100,
                      "value": "99000.00",
                      "valuePos": [
                            {
                                  "x": 631,
                                  "y": 388
                            },
                            {
                                  "x": 632,
                                  "y": 374
                            },
                            {
                                  "x": 722,
                                  "y": 375
                            },
                            {
                                  "x": 722,
                                  "y": 390
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "sellerName",
                      "keyProb": 100,
                      "value": "安阳市汽车销售服务有限公司",
                      "valuePos": [
                            {
                                  "x": 363,
                                  "y": 406
                            },
                            {
                                  "x": 363,
                                  "y": 421
                            },
                            {
                                  "x": 176,
                                  "y": 421
                            },
                            {
                                  "x": 176,
                                  "y": 406
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "sellerContact",
                      "keyProb": 100,
                      "value": "0372-5378818",
                      "valuePos": [
                            {
                                  "x": 647,
                                  "y": 408
                            },
                            {
                                  "x": 647,
                                  "y": 421
                            },
                            {
                                  "x": 570,
                                  "y": 421
                            },
                            {
                                  "x": 570,
                                  "y": 408
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "sellerTaxNumber",
                      "keyProb": 96,
                      "value": "914105001924458113",
                      "valuePos": [
                            {
                                  "x": 363,
                                  "y": 436
                            },
                            {
                                  "x": 363,
                                  "y": 452
                            },
                            {
                                  "x": 176,
                                  "y": 454
                            },
                            {
                                  "x": 175,
                                  "y": 438
                            }
                      ],
                      "valueProb": 96
                },
                {
                      "key": "sellerBankAccount",
                      "keyProb": 100,
                      "value": "41001501210050224848",
                      "valuePos": [
                            {
                                  "x": 696,
                                  "y": 441
                            },
                            {
                                  "x": 696,
                                  "y": 454
                            },
                            {
                                  "x": 569,
                                  "y": 454
                            },
                            {
                                  "x": 569,
                                  "y": 441
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "sellerAddress",
                      "keyProb": 80,
                      "value": "安阳市文峰区光专路商段路(汽车市场对面)",                   "valuePos": [
                            {
                                  "x": 175,
                                  "y": 473
                            },
                            {
                                  "x": 403,
                                  "y": 472
                            },
                            {
                                  "x": 403,
                                  "y": 484
                            },
                            {
                                  "x": 176,
                                  "y": 486
                            }
                      ],
                      "valueProb": 80
                },
                {
                      "key": "sellerDepositaryBank",
                      "keyProb": 100,
                      "value": "中国建设银行安阳分行",
                      "valuePos": [
                            {
                                  "x": 632,
                                  "y": 471
                            },
                            {
                                  "x": 632,
                                  "y": 485
                            },
                            {
                                  "x": 506,
                                  "y": 487
                            },
                            {
                                  "x": 505,
                                  "y": 472
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "taxRate",
                      "keyProb": 99,
                      "value": "17%",
                      "valuePos": [
                            {
                                  "x": 203,
                                  "y": 510
                            },
                            {
                                  "x": 203,
                                  "y": 524
                            },
                            {
                                  "x": 176,
                                  "y": 524
                            },
                            {
                                  "x": 176,
                                  "y": 510
                            }
                      ],
                      "valueProb": 99
                },
                {
                      "key": "tax",
                      "keyProb": 100,
                      "value": "14384.62",
                      "valuePos": [
                            {
                                  "x": 413,
                                  "y": 509
                            },
                            {
                                  "x": 413,
                                  "y": 524
                            },
                            {
                                  "x": 323,
                                  "y": 524
                            },
                            {
                                  "x": 323,
                                  "y": 509
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "taxAuthoritiesInfo",
                      "keyProb": 100,
                      "value": "安阳县国家税务局341052200",
                      "valuePos": [
                            {
                                  "x": 633,
                                  "y": 498
                            },
                            {
                                  "x": 633,
                                  "y": 525
                            },
                            {
                                  "x": 537,
                                  "y": 525
                            },
                            {
                                  "x": 537,
                                  "y": 498
                            }
                      ],
                      "valueProb": 99
                },
                {
                      "key": "taxAuthoritiesName",
                      "keyProb": 100,
                      "value": "安阳县国家税务局",
                      "valuePos": [
                            {
                                  "x": 633,
                                  "y": 498
                            },
                            {
                                  "x": 633,
                                  "y": 525
                            },
                            {
                                  "x": 537,
                                  "y": 525
                            },
                            {
                                  "x": 537,
                                  "y": 498
                            }
                      ],
                      "valueProb": 99
                },
                {
                      "key": "taxAuthoritiesCode",
                      "keyProb": 100,
                      "value": "341052200",
                      "valuePos": [
                            {
                                  "x": 633,
                                  "y": 498
                            },
                            {
                                  "x": 633,
                                  "y": 525
                            },
                            {
                                  "x": 537,
                                  "y": 525
                            },
                            {
                                  "x": 537,
                                  "y": 498
                            }
                      ],
                      "valueProb": 99
                },
                {
                      "key": "preTaxAmount",
                      "keyProb": 97,
                      "value": "84615.38",
                      "valuePos": [
                            {
                                  "x": 216,
                                  "y": 557
                            },
                            {
                                  "x": 216,
                                  "y": 543
                            },
                            {
                                  "x": 305,
                                  "y": 544
                            },
                            {
                                  "x": 305,
                                  "y": 559
                            }
                      ],
                      "valueProb": 97
                },
                {
                      "key": "passengerLimitNumber",
                      "keyProb": 100,
                      "value": "5",
                      "valuePos": [
                            {
                                  "x": 723,
                                  "y": 545
                            },
                            {
                                  "x": 723,
                                  "y": 557
                            },
                            {
                                  "x": 714,
                                  "y": 557
                            },
                            {
                                  "x": 714,
                                  "y": 545
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "issuer",
                      "keyProb": 100,
                      "value": "赵迪",
                      "valuePos": [
                            {
                                  "x": 437,
                                  "y": 573
                            },
                            {
                                  "x": 437,
                                  "y": 588
                            },
                            {
                                  "x": 410,
                                  "y": 588
                            },
                            {
                                  "x": 410,
                                  "y": 573
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "tonnage",
                      "keyProb": 100,
                      "value": "",
                      "valueProb": 100
                },
                {
                      "key": "purchaserTaxNumber",
                      "keyProb": 100,
                      "value": "410523197206046072",
                      "valuePos": [
                            {
                                  "x": 730,
                                  "y": 240
                            },
                            {
                                  "x": 730,
                                  "y": 253
                            },
                            {
                                  "x": 569,
                                  "y": 253
                            },
                            {
                                  "x": 569,
                                  "y": 240
                            }
                      ],
                      "valueProb": 100
                },
                {
                      "key": "taxPaymentNumber",
                      "keyProb": 100,
                      "value": "",
                      "valueProb": 100
                }
          ],
          "width": 832
    }`
     */
    Data: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 详细信息
     * @example `message`
     */
    Message: string;
}
