export interface PauseChangeResponse {
    /**
     * 环境变更信息
     */
    EnvChange: {
        /**
         * 变更开始时间
         * @example `1564453805573`
         */
        StartTime: string;
        /**
         * 变更ID
         * @example `wc-5d3fabad56fd7c14ac9*****`
         */
        ChangeId: string;
        /**
         * 环境ID，变更操作所对应的环境
         * @example `we-5d39b8ba6786bd4b149*****`
         */
        EnvId: string;
    };
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `BF62BC0A-6672-41A2-8EE5-D5034AB*****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
