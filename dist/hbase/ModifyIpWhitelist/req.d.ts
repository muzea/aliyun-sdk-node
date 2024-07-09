export interface ModifyIpWhitelistRequest {
    /**
     * 目标实例ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `ld-bp1uoihlf82e8****`
     */
    "ClusterId": string;
    /**
     * 修改后分组白名单的IP地址，如果有多个IP地址，您可以使用英文逗号（,）分隔。
     * @example `42.120.XX.XX`
     */
    "IpList"?: string;
    /**
     * 目标实例的白名单分组名称，可调用[DescribeIpWhitelist](~~144606~~)接口获取。
     * @example `group_01`
     */
    "GroupName": string;
    /**
     * IP地址的版本类型，取值：
     * - **4**：表示IP地址的版本类型为IPv4。
     * - **6**：表示IP地址的版本类型为IPv6。
     * @example `4`
     */
    "IpVersion": string;
}
