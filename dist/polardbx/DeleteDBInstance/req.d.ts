export interface DeleteDBInstanceRequest {
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
}
