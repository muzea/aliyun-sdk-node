export interface ViewSmartAccessGatewayDnsForwardsResponse {
    /**
     * Id of the request
     * @example `E223E535-AE11-4158-B00F-DC107887A909`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应码
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
     * 总条数。
     * @example `1914`
     */
    Count: number;
    /**
     * DNS转发实例列表
     */
    Data: {
        /**
         * 实例ID。
         * @example `sagv3dnsforward-nc7qabskj17werc7su`
         */
        InstanceId: string;
        /**
         * 域名
         * @example `www.baidu.com`
         */
        Domain: string;
        /**
         * 主DNS
         * @example `172.16.58.20`
         */
        MasterIp: string;
        /**
         * 备DNS
         * @example `172.16.0.14`
         */
        SlaveIp: string;
        /**
         * 转发模式
         * >- 无效字段，不用关注。
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
    }[];
}
