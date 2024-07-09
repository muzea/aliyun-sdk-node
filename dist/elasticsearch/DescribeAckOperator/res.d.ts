export interface DescribeAckOperatorResponse {
    /**
     * 请求ID。
     * @example `6615EE8D-FD9D-4FD3-997E-6FEA5B8D82ED`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * Operator版本。
         * @example `1`
         */
        version: string;
        /**
         * Operator安装状态。支持：
         * - deployed：已安装
         * - not-deploy：未安装
         * - failed：安装失败
         * - unknown：未知状态
         * @example `deployed`
         */
        status: string;
    };
}
