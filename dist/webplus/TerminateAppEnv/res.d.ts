export interface TerminateAppEnvResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `393D5428-E693-4063-9C59-1D5393E*****`
     */
    RequestId: string;
    /**
     * 环境变更信息
     */
    EnvChangeDetail: {
        /**
         * 变更开始时间
         * @example `1564373348658`
         */
        StartTime: string;
        /**
         * 变更ID
         * @example `wc-5d3e71642977ca5251e*****`
         */
        ChangeId: string;
        /**
         * 环境ID
         * @example `we-5d39b8ba6786bd4b149*****`
         */
        EnvId: string;
        Operations: {
            /**
             * 变更操作列表
             */
            Operation: {
                /**
                 * 变更操作描述信息
                 * @example `Delete monitor group 78*****`
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
