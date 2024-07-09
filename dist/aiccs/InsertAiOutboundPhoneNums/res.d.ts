export interface InsertAiOutboundPhoneNumsResponse {
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 状态码。
     * @example `OK`
     */
    Code: string;
    /**
     * 接口是否调用成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 导入结果。
     */
    Data: {
        /**
         * 导入总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 导入成功数量。
         * @example `7`
         */
        SuccessCount: number;
        /**
         * 失败号码详情。
         */
        FailInfo: {
            /**
             * 业务自定义信息。
             * @example `xxxx`
             */
            BizData: string;
            /**
             * 外呼被叫号码。
             * @example `150****0000`
             */
            PhoneNum: string;
            /**
             * 失败原因描述。
             * @example `号码格式异常`
             */
            Msg: string;
        }[];
    };
}
