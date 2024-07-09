export interface ListLniPrivateIpAddressResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 本次请求的ID
     * @example `A88DFED5-24B7-5A3E-87DE-380BF06F3C90`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 总记录数
         * @example `0`
         */
        Total: number;
        /**
         * 返回的结果
         */
        Data: {
            /**
             * 地域ID
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 创建时间
             * @example `1651734291000`
             */
            GmtCreate: string;
            /**
             * 灵骏网卡ID
             * @example `lni-bp11hq1ql7vza3k4xz7q`
             */
            NetworkInterfaceId: string;
            /**
             * IP唯一标识
             * @example `sip-1hq1ql7vz`
             */
            IpName: string;
            /**
             * 灵骏网卡的辅助私网IP地址
             * @example `10.42.5.92`
             */
            PrivateIpAddress: string;
            /**
             * 辅助私网的MAC地址
             * @example `00-ff-84-15-ba-67`
             */
            IpAddressMac: string;
            /**
             * 状态
             * @example `Available`
             */
            Status: string;
            /**
             * 描述信息
             * @example `test测试`
             */
            Description: string;
            /**
             * 错误信息。（当实例状态为异常时，提示异常原因）
             * @example `成功`
             */
            Message: string;
        }[];
    };
}
