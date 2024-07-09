export interface DescribeAutoProvisioningGroupInstancesRequest {
    /**
     * 弹性供应组所在地域的ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询列表的页码。
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
     * 弹性供应组的ID。
     * @example `apg-uf6jel2bbl62wh13****`
     */
    "AutoProvisioningGroupId": string;
}
