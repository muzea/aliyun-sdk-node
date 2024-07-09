export interface GatherAppEnvLogResponse {
    /**
     * 变更信息
     */
    EnvChange: {
        /**
         * 变更开始时间
         * @example `1564541276614`
         */
        StartTime: string;
        /**
         * 变更ID
         * @example `wc-5d41015c56fd7c14ac9*****`
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
     * @example `41CF0D98-CAD7-43CB-8BF0-CFA4D3F*****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
