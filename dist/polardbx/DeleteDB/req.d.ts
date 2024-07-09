export interface DeleteDBRequest {
    /**
     * 实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称。
     * @example `pxc-********`
     */
    "DBInstanceName": string;
    /**
     * 待删除的数据库名称。
     * @example `testdb`
     */
    "DbName": string;
}
