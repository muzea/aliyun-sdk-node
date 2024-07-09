export interface DescribeInstanceHealthResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `FFBBC86A-2A15-4460-8B9C-BBC8E3F*****`
     */
    RequestId: string;
    /**
     * 实例健康信息
     */
    InstanceHealth: {
        /**
         * 应用状态
         * @example `UNKOWN`
         */
        AppStatus: string;
        /**
         * 实例ID
         * @example `i-wz9hwvnwm5tlv3u*****`
         */
        InstanceId: string;
        /**
         * 断连总时长
         * @example `0`
         */
        DisconnectedTime: number;
        /**
         * 代理连接状态
         * @example `CONNECTED`
         */
        AgentStatus: string;
    };
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
