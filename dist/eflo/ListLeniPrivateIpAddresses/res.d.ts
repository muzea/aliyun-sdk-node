export interface ListLeniPrivateIpAddressesResponse {
    /**
     * 响应状态码。
     * @example `0`
     */
    Code: number;
    /**
     * 消息。
     * @example `成功`
     */
    Message: string;
    /**
     * 本次请求的ID。
     * @example `AC8C713A-A9F4-5984-A5E1-76496DF35153`
     */
    RequestId: string;
    /**
     * 响应内容。
     */
    Content: {
        /**
         * 总记录数。
         * @example `1`
         */
        Total: number;
        /**
         * 返回内容。
         */
        Data: {
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
             * @example `1675929918000`
             */
            GmtCreate: string;
            /**
             * 更新时间。
             * @example `1675929918000`
             */
            GmtModified: string;
            /**
             * 灵骏弹性网卡辅助私网IP唯一标识。
             * @example `sip-8ylg****`
             */
            IpName: string;
            /**
             * 灵骏弹性网卡辅助私网IP地址。
             * @example `10.0.****`
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
             * 返回信息。
             * @example `成功`
             */
            Message: string;
        }[];
    };
}
