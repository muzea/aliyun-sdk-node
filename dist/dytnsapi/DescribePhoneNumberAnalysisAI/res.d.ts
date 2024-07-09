export interface DescribePhoneNumberAnalysisAIResponse {
    AccessDeniedDetail: string;
    /**
     * 请求ID。
     * @example `68A40250-50CD-034C-B728-0BD******177`
     */
    RequestId: string;
    /**
     * 返回状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 传入的手机号。
         * @example `187****5620`
         */
        Number: string;
        /**
         * 返回的结果编码。
         * - YES：有效
         * - NO：无效
         * - UNKNOWN：未知
         * @example `YES`
         */
        Code: string;
    };
    /**
     * 请求状态码。取值：
     * - OK：成功
     * @example `OK`
     */
    Code: string;
}
