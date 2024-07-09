export interface DescribeNetworkInterfacePermissionsRequest {
    /**
     * 弹性网卡权限的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性网卡ID。您必须指定`NetworkInterfaceId`或`NetworkInterfacePermissionId.N`确定查询范围。
     * @example `eni-bp17pdijfczax****`
     */
    "NetworkInterfaceId"?: string;
    /**
     * 弹性网卡权限列表的页码。
     * 起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 弹性网卡权限ID列表。列表元素数量：1~100。
     * @example `eni-perm-bp1cs4lwn56lfb****`
     */
    "NetworkInterfacePermissionId"?: string[];
}
