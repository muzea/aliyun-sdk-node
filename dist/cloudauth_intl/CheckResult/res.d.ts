export interface CheckResultResponse {
    /**
     * Id of the request
     * @example `4EB35****87EBA1`
     */
    RequestId: string;
    /**
     * 返回码。
     * @example `Success`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 认证结果。
         * @example `**`
         */
        EkycResult: string;
        /**
         * 扩展基础信息。
         * @example `**`
         */
        ExtBasicInfo: string;
        /**
         * 人脸信息。
         * @example `**`
         */
        ExtFaceInfo: string;
        /**
         * ID信息。
         * @example `**`
         */
        ExtIdInfo: string;
        /**
         * 风险信息。
         * @example `**`
         */
        ExtRiskInfo: string;
        /**
         * 认证是否通过。
         * - Y：通过。
         * - N：不通过。
         * @example `Y`
         */
        Passed: string;
        /**
         * 子结果码。
         * @example `***`
         */
        SubCode: string;
    };
}
