export interface CardOcrResponse {
    /**
     * Id of the request
     * @example `4EB356FE-BB6A-5DCC-B4C5-E8051787EBA1`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `Success`
     */
    Code: string;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回结果
     */
    Result: {
        /**
         * 认证请求的唯一标识
         * @example `08573be80f944d95ac812e019e3655a8`
         */
        TransactionId: string;
        /**
         * 认证是否通过。
         * - Y：通过。
         * - N：不通过。
         * @example `Y`
         */
        Passed: string;
        /**
         * 子结果码。
         * @example `200`
         */
        SubCode: string;
        /**
         * 额外结果信息
         * @example `**`
         */
        ExtIdInfo: string;
        /**
         * 卡证识别结果
         * @example `{
          "idFaceQualityScore": 98.90,
          "ocrIdInfo": {
            "expiryDate": "2024-04-20",
            "placeOfIssue": "广东",
            "englishName": "ZHENGJIAN,YANGBEN",
            "originOfIssue": "公安部出入境管理局",
            "sex": "女",
            "name": "证件样本",
            "idNumber": "C00000000",
            "issueDate": "2014-04-21",
            "birthDate": "1981-08-03"
          },
          "spoofInfo": {
            "spoofResult": "N",
            "spoofType": [
              "SCREEN_REMARK"
            ]
          }
        }`
         */
        ExtCardInfo: string;
    };
}
