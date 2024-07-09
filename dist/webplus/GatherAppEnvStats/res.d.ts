export interface GatherAppEnvStatsResponse {
    /**
     * 变更信息
     */
    EnvChange: {
        /**
         * 变更开始时间
         * @example `1564541864384`
         */
        StartTime: string;
        /**
         * 变更ID
         * @example `wc-5d4103a856fd7c14ac9*****`
         */
        ChangeId: string;
        /**
         * 环境ID
         * @example `we-5d3eaaea2977ca5251e*****`
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
     * @example `BDA78DBA-7D10-4DDB-B73F-8357EB8*****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
