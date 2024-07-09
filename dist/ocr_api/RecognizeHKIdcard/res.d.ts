export interface RecognizeHKIdcardResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{
        "algo_version": "5e7c3de7fb3969700828bd933ee071782bc22088",
        "data": {
            "birthDate": "01-01-19XX",
            "firstIssuedDate": "(01-79)",
            "idNumber": "CXXXXXX(E)",
            "issuedCode": "***AZ",
            "issuedDate": "XX-09-03",
            "nameCn": "李XX",
            "nameCode": "2621 2535 5174",
            "nameEn": "LEE, Chi Nan",
            "sex": "女F"
        },
        "ftype": 0,
        "height": 158,
        "orgHeight": 158,
        "orgWidth": 249,
        "prism_keyValueInfo": [
            {
                "key": "nameCn",
                "keyProb": 100,
                "value": "李XX",
                "valuePos": [
                    {
                        "x": 11,
                        "y": 27
                    },
                    {
                        "x": 53,
                        "y": 27
                    },
                    {
                        "x": 53,
                        "y": 40
                    },
                    {
                        "x": 11,
                        "y": 40
                    }
                ],
                "valueProb": 100
            },
            {
                "key": "nameEn",
                "keyProb": 97,
                "value": "LEE, XX",
                "valuePos": [
                    {
                        "x": 10,
                        "y": 40
                    },
                    {
                        "x": 81,
                        "y": 40
                    },
                    {
                        "x": 81,
                        "y": 51
                    },
                    {
                        "x": 10,
                        "y": 51
                    }
                ],
                "valueProb": 97
            },
            {
                "key": "nameCode",
                "keyProb": 100,
                "value": "XXX",
                "valuePos": [
                    {
                        "x": 73,
                        "y": 54
                    },
                    {
                        "x": 155,
                        "y": 54
                    },
                    {
                        "x": 155,
                        "y": 64
                    },
                    {
                        "x": 73,
                        "y": 64
                    }
                ],
                "valueProb": 100
            },
            {
                "key": "birthDate",
                "keyProb": 100,
                "value": "01-01-19XX",
                "valuePos": [
                    {
                        "x": 73,
                        "y": 86
                    },
                    {
                        "x": 133,
                        "y": 85
                    },
                    {
                        "x": 133,
                        "y": 93
                    },
                    {
                        "x": 74,
                        "y": 95
                    }
                ],
                "valueProb": 100
            },
            {
                "key": "sex",
                "keyProb": 98,
                "value": "女F",
                "valuePos": [
                    {
                        "x": 153,
                        "y": 84
                    },
                    {
                        "x": 171,
                        "y": 84
                    },
                    {
                        "x": 171,
                        "y": 94
                    },
                    {
                        "x": 153,
                        "y": 94
                    }
                ],
                "valueProb": 98
            },
            {
                "key": "issuedCode",
                "keyProb": 99,
                "value": "***AZ",
                "valuePos": [
                    {
                        "x": 75,
                        "y": 97
                    },
                    {
                        "x": 104,
                        "y": 97
                    },
                    {
                        "x": 104,
                        "y": 106
                    },
                    {
                        "x": 75,
                        "y": 106
                    }
                ],
                "valueProb": 99
            },
            {
                "key": "firstIssuedDate",
                "keyProb": 100,
                "value": "(01-79)",
                "valuePos": [
                    {
                        "x": 74,
                        "y": 119
                    },
                    {
                        "x": 115,
                        "y": 118
                    },
                    {
                        "x": 115,
                        "y": 126
                    },
                    {
                        "x": 75,
                        "y": 128
                    }
                ],
                "valueProb": 100
            },
            {
                "key": "issuedDate",
                "keyProb": 100,
                "value": "15-09-03",
                "valuePos": [
                    {
                        "x": 74,
                        "y": 135
                    },
                    {
                        "x": 133,
                        "y": 133
                    },
                    {
                        "x": 133,
                        "y": 143
                    },
                    {
                        "x": 75,
                        "y": 144
                    }
                ],
                "valueProb": 100
            },
            {
                "key": "idNumber",
                "keyProb": 100,
                "value": "XXXXXX(E)",
                "valuePos": [
                    {
                        "x": 160,
                        "y": 134
                    },
                    {
                        "x": 232,
                        "y": 133
                    },
                    {
                        "x": 232,
                        "y": 142
                    },
                    {
                        "x": 161,
                        "y": 144
                    }
                ],
                "valueProb": 100
            }
        ],
        "sliceRect": {
            "x0": 0,
            "x1": 248,
            "x2": 248,
            "x3": 0,
            "y0": 0,
            "y1": 0,
            "y2": 157,
            "y3": 158
        },
        "width": 249
    }`
     */
    Data: string;
    /**
     * 状态码（如果识别成功，不会返回此字段）
     * @example `如果识别成功，不会返回此字段`
     */
    Code: string;
    /**
     * 详细信息（如果识别成功，不会返回此字段）
     * @example `如果识别成功，不会返回此字段
    `
     */
    Message: string;
}
