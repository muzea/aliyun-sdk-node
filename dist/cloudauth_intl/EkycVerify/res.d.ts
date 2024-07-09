export interface EkycVerifyResponse {
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
         * @example `4ab0b***cbde97`
         */
        TransactionId: string;
        /**
         * 子结果码
         * @example `205`
         */
        SubCode: string;
        /**
         * 是否通过，通过为T，不通过为F。
         * @example `Y`
         */
        Passed: string;
        /**
         * 人脸结果信息
         * @example `{
        "faceAttack": "N",
        "faceComparisonScore": 52.57,
        "facePassed": "N",
        "authorityComparisonScore": 80.39
        }
        
        `
         */
        ExtFaceInfo: string;
        /**
         * 卡证识别结果	只有当接口响应成功时返回
         * @example `{
         "ocrIdInfo": {
         "firstName": "**龙",
         "lastName": "**",
         "countryCode": "CHN",
         "docType": "01560001",
         "dateOfBirth": "2002-08-04",
         "idNumber": "410************19"
         },
         "ocrIdPassed": "N",
         "spoofInfo": {
         "spoofResult": "Y",
         }
        }
        
        `
         */
        ExtIdInfo: string;
    };
}
