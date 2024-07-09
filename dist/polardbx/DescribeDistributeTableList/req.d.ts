export interface DescribeDistributeTableListRequest {
    /**
     * 实例所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称。
     * @example `pxc-********`
     */
    "DBInstanceName": string;
    /**
     * 数据库名称。
     * @example `sbtest1`
     */
    "DbName": string;
}
