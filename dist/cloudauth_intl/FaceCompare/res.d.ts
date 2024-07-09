export interface FaceCompareResponse {
    /**
     * Id of the request
     * @example `4EB356FE-BB6A-5DCC-B4C5-E8051787EBA1`
     */
    RequestId: string;
    /**
     * 返回码。
     * 200：表示成功。
     * 其它：表示错误码。错误码详情，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 认证请求的唯一标识。
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
         * 认证过程中所提交的人脸照片和人脸留底图片上人脸的比对分，取值范围：**0**~**100**。
         * @example `98`
         */
        FaceComparisonScore: number;
    };
}
