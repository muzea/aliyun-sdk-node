export interface UpdateAppEnvResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `8D69F3C4-EA43-49D5-875A-0893BF5*****`
     */
    RequestId: string;
    /**
     * 环境变更信息
     */
    EnvChangeDetail: {
        /**
         * 变更开始时间
         * @example `1562666600768`
         */
        StartTime: string;
        /**
         * 变更ID
         * @example `wc-5d3bb06a970b3f2e2a8*****`
         */
        ChangeId: string;
        /**
         * 环境ID
         * @example `we-5d39b8ba6786bd4b149*****`
         */
        EnvId: string;
        Operations: {
            /**
             * 变更操作
             */
            Operation: {
                /**
                 * 变更操作
                 * @example `Unbind VSwitch(es) vsw-wz9gfawx1vxkimtj*****`
                 */
                OperationDescription: string;
                /**
                 * 操作类型
                 * @example `destroy`
                 */
                OperationType: string;
            }[];
        };
    };
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
