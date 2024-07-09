export interface DescribePhoneNumberAnalysisResponse {
    /**
     * 请求ID。
     * @example `CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47`
     */
    RequestId: string;
    /**
     * 号码状态的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 号码分析返回结果信息。
     */
    Data: {
        /**
         * 数据列表
         */
        List: {
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
             * @example `NO`
             */
            Code: string;
        }[];
    };
    /**
     * 请求状态码。取值：
     *  **OK**：成功。
     * @example `OK`
     */
    Code: string;
}
