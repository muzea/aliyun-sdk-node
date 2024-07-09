export interface AddSmartAccessGatewayDnsForwardResponse {
    /**
     * Id of the request
     * @example `E93884AC-6C21-4FEA-8E3A-7377D33B194F`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。200标识查询任务成功
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息
     * @example `Successful`
     */
    Message: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 实例ID
         * @example `sagv3dnsforward-nc7qabskj17werc7su`
         */
        InstanceId: string;
        /**
         * 域名
         * @example `yfiy.cn`
         */
        Domain: string;
        /**
         * 主DNS
         * @example `14.104.81.13`
         */
        MasterIp: string;
        /**
         * 备DNS
         * @example `172.16.0.14`
         */
        SlaveIp: string;
        /**
         * 转发模式
         * @example `first`
         */
        Mode: string;
        /**
         * 出接口类型
         * @example `PhysicalPort`
         */
        OutboundPortType: string;
        /**
         * 出接口序号
         * @example `0`
         */
        OutboundPortIndex: number;
        /**
         * 出接口
         * @example `eth0`
         */
        OutboundPortName: string;
    };
}
