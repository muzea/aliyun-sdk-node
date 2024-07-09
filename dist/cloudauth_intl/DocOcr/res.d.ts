export interface DocOcrResponse {
    /**
     * Id of the request
     * @example `86C40EC3-5940-5F47-995C-BFE90B70E540`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `Success`
     */
    Code: string;
    /**
     * 返回信息。
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
         * - Y：通过
         * - N：不通过
         * @example `Y`
         */
        Passed: string;
        /**
         * 子结果码
         * @example `200`
         */
        SubCode: string;
        /**
         * 卡证识别结果	只有当接口响应成功时返回
         * @example `{
          "idFaceQualityScore": 98.0
          "ocrIdInfo": {
            "expiryDate": "",
            "originOfIssue": "公安部出入境管理局",
            "englishName": "LI SI",
            "sex": "男",
            "name": "李四",
            "idNumber": "H11111112",
            "issueDate": "2013-01-02",
            "birthDate": "1990-02-21"
          },
          "spoofInfo": {
            "spoofResult": "Y",
            "spoofType": [
              "SCREEN_REMARK"
            ]
          }
        }`
         */
        ExtIdInfo: string;
    };
}
