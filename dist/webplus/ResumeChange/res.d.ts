export interface ResumeChangeResponse {
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
         * 环境ID
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
     * @example `F38283EF-B83B-47C0-992D-1DC450DE****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
