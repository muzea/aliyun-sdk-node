export interface DescribeSecurityIPListResponse {
    /**
     * 请求ID。
     * @example `5CBE044D-4594-525D-AC65-E988553D853E`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `selectdb-cn-7213cjv****`
     */
    DBInstanceName: string;
    /**
     * 白名单分组列表。
     */
    GroupItems: {
        /**
         * 白名单分钟名称。
         * @example `group1`
         */
        GroupName: string;
        /**
         * IP地址类型，取值说明：
         * - ipv4
         * - ipv6（暂不支持）
         * @example `ipv4`
         */
        AecurityIPType: string;
        /**
         * 分组标签。
         * @example `""`
         */
        GroupTag: string;
        /**
         * 实例的IP白名单，多个IP地址请用英文逗号（,）分隔。
         * @example `127.0.XX.XX`
         */
        SecurityIPList: string;
        /**
         * 白名单的网络类型。
         * @example `mix`
         */
        WhitelistNetType: string;
    }[];
}
