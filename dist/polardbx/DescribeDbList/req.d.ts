export interface DescribeDbListRequest {
    /**
     * 实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称。
     * @example `pxc-********`
     */
    "DBInstanceName": string;
    /**
     * 数据库名字。
     * @example `db_name`
     */
    "DBName"?: string;
}
