export interface CreateDBEndpointAddressRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 连接地址ID。
     * > 可通过接口[DescribeDBClusterEndpoints](~~98205~~)查询连接地址详情。
     * @example `pe-**************`
     */
    "DBEndpointId": string;
    /**
     * 新的连接地址前缀。连接地址前缀需满足如下条件：
     * * 由小写字母、数字、中划线（-）组成。
     * * 以字母开头，以数字或字母结尾。
     * * 长度为6~40个字符。
     * @example `test-1`
     */
    "ConnectionStringPrefix"?: string;
    /**
     * 新增连接地址的网络类型，固定为**Public**（公网）。
     * @example `Public`
     */
    "NetType": string;
    /**
     * 专有网络ID
     * @example `vpc-**********`
     */
    "VPCId"?: string;
    /**
     * ECS安全组ID
     * @example `sg-bp**************`
     */
    "SecurityGroupId"?: string;
    /**
     * 可用区信息。
     */
    "ZoneInfo"?: {
        /**
         * 可用区ID。
         * @example `cn-hangzhou-b`
         */
        ZoneId: string;
        /**
         * 虚拟交换机ID。
         * @example `vsw-**********`
         */
        VSwitchId: string;
    }[];
}
