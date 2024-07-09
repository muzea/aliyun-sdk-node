export interface DescribeDBInstanceAttributeRequest {
    /**
     * 实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名。
     * @example `pxc-********`
     */
    "DBInstanceName": string;
    /**
     * 资源组ID。
     * @example `rg-aekzaxhezhs5***`
     */
    "ResourceGroupId"?: string;
}
