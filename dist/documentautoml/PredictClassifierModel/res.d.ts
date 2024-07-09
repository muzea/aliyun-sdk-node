export interface PredictClassifierModelResponse {
    /**
     * Id of the request
     * @example `232B91A8-9938-5C10-B522-127D1E342A57`
     */
    RequestId: string;
    /**
     * 成功
     * @example `200`
     */
    Code: number;
    /**
     * 返回数据。
     * @example `{
          "score": 1,
          "classID": "269_2b6819527769749d962bf51d034b1820",
          "tables": [
                {
                      "columns": [
                            {
                                  "header_value": "姓名",
                                  "bodies": [
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "学生1",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 99
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 99
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 123
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 123
                                                    }
                                              ],
                                              "value": "学生1"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "学生2",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 123
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 123
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 146
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 146
                                                    }
                                              ],
                                              "value": "学生2"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "学生3",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 146
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 146
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 169
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 169
                                                    }
                                              ],
                                              "value": "学生3"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "学生4",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 169
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 169
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 191
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 191
                                                    }
                                              ],
                                              "value": "学生4"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "学生5",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 191
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 191
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 215
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 215
                                                    }
                                              ],
                                              "value": "学生5"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "学生6",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 215
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 215
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 238
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 238
                                                    }
                                              ],
                                              "value": "学生6"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "学生7",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 238
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 238
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 261
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 261
                                                    }
                                              ],
                                              "value": "学生7"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "学生8",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 261
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 261
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 283
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 283
                                                    }
                                              ],
                                              "value": "学生8"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "学生9",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 283
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 283
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 307
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 307
                                                    }
                                              ],
                                              "value": "学生9"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "学生10",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 307
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 307
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 330
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 330
                                                    }
                                              ],
                                              "value": "学生10"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 330
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 330
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 352
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 352
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 352
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 352
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 375
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 375
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 375
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 375
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 399
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 399
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 399
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 399
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 422
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 422
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 422
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 422
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 444
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 444
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 444
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 444
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 467
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 467
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 467
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 467
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 491
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 491
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 491
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 491
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 514
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 514
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 514
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 514
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 536
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 536
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 76,
                                                          "y": 536
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 536
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 559
                                                    },
                                                    {
                                                          "x": 76,
                                                          "y": 559
                                                    }
                                              ],
                                              "value": ""
                                        }
                                  ],
                                  "header_box": [
                                        {
                                              "x": 96,
                                              "y": 79
                                        },
                                        {
                                              "x": 162,
                                              "y": 79
                                        },
                                        {
                                              "x": 162,
                                              "y": 98
                                        },
                                        {
                                              "x": 96,
                                              "y": 98
                                        }
                                  ],
                                  "col_name": "name"
                            },
                            {
                                  "header_value": "性别",
                                  "bodies": [
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "男",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 100
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 100
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 123
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 123
                                                    }
                                              ],
                                              "value": "男"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "男",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 123
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 123
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 146
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 146
                                                    }
                                              ],
                                              "value": "男"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "男",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 146
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 146
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 169
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 169
                                                    }
                                              ],
                                              "value": "男"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "男",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 169
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 169
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 191
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 191
                                                    }
                                              ],
                                              "value": "男"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "男",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 191
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 191
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 215
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 215
                                                    }
                                              ],
                                              "value": "男"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "男",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 215
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 215
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 238
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 238
                                                    }
                                              ],
                                              "value": "男"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "女",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 238
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 238
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 261
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 261
                                                    }
                                              ],
                                              "value": "女"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "女",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 261
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 261
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 283
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 283
                                                    }
                                              ],
                                              "value": "女"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "女",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 283
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 283
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 307
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 307
                                                    }
                                              ],
                                              "value": "女"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "女",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 307
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 307
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 330
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 330
                                                    }
                                              ],
                                              "value": "女"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 330
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 330
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 352
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 352
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 352
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 352
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 375
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 375
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 375
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 375
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 399
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 399
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 399
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 399
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 422
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 422
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 422
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 422
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 444
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 444
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 444
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 444
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 467
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 467
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 467
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 467
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 491
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 491
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 491
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 491
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 514
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 514
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 514
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 514
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 536
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 536
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 187,
                                                          "y": 536
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 536
                                                    },
                                                    {
                                                          "x": 296,
                                                          "y": 559
                                                    },
                                                    {
                                                          "x": 187,
                                                          "y": 559
                                                    }
                                              ],
                                              "value": ""
                                        }
                                  ],
                                  "header_box": [
                                        {
                                              "x": 210,
                                              "y": 78
                                        },
                                        {
                                              "x": 267,
                                              "y": 78
                                        },
                                        {
                                              "x": 267,
                                              "y": 100
                                        },
                                        {
                                              "x": 210,
                                              "y": 100
                                        }
                                  ],
                                  "col_name": "sex"
                            },
                            {
                                  "header_value": "档案号",
                                  "bodies": [
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "D001",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 100
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 100
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 123
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 123
                                                    }
                                              ],
                                              "value": "D001"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "D002",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 123
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 123
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 146
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 146
                                                    }
                                              ],
                                              "value": "D002"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "D003",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 146
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 146
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 169
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 169
                                                    }
                                              ],
                                              "value": "D003"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "D004",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 169
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 169
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 191
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 191
                                                    }
                                              ],
                                              "value": "D004"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "D005",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 191
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 191
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 215
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 215
                                                    }
                                              ],
                                              "value": "D005"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "D006",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 215
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 215
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 238
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 238
                                                    }
                                              ],
                                              "value": "D006"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "D007",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 238
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 238
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 261
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 261
                                                    }
                                              ],
                                              "value": "D007"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "D008",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 261
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 261
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 283
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 283
                                                    }
                                              ],
                                              "value": "D008"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "D009",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 283
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 283
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 307
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 307
                                                    }
                                              ],
                                              "value": "D009"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "D010",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 307
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 307
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 330
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 330
                                                    }
                                              ],
                                              "value": "D010"
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 330
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 330
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 352
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 352
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 352
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 352
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 375
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 375
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 375
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 375
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 398
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 398
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 398
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 398
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 422
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 422
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 422
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 422
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 444
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 444
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 444
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 444
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 467
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 467
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 467
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 467
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 491
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 491
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 491
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 491
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 514
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 514
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 514
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 514
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 536
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 536
                                                    }
                                              ],
                                              "value": ""
                                        },
                                        {
                                              "prob": 0,
                                              "fieldWordRaw": "",
                                              "wordInfo": [],
                                              "location": [
                                                    {
                                                          "x": 406,
                                                          "y": 536
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 536
                                                    },
                                                    {
                                                          "x": 520,
                                                          "y": 559
                                                    },
                                                    {
                                                          "x": 406,
                                                          "y": 559
                                                    }
                                              ],
                                              "value": ""
                                        }
                                  ],
                                  "header_box": [
                                        {
                                              "x": 430,
                                              "y": 78
                                        },
                                        {
                                              "x": 493,
                                              "y": 78
                                        },
                                        {
                                              "x": 493,
                                              "y": 99
                                        },
                                        {
                                              "x": 430,
                                              "y": 99
                                        }
                                  ],
                                  "col_name": "ID"
                            }
                      ],
                      "table_id": 1675670984484
                }
          ],
          "code": 0,
          "data": [
                {
                      "prob": 0.99,
                      "fieldWordRaw": "班级：初二3班",
                      "wordInfo": [
                            {
                                  "prob": 0.99,
                                  "pos": [
                                        {
                                              "x": 2,
                                              "y": 34
                                        },
                                        {
                                              "x": 124,
                                              "y": 34
                                        },
                                        {
                                              "x": 124,
                                              "y": 51
                                        },
                                        {
                                              "x": 2,
                                              "y": 51
                                        }
                                  ],
                                  "word": "班级：初二3班",
                                  "charInfo": [
                                        {
                                              "prob": 0.99,
                                              "pos": [
                                                    {
                                                          "x": 2,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 18,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 18,
                                                          "y": 48
                                                    },
                                                    {
                                                          "x": 2,
                                                          "y": 48
                                                    }
                                              ],
                                              "word": "班"
                                        },
                                        {
                                              "prob": 0.99,
                                              "pos": [
                                                    {
                                                          "x": 18,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 32,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 32,
                                                          "y": 48
                                                    },
                                                    {
                                                          "x": 18,
                                                          "y": 48
                                                    }
                                              ],
                                              "word": "级"
                                        },
                                        {
                                              "prob": 0.99,
                                              "pos": [
                                                    {
                                                          "x": 34,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 50,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 50,
                                                          "y": 48
                                                    },
                                                    {
                                                          "x": 34,
                                                          "y": 48
                                                    }
                                              ],
                                              "word": "："
                                        },
                                        {
                                              "prob": 0.99,
                                              "pos": [
                                                    {
                                                          "x": 52,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 71,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 71,
                                                          "y": 48
                                                    },
                                                    {
                                                          "x": 52,
                                                          "y": 48
                                                    }
                                              ],
                                              "word": "初"
                                        },
                                        {
                                              "prob": 0.99,
                                              "pos": [
                                                    {
                                                          "x": 72,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 88,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 88,
                                                          "y": 48
                                                    },
                                                    {
                                                          "x": 72,
                                                          "y": 48
                                                    }
                                              ],
                                              "word": "二"
                                        },
                                        {
                                              "prob": 0.99,
                                              "pos": [
                                                    {
                                                          "x": 90,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 100,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 100,
                                                          "y": 48
                                                    },
                                                    {
                                                          "x": 90,
                                                          "y": 48
                                                    }
                                              ],
                                              "word": "3"
                                        },
                                        {
                                              "prob": 0.99,
                                              "pos": [
                                                    {
                                                          "x": 103,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 124,
                                                          "y": 34
                                                    },
                                                    {
                                                          "x": 124,
                                                          "y": 48
                                                    },
                                                    {
                                                          "x": 103,
                                                          "y": 48
                                                    }
                                              ],
                                              "word": "班"
                                        }
                                  ]
                            }
                      ],
                      "name": "班级",
                      "location": [
                            {
                                  "x": 1,
                                  "y": 30
                            },
                            {
                                  "x": 1102,
                                  "y": 30
                            },
                            {
                                  "x": 1102,
                                  "y": 54
                            },
                            {
                                  "x": 1,
                                  "y": 54
                            }
                      ],
                      "fieldWord": "班级：初二3班"
                }
          ],
          "specificType": "infoCustomeTableTemp",
          "className": "自定义表格模板测试cz02064-学生名",
          "originalFileUrl": "https://doc-automl-public.oss-cn-hangzhou.aliyuncs.com/3/xxx/stage/upload/20230208/oss-uwGPIS8AsKcGRHfMRjvIrQVqN0uAxTgk.png?Expires=1675843535&OSSAccessKeyId=xxx&Signature=uPhg6JpDn47TgLt%2FI%2F7j4f%2FsFeA%3D",
          "templateID": "269_2b6819527769749d962bf51d034b1820",
          "message": "",
          "classType": "template",
          "predictFile": "https://doc-automl-public.oss-cn-hangzhou.aliyuncs.com/3/xxx/stage/upload/20230208/oss-uwGPIS8AsKcGRHfMRjvIrQVqN0uAxTgk.png?Expires=1675843535&OSSAccessKeyId=xxx&Signature=uPhg6JpDn47TgLt%2FI%2F7j4f%2FsFeA%3D"
    }`
     */
    Data: any;
    /**
     * 错误信息
     * @example `success`
     */
    Message: string;
}
