export interface GetLniPrivateIpAddressResponse {
    /**
     * 系统返回状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `DBAD15D6-3F47-5B36-8A92-57C2919D13D0`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 地域ID
         * @example `cn-wulanchabu`
         */
        RegionId: string;
        /**
         * 创建时间
         * @example `2022-12-26 20:16:36`
         */
        GmtCreate: string;
        /**
         * 灵骏网卡ID
         * @example `lni-2ze4uww7n6hsfzrwq77y`
         */
        NetworkInterfaceId: string;
        /**
         * IP唯一标识
         * @example `sip-xxxxx`
         */
        IpName: string;
        /**
         * 灵骏网卡的辅助私网IP地址。
         * @example `10.42.5.92`
         */
        PrivateIpAddress: string;
        /**
         * 辅助私网的MAC地址
         * @example `00-ff-84-15-ba-67`
         */
        IpAddressMac: string;
        /**
         * 实例状态
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
    };
}
