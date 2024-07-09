export interface GetLeniPrivateIpAddressResponse {
    /**
     * 响应状态码。
     * @example `0`
     */
    Code: number;
    /**
     * message信息。
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID。
     * @example `AC8C713A-A9F4-5984-A5E1-76496DF35153`
     */
    RequestId: string;
    /**
     * 响应内容。
     */
    Content: {
        /**
         * 灵骏弹性网卡ID。
         * @example `leni-1234****`
         */
        ElasticNetworkInterfaceId: string;
        /**
         * 地域ID。
         * @example `cn-wulanchabu`
         */
        RegionId: string;
        /**
         * 创建时间。
         * @example `1663722356000`
         */
        GmtCreate: string;
        /**
         * 更新时间。
         * @example `1635231890000`
         */
        GmtModified: string;
        /**
         * 灵骏弹性网卡辅助私网IP唯一标识。
         * @example `sip-8ylg****`
         */
        IpName: string;
        /**
         * 灵骏弹性网卡辅助私网IP地址。
         * @example `10.42.****`
         */
        PrivateIpAddress: string;
        /**
         * 状态。
         * @example `Available`
         */
        Status: string;
        /**
         * 描述信息。
         * @example `描述`
         */
        Description: string;
        /**
         * 消息。
         * @example `成功`
         */
        Message: string;
    };
}
